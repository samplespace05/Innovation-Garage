"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Reusable Components ─────────────────────────────────────────────────────

function FormInput({
  label, required, type = "text", placeholder, value, onChange, hint, id, maxLength, isTextarea
}: {
  label: string; required?: boolean; type?: string; placeholder?: string;
  value: string; onChange: (v: string) => void; hint?: string; id: string; maxLength?: number;
  isTextarea?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-pixel text-xl text-text-main uppercase tracking-wider">
        {label}{required && <span className="text-primary ml-1">*</span>}
      </label>
      {hint && <p className="font-pixel text-sm text-white/40">{hint}</p>}
      {isTextarea ? (
        <textarea
          id={id} required={required} placeholder={placeholder}
          value={value} onChange={(e) => onChange(e.target.value)} maxLength={maxLength}
          className="bg-background-main border-2 border-white/20 text-text-main font-sans text-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-white/20 min-h-[150px]"
        />
      ) : (
        <input
          id={id} type={type} required={required} placeholder={placeholder}
          value={value} onChange={(e) => onChange(e.target.value)} maxLength={maxLength}
          className="bg-background-main border-2 border-white/20 text-text-main font-sans text-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
        />
      )}
    </div>
  );
}

function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-4 pb-4 border-b-2 border-primary/30 mb-6">
      <div className="bg-primary px-3 py-1 shrink-0">
        <span className="font-pixel text-white text-2xl">{number}</span>
      </div>
      <div>
        <h2 className="font-pixel text-3xl text-text-main uppercase tracking-widest">{title}</h2>
        {subtitle && <p className="font-pixel text-lg text-white/40 mt-1">{subtitle}</p>}
      </div>
    </div>
  );
}

