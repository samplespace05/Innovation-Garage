"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Reusable components
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

export default function SIHFinalSubmissionPage() {
  const [loading, setLoading] = useState(true);
  const [accessDenied, setAccessDenied] = useState(false);

  const [teamName, setTeamName] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");
  const [track, setTrack] = useState<"Software" | "Hardware" | "">("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [pptxLink, setPptxLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [liveDemoLink, setLiveDemoLink] = useState("");
  const [pitch, setPitch] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const isHardware = track === "Hardware";
  const isSoftware = track === "Software";

  useEffect(() => {
    async function checkAccess() {
      try {
        const res = await fetch("/api/sih-register");
        if (res.ok) {
          const result = await res.json();
          if (result.success && result.authenticated && result.data?.["Shortlisted"] === "TRUE") {
            setTeamName(result.data["Team Name"] || "");
            setLeaderEmail(result.data["Leader Email"] || "");
            const ps1Type = result.data["PS1 Type"]?.toString().toLowerCase();
            if (ps1Type?.includes("software")) setTrack("Software");
            else if (ps1Type?.includes("hardware")) setTrack("Hardware");
          } else {
            setAccessDenied(true);
          }
        } else {
          setAccessDenied(true);
        }
      } catch (err) {
        console.error("Error checking access:", err);
        setAccessDenied(true);
      } finally {
        setLoading(false);
      }
    }
    checkAccess();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitResult(null);

    // Validations
    if (!teamName || !leaderEmail || !track || !youtubeLink || !pptxLink || !pitch) {
      setSubmitResult({ success: false, message: "Please fill in all required fields." });
      return;
    }

    if (isSoftware && !githubLink) {
      setSubmitResult({ success: false, message: "Github Link is compulsory for Software teams." });
      return;
    }
    
    // Pitch word count check
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
        body: JSON.stringify({
          teamName,
          leaderEmail,
          track,
          youtubeLink,
          pptxLink,
          githubLink,
          liveDemoLink,
          pitch
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitResult({ success: true, message: "Final submission successful!" });
      } else {
        setSubmitResult({ success: false, message: data.error || "Submission failed." });
      }
    } catch (err) {
      setSubmitResult({ success: false, message: "Network error occurred." });
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background-main flex flex-col font-sans text-text-main items-center justify-center">
        <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        <span className="font-pixel text-lg uppercase tracking-widest text-white/50 mt-4">Verifying Access...</span>
      </div>
    );
  }

  if (accessDenied) {
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

  if (submitResult?.success) {
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

  return (
    <div className="min-h-screen bg-background-main flex flex-col font-sans text-text-main selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main className="flex-1 max-w-4xl w-full mx-auto p-4 md:p-8 pt-32">
        <div className="mb-12">
          <h1 className="font-pixel text-5xl md:text-6xl text-text-main uppercase tracking-widest mb-4">
            SIH Final <span className="text-primary">Submission</span>
          </h1>
          <p className="font-pixel text-xl text-white/60 leading-relaxed max-w-3xl">
            Selected teams must submit their final project details including demo video, presentation, and GitHub repository.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="bg-surface-card border-2 border-white/10 p-6 flex flex-col gap-6">
            <SectionHeader number="1" title="Team Details" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="opacity-70 pointer-events-none">
                <FormInput id="teamName" label="Team Name" required value={teamName} onChange={setTeamName} placeholder="Your registered team name" />
              </div>
              <div className="opacity-70 pointer-events-none">
                <FormInput id="leaderEmail" label="Leader Email" type="email" required value={leaderEmail} onChange={setLeaderEmail} placeholder="Team leader's email" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-pixel text-xl text-text-main uppercase tracking-wider">
                Track<span className="text-primary ml-1">*</span>
              </span>
              <div className="flex flex-wrap gap-4 mt-1">
                {["Software", "Hardware"].map((t) => (
                  <label key={t} className={`flex items-center gap-2 cursor-pointer px-4 py-2 border-2 font-pixel text-xl transition-colors ${track === t ? "border-primary bg-primary/10 text-text-main" : "border-white/20 text-white/50 hover:border-white/40"}`}>
                    <input type="radio" name="track" value={t} checked={track === t} onChange={() => setTrack(t as "Software" | "Hardware")} className="sr-only" required />
                    <span className={`w-3 h-3 border-2 inline-block shrink-0 ${track === t ? "bg-primary border-primary" : "border-white/40"}`} />
                    {t}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-surface-card border-2 border-white/10 p-6 flex flex-col gap-6">
            <SectionHeader number="2" title="Project Links" />
            
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
              id="pptxLink" 
              label="PPTX Link" 
              required 
              value={pptxLink} 
              onChange={setPptxLink} 
              placeholder="Google Drive Link" 
              hint="Uploaded in Drive and accessible to all."
            />

            <FormInput 
              id="githubLink" 
              label="GitHub Link" 
              required={isSoftware} 
              value={githubLink} 
              onChange={setGithubLink} 
              placeholder="https://github.com/..." 
              hint="Compulsory for Software teams, optional for Hardware teams."
            />

            <FormInput 
              id="liveDemoLink" 
              label="Live Demo Link" 
              required={false}
              value={liveDemoLink} 
              onChange={setLiveDemoLink} 
              placeholder="https://your-demo-url.com" 
              hint="Optional. Provide a link to your live working demo if deployed."
            />
          </div>

          <div className="bg-surface-card border-2 border-white/10 p-6 flex flex-col gap-6">
            <SectionHeader number="3" title="Product Pitch" />
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
