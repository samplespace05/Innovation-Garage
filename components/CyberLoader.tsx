"use client";

export default function CyberLoader() {
  return (
    <div className="fixed inset-0 z-[999] bg-cyber-black flex flex-col items-center justify-center">
      {/* 1. The Spinning Neon Ring */}
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-neon-orange border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-t-transparent border-r-neon-magenta border-b-transparent border-l-transparent rounded-full animate-spin-reverse"></div>
      </div>

      {/* 2. The Glitch Text */}
      <h2 className="text-2xl font-pixel text-white tracking-widest animate-pulse">
        LOADING_<span className="text-neon-orange">ASSETS</span>
      </h2>
      
      {/* 3. The Progress Bar */}
      <div className="w-64 h-1 bg-gray-800 mt-4 overflow-hidden">
        <div className="h-full bg-neon-orange animate-progress-bar"></div>
      </div>
      
      <p className="mt-2 text-xs font-mono text-gray-500">ESTABLISHING SECURE CONNECTION...</p>
    </div>
  );
}