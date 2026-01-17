import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Archive() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cyber-black text-warm-white flex items-center justify-center relative overflow-hidden font-pixel">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
        
        {/* Central Glitch Container */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
            {/* <div className="mb-8 inline-block  p-4 border-4 border-dashed border-gray-700 rounded-full animate-spin-slow">
                <span className="material-symbols-outlined text-6xl text-gray-700">history</span>
            </div> */}
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-800">
                ARCHIVES<br/>OFFLINE
            </h1>
            
            <div className="bg-surface-card border-2 border-neon-orange p-8 pixel-corners shadow-[0_0_30px_-10px_#FF6A00] mx-auto">
                <p className="text-neon-orange text-xl md:text-2xl uppercase tracking-widest mb-4 animate-pulse">
                    [System Initializing Legacy Drives...]
                </p>
                <div className="w-full h-4 bg-gray-900 border border-gray-700 mb-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-neon-orange w-1/3 animate-marquee"></div>
                </div>
                <p className="text-gray-400 font-display text-lg">
                    The older event logs are currently being digitized and encrypted for preservation. 
                    Please check back later for full access to the 2016-2022 records.
                </p>
            </div>

            <div className="mt-12">
                <Link href="/events" className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Return to Active Timeline
                </Link>
            </div>
        </div>

      </main>
      <Footer />
    </>
  );
}