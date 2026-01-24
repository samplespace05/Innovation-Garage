"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// MOCK LIVE UPDATES
const UPDATES = [
  { id: 1, time: "05:51 PM", text: "CCPD-1 Access Code: ccpd@#12" },
  { id: 2, time: "05:51 PM", text: "CCPD-2 Access Code: pm@cp#25" },
  { id: 3, time: "07:42 PM", text: "Dinner will be served soon....." },
  { id: 4, time: "10:39 PM", text: "Events Access Code: K$R@!T1960" },
];

export default function LiveComms() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-mono w-full max-w-sm">
        
        {/* Toggle Button */}
        <div className="flex justify-end mb-2">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="bg-black border border-neon-orange text-neon-orange px-3 py-1 text-xs uppercase font-bold flex items-center gap-2 hover:bg-neon-orange hover:text-black transition-colors"
            >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                LIVE_FEED {isOpen ? "[-]" : "[+]"}
            </button>
        </div>

        {/* The Terminal Window */}
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="bg-black/90 backdrop-blur-md border-2 border-gray-800 shadow-2xl p-4 pixel-corners max-h-60 overflow-y-auto"
                >
                    <div className="flex flex-col gap-3">
                        {UPDATES.map((msg) => (
                            <div key={msg.id} className="border-l-2 border-gray-700 pl-3 py-1">
                                <span className="text-[10px] text-gray-500 block">{msg.time}</span>
                                <p className="text-sm text-green-400 font-bold leading-tight">
                                    {">"} {msg.text}
                                </p>
                            </div>
                        ))}
                        <div className="border-l-2 border-neon-orange pl-3 animate-pulse">
                            <span className="text-neon-orange text-xs">LISTENING_FOR_UPDATES...</span>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}