"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Certificates() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");
  const [errorMsg, setErrorMsg] = useState("");
  const [certData, setCertData] = useState<{ name: string; link: string } | null>(null);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    setCertData(null);

    // 1. Validate Email Domain
    if (!email.endsWith("@student.nitw.ac.in")) {
      setStatus("ERROR");
      setErrorMsg("Access Denied: Only @student.nitw.ac.in emails are authorized.");
      return;
    }

    setStatus("LOADING");

    try {
      // 2. Call API
      const res = await fetch("/api/certificates", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" }
      });

      const result = await res.json();

      if (result.success) {
        setStatus("SUCCESS");
        setCertData(result.data);
      } else {
        setStatus("ERROR");
        setErrorMsg(result.error || "No certificate found in the archives.");
      }
    } catch (error) {
      setStatus("ERROR");
      setErrorMsg("System Malfunction. Please try again later.");
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-background-main text-text-main font-pixel flex items-center justify-center relative overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-2xl px-4">
            
            {/* Header */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary mb-4 shadow-[0_0_10px_rgba(215,38,255,0.3)]">
                    <span className="material-symbols-outlined text-secondary text-lg">verified</span>
                    <span className="text-sm font-bold uppercase tracking-widest text-secondary">Secure Portal</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-arial font-bold uppercase mb-4 text-white drop-shadow-[0_4px_0_rgba(255,106,0,0.5)]">
                    Certificate <span className="text-primary">Vault</span>
                </h1>
                <p className="text-gray-400 font-display text-lg">
                    Enter your official college ID to decrypt and retrieve your credentials.
                </p>
            </div>

            {/* Search Box */}
            <div className="bg-surface-card border-2 border-white/10 p-8 pixel-corners shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]">
                <form onSubmit={handleSearch} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-bold tracking-widest uppercase pl-1 text-primary">Student Email ID</label>
                        <div className="relative">
                            <input 
                                type="email" 
                                required 
                                placeholder="ID@STUDENT.NITW.AC.IN" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-background-main border-2 border-gray-700 py-4 px-6 text-white text-xl font-mono tracking-wider focus:border-secondary focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"
                            />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary opacity-50"></div>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={status === "LOADING"}
                        className={`w-full py-4 text-xl font-bold uppercase tracking-widest border-2 transition-all flex items-center justify-center gap-3 pixel-corners
                        ${status === "LOADING" 
                            ? "bg-gray-800 border-gray-600 text-gray-500 cursor-wait" 
                            : "bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary hover:shadow-[0_0_20px_#D726FF]"
                        }`}
                    >
                        {status === "LOADING" ? "SEARCHING ARCHIVES..." : "RETRIEVE CERTIFICATE"}
                    </button>
                </form>

                {/* ERROR MESSAGE */}
                {status === "ERROR" && (
                    <div className="mt-6 p-4 bg-red-500/10 border-l-4 border-red-500 text-red-400 font-mono animate-fade-in flex items-start gap-3">
                        <span className="material-symbols-outlined">warning</span>
                        <p>{errorMsg}</p>
                    </div>
                )}

                {/* SUCCESS / DOWNLOAD CARD */}
                {status === "SUCCESS" && certData && (
                    <div className="mt-8 p-6 bg-green-500/10 border-2 border-green-500 text-center animate-fade-in pixel-corners relative overflow-hidden">
                        <div className="absolute inset-0 bg-scanlines opacity-10"></div>
                        
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-5xl text-green-500 mb-2">workspace_premium</span>
                            <h3 className="text-2xl font-bold text-white mb-1 uppercase">{certData.name}</h3>
                            <p className="text-green-400 font-mono text-sm mb-6">IDENTITY VERIFIED // DOCUMENT READY</p>
                            
                            <a 
                                href={certData.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 text-black font-bold text-lg uppercase hover:bg-white transition-colors pixel-corners"
                            >
                                <span className="material-symbols-outlined">download</span>
                                Download PDF
                            </a>
                        </div>
                    </div>
                )}
            </div>

        </div>
      </main>
      <Footer />
    </>
  );
}