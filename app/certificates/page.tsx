// "use client";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { useState } from "react";

// export default function Certificates() {
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");
//   const [errorMsg, setErrorMsg] = useState("");
//   const [certData, setCertData] = useState<{ name: string; link: string } | null>(null);

//   async function handleSearch(e: React.FormEvent) {
//     e.preventDefault();
//     setErrorMsg("");
//     setCertData(null);

//     // 1. Validate Email Domain
//     if (!email.endsWith("@student.nitw.ac.in")) {
//       setStatus("ERROR");
//       setErrorMsg("Access Denied: Only @student.nitw.ac.in emails are authorized.");
//       return;
//     }

//     setStatus("LOADING");

//     try {
//       // 2. Call API
//       const res = await fetch("/api/certificates", {
//         method: "POST",
//         body: JSON.stringify({ email }),
//         headers: { "Content-Type": "application/json" }
//       });

//       const result = await res.json();

//       if (result.success) {
//         setStatus("SUCCESS");
//         setCertData(result.data);
//       } else {
//         setStatus("ERROR");
//         setErrorMsg(result.error || "No certificate found in the archives.");
//       }
//     } catch (error) {
//       setStatus("ERROR");
//       setErrorMsg("System Malfunction. Please try again later.");
//     }
//   }

//   return (
//     <>
//       <Navbar />
//       <main className="min-h-screen pt-20 bg-background-main text-text-main font-pixel flex items-center justify-center relative overflow-hidden">
        
//         {/* Background Effects */}
//         <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
//         <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

//         <div className="relative z-10 w-full max-w-2xl px-4">
            
//             {/* Header */}
//             <div className="text-center mb-10">
//                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 border border-secondary mb-4 shadow-[0_0_10px_rgba(215,38,255,0.3)]">
//                     <span className="material-symbols-outlined text-secondary text-lg">verified</span>
//                     <span className="text-sm font-bold uppercase tracking-widest text-secondary">Secure Portal</span>
//                 </div>
//                 <h1 className="text-4xl md:text-6xl font-arial font-bold uppercase mb-4 text-white drop-shadow-[0_4px_0_rgba(255,106,0,0.5)]">
//                     Certificate <span className="text-primary">Vault</span>
//                 </h1>
//                 <p className="text-gray-400 font-display text-lg">
//                     Enter your official college ID to decrypt and retrieve your credentials.
//                 </p>
//             </div>

//             {/* Search Box */}
//             <div className="bg-surface-card border-2 border-white/10 p-8 pixel-corners shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]">
//                 <form onSubmit={handleSearch} className="space-y-6">
//                     <div className="space-y-2">
//                         <label className="block text-sm font-bold tracking-widest uppercase pl-1 text-primary">Student Email ID</label>
//                         <div className="relative">
//                             <input 
//                                 type="email" 
//                                 required 
//                                 placeholder="ID@STUDENT.NITW.AC.IN" 
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full bg-background-main border-2 border-gray-700 py-4 px-6 text-white text-xl font-mono tracking-wider focus:border-secondary focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"
//                             />
//                             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary opacity-50"></div>
//                         </div>
//                     </div>

//                     <button 
//                         type="submit" 
//                         disabled={status === "LOADING"}
//                         className={`w-full py-4 text-xl font-bold uppercase tracking-widest border-2 transition-all flex items-center justify-center gap-3 pixel-corners
//                         ${status === "LOADING" 
//                             ? "bg-gray-800 border-gray-600 text-gray-500 cursor-wait" 
//                             : "bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary hover:shadow-[0_0_20px_#D726FF]"
//                         }`}
//                     >
//                         {status === "LOADING" ? "SEARCHING ARCHIVES..." : "RETRIEVE CERTIFICATE"}
//                     </button>
//                 </form>

//                 {/* ERROR MESSAGE */}
//                 {status === "ERROR" && (
//                     <div className="mt-6 p-4 bg-red-500/10 border-l-4 border-red-500 text-red-400 font-mono animate-fade-in flex items-start gap-3">
//                         <span className="material-symbols-outlined">warning</span>
//                         <p>{errorMsg}</p>
//                     </div>
//                 )}

//                 {/* SUCCESS / DOWNLOAD CARD */}
//                 {status === "SUCCESS" && certData && (
//                     <div className="mt-8 p-6 bg-green-500/10 border-2 border-green-500 text-center animate-fade-in pixel-corners relative overflow-hidden">
//                         <div className="absolute inset-0 bg-scanlines opacity-10"></div>
                        
