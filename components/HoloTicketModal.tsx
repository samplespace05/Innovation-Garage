"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toPng } from "html-to-image";

// ================= GAMIFICATION DATA =================
const RARITIES = [
  { tier: "COMMON", color: "text-gray-400", border: "border-gray-600", bg: "bg-gray-900", chance: 0.5 },
  { tier: "RARE", color: "text-blue-400", border: "border-blue-500", bg: "bg-blue-900/40", chance: 0.3 },
  { tier: "EPIC", color: "text-purple-400", border: "border-purple-500", bg: "bg-purple-900/40", chance: 0.15 },
  { tier: "LEGENDARY", color: "text-yellow-400", border: "border-yellow-500", bg: "bg-yellow-900/40", chance: 0.05 },
];

const ARCHETYPES = [
  "BUG HUNTER", "STACK OVERFLOW WARLORD", "PIXEL MAGE", 
  "BACKEND BEAST", "AI WHISPERER", "GIT GUARDIAN"
];

// Helper to pick rarity based on weight
const rollRarity = () => {
  const r = Math.random();
  let accumulated = 0;
  for (let tier of RARITIES) {
    accumulated += tier.chance;
    if (r <= accumulated) return tier;
  }
  return RARITIES[0];
};

export default function HoloTicketModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"IDLE" | "SUMMONING" | "REVEALED">("IDLE");
  
  // Card Data State
  const [cardData, setCardData] = useState<any>(null);
  
  // Refs
  const cardRef = useRef<HTMLDivElement>(null); // For Tilt
  const captureRef = useRef<HTMLDivElement>(null); // For Download
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      setStatus("IDLE");
      setName("");
      setCardData(null);
    }
  }, [isOpen]);

  const handleSummon = () => {
    if (!name) return;
    setStatus("SUMMONING");

    // Simulate "Opening a Pack"
    setTimeout(() => {
      setCardData({
        archetype: ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)],
        rarity: rollRarity(),
        stats: {
            code: Math.floor(Math.random() * (99 - 70) + 70),
            design: Math.floor(Math.random() * (99 - 60) + 60),
            caffeine: Math.floor(Math.random() * (110 - 80) + 80), // Can go over 100 lol
        },
        id: Math.floor(Math.random() * 9999).toString().padStart(4, '0')
      });
      setStatus("REVEALED");
    }, 2500);
  };

  const handleDownload = async () => {
    if (captureRef.current) {
      try {
        const dataUrl = await toPng(captureRef.current, { cacheBust: true, pixelRatio: 2 });
        const link = document.createElement("a");
        link.download = `VELOCITY_CARD_${name}.png`;
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error("Download failed", err);
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: yPct * -20, y: xPct * 20 });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4 font-pixel select-none">
          
          {/* BACKDROP */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          <motion.div 
            className="relative z-10 w-full max-w-md flex flex-col items-center"
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* CLOSE BUTTON */}
            <button onClick={onClose} className="absolute -top-12 right-0 text-gray-500 hover:text-white">
                <span className="material-symbols-outlined text-4xl">close</span>
            </button>

            {status !== "REVEALED" ? (
              /* ================= SUMMONING PORTAL (INPUT) ================= */
              <div className="bg-[#050505] border-2 border-neon-magenta w-full p-1 pixel-corners shadow-[0_0_50px_rgba(215,38,255,0.2)]">
                 <div className="border border-white/10 p-8 flex flex-col items-center text-center bg-black relative overflow-hidden">
                    
                    {status === "SUMMONING" && (
                        <div className="absolute inset-0 bg-white/5 flex flex-col items-center justify-center z-20 backdrop-blur-sm">
                             <div className="w-24 h-24 border-4 border-neon-magenta border-t-transparent rounded-full animate-spin mb-4"></div>
                             <p className="text-neon-magenta animate-pulse font-bold tracking-widest">SUMMONING HERO...</p>
                        </div>
                    )}

                    <h2 className="text-2xl text-white uppercase tracking-widest mb-2 font-bold">PLAYER SELECT</h2>
                    <p className="text-gray-500 text-xs mb-8 font-mono">ENTER YOUR ALIAS TO GENERATE CARD</p>

                    <input 
                        value={name} onChange={(e) => setName(e.target.value.toUpperCase())}
                        className="w-full bg-gray-900 border-b-2 border-gray-700 p-4 text-center text-white focus:border-neon-magenta outline-none font-pixel text-xl tracking-widest mb-8 transition-colors"
                        placeholder="USERNAME"
                        maxLength={12}
                    />

                    <button 
                        onClick={handleSummon}
                        disabled={!name}
                        className="w-full py-4 bg-neon-magenta text-white font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_#D726FF]"
                    >
                        START GAME
                    </button>
                 </div>
              </div>
            ) : (
              /* ================= THE TRADING CARD ================= */
              <div className="flex flex-col items-center gap-6">
                 
                 {/* 3D TILT WRAPPER */}
                 <div className="perspective-1000">
                    <motion.div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
                        initial={{ rotateY: 180, scale: 0.5 }}
                        animate={{ rotateY: 0, scale: 1 }}
                        transition={{ type: "spring", damping: 12 }}
                        style={{ 
                            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`, 
                            transformStyle: "preserve-3d" 
                        }}
                        className={`relative w-[340px] h-[520px] rounded-xl overflow-hidden cursor-pointer shadow-2xl transition-shadow duration-300
                            ${cardData.rarity.tier === 'LEGENDARY' ? 'shadow-[0_0_60px_rgba(255,215,0,0.6)]' : 'shadow-[0_0_40px_rgba(0,0,0,0.8)]'}
                        `}
                    >
                        {/* === CAPTURE AREA FOR DOWNLOAD === */}
                        <div ref={captureRef} className={`w-full h-full relative bg-black border-[8px] ${cardData.rarity.border} flex flex-col`}>
                            
                            {/* 1. CARD HEADER */}
                            <div className="h-12 bg-gray-900 border-b border-gray-700 flex justify-between items-center px-4 relative z-10">
                                <span className={`font-bold font-pixel tracking-widest ${cardData.rarity.color}`}>
                                    {cardData.rarity.tier}
                                </span>
                                <div className="flex gap-1">
                                    {[...Array(cardData.rarity.tier === 'LEGENDARY' ? 5 : cardData.rarity.tier === 'EPIC' ? 4 : 3)].map((_, i) => (
                                        <span key={i} className="text-xs">⭐</span>
                                    ))}
                                </div>
                            </div>

                            {/* 2. CHARACTER ART (DiceBear API) */}
                            <div className={`h-48 w-full relative ${cardData.rarity.bg} flex items-center justify-center overflow-hidden`}>
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                <img 
                                    src={`https://api.dicebear.com/7.x/bottts/svg?seed=${name}&backgroundColor=transparent`} 
                                    alt="Avatar"
                                    className="w-32 h-32 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transform hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute bottom-2 right-2 bg-black/60 px-2 py-1 rounded text-[10px] text-white font-mono border border-white/20">
                                    #{cardData.id}
                                </div>
                            </div>

                            {/* 3. INFO SECTION */}
                            <div className="flex-1 bg-gray-900 p-4 flex flex-col gap-4 relative z-10">
                                
                                <div className="text-center">
                                    <h2 className="text-2xl text-white font-pixel uppercase truncate">{name}</h2>
                                    <p className={`text-xs font-mono font-bold tracking-widest mt-1 ${cardData.rarity.color}`}>
                                        {"<" + cardData.archetype + " />"}
                                    </p>
                                </div>

                                {/* STATS GRID */}
                                <div className="grid grid-cols-3 gap-2 mt-2">
                                    <div className="bg-black border border-gray-700 p-2 text-center rounded">
                                        <div className="text-neon-orange font-pixel text-xl">{cardData.stats.code}</div>
                                        <div className="text-[8px] text-gray-500 font-mono uppercase">Code</div>
                                    </div>
                                    <div className="bg-black border border-gray-700 p-2 text-center rounded">
                                        <div className="text-neon-magenta font-pixel text-xl">{cardData.stats.design}</div>
                                        <div className="text-[8px] text-gray-500 font-mono uppercase">Design</div>
                                    </div>
                                    <div className="bg-black border border-gray-700 p-2 text-center rounded">
                                        <div className="text-blue-400 font-pixel text-xl">{cardData.stats.caffeine}</div>
                                        <div className="text-[8px] text-gray-500 font-mono uppercase">Caffeine</div>
                                    </div>
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-700 flex justify-between items-center opacity-60">
                                    <span className="text-[8px] uppercase tracking-widest text-white">Velocity 2026 // NITW</span>
                                    <span className="material-symbols-outlined text-sm text-white">qr_code_2</span>
                                </div>
                            </div>

                            {/* LEGENDARY HOLO OVERLAY (Only visible on card, not download) */}
                            {cardData.rarity.tier === 'LEGENDARY' && (
                                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-30 pointer-events-none mix-blend-overlay animate-pulse"></div>
                            )}
                        </div>

                        {/* REACTIVE SHINE (Interactive layer) */}
                        <div 
                            className="absolute inset-0 z-50 opacity-0 hover:opacity-100 transition-opacity pointer-events-none mix-blend-soft-light"
                            style={{
                                background: `linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.0) 50%)`,
                                transform: `translateX(${rotate.y * 1.5}%) translateY(${rotate.x * 1.5}%)`
                            }}
                        />
                    </motion.div>
                 </div>

                 {/* ACTION BUTTONS */}
                 <div className="flex gap-4">
                     <button 
                        onClick={() => setStatus("IDLE")} 
                        className="px-6 py-3 bg-gray-800 text-white font-bold font-pixel uppercase hover:bg-gray-700 transition-all rounded"
                     >
                        Reroll
                     </button>
                     <button 
                        onClick={handleDownload} 
                        className="px-6 py-3 bg-white text-black font-bold font-pixel uppercase hover:scale-105 transition-transform shadow-[0_0_20px_white] rounded flex items-center gap-2"
                     >
                        <span className="material-symbols-outlined">download</span> Collect
                     </button>
                 </div>

              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}