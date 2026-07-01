"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("LOADING");

    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        body: JSON.stringify({ action: "newsletter", email: email }),
        headers: { "Content-Type": "application/json" }
      });

      if (res.ok) {
        setStatus("SUCCESS");
        setEmail("");
        setTimeout(() => setStatus("IDLE"), 3000);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  }

  return (
    <footer className="w-full border-t border-white/10 bg-cyber-black pt-16 pb-8 px-6 relative z-10 text-warm-white font-pixel overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      {/* ================= TOP SECTION: NAVIGATION & FORM ================= */}
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 mb-16">
        
        {/* 1. Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
             <Image 
                src="/logo.png" 
                alt="Innovation Garage Logo" 
                width={48} 
                height={48} 
                className="object-contain"
             />
             <h3 className="text-2xl font-bold uppercase text-white tracking-widest">Innovation<br/>Garage</h3>
          </div>
          <p className="text-gray-500 text-sm font-display leading-relaxed">
            Building the future, one pixel at a time. Join the community of radical thinkers and doers.
          </p>
        </div>

        {/* 2. Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="text-neon-magenta text-xl uppercase tracking-widest border-b border-white/10 pb-2 mb-2 w-fit">Platform</h4>
          {["Home", "Events", "Ideas","Gallery","Teams", "Certificates"].map((item) => (
            item === "Certificates" ? (
              <a
                key={item}
                href="https://certificates.ignitw.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-orange uppercase hover:translate-x-2 transition-transform duration-200 w-fit"
              >
                {">"} {item}
              </a>
            ) : (
              <Link
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-400 hover:text-neon-orange uppercase hover:translate-x-2 transition-transform duration-200 w-fit"
              >
                {">"} {item}
              </Link>
            )
          ))}
        </div>

        {/* 3. Connect */}
        <div className="flex flex-col gap-4">
          <h4 className="text-neon-magenta text-xl uppercase tracking-widest border-b border-white/10 pb-2 mb-2 w-fit">Connect</h4>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/ig-nitw/" aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center border border-white/20 bg-surface-card text-gray-400 hov[...]">
                <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.2[...]"></path></svg>
            </a>
            <a href="https://www.instagram.com/ig_nitw/" aria-label="Instagram" className="w-12 h-12 flex items-center justify-center border border-white/20 bg-surface-card text-gray-400 hover:bor[...]">
                <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.[..."></path></svg>
            </a>
            <a href="https://www.facebook.com/TheInnovationGarage/" aria-label="Facebook" className="w-12 h-12 flex items-center justify-center border border-white/20 bg-surface-card text-gray-400[...]">
                <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 [...]"></path></svg>
            </a>
            <a href="https://chat.whatsapp.com/EMAVIAzhTjtI5J6FsQyx6I" aria-label="WhatsApp" className="w-12 h-12 flex items-center justify-center border border-white/20 bg-surface-card text-gray-[...]">
                <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67[..."></path></svg>
            </a>
          </div>
        </div>

        {/* 4. Newsletter */}
        <div className="flex flex-col gap-4">
          <h4 className="text-neon-magenta text-xl uppercase tracking-widest border-b border-white/10 pb-2 mb-2 w-fit">Updates</h4>
          <p className="text-gray-500 text-sm font-display">
            Join the inner circle. Get notified about hackathons.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input 
                type="email" 
                placeholder="YOUR@EMAIL.COM" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "LOADING" || status === "SUCCESS"}
                className="bg-surface-card border-2 border-white/20 px-4 py-3 text-white font-pixel placeholder:text-gray-600 focus:border-neon-orange outline-none transition-colors pixel-corners[...]"
            />
            <button 
                type="submit" 
                disabled={status === "LOADING" || status === "SUCCESS"}
                className={`px-4 py-3 font-bold font-pixel uppercase tracking-wider pixel-corners border-2 transition-all
                ${status === "SUCCESS" 
                    ? "bg-green-500 border-green-500 text-black cursor-default" 
                    : "bg-transparent border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-black"
                }`}
            >
                {status === "LOADING" ? "TRANSMITTING..." : status === "SUCCESS" ? "REGISTERED!" : status === "ERROR" ? "RETRY?" : "SUBSCRIBE"}
            </button>
          </form>
        </div>
      </div>

      {/* ================= BOTTOM SECTION: CREDITS & COPYRIGHT ================= */}
      <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col items-center gap-6 relative z-10">
        
        {/* THE HIGHLIGHTED CREDITS */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 font-pixel uppercase tracking-widest text-sm md:text-base text-center">
            <span className="text-gray-500 text-xs md:text-sm font-mono tracking-normal">
                Made with ❤️ by
            </span>
            
            <div className="flex items-center gap-6">
                {/* NAME 1 */}
                <a 
                    href="https://www.linkedin.com/in/vedant-agrawal-0ba2a7325/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative text-white transition-all duration-300 hover:text-neon-orange"
                >
                    <span className="border-b-2 border-white/20 group-hover:border-neon-orange pb-1">
                        Vedant Amit Agrawal
                    </span>
                    <span className="absolute -top-1 -right-2 w-2 h-2 bg-neon-orange rounded-full opacity-0 group-hover:opacity-100 animate-ping"></span>
                </a>

                <span className="text-gray-400 texts">&</span>

                {/* NAME 2 */}
                <a 
                    href="https://www.linkedin.com/in/aayush-singh-1413ab283/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative text-white transition-all duration-300 hover:text-neon-magenta"
                >
                    <span className="border-b-2 border-white/20 group-hover:border-neon-magenta pb-1">
                        Aayush Singh
                    </span>
                    <span className="absolute -top-1 -right-2 w-2 h-2 bg-neon-magenta rounded-full opacity-0 group-hover:opacity-100 animate-ping"></span>
                </a>
            </div>
        </div>

        {/* COPYRIGHT AT THE VERY BOTTOM */}
        <p className="text-gray-600 uppercase tracking-widest text-[10px] font-mono mt-4">
           © 2026. Innovation Garage. Systems Online.
        </p>

      </div>
    </footer>
  );
}