function DashboardField({ label, value, isLink }: { label: string; value: string; isLink?: boolean }) {
  if (!value) return null;
  return (
    <div className="flex flex-col gap-1 py-3 border-b border-white/10 last:border-0">
      <span className="font-pixel text-xs text-white/40 uppercase tracking-widest">{label}</span>
      {isLink ? (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-primary text-base break-all hover:underline"
        >
          {value}
        </a>
      ) : (
        <span className="font-sans text-text-main text-base break-words">{value}</span>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

type PageState = "loading" | "accessDenied" | "alreadySubmitted" | "form" | "submitted";

export default function SIHFinalSubmissionPage() {
  const [pageState, setPageState] = useState<PageState>("loading");

  // Registration data from Sheet1
  const [teamName, setTeamName] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [track, setTrack] = useState<"Software" | "Hardware" | "">("");

  // Already-submitted data to show on dashboard
  const [submittedData, setSubmittedData] = useState<Record<string, string> | null>(null);

  // Form fields
  const [youtubeLink, setYoutubeLink] = useState("");
  const [pptxLink, setPptxLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [liveDemoLink, setLiveDemoLink] = useState("");
  const [pitch, setPitch] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const isSoftware = track === "Software";

  useEffect(() => {
    async function checkAccess() {
      try {
        // Step 1: Check shortlist from Sheet1 via sih-register
        const regRes = await fetch("/api/sih-register");
        if (!regRes.ok) { 
          console.log("[FinalSubmit] /api/sih-register returned non-OK status:", regRes.status);
          setPageState("accessDenied"); return; 
        }

        const regResult = await regRes.json();
        console.log("[FinalSubmit] sih-register response:", JSON.stringify(regResult, null, 2));
        console.log("[FinalSubmit] authenticated:", regResult.authenticated);
        console.log("[FinalSubmit] registered:", regResult.registered);
        console.log("[FinalSubmit] Shortlisted value:", regResult.data?.["Shortlisted"]);

        const shortlisted =
          regResult.success &&
          regResult.authenticated &&
          regResult.data?.["Shortlisted"]?.toString().toUpperCase() === "TRUE";

        console.log("[FinalSubmit] shortlisted check result:", shortlisted);

        if (!shortlisted) { setPageState("accessDenied"); return; }

        const regData = regResult.data;
        const resolvedTeamName = regData["Team Name"] || "";
        const resolvedLeaderEmail = regData["Leader Email"] || "";
        setTeamName(resolvedTeamName);
        setLeaderEmail(resolvedLeaderEmail);
        const ps1Type = regData["PS1 Type"]?.toString().toLowerCase() || "";
        if (ps1Type.includes("software")) setTrack("Software");
        else if (ps1Type.includes("hardware")) setTrack("Hardware");

        // Step 2: Check if team already submitted in Final Response sheet
        const submitCheckRes = await fetch(
          `/api/sih-final-submit?teamName=${encodeURIComponent(resolvedTeamName)}`
        );
        if (submitCheckRes.ok) {
          const submitCheck = await submitCheckRes.json();
          if (submitCheck.success && submitCheck.submitted && submitCheck.data) {
            setSubmittedData(submitCheck.data);
            setPageState("alreadySubmitted");
            return;
          }
        }

        // Shortlisted but not yet submitted — show form
        setPageState("form");
      } catch (err) {
        console.error("Error checking access:", err);
        setPageState("accessDenied");
      }
    }
    checkAccess();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    if (!teamName || !leaderEmail || !track || !youtubeLink || !pptxLink || !pitch) {
      setSubmitResult({ success: false, message: "Please fill in all required fields." });
      return;
    }
    if (isSoftware && !githubLink) {
      setSubmitResult({ success: false, message: "Github Link is compulsory for Software teams." });
      return;
    }
    const wordCount = pitch.trim().split(/\s+/).filter(w => w.length > 0).length;
    if (wordCount < 100 || wordCount > 200) {
      setSubmitResult({ success: false, message: `Pitch must be between 100 and 200 words. Currently: ${wordCount} words.` });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/sih-final-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ teamName, leaderEmail, track, youtubeLink, pptxLink, githubLink, liveDemoLink, pitch })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setPageState("submitted");
      } else {
        setSubmitResult({ success: false, message: data.error || "Submission failed." });
      }
    } catch {
      setSubmitResult({ success: false, message: "Network error occurred." });
    } finally {
      setSubmitting(false);
    }
  };

  // ── Loading ──────────────────────────────────────────────────────────────
  if (pageState === "loading") {
    return (
      <div className="min-h-screen bg-background-main flex flex-col font-sans text-text-main items-center justify-center gap-4">
        <span className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary" />
        <span className="font-pixel text-lg uppercase tracking-widest text-white/50">Verifying Access...</span>
      </div>
    );
  }

  // ── Access Denied ─────────────────────────────────────────────────────────
  if (pageState === "accessDenied") {
    return (
      <div className="min-h-screen bg-background-main flex flex-col font-sans text-text-main selection:bg-primary/30 selection:text-white">
        <Navbar />
        <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-8 pt-32">
          <div className="bg-surface-card border-2 border-red-500/50 p-8 text-center flex flex-col items-center gap-6">
            <span className="material-symbols-outlined text-6xl text-red-500">block</span>
            <h1 className="font-pixel text-4xl text-text-main uppercase tracking-widest">Access Denied</h1>
            <p className="font-pixel text-xl text-white/60 leading-relaxed max-w-2xl">
              You do not have permission to access this form. Only shortlisted teams can submit their final response.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ── Already Submitted Dashboard ───────────────────────────────────────────
  if (pageState === "alreadySubmitted" && submittedData) {
    return (
      <div className="min-h-screen bg-background-main flex flex-col font-sans text-text-main selection:bg-primary/30 selection:text-white">
        <Navbar />
        <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-8 pt-32 pb-12">
          <div className="mb-10">
            <h1 className="font-pixel text-5xl md:text-6xl text-text-main uppercase tracking-widest mb-4">
              SIH Final <span className="text-primary">Submission</span>
            </h1>
          </div>

          <div className="bg-primary/10 border-2 border-primary/50 p-5 flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-4xl text-primary shrink-0">check_circle</span>
            <div>
              <p className="font-pixel text-xl text-primary uppercase tracking-wider">Submission Already Received</p>
              <p className="font-pixel text-sm text-white/50 mt-1">
                Your team has already submitted the final response. You cannot submit again.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="bg-surface-card border-2 border-white/10 p-6">
              <SectionHeader number="1" title="Team Details" />
              <DashboardField label="Team Name" value={submittedData["Team Name"] || teamName} />
              <DashboardField label="Leader Email" value={submittedData["Leader Email"] || leaderEmail} />
              <DashboardField label="Track" value={submittedData["Track"] || track} />
              <DashboardField label="Submission Time" value={submittedData["Timestamp"] || ""} />
            </div>

            <div className="bg-surface-card border-2 border-white/10 p-6">
              <SectionHeader number="2" title="Project Links" />
              <DashboardField label="YouTube Demo Video" value={submittedData["Youtube Link"] || ""} isLink />
              <DashboardField label="GitHub Repository" value={submittedData["Github Link"] || ""} isLink />
              <DashboardField label="Live Website / Demo" value={submittedData["Live Demo Link"] || ""} isLink />
              <DashboardField label="PPT / Presentation" value={submittedData["PPTX Link"] || ""} isLink />
            </div>

            <div className="bg-surface-card border-2 border-white/10 p-6">
              <SectionHeader number="3" title="Product Pitch" />
              <DashboardField label="Pitch" value={submittedData["Pitch"] || ""} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ── Just Submitted Success ────────────────────────────────────────────────
  if (pageState === "submitted") {
    return (
      <div className="min-h-screen bg-background-main flex flex-col font-sans text-text-main selection:bg-primary/30 selection:text-white">
        <Navbar />
        <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-8 pt-32">
          <div className="bg-surface-card border-2 border-primary/50 p-8 text-center flex flex-col items-center gap-6">
            <span className="material-symbols-outlined text-6xl text-primary">check_circle</span>
            <h1 className="font-pixel text-4xl text-text-main uppercase tracking-widest">Submission Successful</h1>
            <p className="font-pixel text-xl text-white/60 leading-relaxed max-w-2xl">
              Your final submission has been recorded successfully. Best of luck!
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ── Form (shortlisted, not yet submitted) ─────────────────────────────────
  return (
    <div className="min-h-screen bg-background-main flex flex-col font-sans text-text-main selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-8 pt-32">
        <div className="mb-10">
          <h1 className="font-pixel text-5xl md:text-6xl text-text-main uppercase tracking-widest mb-4">
            SIH Final <span className="text-primary">Submission</span>
          </h1>
          <p className="font-pixel text-xl text-white/60 leading-relaxed max-w-3xl">
            Selected teams must submit their final project details including demo video, presentation, and GitHub repository.
          </p>
        </div>

        {/* Shortlisted team badge */}
        {teamName && (
          <div className="bg-surface-card border-2 border-primary/20 p-4 flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-2xl text-primary shrink-0">verified</span>
            <p className="font-pixel text-sm text-white/70">
              Submitting as <span className="text-text-main">{teamName}</span>
              {track && <> &mdash; <span className="text-primary capitalize">{track} Track</span></>}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="bg-surface-card border-2 border-white/10 p-6 flex flex-col gap-6">
            <SectionHeader number="1" title="Project Links" />

            <FormInput
              id="youtubeLink"
              label="YouTube Link (Demo Video)"
              required
              value={youtubeLink}
              onChange={setYoutubeLink}
              placeholder="https://youtube.com/..."
              hint="Please upload your demo video as Unlisted."
            />

            <FormInput
              id="githubLink"
              label="GitHub Link"
              required={isSoftware}
              value={githubLink}
              onChange={setGithubLink}
              placeholder="https://github.com/..."
              hint={isSoftware ? "Compulsory for Software teams." : "Optional for Hardware teams."}
            />

            <FormInput
              id="liveDemoLink"
              label="Live Website / Demo Link"
              required={false}
              value={liveDemoLink}
              onChange={setLiveDemoLink}
              placeholder="https://your-demo-url.com"
              hint="Optional. Provide a link to your live working demo if deployed."
            />

            <FormInput
              id="pptxLink"
              label="PPT Link"
              required
              value={pptxLink}
              onChange={setPptxLink}
              placeholder="Google Drive Link"
              hint="Uploaded in Drive and accessible to all."
            />
          </div>

          <div className="bg-surface-card border-2 border-white/10 p-6 flex flex-col gap-6">
            <SectionHeader number="2" title="Product Pitch" />
            <FormInput
              id="pitch"
              label="Simple Pitch"
              required
              value={pitch}
              onChange={setPitch}
              isTextarea
              placeholder="Write a 100-200 word pitch about your product..."
              hint="100-200 words explaining what your product does, its impact, and its uniqueness."
            />
            <div className="text-right text-white/50 font-sans text-sm">
              Word count: {pitch.trim() ? pitch.trim().split(/\s+/).filter(w => w.length > 0).length : 0} / 200
            </div>
          </div>

          {submitResult && !submitResult.success && (
            <div className="bg-red-900/30 border-2 border-red-500/50 p-4 flex items-start gap-3">
              <span className="material-symbols-outlined text-red-400 text-2xl shrink-0">error</span>
              <p className="font-pixel text-red-300 text-lg">{submitResult.message}</p>
            </div>
          )}

          <div className="flex justify-end pt-4 pb-12">
            <button
              type="submit"
              disabled={submitting}
              className={`bg-primary text-background-main font-pixel text-2xl uppercase tracking-widest px-8 py-4 transition-all ${submitting ? "opacity-70 cursor-not-allowed" : "hover:bg-primary/90 hover:scale-105 active:scale-95"}`}
            >
              {submitting ? "Submitting..." : "Submit Final Response"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