//                         <div className="relative z-10">
//                             <span className="material-symbols-outlined text-5xl text-green-500 mb-2">workspace_premium</span>
//                             <h3 className="text-2xl font-bold text-white mb-1 uppercase">{certData.name}</h3>
//                             <p className="text-green-400 font-mono text-sm mb-6">IDENTITY VERIFIED // DOCUMENT READY</p>
                            
//                             <a 
//                                 href={certData.link} 
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                                 className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 text-black font-bold text-lg uppercase hover:bg-white transition-colors pixel-corners"
//                             >
//                                 <span className="material-symbols-outlined">download</span>
//                                 Download PDF
//                             </a>
//                         </div>
//                     </div>
//                 )}
//             </div>

//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }


    
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function CertificatePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [certificateData, setCertificateData] = useState<any>(null);
  const [error, setError] = useState("");
  
  // --- UNLOCK STATE ---
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // --- FEEDBACK FORM STATE ---
  const [accessCode, setAccessCode] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(5);
  const [unlocking, setUnlocking] = useState(false);

  // 1. SEARCH FOR CERTIFICATE
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setCertificateData(null);
    setIsUnlocked(false); 

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        body: JSON.stringify({
          action: "getCertificate", 
          studentId: searchQuery // This is now the Email
        }),
      });
      const data = await res.json();
      
      if (data.success && data.data) {
        setCertificateData(data.data);
      } else {
        setError("No certificate found for this Email.");
      }
    } catch (err) {
      setError("Connection error. Please try again  .");
    } finally {
      setLoading(false);
    }
  };

 // 2. UNLOCK & SUBMIT FEEDBACK
  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setUnlocking(true);

    // [DEBUG 1] Check what we are trying to send
    console.log("🚀 FRONTEND: Starting Unlock Request");
    const payload = {
        action: "unlockCertificate",
        studentId: searchQuery, 
        accessCode: accessCode,
        feedback: feedback,
        rating: rating
    };
    console.log("📦 FRONTEND Payload:", payload);

    try {
        const res = await fetch("/api/admin", {
            method: "POST",
            body: JSON.stringify(payload)
        });

        // [DEBUG 2] Check the raw response status
        console.log("📡 FRONTEND: Received Response Status:", res.status);

        const result = await res.json();
        
        // [DEBUG 3] Check the actual data from the API
        console.log("✅ FRONTEND: JSON Result:", result);

        if (result.success) {
            setIsUnlocked(true);
            setShowModal(false);
            alert("Identity Verified. Access Granted.");
        } else {
            console.error("❌ FRONTEND Error:", result.error);
            alert("ACCESS DENIED: " + (result.error || "Incorrect Code"));
        }
    } catch(e) {
        console.error("🔥 FRONTEND Exception:", e);
        alert("Server Error. Check Console.");
    } finally {
        setUnlocking(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-24 pb-12 px-4 relative overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-xl mx-auto relative z-10">
          <h1 className="text-4xl font-pixel text-center mb-8 text-neon-orange drop-shadow-[0_0_10px_rgba(255,100,0,0.5)]">
            CERTIFICATE_VAULT
          </h1>

          {/* SEARCH FORM */}
          <form onSubmit={handleSearch} className="flex gap-2 mb-12">
            <input
              type="email" // Changed type to email
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ENTER REGISTERED EMAIL" // Updated Placeholder
              className="flex-1 bg-gray-900 border border-cyan-500/50 p-4 text-white font-mono focus:border-cyan-400 outline-none placeholder-gray-600"
              required
            />
            <button 
              disabled={loading}
              className="bg-cyan-600 text-black px-6 py-4 font-bold font-pixel uppercase hover:bg-white transition-colors disabled:opacity-50"
            >
              {loading ? "SCANNING..." : "SEARCH"}
            </button>
          </form>

          {error && <div className="text-red-500 font-mono text-center mb-8 bg-red-900/10 p-4 border border-red-900">{error}</div>}

          {/* CERTIFICATE PREVIEW CARD */}
          {certificateData && (
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#111] border border-gray-700 p-6 relative pixel-corners"
            >
                {/* Header */}
                <div className="flex justify-between items-start mb-6 border-b border-gray-800 pb-4">
                    <div>
                        <h2 className="text-xl font-bold text-white">{certificateData.Name}</h2>
                        <p className="text-sm text-gray-500 font-mono">{certificateData.Event}</p>
                    </div>
                    <div className="bg-green-900/20 text-green-400 px-2 py-1 text-xs font-mono border border-green-900">
                        FOUND
                    </div>
                </div>

                {/* The "Blurred" or Locked Content Area */}
                <div className="aspect-video bg-gray-900 flex flex-col items-center justify-center relative overflow-hidden mb-6 group">
                     {!isUnlocked ? (
                         <div className="text-center z-10">
                             <span className="material-symbols-outlined text-6xl text-gray-600 mb-2">lock</span>
                             <p className="text-gray-500 font-mono text-sm">ENCRYPTED FILE</p>
                         </div>
                     ) : (
                        <div className="text-center z-10">
                             <span className="material-symbols-outlined text-6xl text-cyan-500 mb-2">verified_user</span>
                             <p className="text-cyan-500 font-mono text-sm">ACCESS GRANTED</p>
                        </div>
                     )}
                     <div className="absolute inset-0 opacity-10 bg-[url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')] bg-cover"></div>
                </div>

                {/* ACTION BUTTONS */}
                {!isUnlocked ? (
                    <button 
                        onClick={() => setShowModal(true)}
                        className="w-full bg-neon-orange text-black font-bold py-4 font-pixel uppercase hover:bg-white transition-colors animate-pulse"
                    >
                        UNLOCK CERTIFICATE
                    </button>
                ) : (
                    <a 
                        href={certificateData.DownloadLink} 
                        target="_blank"
                        className="block w-full text-center bg-cyan-600 text-black font-bold py-4 font-pixel uppercase hover:bg-cyan-400 transition-colors"
                    >
                        DOWNLOAD PDF_
                    </a>
                )}
            </motion.div>
          )}
        </div>

        {/* --- FEEDBACK MODAL --- */}
        <AnimatePresence>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-gray-900 border-2 border-neon-orange p-6 max-w-md w-full relative pixel-corners shadow-[0_0_30px_rgba(255,100,0,0.3)]"
                    >
                        <button onClick={()=>setShowModal(false)} className="absolute top-2 right-2 text-gray-500 hover:text-white">✕</button>
                        
                        <h3 className="text-xl font-pixel text-neon-orange mb-1">SECURITY CHECK</h3>
                        <p className="text-xs text-gray-400 mb-6 font-mono">Enter the secure code sent to: <span className="text-white">{searchQuery}</span></p>

                        <form onSubmit={handleUnlock} className="space-y-4">
                            {/* Access Code */}
                            <div>
                                <label className="block text-xs uppercase text-gray-500 mb-1">Access Code</label>
                                <input 
                                    required 
                                    type="text" 
                                    value={accessCode}
                                    onChange={e=>setAccessCode(e.target.value)}
                                    className="w-full bg-black border border-gray-700 p-3 text-white focus:border-neon-orange outline-none font-mono tracking-widest text-center uppercase"
                                    placeholder="XXXX-XXXX"
                                />
                            </div>

                            {/* Rating */}
                            <div>
                                <label className="block text-xs uppercase text-gray-500 mb-1">Session Rating</label>
                                <div className="flex justify-between bg-black p-2 border border-gray-700">
                                    {[1,2,3,4,5].map(num => (
                                        <button 
                                            key={num}
                                            type="button"
                                            onClick={() => setRating(num)}
                                            className={`w-8 h-8 font-bold ${rating >= num ? 'bg-neon-orange text-black' : 'bg-gray-800 text-gray-600'}`}
                                        >
                                            {num}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Feedback */}
                            <div>
                                <label className="block text-xs uppercase text-gray-500 mb-1">Feedback</label>
                                <textarea 
                                    required
                                    rows={3}
                                    value={feedback}
                                    onChange={e=>setFeedback(e.target.value)}
                                    className="w-full bg-black border border-gray-700 p-3 text-white focus:border-neon-orange outline-none font-mono text-sm"
                                    placeholder="Your thoughts..."
                                />
                            </div>

                            <button 
                                disabled={unlocking}
                                className="w-full bg-white text-black font-bold py-3 font-pixel uppercase hover:bg-gray-200 transition-colors disabled:opacity-50 mt-2"
                            >
                                {unlocking ? "VERIFYING..." : "SUBMIT & UNLOCK"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>

      </main>
      <Footer />
    </>
  );
}