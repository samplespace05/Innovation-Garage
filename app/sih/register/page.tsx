"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// Global type declarations for Google Identity Services + reCAPTCHA
// ─────────────────────────────────────────────────────────────────────────────
declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: object) => void;
          renderButton: (element: HTMLElement | null, config: object) => void;
          prompt: () => void;
          revoke: (email: string, cb: () => void) => void;
        };
      };
    };
  }
}

import { SIH_PROBLEM_STATEMENTS, PS_THEMES } from "@/lib/sihProblemStatements";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────
const THEMES = PS_THEMES;

const GENDERS = ["Male", "Female"];
const NITW_DOMAINS = ["nitw.ac.in", "student.nitw.ac.in"];

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
type MemberData = {
  fullName: string;
  rollNumber: string;
  yearAndDept: string;
  email: string;
  phone: string;
  gender: string;
};

type GoogleUser = {
  name: string;
  email: string;
  picture: string;
};

const emptyMember = (): MemberData => ({
  fullName: "",
  rollNumber: "",
  yearAndDept: "",
  email: "",
  phone: "",
  gender: "",
});

// ─────────────────────────────────────────────────────────────────────────────
// DECODE JWT PAYLOAD (client-side only — for UX checks, NOT security)
// Security checks happen exclusively on the backend.
// ─────────────────────────────────────────────────────────────────────────────
function decodeJwtPayload(token: string): Record<string, string> | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payload = atob(parts[1].replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(payload);
  } catch {
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// REUSABLE FORM FIELD COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────
function FormInput({
  label, required, type = "text", placeholder, value, onChange, hint, id, maxLength,
}: {
  label: string; required?: boolean; type?: string; placeholder?: string;
  value: string; onChange: (v: string) => void; hint?: string; id: string; maxLength?: number;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-pixel text-xl text-text-main uppercase tracking-wider">
        {label}{required && <span className="text-primary ml-1">*</span>}
      </label>
      {hint && <p className="font-pixel text-sm text-white/40">{hint}</p>}
      <input
        id={id} type={type} required={required} placeholder={placeholder}
        value={value} onChange={(e) => onChange(e.target.value)} maxLength={maxLength}
        className="bg-background-main border-2 border-white/20 text-text-main font-pixel text-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors placeholder:text-white/20"
      />
    </div>
  );
}

function FormSelect({
  label, required, options, value, onChange, id, hint,
}: {
  label: string; required?: boolean; options: string[]; value: string;
  onChange: (v: string) => void; id: string; hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-pixel text-xl text-text-main uppercase tracking-wider">
        {label}{required && <span className="text-primary ml-1">*</span>}
      </label>
      {hint && <p className="font-pixel text-sm text-white/40">{hint}</p>}
      <select
        id={id} required={required} value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-background-main border-2 border-white/20 text-text-main font-pixel text-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
      >
        <option value="">— Select —</option>
        {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

function FormRadioGroup({
  label, required, options, value, onChange, name, hint,
}: {
  label: string; required?: boolean;
  options: { label: string; value: string }[];
  value: string; onChange: (v: string) => void; name: string; hint?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-pixel text-xl text-text-main uppercase tracking-wider">
        {label}{required && <span className="text-primary ml-1">*</span>}
      </span>
      {hint && <p className="font-pixel text-sm text-white/40">{hint}</p>}
      <div className="flex flex-wrap gap-4 mt-1">
        {options.map((opt) => (
          <label key={opt.value}
            className={`flex items-center gap-2 cursor-pointer px-4 py-2 border-2 font-pixel text-xl transition-colors ${value === opt.value ? "border-primary bg-primary/10 text-text-main" : "border-white/20 text-white/50 hover:border-white/40"
              }`}
          >
            <input type="radio" name={name} value={opt.value} checked={value === opt.value}
              onChange={() => onChange(opt.value)} className="sr-only" required={required} />
            <span className={`w-3 h-3 border-2 inline-block shrink-0 ${value === opt.value ? "bg-primary border-primary" : "border-white/40"}`} />
            {opt.label}
          </label>
        ))}
      </div>
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

function FormPSSelector({
  label, required, id, value, onChangeType, onChangeId, filterCategory
}: {
  label: string; required?: boolean; id: string;
  value: string; onChangeType: (v: string) => void; onChangeId: (v: string) => void;
  filterCategory?: "Software" | "Hardware";
}) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = SIH_PROBLEM_STATEMENTS.filter(ps =>
    (!filterCategory || ps.category === filterCategory) &&
    (ps.ps_number.toLowerCase().includes(search.toLowerCase()) ||
      ps.title.toLowerCase().includes(search.toLowerCase()) ||
      ps.theme.toLowerCase().includes(search.toLowerCase()))
  );

  const selectedPS = SIH_PROBLEM_STATEMENTS.find(ps => ps.ps_number === value);

  return (
    <div className="flex flex-col gap-1.5 relative" ref={wrapperRef}>
      <label htmlFor={id} className="font-pixel text-xl text-text-main uppercase tracking-wider">
        {label}{required && <span className="text-primary ml-1">*</span>}
      </label>
      <div
        className={`bg-background-main border-2 px-4 py-3 cursor-pointer flex justify-between items-center transition-colors ${isOpen ? 'border-primary' : 'border-white/20 hover:border-white/40'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col overflow-hidden">
          <span className={`font-pixel text-lg truncate ${selectedPS ? "text-text-main" : "text-white/40"}`}>
            {selectedPS ? `${selectedPS.ps_number} — ${selectedPS.title}` : "— Select Problem Statement —"}
          </span>
          {selectedPS && <span className="text-white/40 text-sm font-sans mt-0.5">{selectedPS.theme}</span>}
        </div>
        <span className="material-symbols-outlined shrink-0 text-white/50 ml-3">{isOpen ? "expand_less" : "expand_more"}</span>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-surface-card border-2 border-primary z-50 max-h-[400px] flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          <div className="p-3 border-b-2 border-white/10 sticky top-0 bg-surface-card z-10">
            <input
              type="text"
              placeholder="Search by ID, title, or theme..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-background-main border-2 border-white/20 px-3 py-2 text-white font-pixel text-base focus:outline-none focus:border-primary placeholder:text-white/30"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="overflow-y-auto flex-1 p-2 flex flex-col gap-1 custom-scrollbar">
            {filtered.length === 0 ? (
              <div className="p-6 text-white/40 font-pixel text-center">No results found</div>
            ) : (
              filtered.map(ps => (
                <div
                  key={ps.ps_number}
                  className={`p-3 cursor-pointer border-2 transition-colors ${value === ps.ps_number ? 'border-primary bg-primary/10' : 'border-transparent hover:border-white/10 hover:bg-white/5'}`}
                  onClick={() => {
                    onChangeId(ps.ps_number);
                    onChangeType(ps.category);
                    setIsOpen(false);
                    setSearch("");
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary font-pixel text-xl">{ps.ps_number}</span>
                    <span className={`text-xs px-2 py-0.5 border font-pixel uppercase tracking-wider ${ps.category === 'Software' ? 'text-secondary border-secondary/50 bg-secondary/10' : 'text-[#38bdf8] border-[#38bdf8]/50 bg-[#38bdf8]/10'}`}>
                      {ps.category}
                    </span>
                  </div>
                  <div className="text-white/90 text-sm font-sans mb-1">{ps.title}</div>
                  <div className="text-white/40 text-xs font-pixel uppercase tracking-widest mt-2">{ps.theme}</div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function MemberSection({
  sectionNum, label, data, onChange, isRequired,
  showHasAnother, hasAnother, onHasAnotherChange,
}: {
  sectionNum: string; label: string; data: MemberData;
  onChange: (field: keyof MemberData, value: string) => void; isRequired: boolean;
  showHasAnother?: boolean; hasAnother?: string; onHasAnotherChange?: (v: string) => void;
}) {
  return (
    <div className="bg-surface-card border-2 border-white/10 p-6 flex flex-col gap-5">
      <SectionHeader number={sectionNum} title={label} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormInput id={`${label}-name`} label="Full Name" required={isRequired}
          placeholder="e.g. Ravi Kumar" value={data.fullName}
          onChange={(v) => onChange("fullName", v)} maxLength={50} />
        <FormInput id={`${label}-roll`} label="Roll Number" required={isRequired}
          placeholder="e.g. 22CS1001" value={data.rollNumber}
          onChange={(v) => onChange("rollNumber", v)} maxLength={20} />
        <FormInput id={`${label}-year`} label="Year of Study & Department" required={isRequired}
          placeholder="e.g. 3rd Year — CSE" value={data.yearAndDept}
          onChange={(v) => onChange("yearAndDept", v)} maxLength={50} />
        <FormInput id={`${label}-email`} label="Email Address" required={isRequired}
          type="email" placeholder="e.g. 22cs1001@student.nitw.ac.in"
          value={data.email} onChange={(v) => onChange("email", v)} maxLength={80} />
        <FormInput id={`${label}-phone`} label="Phone Number" required={isRequired}
          type="tel" placeholder="e.g. 9876543210"
          value={data.phone} onChange={(v) => onChange("phone", v)} maxLength={10} />
      </div>
      {/* Gender */}
      <div className="flex flex-col gap-2">
        <span className="font-pixel text-xl text-text-main uppercase tracking-wider">
          Gender{isRequired && <span className="text-primary ml-1">*</span>}
        </span>
        <div className="flex flex-wrap gap-4">
          {GENDERS.map((g) => (
            <label key={g} className={`flex items-center gap-2 cursor-pointer px-4 py-2 border-2 font-pixel text-xl transition-colors ${data.gender === g ? "border-secondary bg-secondary/10 text-text-main" : "border-white/20 text-white/50 hover:border-white/40"
              }`}>
              <input type="radio" name={`${label}-gender`} value={g}
                checked={data.gender === g} onChange={() => onChange("gender", g)} className="sr-only" />
              <span className={`w-3 h-3 border-2 inline-block shrink-0 ${data.gender === g ? "bg-secondary border-secondary" : "border-white/40"}`} />
              {g}
            </label>
          ))}
        </div>
      </div>
      {/* Has Another */}
      {showHasAnother && onHasAnotherChange && (
        <FormRadioGroup label="Do you have another member?" required name={`${label}-hasAnother`}
          options={[{ label: "Yes", value: "yes" }, { label: "No", value: "no" }]}
          value={hasAnother ?? ""} onChange={onHasAnotherChange} />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP 1 — GOOGLE SIGN-IN GATE
// ─────────────────────────────────────────────────────────────────────────────
function GoogleSignInStep({ onSignIn }: { onSignIn: (user: GoogleUser) => void }) {
  const btnRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState("");
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

  // Handle Google credential response
  const handleCredential = useCallback(async (response: { credential: string }) => {
    const token = response.credential;
    const payload = decodeJwtPayload(token);
    if (!payload) {
      setError("Authentication failed. Please try again.");
      return;
    }

    const email: string = payload.email || "";
    const domain = email.split("@")[1] || "";

    // Client-side domain check (UX feedback only — enforced strictly on backend)
    if (!NITW_DOMAINS.includes(domain)) {
      setError(
        `Only NITW email accounts are allowed (nitw.ac.in or student.nitw.ac.in). You signed in with: ${email}`
      );
      // Revoke the token so the user is signed out
      if (window.google?.accounts?.id) {
        window.google.accounts.id.revoke(email, () => { });
      }
      return;
    }

    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken: token })
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        setError(data.error || "Authentication failed on server. Please try again.");
        return;
      }
      onSignIn({
        name: payload.name || "",
        email,
        picture: payload.picture || "",
      });
    } catch (e) {
      setError("Network error during authentication. Please try again.");
    }
  }, [onSignIn]);

  // Load Google Identity Services script via next/script for reliable loading
  // The button is rendered once the SDK is fully ready (polled below)
  const onGsiLoad = useCallback(() => {
    setScriptLoaded(true);
  }, []);

  // Wait for window.google.accounts.id to be ready, then initialize + render
  useEffect(() => {
    if (!scriptLoaded || !CLIENT_ID) return;

    let cancelled = false;
    let attempts = 0;
    const MAX_ATTEMPTS = 40; // 40 * 100ms = 4s max wait

    function tryInit() {
      if (cancelled) return;
      if (window.google?.accounts?.id) {
        window.google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: handleCredential,
          hd: "*",
          context: "signin",
          ux_mode: "popup",
        });
        window.google.accounts.id.renderButton(btnRef.current, {
          type: "standard",
          theme: "filled_black",
          size: "large",
          text: "signin_with",
          shape: "rectangular",
          width: 320,
        });
        return;
      }
      attempts++;
      if (attempts < MAX_ATTEMPTS) {
        setTimeout(tryInit, 100);
      }
    }

    tryInit();
    return () => { cancelled = true; };
  }, [scriptLoaded, CLIENT_ID, handleCredential]);

  if (!CLIENT_ID) {
    return (
      <div className="bg-red-900/30 border-2 border-red-500/50 p-4 text-center flex flex-col items-center gap-4">
        <p className="font-pixel text-red-300 text-lg">
          Google OAuth is not configured. Please contact the organisers.
        </p>
        {process.env.NODE_ENV === "development" && (
          <button
            onClick={async () => {
              const token = "dev_bypass_token";
              try {
                const res = await fetch("/api/auth/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ idToken: token })
                });
                if (res.ok) {
                  onSignIn({ name: "Dev User", email: "dev@nitw.ac.in", picture: "" });
                }
              } catch (e) {
                console.error(e);
              }
            }}
            className="px-4 py-2 bg-white/10 text-white font-pixel text-sm hover:bg-white/20 transition-colors"
          >
            [DEV MODE] Skip OAuth
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 py-8">
      {/* Load Google Identity Services SDK */}
      {CLIENT_ID && (
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="afterInteractive"
          onLoad={onGsiLoad}
        />
      )}

      {/* Shield icon */}
      <div className="relative">
        <div className="absolute inset-0 bg-secondary/10 blur-2xl rounded-full" />
        <span className="material-symbols-outlined text-7xl text-secondary relative">verified_user</span>
      </div>

      <div className="text-center flex flex-col gap-2">
        <h2 className="font-pixel text-3xl text-text-main uppercase">Verify Your Identity</h2>
        <p className="font-pixel text-xl text-white/50 max-w-md leading-relaxed">
          Sign in with your <span className="text-secondary">NITW Google account</span> to access the registration form.
        </p>
        <p className="font-pixel text-lg text-white/30">
          Accepted: <code className="text-white/50">@nitw.ac.in</code> or{" "}
          <code className="text-white/50">@student.nitw.ac.in</code>
        </p>
      </div>

      {/* Google sign-in button rendered here */}
      <div ref={btnRef} id="google-signin-btn" className="flex justify-center min-h-[44px]" />

      {!scriptLoaded && (
        <div className="flex items-center gap-2 text-white/30 font-pixel text-lg">
          <span className="material-symbols-outlined animate-spin text-xl">progress_activity</span>
          Loading Google Sign-In...
        </div>
      )}

      {error && (
        <div className="bg-red-900/30 border-2 border-red-500/50 p-4 max-w-md flex items-start gap-3">
          <span className="material-symbols-outlined text-red-400 text-2xl shrink-0">block</span>
          <p className="font-pixel text-red-300 text-lg">{error}</p>
        </div>
      )}

      {/* Security note */}
      {/* <div className="bg-surface-card border border-white/10 p-4 max-w-md flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-xl">lock</span>
          <span className="font-pixel text-white/60 text-lg uppercase tracking-wider">Why sign in?</span>
        </div>
        <ul className="flex flex-col gap-1.5">
          {[
            "Verifies you are a genuine NITW student",
            "Prevents duplicate team registrations",
            "Your credentials are never stored — only your email",
            "Token is verified securely on our servers",
          ].map((pt, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-base mt-0.5 shrink-0">chevron_right</span>
              <span className="font-pixel text-white/40 text-base">{pt}</span>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function SIHRegisterPage() {
  // Auth state
  const [googleUser, setGoogleUser] = useState<GoogleUser | null>(null);
  const [sessionLoading, setSessionLoading] = useState(true);
  const [checkingRegistration, setCheckingRegistration] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationData, setRegistrationData] = useState<Record<string, string> | null>(null);

  // Restore session from HttpOnly cookie on page refresh
  useEffect(() => {
    async function restoreSession() {
      try {
        const res = await fetch("/api/auth/session");
        const data = await res.json();
        if (res.ok && data.success && data.user) {
          setGoogleUser(data.user);
        }
      } catch {
        // Silent fail — user will see the sign-in gate
      } finally {
        setSessionLoading(false);
      }
    }
    restoreSession();
  }, []);

  // Check if the authenticated user has already registered
  useEffect(() => {
    if (!googleUser) {
      setIsRegistered(false);
      setRegistrationData(null);
      return;
    }

    async function checkUserRegistration() {
      setCheckingRegistration(true);
      try {
        const res = await fetch("/api/sih-register");
        if (res.ok) {
          const result = await res.json();
          if (result.success && result.registered) {
            setIsRegistered(true);
            setRegistrationData(result.data || null);
          }
        }
      } catch (err) {
        console.error("Error checking registration status:", err);
      } finally {
        setCheckingRegistration(false);
      }
    }

    checkUserRegistration();
  }, [googleUser]);

  // Section 2 — Team Details
  const [teamName, setTeamName] = useState("");
  const [track, setTrack] = useState<"Software" | "Hardware" | "">("");

  // Section 3 — Team Leader
  const [leader, setLeader] = useState<MemberData & { phone: string }>({
    ...emptyMember(), phone: "",
  });

  // Sections 4–8 — Team Members 1–5
  const [members, setMembers] = useState<MemberData[]>(Array.from({ length: 5 }, emptyMember));

  // Section 10 — Problem Statements
  const [ps1Type, setPs1Type] = useState("");
  const [ps1Id, setPs1Id] = useState("");
  const [ps2Type, setPs2Type] = useState("");
  const [ps2Id, setPs2Id] = useState("");
  const [isCustomPS, setIsCustomPS] = useState(false);
  const [customPSDetails, setCustomPSDetails] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [approach, setApproach] = useState("");

  // BOM Link (hardware teams)
  const [bomLink, setBomLink] = useState("");

  // Consent & Declaration
  const [consent, setConsent] = useState(false);
  const [declaration, setDeclaration] = useState(false);
  const [facultyMentor, setFacultyMentor] = useState("");
  const [hasFacultyMentor, setHasFacultyMentor] = useState(false);

  // Form state
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  // Toast notification state
  const [toast, setToast] = useState<{ message: string; type: "error" | "success" } | null>(null);

  // Toast automatic auto-dismiss
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Ref to skip initial state save to localStorage
  const draftMounted = useRef(false);

  // ── Draft loading ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem("sih_form_draft");
      if (saved) {
        const draft = JSON.parse(saved);
        if (draft.teamName) setTeamName(draft.teamName);
        if (draft.track) setTrack(draft.track);
        if (draft.leader) setLeader(draft.leader);
        if (draft.members && Array.isArray(draft.members)) setMembers(draft.members);
        if (draft.ps1Id) setPs1Id(draft.ps1Id);
        if (draft.ps1Type) setPs1Type(draft.ps1Type);
        if (draft.ps2Id) setPs2Id(draft.ps2Id);
        if (draft.ps2Type) setPs2Type(draft.ps2Type);
        if (draft.isCustomPS) setIsCustomPS(draft.isCustomPS);
        if (draft.customPSDetails) setCustomPSDetails(draft.customPSDetails);
        if (draft.inspiration) setInspiration(draft.inspiration);
        if (draft.approach) setApproach(draft.approach);
        if (draft.bomLink) setBomLink(draft.bomLink);
        if (draft.consent) setConsent(draft.consent);
        if (draft.declaration) setDeclaration(draft.declaration);
        if (draft.hasFacultyMentor !== undefined) setHasFacultyMentor(draft.hasFacultyMentor);
        if (draft.facultyMentor) setFacultyMentor(draft.facultyMentor);
      }
    } catch (e) {
      console.error("Error loading draft from localStorage:", e);
    }
  }, []);

  // ── Draft saving ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!draftMounted.current) {
      draftMounted.current = true;
      return;
    }
    try {
      const draft = {
        teamName,
        track,
        leader,
        members,
        ps1Id,
        ps1Type,
        ps2Id,
        ps2Type,
        isCustomPS,
        customPSDetails,
        inspiration,
        approach,
        bomLink,
        consent,
        declaration,
        hasFacultyMentor,
        facultyMentor,
      };
      localStorage.setItem("sih_form_draft", JSON.stringify(draft));
    } catch (e) {
      console.error("Error saving draft to localStorage:", e);
    }
  }, [
    teamName, track, leader, members, ps1Id, ps1Type, ps2Id, ps2Type,
    isCustomPS, customPSDetails,
    inspiration, approach, bomLink, consent, declaration, hasFacultyMentor, facultyMentor
  ]);

  // reCAPTCHA removed — not required

  // ── Derived values ─────────────────────────────────────────────────────────
  const isHardware = track === "Hardware";

  const updateMember = (idx: number, field: keyof MemberData, value: string) => {
    setMembers((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: value };
      return next;
    });
  };

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!googleUser) return;

    const showError = (msg: string) => {
      setSubmitResult({ success: false, message: msg });
      setToast({ message: msg, type: "error" });
    };

    if (!consent) { showError("You must give consent to proceed."); return; }
    if (!declaration) { showError("You must check the declaration to proceed."); return; }

    if (isHardware && !bomLink) {
      showError("Hardware teams must provide a Google Drive link to their BOM PDF.");
      return;
    }
    if (isHardware && bomLink && !bomLink.startsWith("http://") && !bomLink.startsWith("https://")) {
      showError("Please provide a valid URL (starting with http:// or https://) for the BOM link.");
      return;
    }

    // Validate leader email format
    if (!leader.email.endsWith("@student.nitw.ac.in")) {
      showError("Team Leader email must end with @student.nitw.ac.in");
      return;
    }

    // Validate members' emails and phone format
    for (let i = 0; i < members.length; i++) {
      if (!members[i].email.endsWith("@student.nitw.ac.in")) {
        showError(`Team Member ${i + 1} email must end with @student.nitw.ac.in`);
        return;
      }
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!members[i].phone || !phoneRegex.test(members[i].phone)) {
        showError(`Team Member ${i + 1} phone number must be a valid 10-digit Indian mobile number`);
        return;
      }
    }

    // Validate at least one female member
    const hasAnyFemale = leader.gender === "Female" || members.some(m => m.gender === "Female");
    if (!hasAnyFemale) {
      showError("As per SIH guidelines, your team must have at least one female member.");
      return;
    }

    if (isCustomPS && !customPSDetails.trim()) {
      showError("Please provide your problem statement and ID.");
      return;
    }

    setSubmitting(true);
    setSubmitResult(null);

    try {
      const formData = new FormData();

      // Auth token is now handled via HttpCookie, no need to append here
      // formData.append("idToken", googleUser.idToken);

      // Honeypot (real users leave this empty — bots fill it)
      // Note: this field is appended as empty intentionally
      formData.append("website", ""); // hidden field value is always blank from legit users

      // Team details
      formData.append("teamName", teamName);
      formData.append("track", track);

      // Leader
      formData.append("leaderName", leader.fullName);
      formData.append("leaderRoll", leader.rollNumber);
      formData.append("leaderYear", leader.yearAndDept);
      formData.append("leaderEmail", leader.email);
      formData.append("leaderPhone", leader.phone);
      formData.append("leaderGender", leader.gender);

      // Members
      formData.append("memberCount", "5");
      for (let i = 0; i < 5; i++) {
        const m = members[i];
        formData.append(`member${i + 1}Name`, m.fullName);
        formData.append(`member${i + 1}Roll`, m.rollNumber);
        formData.append(`member${i + 1}Year`, m.yearAndDept);
        formData.append(`member${i + 1}Email`, m.email);
        formData.append(`member${i + 1}Phone`, m.phone);
        formData.append(`member${i + 1}Gender`, m.gender);
      }

      // PS & Details
      formData.append("ps1Type", isCustomPS ? track : ps1Type);
      formData.append("ps1Id", isCustomPS ? customPSDetails : ps1Id);
      formData.append("ps2Type", isCustomPS ? "" : ps2Type);
      formData.append("ps2Id", isCustomPS ? "" : ps2Id);
      formData.append("inspiration", inspiration);
      formData.append("approach", approach);

      // BOM
      if (isHardware && bomLink) {
        formData.append("bomLink", bomLink);
      }

      // Additional
      formData.append("facultyMentor", hasFacultyMentor ? facultyMentor : "");
      formData.append("consent", "Yes");
      formData.append("declaration", "Yes");

      const res = await fetch("/api/sih-register", {
        method: "POST",
        body: formData,
        // No Content-Type header — browser sets it with boundary for multipart
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Clear draft on successful submission
        if (typeof window !== "undefined") {
          localStorage.removeItem("sih_form_draft");
        }
        setSubmitResult({
          success: true,
          message: "Congrats your registration is successful, we will communicate with you if your team is selected. Till then, ensure regular to check website for any update, and also join the whatsapp group https://chat.whatsapp.com/IZ2kBqx76QO8DyIdo1HF3U?s=cl&p=a&ilr=4 for any updates ( Only leader ). Also check the rules and regulation in the /sih page and also read the Handbook provided ( a pdf will be provided later in website ) just keep coming soon.",
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        showError(data.error || "Registration failed. Please try again.");
      }
    } catch {
      showError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER — Success screen
  // ─────────────────────────────────────────────────────────────────────────
  if (submitResult?.success) {
    return (
      <>
        <Navbar />
        <main className="flex-grow relative w-full bg-background-main text-text-main font-pixel min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-[image:var(--bg-grid-radial)] bg-[size:32px_32px] pointer-events-none opacity-20 fixed" />
          <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 flex flex-col items-center gap-8 text-center bg-surface-card border-2 border-primary/30 p-8 my-12">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <span className="material-symbols-outlined text-8xl text-primary relative">task_alt</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-pixel text-text-main uppercase tracking-wider">
              Registration Successful
            </h1>

            <div className="flex flex-col gap-6 text-left w-full border-t border-b border-white/10 py-6 my-2">
              <p className="text-xl text-white leading-relaxed">
                Congrats your registration is successful, we will communicate with you if your team is selected.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">chevron_right</span>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Till then, check the website regularly for any updates.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">group</span>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg text-white/70 leading-relaxed">
                      Join the WhatsApp group for any updates:
                    </p>
                    <a
                      href="https://chat.whatsapp.com/IZ2kBqx76QO8DyIdo1HF3U?s=cl&p=a&ilr=4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline text-lg break-all font-sans"
                    >
                      https://chat.whatsapp.com/IZ2kBqx76QO8DyIdo1HF3U?s=cl&p=a&ilr=4
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">gavel</span>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Check the rules and regulations in the{" "}
                    <Link href="/sih" className="text-secondary hover:underline">/sih page</Link>.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary mt-0.5">menu_book</span>
                  <p className="text-lg text-white/70 leading-relaxed">
                    Read the Handbook provided - <span className="text-primary uppercase tracking-widest text-base">Coming Soon</span>.
                  </p>
                </div>
              </div>
            </div>

            <Link href="/sih" className="inline-flex items-center gap-2 bg-primary text-white font-pixel text-2xl uppercase tracking-widest px-8 py-4 hover:bg-primary/90 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(215,38,255,0.6)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0">
              <span className="material-symbols-outlined">arrow_back</span>
              Back to SIH Page
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER — Main
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <>
      <Navbar />
      <main className="flex-grow relative w-full bg-background-main text-text-main font-pixel min-h-screen overflow-x-hidden">
        <div className="absolute inset-0 bg-[image:var(--bg-grid-radial)] bg-[size:32px_32px] pointer-events-none opacity-20 fixed" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none fixed" />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 md:px-6 py-12 lg:py-20">

          {/* ── PAGE HEADER ───────────────────────────────────────────────── */}
          <div className="flex flex-col items-center text-center gap-4 mb-10 pt-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 border border-primary bg-surface-card/80 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-primary opacity-75" />
                <span className="relative inline-flex rounded-sm h-3 w-3 bg-primary" />
              </span>
              <span className="text-xl font-pixel tracking-widest uppercase text-white">Team Registration</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-pixel text-text-main uppercase leading-tight">
              SIH{" "}
              <span className="text-secondary">IGnite<span className="text-primary">2026</span></span>
            </h1>
            <p className="text-white/40 font-pixel text-lg max-w-xl leading-relaxed">
              Please complete this form carefully. Fields marked{" "}
              <span className="text-primary">*</span> are required.
              For Problem Statements, visit{" "}
              <a href="https://sih.gov.in/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">sih.gov.in</a>
            </p>
            <Link href="/sih" className="inline-flex items-center gap-2 text-white/40 hover:text-primary font-pixel text-lg transition-colors">
              <span className="material-symbols-outlined text-xl">arrow_back</span>
              Back to SIH Page
            </Link>
          </div>

          {/* ── STEP 1: GOOGLE SIGN-IN ─────────────────────────────────────── */}
          {!googleUser ? (
            sessionLoading ? (
              <div className="bg-surface-card border-2 border-secondary/30 p-6 md:p-10 flex flex-col items-center gap-4 py-16">
                <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
                <p className="font-pixel text-xl text-white/50">Restoring session...</p>
              </div>
            ) : (
              <div className="bg-surface-card border-2 border-secondary/30 p-6 md:p-10">
                <GoogleSignInStep onSignIn={setGoogleUser} />
              </div>
            )
          ) : checkingRegistration ? (
            <div className="bg-surface-card border-2 border-secondary/30 p-6 md:p-10 flex flex-col items-center gap-4 py-16">
              <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
              <p className="font-pixel text-xl text-white/50">Verifying registration status...</p>
            </div>
          ) : isRegistered ? (
            <div className="bg-surface-card border-2 border-green-500/30 p-6 md:p-10 flex flex-col items-center text-center gap-6">
              <span className="material-symbols-outlined text-7xl text-green-400">verified_user</span>
              <h2 className="font-pixel text-2xl md:text-3xl text-green-400 uppercase tracking-widest">Already Registered</h2>
              <div className="font-pixel text-lg md:text-xl text-white/70 max-w-2xl flex flex-col items-center gap-4">
                <p>
                  Your email <span className="text-primary font-bold">{googleUser.email}</span> is already associated with a registered team:
                </p>
                {registrationData && (
                  <div className="border-2 border-white/10 bg-background-main/50 p-6 flex flex-col gap-3 rounded max-w-md w-full text-left">
                    <div className="flex justify-between border-b border-white/10 pb-2 gap-4">
                      <span className="text-white/40 uppercase tracking-wider text-sm">Team Name</span>
                      <span className="text-secondary font-bold text-right">{registrationData["Team Name"]}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2 gap-4">
                      <span className="text-white/40 uppercase tracking-wider text-sm">Leader Name</span>
                      <span className="text-text-main font-bold text-right">{registrationData["Leader Name"]}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-white/40 uppercase tracking-wider text-sm">Leader Roll</span>
                      <span className="text-text-main font-bold text-right">{registrationData["Leader Roll"]}</span>
                    </div>
                  </div>
                )}
                <p className="text-base text-white/40 mt-2">
                  Duplicate registrations are not permitted under SIH guidelines.
                </p>
              </div>
              <Link
                href="/sih"
                className="inline-flex items-center gap-3 bg-primary text-white font-pixel text-xl uppercase tracking-widest px-8 py-4 hover:bg-primary/90 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(215,38,255,0.6)]"
              >
                Go to SIH Dashboard
              </Link>
            </div>
          ) : (
            <div className="bg-surface-card border-2 border-red-500/30 p-6 md:p-10 flex flex-col items-center text-center gap-6">
              <span className="material-symbols-outlined text-7xl text-red-400">block</span>
              <h2 className="font-pixel text-2xl md:text-3xl text-red-400 uppercase tracking-widest">Registration Closed</h2>
              <div className="font-pixel text-lg md:text-xl text-white/70 max-w-2xl flex flex-col items-center gap-4">
                <p>
                  New registrations are no longer being accepted for SIH IGnite 2026.
                </p>
                <p className="text-white/40 text-base">
                  If you have already registered, your submission is safe. For any queries, contact ig@nitw.ac.in.
                </p>
              </div>
              <Link
                href="/sih"
                className="inline-flex items-center gap-3 bg-primary text-white font-pixel text-xl uppercase tracking-widest px-8 py-4 hover:bg-primary/90 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(215,38,255,0.6)]"
              >
                Go to SIH Dashboard
              </Link>
            </div>
          )}
        </div>

        {/* ── TOAST NOTIFICATION ─────────────────────────────────────────── */}
        {toast && (
          <div className={`fixed bottom-6 right-6 z-50 p-4 border-2 font-pixel text-lg flex items-start gap-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] max-w-sm ${toast.type === "error"
              ? "bg-[#1f0b0d] border-red-500 text-red-300"
              : "bg-[#0b1f0c] border-green-500 text-green-300"
            }`}>
            <span className="material-symbols-outlined text-2xl shrink-0 mt-0.5">
              {toast.type === "error" ? "error" : "check_circle"}
            </span>
            <div className="flex-grow flex flex-col gap-1">
              <p className="font-bold uppercase tracking-wider">
                {toast.type === "error" ? "System Error" : "Success"}
              </p>
              <p className="text-white/80 leading-snug">{toast.message}</p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="text-white/40 hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
