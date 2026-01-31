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
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-400 hover:text-neon-orange uppercase hover:translate-x-2 transition-transform duration-200 w-fit"
            >
              {">"} {item}
            </Link>
          ))}
        </div>

        {/* 3. Connect */}
        <div className="flex flex-col gap-4">
          <h4 className="text-neon-magenta text-xl uppercase tracking-widest border-b border-white/10 pb-2 mb-2 w-fit">Connect</h4>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/ig-nitw/" aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center border border-white/20 bg-surface-card text-gray-400 hover:border-[#0077B5] hover:text-[#0077B5] hover:shadow-[0_0_10px_#0077B5] transition-all group pixel-corners">
                <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://www.instagram.com/ig_nitw/" aria-label="Instagram" className="w-12 h-12 flex items-center justify-center border border-white/20 bg-surface-card text-gray-400 hover:border-[#E1306C] hover:text-[#E1306C] hover:shadow-[0_0_10px_#E1306C] transition-all group pixel-corners">
                <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.facebook.com/TheInnovationGarage/" aria-label="Facebook" className="w-12 h-12 flex items-center justify-center border border-white/20 bg-surface-card text-gray-400 hover:border-[#1877F2] hover:text-[#1877F2] hover:shadow-[0_0_10px_#1877F2] transition-all group pixel-corners">
                <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>  
            </a>
            <a href="https://chat.whatsapp.com/EMAVIAzhTjtI5J6FsQyx6I" aria-label="WhatsApp" className="w-12 h-12 flex items-center justify-center border border-white/20 bg-surface-card text-gray-400 hover:border-[#25D366] hover:text-[#25D366] hover:shadow-[0_0_10px_#25D366] transition-all group pixel-corners">
                <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
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
                className="bg-surface-card border-2 border-white/20 px-4 py-3 text-white font-pixel placeholder:text-gray-600 focus:border-neon-orange outline-none transition-colors pixel-corners disabled:opacity-50"
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