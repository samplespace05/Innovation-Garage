"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SAMPLE DATA - REPLACE WITH REAL PROBLEMS
const PROBLEMS = [
  { id: 1, code: "PS_ALPHA", title: "FINTECH REVOLUTION", desc: "Build a decentralized payment gateway for rural India using UPI 2.0.", difficulty: "HARD" },
  { id: 2, code: "PS_BETA", title: "AI FOR ACCESSIBILITY", desc: "Create a tool that translates sign language to text in real-time.", difficulty: "MEDIUM" },
  { id: 3, code: "PS_GAMMA", title: "SMART CITIES", desc: "Optimize traffic flow using computer vision and existing CCTV networks.Optimize traffic flow using computer vision and existing CCTV networks.Optimize traffic flow using computer vision and existing CCTV networks.Optimize traffic flow using computer vision and existing CCTV networks.Optimize traffic flow using computer vision and existing CCTV networks.Optimize traffic flow using computer vision and existing CCTV networks.Optimize traffic flow using computer vision and existing CCTV networks.Optimize traffic flow using computer vision and existing CCTV networks.Optimize traffic flow using computer vision and existing CCTV networks.", difficulty: "EASY" },
  { id: 4, code: "PS_DELTA", title: "ED-TECH 3.0", desc: "Gamify the learning experience for competitive exams.", difficulty: "MEDIUM" },
];

export default function ProblemVault() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-[#080808] border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
            <span className="material-symbols-outlined text-4xl text-neon-orange">lock_open</span>
            <h2 className="text-4xl font-pixel uppercase text-white">
                Problem <span className="text-neon-orange">Statements</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {PROBLEMS.map((p) => (
                <div 
                    key={p.id} 
                    onClick={() => setActiveId(activeId === p.id ? null : p.id)}
                    className={`
                        group relative border-2 cursor-pointer transition-all duration-300 overflow-hidden bg-black
                        ${activeId === p.id ? 'border-neon-orange h-auto' : 'border-gray-800 hover:border-white h-40'}
                    `}
                >
                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 pointer-events-none"></div>

                    <div className="p-6 relative z-10 flex flex-col h-full justify-between">
                        
                        {/* Header */}
                        <div className="flex justify-between items-start">
                            <div>
                                {/* <span className="text-xs font-mono text-gray-500 block mb-1">FILE_REF: {p.code}</span> */}
                                <h3 className={`text-2xl font-bold font-mono uppercase ${activeId === p.id ? 'text-neon-orange' : 'text-white'}`}>
                                    {activeId === p.id ? p.title : "CLASSIFIED_FILE"}
                                </h3>
                            </div>
                            <span className="material-symbols-outlined text-gray-600">
                                {activeId === p.id ? 'folder_open' : 'lock'}
                            </span>
                        </div>

                        {/* Content (Hidden until clicked) */}
                        <AnimatePresence>
                            {activeId === p.id ? (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }} 
                                    animate={{ opacity: 1, height: 'auto' }} 
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-4 pt-4 border-t border-gray-800"
                                >
                                    <p className="text-gray-300 font-display text-lg leading-relaxed">{p.desc}</p>
                                    {/* <div className="mt-4 flex gap-3">
                                        <span className="px-2 py-1 border border-white/20 text-xs font-pixel uppercase text-gray-400">DIFF: {p.difficulty}</span>
                                        <span className="px-2 py-1 border border-white/20 text-xs font-pixel uppercase text-gray-400">PRIORITY: HIGH</span>
                                    </div> */}
                                </motion.div>
                            ) : (
                                <div className="mt-2">
                                    <p className="text-gray-600 font-mono text-sm animate-pulse">Click to open problem statements...</p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Corner Accent */}
                    <div className={`absolute top-0 right-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-white/10 border-l-transparent transition-all group-hover:border-t-neon-orange`}></div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}