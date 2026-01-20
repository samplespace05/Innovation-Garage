// "use client";
// import Navbar from "@/components/Navbar";
// import SphericalGallery from "@/components/SphericalGallery";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Gallery() {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null);

//   return (
//     <>
//       <Navbar />
      
//       {/* MAIN CONTAINER: FULL SCREEN, NO SCROLL */}
//       <main className="fixed inset-0 bg-black overflow-hidden z-0">
        
//         {/* 3D SCENE */}
//         <div className="absolute inset-0 z-0">
//             <SphericalGallery onSelect={setSelectedImage} />
//         </div>

//         {/* COMPACT MODAL OVERLAY */}
//         <AnimatePresence>
//             {selectedImage && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
//                     {/* Dark Backdrop */}
//                     <motion.div 
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         onClick={() => setSelectedImage(null)}
//                         className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
//                     />

//                     {/* The Card */}
//                     <motion.div 
//                         initial={{ scale: 0.8, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         exit={{ scale: 0.8, opacity: 0 }}
//                         transition={{ type: "spring", damping: 25, stiffness: 300 }}
//                         className="relative z-50 pointer-events-auto"
//                         onClick={(e) => e.stopPropagation()} // Prevent clicking backdrop
//                     >
//                         {/* Image Frame */}
//                         <div className="bg-[#111] p-2 border border-white/20 shadow-2xl rounded-sm max-w-sm md:max-w-md w-full">
//                             <div className="relative aspect-[3/4] w-full overflow-hidden bg-black">
//                                 <img 
//                                     src={selectedImage} 
//                                     alt="Gallery Memory" 
//                                     className="w-full h-full object-cover"
//                                 />
                                
//                                 {/* Aesthetic Scanline */}
//                                 <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
//                             </div>
//                         </div>

//                         {/* Minimal Close Button */}
//                         <button 
//                             onClick={() => setSelectedImage(null)}
//                             className="absolute -top-12 right-0 text-white/50 hover:text-white uppercase text-xs tracking-widest transition-colors font-mono"
//                         >
//                             [CLOSE]
//                         </button>
//                     </motion.div>
//                 </div>
//             )}
//         </AnimatePresence>

//       </main>
//     </>
//   );
// }


"use client";
import Navbar from "@/components/Navbar";
import SphericalGallery from "@/components/SphericalGallery";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      
      {/* MAIN CONTAINER */}
      <main className="fixed inset-0 bg-[#02020a] overflow-hidden z-0">
        
        {/* 3D SPHERE BACKGROUND */}
        <div className="absolute inset-0 z-0">
            <SphericalGallery onSelect={setSelectedImage} />
        </div>

        {/* POPUP MODAL */}
        <AnimatePresence>
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                    
                    {/* Dark Blur Backdrop (Click to close) */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto cursor-pointer"
                    />

                    {/* The Smaller Square Card */}
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.8, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative z-50 pointer-events-auto flex flex-col items-center gap-4"
                    >
                        {/* 1. SMALLER SQUARE IMAGE */}
                        <div className="w-[350px] h-[350px] bg-[#111] p-2 border border-white/10 rounded-xl shadow-2xl">
                            <div className="w-full h-full overflow-hidden rounded-lg relative group">
                                <img 
                                    src={selectedImage} 
                                    alt="Memory" 
                                    className="w-full h-full object-cover"
                                />
                                {/* Optional: Glossy Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                            </div>
                        </div>

                        {/* 2. ONE LINE TEXT */}
                        <p className="text-gray-400 font-mono text-xs tracking-[0.2em] uppercase">
                            // ARCHIVE_REF_{Math.floor(Math.random() * 9999)}
                        </p>

                    </motion.div>
                </div>
            )}
        </AnimatePresence>

      </main>
    </>
  );
}