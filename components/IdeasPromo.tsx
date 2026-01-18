"use client";
import Link from "next/link";

export default function IdeasPromo() {
  return (
    <section className="relative w-full py-24 px-6 bg-cyber-black overflow-hidden border-t border-b border-neon-orange/30">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-neon-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: TYPOGRAPHY & BRANDING */}
        <div className="flex flex-col gap-6">
            <span className="text-primary font-pixel text-xl uppercase tracking-widest mb-2 block">02 // Submission Deck</span>
            {/* Glitchy Label */}
            <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-neon-magenta animate-pulse shadow-[0_0_10px_#D726FF]"></span>
                <span className="font-pixel text-neon-magenta text-xl tracking-widest uppercase">
                    Status: <span className="text-white">Accepting Submissions</span>
                </span>
            </div>

            {/* Massive Title */}
            <h2 className="text-7xl md:text-9xl font-pixel font-bold text-white leading-none">
                IG_<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-red-500 drop-shadow-[4px_4px_0px_rgba(255,106,0,0.5)]">
                    TANK
                </span>
            </h2>

            <p className="text-gray-400 font-display text-xl max-w-lg leading-relaxed border-l-4 border-white/20 pl-6">
                Have a radical idea? Don't let it die in your notes app. 
                Enter the <strong>IG_TANK</strong>. Pitch your concept, get vetted by industry leaders, and secure the resources to build it.
            </p>

            {/* Stats Row */}
            <div className="flex gap-8 mt-4 font-pixel text-lg text-gray-500">
                <div>
                    <span className="block text-2xl text-white">42</span>
                    <span>Ideas Pitched</span>
                </div>
                <div>
                    <span className="block text-2xl text-white">$10K+</span>
                    <span>Grant Pool</span>
                </div>
                <div>
                    <span className="block text-2xl text-white">05</span>
                    <span>Incubated</span>
                </div>
            </div>
        </div>

        {/* RIGHT SIDE: INTERACTIVE CARD */}
        <div className="relative group">
            {/* Decorative Border Layer */}
            <div className="absolute inset-0 border-2 border-dashed border-gray-700 transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
            
            {/* Main Card */}
            <div className="relative bg-surface-card border-2 border-neon-orange p-10 flex flex-col gap-8 pixel-corners shadow-[0_0_30px_-10px_rgba(255,106,0,0.4)]">
                
                {/* Header Icon */}
                <div className="flex justify-between items-start">
                    <span className="material-symbols-outlined text-6xl text-neon-orange">rocket_launch</span>
                    {/* <span className="font-pixel text-gray-500 text-sm">SECURE_UPLINK_V4</span> */}
                </div>

                <div className="space-y-2">
                    <h3 className="text-3xl font-pixel text-white uppercase">Ready to Launch?</h3>
                    <p className="font-display text-gray-400">
                        Submissions for the Spring Cohort are open for a limited time.
                    </p>
                </div>

                {/* The Big Button */}
                <Link href="/ideas" className="group/btn relative block w-full">
                    <div className="absolute inset-0 bg-neon-orange translate-y-0 translate-x-0 group-hover/btn:translate-y-2 group-hover/btn:translate-x-2 transition-transform"></div>
                    <div className="relative bg-black border-2 border-white p-4 text-center hover:text-white transition-colors">
                        <span className="font-pixel text-2xl uppercase tracking-widest font-bold flex items-center justify-center gap-3">
                            Submit Pitch <span className="material-symbols-outlined">arrow_forward</span>
                        </span>
                    </div>
                </Link>

            </div>
        </div>

      </div>
    </section>
  );
}