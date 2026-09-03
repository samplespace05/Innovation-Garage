"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { SIH_PROBLEM_STATEMENTS } from "@/lib/sihProblemStatements";

// ─────────────────────────────────────────────────────────────────────────────
// CHECKPOINT DATA — Fill in details when ready
// ─────────────────────────────────────────────────────────────────────────────
const checkpoints = [
  {
    number: 1,
    title: "Checkpoint 1",
    deadline: "TBD",
    description:
      "Details about Checkpoint 1 will be updated here. Stay tuned for the requirements and evaluation criteria.", // TODO: Fill in description
    icon: "flag",
  },
  {
    number: 2,
    title: "Checkpoint 2",
    deadline: "TBD", // TODO: Fill in deadline
    description:
      "Details about Checkpoint 2 will be updated here. Stay tuned for the requirements and evaluation criteria.", // TODO: Fill in description
    icon: "rocket_launch",
  },
  {
    number: 3,
    title: "Checkpoint 3 — Final",
    deadline: "TBD", // TODO: Fill in deadline
    description:
      "The grand finale! Details about the final checkpoint will be updated here. Prepare to present your complete solution.", // TODO: Fill in description
    icon: "emoji_events",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// TIMER COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function LiveTimer() {
  const [timerState, setTimerState] = useState<{
    status: "idle" | "running" | "stopped";
    startTime: number | null;
    elapsed: number;
  }>({ status: "idle", startTime: null, elapsed: 0 });

  const [display, setDisplay] = useState({ h: "00", m: "00", s: "00" });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pollRef = useRef<NodeJS.Timeout | null>(null);

  // Format seconds → HH MM SS
  const formatTime = (totalSecs: number) => {
    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;
    return {
      h: String(h).padStart(2, "0"),
      m: String(m).padStart(2, "0"),
      s: String(s).padStart(2, "0"),
    };
  };

  // Fetch timer state from API
  const fetchTimer = useCallback(async () => {
    try {
      const res = await fetch("/api/sih-timer");
      if (!res.ok) return;
      const data = await res.json();
      setTimerState((prev) => {
        // Only update if something changed
        if (
          prev.status !== data.status ||
          prev.startTime !== data.startTime
        ) {
          return {
            status: data.status,
            startTime: data.startTime,
            elapsed: data.elapsed ?? 0,
          };
        }
        return prev;
      });
    } catch {
      // silent fail — timer will continue with last known state
    }
  }, []);

  // Tick the running timer
  useEffect(() => {
    if (timerState.status === "running" && timerState.startTime) {
      const tick = () => {
        const elapsed = Math.floor((Date.now() - timerState.startTime!) / 1000);
        setDisplay(formatTime(elapsed));
      };
      tick(); // immediate first tick
      intervalRef.current = setInterval(tick, 1000);
    } else if (timerState.status === "stopped") {
      setDisplay(formatTime(timerState.elapsed));
    } else {
      setDisplay({ h: "00", m: "00", s: "00" });
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [timerState]);

  // Poll API every 10 seconds to sync across viewers
  useEffect(() => {
    fetchTimer(); // initial fetch
    pollRef.current = setInterval(fetchTimer, 10000);
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
    };
  }, [fetchTimer]);

  const isRunning = timerState.status === "running";

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Timer Display */}
      <div className="relative">
        {/* Glow backing */}
        {isRunning && (
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
        )}
        <div className="relative bg-surface-card border-2 border-primary/40 px-8 py-6 flex flex-col items-center gap-4">
          {/* LIVE badge */}
          {timerState.status !== "idle" && (
            <div className="flex items-center gap-2">
              {isRunning ? (
                <>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75 rounded-full" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
                  </span>
                  <span className="text-primary font-pixel text-xl tracking-widest uppercase">
                    Live
                  </span>
                </>
              ) : (
                <span className="text-yellow-400 font-pixel text-xl tracking-widest uppercase">
                  Paused
                </span>
              )}
            </div>
          )}

          {/* HH : MM : SS */}
          <div className="flex items-center gap-2 md:gap-4">
            {[
              { val: display.h, label: "HRS" },
              { val: ":", label: "" },
              { val: display.m, label: "MIN" },
              { val: ":", label: "" },
              { val: display.s, label: "SEC" },
            ].map((seg, i) =>
              seg.label === "" ? (
                <span
                  key={i}
                  className="text-5xl md:text-8xl font-pixel text-primary/70 leading-none"
                >
                  :
                </span>
              ) : (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-5xl md:text-8xl font-pixel text-text-main leading-none tabular-nums">
                    {seg.val}
                  </span>
                  <span className="text-xs font-pixel text-white/30 tracking-widest mt-1">
                    {seg.label}
                  </span>
                </div>
              )
            )}
          </div>

          {/* 48 HRS total indicator */}
          {isRunning && (
            <p className="text-white/30 font-pixel text-lg tracking-widest">
              / 48:00:00 Total
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LAUNCH COUNTDOWN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    isOver: boolean;
  }>({ days: "00", hours: "00", minutes: "00", seconds: "00", isOver: false });

  useEffect(() => {
    // 11 September 2026, 6:00 PM IST
    const target = new Date("2026-09-11T18:00:00+05:30").getTime();

    const calculateTimeLeft = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00", isOver: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
        isOver: false,
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.isOver) {
    return (
      <div className="relative bg-surface-card border-2 border-secondary/40 px-6 py-4 flex flex-col items-center gap-2 max-w-md w-full">
        <span className="animate-pulse text-secondary font-pixel text-xl tracking-widest uppercase">
          🚀 Hackathon Started!
        </span>
      </div>
    );
  }

  return (
    <div className="relative bg-surface-card border-2 border-secondary/40 px-6 py-4 flex flex-col items-center gap-3 max-w-lg w-full">
      {/* Title */}
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full bg-secondary opacity-75 rounded-full" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
        </span>
        <span className="text-secondary font-pixel text-sm md:text-base tracking-widest uppercase text-center">
          Countdown to Launch (Sep 11, 2026, 6:00 PM IST)
        </span>
      </div>

      {/* Grid displays */}
      <div className="flex items-center gap-2 md:gap-4 font-pixel">
        {[
          { val: timeLeft.days, label: "Days" },
          { val: timeLeft.hours, label: "Hrs" },
          { val: timeLeft.minutes, label: "Min" },
          { val: timeLeft.seconds, label: "Sec" }
        ].map((seg, i) => (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center bg-background-main border border-white/10 px-3 py-2 min-w-[56px] md:min-w-[70px]">
              <span className="text-2xl md:text-4xl text-text-main leading-none tabular-nums font-bold">
                {seg.val}
              </span>
              <span className="text-[10px] text-white/40 tracking-wider mt-1 uppercase">
                {seg.label}
              </span>
            </div>
            {i < 3 && (
              <span className="text-xl md:text-3xl text-secondary/60 ml-2 animate-pulse">
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function SIHPage() {
  const [loading, setLoading] = useState(true);
  const [registration, setRegistration] = useState<{
    authenticated: boolean;
    registered: boolean;
    data?: any;
  }>({
    authenticated: false,
    registered: false,
  });

  useEffect(() => {
    async function checkRegistration() {
      try {
        const res = await fetch("/api/sih-register");
        if (res.ok) {
          const result = await res.json();
          if (result.success) {
            setRegistration({
              authenticated: result.authenticated,
              registered: result.registered,
              data: result.data,
            });
          }
        }
      } catch (err) {
        console.error("Error fetching SIH registration status:", err);
      } finally {
        setLoading(false);
      }
    }
    checkRegistration();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        setRegistration({ authenticated: false, registered: false });
        window.location.reload();
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const ps1Details = registration.data?.["PS1 ID"]
    ? SIH_PROBLEM_STATEMENTS.find(ps => ps.ps_number === registration.data["PS1 ID"])
    : null;
  const ps2Details = registration.data?.["PS2 ID"]
    ? SIH_PROBLEM_STATEMENTS.find(ps => ps.ps_number === registration.data["PS2 ID"])
    : null;

  return (
    <>
      <Navbar />
      <main className="flex-grow relative w-full bg-background-main text-text-main font-pixel min-h-screen overflow-x-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[image:var(--bg-grid-radial)] bg-[size:32px_32px] pointer-events-none opacity-20 fixed" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none fixed" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none fixed" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-12 lg:py-20 flex flex-col gap-24">

          {/* ── HERO ─────────────────────────────────────────────────────── */}
          <section className="flex flex-col items-center text-center pt-8 gap-6">
            {/* SIH × IG badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1 border border-secondary/60 bg-surface-card/80 backdrop-blur-sm shadow-[0_0_20px_rgba(215,38,255,0.15)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-sm h-3 w-3 bg-secondary" />
              </span>
              <span className="text-xl font-pixel tracking-widest uppercase text-white">
                SIH × Innovation Garage
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-7xl font-pixel font-bold leading-tight text-text-main uppercase">
              SIH{" "}
              <span className="text-secondary">IGnite</span>
              <span className="text-primary">2026</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-white/60 font-pixel max-w-3xl leading-relaxed">
              Are you passionate about startups and solving real world problems?
              <br />
              <span className="text-text-main">
                Then this hackathon is the event you&apos;ve been waiting for!
              </span>
            </p>

            {/* Description */}
            <div className="max-w-2xl text-center">
              <p className="text-white/50 font-pixel text-lg leading-relaxed mb-4">
                Register for IG&apos;s{" "}
                <span className="text-primary">48 Hour-Hackathon</span> in
                collaboration with {" "}
                <span className="text-secondary">
                  Smart India Hackathon (SIH) 2026!
                </span>
              </p>
              <p className="text-white/40 font-pixel text-lg leading-relaxed">
                Brainstorm, build, and present game-changing solutions to
                some of the country&apos;s biggest challenges. Your idea might
                just be the next big breakthrough.
              </p>
            </div>

            {/* SIH Portal link */}
            <a
              href="https://sih.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xl text-cyber-lavender hover:text-secondary transition-colors border-b border-cyber-lavender/30 hover:border-secondary pb-0.5 font-pixel"
            >
              <span className="material-symbols-outlined text-xl">open_in_new</span>
              SIH Official Portal — Themes &amp; Problem Statements
            </a>

            {/* Register Now / Registration Details CTA */}
            <div className="mt-4 w-full flex justify-center">
              {loading ? (
                <div className="border-2 border-dashed border-white/20 p-6 flex items-center justify-center gap-3 max-w-md w-full">
                  <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary" />
                  <span className="font-pixel text-lg uppercase tracking-widest text-white/50">
                    Checking registration status...
                  </span>
                </div>
              ) : registration.authenticated && registration.registered ? (
                <div className="w-full max-w-5xl bg-surface-card border-2 border-secondary/50 p-8 md:p-12 flex flex-col gap-10 relative overflow-hidden shadow-[0_0_35px_rgba(215,38,255,0.15)] text-left">
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary" />

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/10 pb-8">
                    <div className="flex items-center gap-4">
                      <span className="relative flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500" />
                      </span>
                      <div>
                        <h2 className="text-3xl md:text-5xl font-pixel uppercase text-green-400 tracking-wider font-extrabold">
                          Registration Confirmed
                        </h2>
                        <p className="text-sm md:text-lg font-mono text-white/50 uppercase tracking-widest mt-2">
                          Authenticated as: {registration.data?.["Authenticated Email"]}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="self-start md:self-auto flex items-center gap-2 border-2 border-red-500/50 hover:bg-red-500/10 text-red-400 font-pixel text-base md:text-lg uppercase px-6 py-3 transition-all"
                    >
                      <span className="material-symbols-outlined text-xl">logout</span>
                      Logout
                    </button>
                  </div>

                  {/* Team Quick Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-background-main/50 border border-white/10 p-6 flex flex-col gap-4">
                      <span className="text-sm md:text-lg font-pixel text-white/40 uppercase tracking-widest">Team Profile</span>
                      <div className="flex flex-col gap-2">
                        <p className="text-3xl md:text-5xl font-pixel text-text-main font-bold uppercase">{registration.data?.["Team Name"]}</p>
                        <div className="flex items-center gap-2 text-base md:text-xl text-secondary uppercase tracking-widest mt-1">
                          <span className="material-symbols-outlined text-xl">settings_suggest</span>
                          <span>Track: {registration.data?.["PS1 Type"]}</span>
                        </div>
                        {registration.data?.["Faculty Mentor"] && (
                          <p className="text-lg md:text-2xl text-white/70 font-pixel mt-2 leading-relaxed">
                            <span className="text-white/40">Faculty Mentor:</span> {registration.data?.["Faculty Mentor"]}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="bg-background-main/50 border border-white/10 p-6 flex flex-col gap-4">
                      <span className="text-sm md:text-lg font-pixel text-white/40 uppercase tracking-widest">Problem Statements</span>
                      <div className="flex flex-col gap-3">
                        <div className="text-lg md:text-2xl font-pixel leading-relaxed">
                          <span className="text-primary font-bold">1st Choice:</span> {registration.data?.["PS1 ID"]} - {ps1Details ? `${ps1Details.title} (${ps1Details.org})` : "Loading statement..."}
                        </div>
                        {registration.data?.["PS2 ID"] && (
                          <div className="text-lg md:text-2xl font-pixel text-white/80 leading-relaxed">
                            <span className="text-white/40">2nd Choice:</span> {registration.data?.["PS2 ID"]} - {ps2Details ? `${ps2Details.title} (${ps2Details.org})` : "Loading statement..."} ({registration.data?.["PS2 Type"]})
                          </div>
                        )}
                        <div className="text-xs md:text-sm text-white/40 font-pixel mt-2">
                          <span className="text-white/60">Theme:</span> {registration.data?.["Theme"]}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Crew Details */}
                  <div className="flex flex-col gap-6">
                    <h3 className="text-2xl md:text-4xl font-pixel text-text-main uppercase tracking-widest border-b border-white/10 pb-4">
                      Crew / Team Roster (6 Members)
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Leader Card */}
                      <div className="bg-background-main/40 border-2 border-primary/20 p-6 flex flex-col gap-3">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <span className="text-base md:text-xl font-pixel text-primary uppercase font-bold tracking-widest">Team Leader</span>
                          <span className="text-xs md:text-sm font-pixel bg-primary/20 text-primary px-3 py-1 uppercase">{registration.data?.["Leader Gender"]}</span>
                        </div>
                        <div className="flex flex-col gap-2 text-base md:text-xl font-pixel">
                          <p className="text-xl md:text-2xl font-bold text-text-main">{registration.data?.["Leader Name"]}</p>
                          <p className="text-white/60">Roll No: {registration.data?.["Leader Roll"]}</p>
                          <p className="text-white/60">Dept: {registration.data?.["Leader Year & Dept"]}</p>
                          <p className="text-white/60 truncate">Email: {registration.data?.["Leader Email"]}</p>
                          <p className="text-white/60">Phone: {registration.data?.["Leader Phone"]}</p>
                        </div>
                      </div>

                      {/* Member cards */}
                      {[1, 2, 3, 4, 5].map((idx) => {
                        const name = registration.data?.[`Member ${idx} Name`];
                        if (!name) return null;
                        return (
                          <div key={idx} className="bg-background-main/30 border border-white/10 p-6 flex flex-col gap-3">
                            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                              <span className="text-base md:text-xl font-pixel text-white/50 uppercase tracking-widest">Member 0{idx}</span>
                              <span className="text-xs md:text-sm font-pixel bg-white/5 text-white/40 px-3 py-1 uppercase">{registration.data?.[`Member ${idx} Gender`]}</span>
                            </div>
                            <div className="flex flex-col gap-2 text-base md:text-xl font-pixel">
                              <p className="text-xl md:text-2xl font-bold text-text-main">{name}</p>
                              <p className="text-white/60">Roll No: {registration.data?.[`Member ${idx} Roll`]}</p>
                              <p className="text-white/60">Dept: {registration.data?.[`Member ${idx} Year & Dept`]}</p>
                              <p className="text-white/60 truncate">Email: {registration.data?.[`Member ${idx} Email`]}</p>
                              <p className="text-white/60">Phone: {registration.data?.[`Member ${idx} Phone`]}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-6 border-t border-white/10 pt-8 font-pixel">
                    <h3 className="text-2xl md:text-4xl text-text-main uppercase tracking-widest border-b border-white/10 pb-4">
                      Proposal Details
                    </h3>
                    <div className="flex flex-col gap-6 text-lg">
                      <div>
                        <span className="text-secondary font-bold uppercase tracking-wider block mb-2 text-xl md:text-2xl">Inspiration & Problem Identification:</span>
                        <p className="text-white/80 bg-background-main/40 border border-white/5 p-6 leading-relaxed font-sans text-base md:text-xl">
                          {registration.data?.["Inspiration"]}
                        </p>
                      </div>
                      <div>
                        <span className="text-secondary font-bold uppercase tracking-wider block mb-2 text-xl md:text-2xl">Technical Approach & Solution:</span>
                        <p className="text-white/80 bg-background-main/40 border border-white/5 p-6 leading-relaxed font-sans text-base md:text-xl">
                          {registration.data?.["Approach"]}
                        </p>
                      </div>
                      {registration.data?.["BOM Drive URL"] && (
                        <div>
                          <span className="text-secondary font-bold uppercase tracking-wider block mb-2 text-xl md:text-2xl">Bill of Materials (BOM) Drive Link:</span>
                          <a
                            href={registration.data?.["BOM Drive URL"]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-primary hover:underline font-mono text-base md:text-xl break-all"
                          >
                            <span className="material-symbols-outlined text-xl">link</span>
                            {registration.data?.["BOM Drive URL"]}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Quick-Access Links requested by user */}
                  <div className="flex flex-col gap-6 border-t border-white/10 pt-8">
                    <h3 className="text-2xl md:text-4xl font-pixel text-text-main uppercase tracking-widest text-center mb-2">
                      Participant Resources
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* WhatsApp Button */}
                      <a
                        href="https://chat.whatsapp.com/IZ2kBqx76QO8DyIdo1HF3U?s=cl&p=a&ilr=4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-pixel text-xl md:text-3xl uppercase tracking-widest px-8 py-6 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] text-center"
                      >
                        <span className="material-symbols-outlined text-3xl">group</span>
                        Join WhatsApp Group
                      </a>

                      {/* Handbook Link */}
                      <div className="relative group inline-flex items-center justify-center gap-4 bg-white/5 border-2 border-white/10 text-white/50 font-pixel text-xl md:text-3xl uppercase tracking-widest px-8 py-6 text-center">
                        <span className="material-symbols-outlined text-3xl">menu_book</span>
                        <span>Handbook (Coming Soon)</span>
                      </div>
                    </div>
                    <p className="text-xs md:text-base font-pixel text-white/40 text-center tracking-wider mt-2">
                      Only team leaders are requested to join the WhatsApp group. Read the guidelines carefully.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  {registration.authenticated ? (
                    <div className="flex flex-col items-center gap-3 border-2 border-red-500/40 bg-red-900/20 p-8 max-w-md w-full">
                      <span className="material-symbols-outlined text-5xl text-red-400">block</span>
                      <p className="text-red-400 font-pixel text-2xl md:text-3xl uppercase tracking-widest text-center">
                        Registration Closed
                      </p>
                      <p className="text-white/40 font-pixel text-lg text-center">
                        New registrations are no longer being accepted.
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex flex-col items-center gap-3 border-2 border-white/10 bg-surface-card p-8 max-w-md w-full">
                        <span className="material-symbols-outlined text-5xl text-white/30">lock</span>
                        <p className="text-white/50 font-pixel text-2xl md:text-3xl uppercase tracking-widest text-center">
                          Registration Closed
                        </p>
                        <p className="text-white/30 font-pixel text-lg text-center">
                          Login to view your registration status.
                        </p>
                        <Link
                          href="/sih/register"
                          className="mt-2 inline-flex items-center gap-2 bg-primary text-white font-pixel text-lg uppercase tracking-widest px-6 py-3 hover:bg-primary/90 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(215,38,255,0.6)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                        >
                          <span className="material-symbols-outlined text-xl">login</span>
                          Login with Google
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* ── LIVE TIMER ───────────────────────────────────────────────── */}
          <section className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-3xl md:text-5xl font-pixel text-text-main uppercase tracking-widest">
                48 Hour Hackathon
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-secondary via-white to-primary mx-auto" />
              <p className="text-white/40 font-pixel text-xl">
                48 Hours of Pure Innovation
              </p>
            </div>
            {/* <LiveTimer /> */}
            <LaunchCountdown />
          </section>

          {/* ── CHECKPOINTS ──────────────────────────────────────────────── */}
          <section className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-2 text-center">
              <h2 className="text-3xl md:text-5xl font-pixel text-text-main uppercase tracking-widest">
                Checkpoints
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-primary via-white to-secondary mx-auto" />
              <p className="text-white/40 font-pixel text-xl max-w-xl">
                Three milestones. Three chances to prove your team&apos;s worth.
                Details for each checkpoint will be announced soon.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {checkpoints.map((cp, idx) => (
                <div
                  key={idx}
                  className="group relative bg-surface-card border-2 border-white/10 p-6 flex flex-col gap-4 hover:border-primary transition-all duration-300 hover:shadow-[6px_6px_0px_0px_rgba(255,106,0,0.4)]"
                >
                  {/* Number badge */}
                  <div className="absolute -top-4 left-6 bg-primary px-3 py-0.5">
                    <span className="text-white font-pixel text-lg uppercase tracking-widest">
                      0{cp.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center gap-3 mt-2">
                    <span className="material-symbols-outlined text-4xl text-primary">
                      {cp.icon}
                    </span>
                    <h3 className="text-2xl font-pixel text-text-main uppercase">
                      {cp.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-white/50 font-pixel text-lg leading-relaxed flex-1">
                    {cp.description}
                  </p>

                  {/* Deadline */}
                  <div className="flex items-center gap-2 border-t border-white/10 pt-4">
                    <span className="material-symbols-outlined text-xl text-secondary">
                      schedule
                    </span>
                    <span className="font-pixel text-lg uppercase tracking-wider">
                      <span className="text-white/40">Deadline: </span>
                      <span
                        className={
                          cp.deadline === "TBD"
                            ? "text-white/30"
                            : "text-secondary"
                        }
                      >
                        {cp.deadline}
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Vertical timeline connector (decorative) */}
            <div className="hidden md:flex items-center gap-0 w-full max-w-4xl justify-center -mt-6">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center flex-1">
                  <div className="w-4 h-4 bg-primary rounded-full shrink-0" />
                  {i < 2 && (
                    <div className="flex-1 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* ── GUIDELINES ───────────────────────────────────────────────── */}
          <section className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-2 text-center">
              <h2 className="text-3xl md:text-5xl font-pixel text-text-main uppercase tracking-widest">
                Guidelines
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-secondary via-white to-primary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "group",
                  title: "Team Composition",
                  points: [
                    "6 members per team, with the designated Team Leader acting as the primary point of contact.",
                    "At least one female member is mandatory for every participating team.",
                    "All members must be regular, full-time NITW students; inter-institute teams are strictly prohibited.",
                    "Mandatory on-site presence of all the 6 members is required for the hackathon.",
                  ],
                },
                {
                  icon: "lightbulb",
                  title: "Problem Statements",
                  points: [
                    "Choose up to 2 official SIH Problem Statements directly from sih.gov.in.",
                    "Select problem statements that strictly align with your team's core technical expertise.",
                    "Scope your solution to deliver a working end-to-end prototype within the event timeframe.",
                  ],
                },
                {
                  icon: "engineering",
                  title: "Track & Hardware Requirements",
                  points: [
                    "Teams may enter Software or Hardware tracks based on the technical needs of their chosen PS (multidisciplinary teams are encouraged for Hardware).",
                    "Hardware teams must submit an itemized Bill of Materials (BOM) PDF listing every component alongside its exact cost.",
                    "Hardware component costs must be kept as low as possible; budget optimization directly impacts your technical evaluation score.",
                    "All issued hardware tools, microcontrollers, and sensors must be returned in working condition post-evaluation or face financial penalties.",
                  ],
                },
                {
                  icon: "verified",
                  title: "Evaluation, Code Integrity & Rules",
                  points: [
                    "Checkpoints are formal elimination rounds; unresponsiveness, casual behavior, or failing to act on mentor feedback leads to immediate disqualification.",
                    "AI tools are allowed, but the team as a whole must be able to explain any chunk of code on demand.",
                    "Code must be continuously pushed to a public GitHub/GitLab repository; a single bulk commit at the end will trigger a plagiarism investigation.",
                    "Teams must be demo-ready the instant evaluators arrive at their station, and all decisions made by the evaluation panel are final and non-negotiable.",
                  ],
                },
              ].map((section, i) => (
                <div
                  key={i}
                  className="bg-surface-card border-2 border-white/10 p-6 hover:border-secondary/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-3xl text-secondary">
                      {section.icon}
                    </span>
                    <h3 className="text-2xl font-pixel text-text-main uppercase">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {section.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">
                          chevron_right
                        </span>
                        <span className="text-white/60 font-pixel text-lg leading-snug">
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
          <section className="flex flex-col items-center gap-6 pb-8">
            <div className="bg-surface-card border-2 border-primary/30 p-10 flex flex-col items-center gap-6 text-center w-full max-w-3xl relative overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />

              <p className="text-4xl font-pixel text-text-main uppercase">
                Ready. Get Set.{" "}
                <span className="text-primary">Innovate!</span>
              </p>
              <p className="text-white/50 font-pixel text-xl max-w-lg leading-relaxed">
                IG&apos;s bringing the challenge <em>and</em> the goodies. 48 hours of
                pure innovation and creativity.
              </p>
              {loading ? (
                <div className="animate-pulse text-white/30 font-pixel text-lg">Loading...</div>
              ) : registration.authenticated && registration.registered ? (
                <div className="text-green-400 font-pixel text-lg uppercase tracking-wider flex flex-col items-center gap-2">
                  <span className="material-symbols-outlined text-4xl">task_alt</span>
                  <span>You are fully registered!</span>
                  <p className="text-white/40 text-sm normal-case font-pixel mt-2">
                    Scroll up to view your team card, join the WhatsApp group, or access materials.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <span className="material-symbols-outlined text-4xl text-red-400">block</span>
                  <p className="text-red-400 font-pixel text-xl uppercase tracking-widest">
                    Registration Closed
                  </p>
                  <p className="text-white/30 font-pixel text-base text-center max-w-sm">
                    New registrations are no longer being accepted. Contact ig@nitw.ac.in for queries.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
