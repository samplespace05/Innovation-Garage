// "use client";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { useState } from "react";

// export default function Ideas() {
//   const [showModal, setShowModal] = useState(false);

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const data = Object.fromEntries(formData.entries());

//     try {
//         const res = await fetch("/api/ideas", {
//             method: "POST",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if (res.ok) {
//             setShowModal(true);
//             (e.target as HTMLFormElement).reset();
//         } else {
//             alert("Failed to submit. Please try again.");
//         }
//     } catch (error) {
//         console.error("Error submitting idea:", error);
//     }
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen pt-20 bg-cyber-black text-warm-white relative flex items-center justify-center p-4">
//         {/* Background Grid */}
//         <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

//         {/* SUCCESS MODAL */}
//         {showModal && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
//             <div className="bg-[#1a1a1a] border-2 border-neon-magenta p-8 max-w-md w-full pixel-corners text-center shadow-[0_0_50px_-10px_#D726FF] animate-fade-in-up">
//                <div className="mx-auto flex h-20 w-20 items-center justify-center bg-neon-magenta/10 border-2 border-neon-magenta mb-6 shadow-[0_0_15px_#D726FF]">
//                  <span className="material-symbols-outlined text-5xl text-neon-magenta">check_circle</span>
//                </div>
//                <h3 className="text-3xl font-bold font-pixel mb-2 uppercase text-white">Submitted!</h3>
//                <p className="text-gray-400 font-pixel text-lg mb-8 tracking-wider">
//                   Your innovative concept has been successfully registered. Our council will review your pitch shortly.
//                </p>
//                <button onClick={() => setShowModal(false)} className="w-full py-4 bg-neon-orange text-cyber-black font-bold font-pixel uppercase hover:bg-white transition-colors border-2 border-transparent hover:border-white shadow-[0_0_20px_#FF6A00]">
//                  Return to Portal
//                </button>
//             </div>
//           </div>
//         )}

//         {/* FORM CARD */}
//         <div className="w-full max-w-4xl relative z-10 my-10">
//            <div className="bg-cyber-gray/90 border-2 border-gray-800 p-8 md:p-12 shadow-[0_0_30px_-5px_rgba(215,38,255,0.6)] backdrop-blur-md pixel-corners">
//               <div className="text-center mb-10">
//                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-orange/10 border border-neon-orange mb-4 shadow-[0_0_10px_rgba(255,106,0,0.3)]">
//                     <span className="relative flex h-3 w-3">
//                       <span className="animate-ping absolute inline-flex h-full w-full bg-neon-orange opacity-75"></span>
//                       <span className="relative inline-flex h-3 w-3 bg-neon-orange"></span>
//                     </span>
//                     <span className="text-sm font-pixel uppercase tracking-widest text-neon-orange font-bold">Portal Live</span>
//                  </div>
//                  <h1 className="text-3xl md:text-5xl font-bold font-pixel uppercase leading-snug drop-shadow-lg text-white">
//                     Idea Registration <span className="text-neon-magenta underline decoration-4 decoration-neon-orange underline-offset-4" style={{ textShadow: "0 0 10px rgba(215, 38, 255, 0.5)" }}>Portal</span>
//                  </h1>
//                  <p className="text-gray-400 max-w-lg mx-auto text-lg mt-4 font-pixel tracking-wide">
//                     Submit your details below. All fields are mandatory for innovation tracking.
//                  </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                  <div className="space-y-2 group">
//                     <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Full Name</label>
//                     <div className="relative">
//                         <input name="fullName" required placeholder="ENTER YOUR FULL NAME" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                         <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                     </div>
//                  </div>
            
//                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Degree</label>
//                         <div className="relative">
//                             <select name="degree" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel appearance-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all cursor-pointer">
//                                 <option>B.Tech</option>
//                                 <option>M.Tech</option>
//                                 <option>MBA</option>
//                             </select>
//                             <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neon-orange">expand_more</span>
//                         </div>
//                     </div>
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Department</label>
//                          <div className="relative">
//                             <select name="department" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel appearance-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all cursor-pointer">
//                                 <option>CSE</option>
//                                 <option>ECE</option>
//                                 <option>EEE</option>
//                                 <option>MECH</option>
//                                 <option>CIVIL</option>
//                             </select>
//                             <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neon-orange">expand_more</span>
//                         </div>
//                     </div>
//                  </div>

//                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">College Email</label>
//                         <div className="relative">
//                              <input name="collegeEmail" type="email" required placeholder="ID@UNIVERSITY.EDU" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Roll Number</label>
//                         <div className="relative">
//                              <input name="rollNumber" type="text" required placeholder="E.G. 21CS054" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                  </div>

//                  <div className="space-y-2 group">
//                     <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Your Ideas</label>
//                     <div className="relative">
//                         <textarea name="ideaDescription" required placeholder="DESCRIBE YOUR INNOVATIVE IDEA IN DETAIL HERE..." rows={6} className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all resize-y placeholder-gray-700"></textarea>
//                         <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
//                     </div>
//                  </div>

//                  <div className="pt-6">
//                     <button type="submit" className="group w-full py-5 px-6 bg-neon-magenta border-2 border-neon-magenta text-lg font-bold text-white uppercase font-pixel tracking-widest hover:bg-transparent hover:text-neon-magenta hover:shadow-[0_0_20px_#D726FF] transition-all flex items-center justify-center gap-3">
//                         Submit Idea <span className="material-symbols-outlined text-[24px] group-hover:translate-x-2 transition-transform">send</span>
//                     </button>
//                  </div>
//               </form>
//            </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }



// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { useState } from "react";

// export default function Ideas() {
//   const [showModal, setShowModal] = useState(false);

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const data = Object.fromEntries(formData.entries());

//     try {
//         const res = await fetch("/api/ideas", {
//             method: "POST",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if (res.ok) {
//             setShowModal(true);
//             (e.target as HTMLFormElement).reset();
//         } else {
//             alert("Failed to submit. Please try again.");
//         }
//     } catch (error) {
//         console.error("Error submitting idea:", error);
//     }
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen pt-20 bg-cyber-black text-warm-white relative flex items-center justify-center p-4">
//         {/* Background Grid */}
//         <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

//         {/* SUCCESS MODAL */}
//         {showModal && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
//             <div className="bg-[#1a1a1a] border-2 border-neon-magenta p-8 max-w-md w-full pixel-corners text-center shadow-[0_0_50px_-10px_#D726FF] animate-fade-in-up">
//                <div className="mx-auto flex h-20 w-20 items-center justify-center bg-neon-magenta/10 border-2 border-neon-magenta mb-6 shadow-[0_0_15px_#D726FF]">
//                  <span className="material-symbols-outlined text-5xl text-neon-magenta">check_circle</span>
//                </div>
//                <h3 className="text-3xl font-bold font-pixel mb-2 uppercase text-white">Submitted!</h3>
//                <p className="text-gray-400 font-pixel text-lg mb-8 tracking-wider">
//                   Your innovative concept has been successfully registered. Our council will review your pitch shortly.
//                </p>
//                <button onClick={() => setShowModal(false)} className="w-full py-4 bg-neon-orange text-cyber-black font-bold font-pixel uppercase hover:bg-white transition-colors border-2 border-transparent hover:border-white shadow-[0_0_20px_#FF6A00]">
//                  Return to Portal
//                </button>
//             </div>
//           </div>
//         )}

//         {/* FORM CARD */}
//         <div className="w-full max-w-4xl relative z-10 my-10">
//            <div className="bg-cyber-gray/90 border-2 border-gray-800 p-8 md:p-12 shadow-[0_0_30px_-5px_rgba(215,38,255,0.6)] backdrop-blur-md pixel-corners">
//               <div className="text-center mb-10">
//                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-orange/10 border border-neon-orange mb-4 shadow-[0_0_10px_rgba(255,106,0,0.3)]">
//                     <span className="relative flex h-3 w-3">
//                       <span className="animate-ping absolute inline-flex h-full w-full bg-neon-orange opacity-75"></span>
//                       <span className="relative inline-flex h-3 w-3 bg-neon-orange"></span>
//                     </span>
//                     <span className="text-sm font-pixel uppercase tracking-widest text-neon-orange font-bold">Portal Live</span>
//                  </div>
//                  <h1 className="text-3xl md:text-5xl font-bold font-pixel uppercase leading-snug drop-shadow-lg text-white">
//                     Idea Registration <span className="text-neon-magenta underline decoration-4 decoration-neon-orange underline-offset-4" style={{ textShadow: "0 0 10px rgba(215, 38, 255, 0.5)" }}>Portal</span>
//                  </h1>
//                  <p className="text-gray-400 max-w-lg mx-auto text-lg mt-4 font-pixel tracking-wide">
//                     Submit your details below. All fields are mandatory for innovation tracking.
//                  </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
            
//                  {/* Full Name */}
//                  <div className="space-y-2 group">
//                     <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Full Name</label>
//                     <div className="relative">
//                         <input name="fullName" required placeholder="ENTER YOUR FULL NAME" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                         <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                     </div>
//                  </div>

//                  {/* Phone Number (New Field) */}
//                  <div className="space-y-2 group">
//                     <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Phone Number</label>
//                     <div className="relative">
//                         <input name="phoneNumber" required type="tel" placeholder="+91 98765 43210" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                         <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                     </div>
//                  </div>
            
//                  {/* Degree & Department */}
//                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Degree</label>
//                         <div className="relative">
//                             <select name="degree" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel appearance-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all cursor-pointer">
//                                 <option>B.Tech</option>
//                                 <option>M.Tech</option>
//                                 <option>M.Sc</option>
//                                 <option>B.Sc</option>
//                                 <option>MBA</option>
//                             </select>
//                             <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neon-orange">expand_more</span>
//                         </div>
//                     </div>
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Department</label>
//                          <div className="relative">
//                             <select name="department" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel appearance-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all cursor-pointer">
//                                 <option>CSE</option>
//                                 <option>ECE</option>
//                                 <option>EEE</option>
//                                 <option>MECH</option>
//                                 <option>CIVIL</option>
//                             </select>
//                             <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neon-orange">expand_more</span>
//                         </div>
//                     </div>
//                  </div>

//                  {/* Year & Roll Number (Grouped) */}
//                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Year</label>
//                         <div className="relative">
//                              <input name="year" type="number" min="1" max="5" required placeholder="E.G. 3" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Roll Number</label>
//                         <div className="relative">
//                              <input name="rollNumber" type="text" required placeholder="E.G. 21CS054" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                  </div>

//                  {/* Emails (Grouped) */}
//                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">College Email</label>
//                         <div className="relative">
//                              <input name="collegeEmail" type="email" required placeholder="ID@UNIVERSITY.EDU" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Personal Email</label>
//                         <div className="relative">
//                              <input name="personalEmail" type="email" required placeholder="YOU@GMAIL.COM" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                  </div>

//                  {/* Idea Description */}
//                  <div className="space-y-2 group">
//                     <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Your Ideas</label>
//                     <div className="relative">
//                         <textarea name="ideaDescription" required placeholder="DESCRIBE YOUR INNOVATIVE IDEA IN DETAIL HERE..." rows={6} className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all resize-y placeholder-gray-700"></textarea>
//                         <div className="absolute bottom-2 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
//                     </div>
//                  </div>

//                  <div className="pt-6">
//                     <button type="submit" className="group w-full py-5 px-6 bg-neon-magenta border-2 border-neon-magenta text-lg font-bold text-white uppercase font-pixel tracking-widest hover:bg-transparent hover:text-neon-magenta hover:shadow-[0_0_20px_#D726FF] transition-all flex items-center justify-center gap-3">
//                         Submit Idea <span className="material-symbols-outlined text-[24px] group-hover:translate-x-2 transition-transform">send</span>
//                     </button>
//                  </div>
//               </form>
//            </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// "use client";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { useState } from "react";

// export default function Ideas() {
//   const [showModal, setShowModal] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setIsSubmitting(true); // Start loading

//     const formData = new FormData(e.currentTarget);
//     const data = Object.fromEntries(formData.entries());

//     try {
//         const res = await fetch("/api/ideas", {
//             method: "POST",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         if (res.ok) {
//             setShowModal(true);
//             (e.target as HTMLFormElement).reset();
//         } else {
//             alert("Failed to submit. Please try again.");
//         }
//     } catch (error) {
//         console.error("Error submitting idea:", error);
//         alert("Something went wrong. Please check your connection.");
//     } finally {
//         setIsSubmitting(false); // Stop loading
//     }
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen pt-20 bg-cyber-black text-warm-white relative flex items-center justify-center p-4">
//         {/* Background Grid */}
//         <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

//         {/* SUCCESS MODAL */}
//         {showModal && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
//             <div className="bg-[#1a1a1a] border-2 border-neon-magenta p-8 max-w-md w-full pixel-corners text-center shadow-[0_0_50px_-10px_#D726FF] animate-fade-in-up">
//                <div className="mx-auto flex h-20 w-20 items-center justify-center bg-neon-magenta/10 border-2 border-neon-magenta mb-6 shadow-[0_0_15px_#D726FF]">
//                  <span className="material-symbols-outlined text-5xl text-neon-magenta">check_circle</span>
//                </div>
//                {/* Updated Message */}
//                <h3 className="text-3xl font-bold font-pixel mb-2 uppercase text-white">Submitted Successfully!</h3>
//                <p className="text-gray-400 font-pixel text-lg mb-8 tracking-wider">
//                   Your innovative concept has been sent to our council database. We will review your pitch shortly.
//                </p>
//                <button onClick={() => setShowModal(false)} className="w-full py-4 bg-neon-orange text-cyber-black font-bold font-pixel uppercase hover:bg-white transition-colors border-2 border-transparent hover:border-white shadow-[0_0_20px_#FF6A00]">
//                  Return to Portal
//                </button>
//             </div>
//           </div>
//         )}

//         {/* FORM CARD */}
//         <div className="w-full max-w-4xl relative z-10 my-10">
//            <div className="bg-cyber-gray/90 border-2 border-gray-800 p-8 md:p-12 shadow-[0_0_30px_-5px_rgba(215,38,255,0.6)] backdrop-blur-md pixel-corners">
//               <div className="text-center mb-10">
//                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-orange/10 border border-neon-orange mb-4 shadow-[0_0_10px_rgba(255,106,0,0.3)]">
//                     <span className="relative flex h-3 w-3">
//                       <span className="animate-ping absolute inline-flex h-full w-full bg-neon-orange opacity-75"></span>
//                       <span className="relative inline-flex h-3 w-3 bg-neon-orange"></span>
//                     </span>
//                     <span className="text-sm font-pixel uppercase tracking-widest text-neon-orange font-bold">Portal Live</span>
//                  </div>
//                  <h1 className="text-3xl md:text-5xl font-bold font-pixel uppercase leading-snug drop-shadow-lg text-white">
//                     Idea Registration <span className="text-neon-magenta underline decoration-4 decoration-neon-orange underline-offset-4" style={{ textShadow: "0 0 10px rgba(215, 38, 255, 0.5)" }}>Portal</span>
//                  </h1>
//                  <p className="text-gray-400 max-w-lg mx-auto text-lg mt-4 font-pixel tracking-wide">
//                     Submit your details below. All fields are mandatory for innovation tracking.
//                  </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
            
//                  {/* Full Name */}
//                  <div className="space-y-2 group">
//                     <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Full Name</label>
//                     <div className="relative">
//                         <input name="fullName" required placeholder="ENTER YOUR FULL NAME" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                         <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                     </div>
//                  </div>

//                  {/* Phone Number */}
//                  <div className="space-y-2 group">
//                     <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Phone Number</label>
//                     <div className="relative">
//                         <input name="phoneNumber" required type="tel" placeholder="+91 98765 43210" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                         <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                     </div>
//                  </div>
            
//                  {/* Degree & Department */}
//                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Degree</label>
//                         <div className="relative">
//                             <select name="degree" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel appearance-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all cursor-pointer">
//                                 <option>B.Tech</option>
//                                 <option>M.Tech</option>
//                                 <option>M.Sc</option>
//                                 <option>B.Sc</option>
//                                 <option>MBA</option>
//                             </select>
//                             <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neon-orange">expand_more</span>
//                         </div>
//                     </div>
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Department</label>
//                          <div className="relative">
//                             <select name="department" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel appearance-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all cursor-pointer">
//                                 <option>CSE</option>
//                                 <option>ECE</option>
//                                 <option>EEE</option>
//                                 <option>MECH</option>
//                                 <option>CIVIL</option>
//                             </select>
//                             <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neon-orange">expand_more</span>
//                         </div>
//                     </div>
//                  </div>

//                  {/* Year & Roll Number */}
//                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Year</label>
//                         <div className="relative">
//                              <input name="year" type="number" min="1" max="5" required placeholder="E.G. 3" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Roll Number</label>
//                         <div className="relative">
//                              <input name="rollNumber" type="text" required placeholder="E.G. 21CS054" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                  </div>

//                  {/* Emails */}
//                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">College Email</label>
//                         <div className="relative">
//                              <input name="collegeEmail" type="email" required placeholder="ID@UNIVERSITY.EDU" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Personal Email</label>
//                         <div className="relative">
//                              <input name="personalEmail" type="email" required placeholder="YOU@GMAIL.COM" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                  </div>

//                  {/* Idea Description */}
//                  <div className="space-y-2 group">
//                     <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Your Ideas</label>
//                     <div className="relative">
//                         <textarea name="ideaDescription" required placeholder="DESCRIBE YOUR INNOVATIVE IDEA IN DETAIL HERE..." rows={6} className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all resize-y placeholder-gray-700"></textarea>
//                         <div className="absolute bottom-2 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
//                     </div>
//                  </div>

//                  {/* Submit Button */}
//                  <div className="pt-6">
//                     <button 
//                         type="submit" 
//                         disabled={isSubmitting} // Disable while sending
//                         className={`group w-full py-5 px-6 border-2 border-neon-magenta text-lg font-bold uppercase font-pixel tracking-widest transition-all flex items-center justify-center gap-3
//                         ${isSubmitting 
//                             ? "bg-gray-800 text-gray-500 cursor-not-allowed border-gray-600" 
//                             : "bg-neon-magenta text-white hover:bg-transparent hover:text-neon-magenta hover:shadow-[0_0_20px_#D726FF]"
//                         }`}
//                     >
//                         {isSubmitting ? "SENDING..." : (
//                             <>Submit Idea <span className="material-symbols-outlined text-[24px] group-hover:translate-x-2 transition-transform">send</span></>
//                         )}
//                     </button>
//                  </div>
//               </form>
//            </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }










// "use client";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { useState } from "react";

// export default function Ideas() {
//   const [showModal, setShowModal] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setIsSubmitting(true); // Start loading

//     const formData = new FormData(e.currentTarget);
//     const data = Object.fromEntries(formData.entries());

//     try {
//         const res = await fetch("/api/ideas", {
//             method: "POST",
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         if (res.ok) {
//             setShowModal(true);
//             (e.target as HTMLFormElement).reset();
//         } else {
//             alert("Failed to submit. Please try again.");
//         }
//     } catch (error) {
//         console.error("Error submitting idea:", error);
//         alert("Something went wrong. Please check your connection.");
//     } finally {
//         setIsSubmitting(false); // Stop loading
//     }
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen pt-20 bg-cyber-black text-warm-white relative flex items-center justify-center p-4">
//         {/* Background Grid */}
//         <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

//         {/* SUCCESS MODAL */}
//         {showModal && (
//           <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
//             <div className="bg-[#1a1a1a] border-2 border-neon-magenta p-8 max-w-md w-full pixel-corners text-center shadow-[0_0_50px_-10px_#D726FF] animate-fade-in-up">
//                <div className="mx-auto flex h-20 w-20 items-center justify-center bg-neon-magenta/10 border-2 border-neon-magenta mb-6 shadow-[0_0_15px_#D726FF]">
//                  <span className="material-symbols-outlined text-5xl text-neon-magenta">check_circle</span>
//                </div>
//                {/* Updated Message */}
//                <h3 className="text-3xl font-bold font-pixel mb-2 uppercase text-white">Submitted Successfully!</h3>
//                <p className="text-gray-400 font-pixel text-lg mb-8 tracking-wider">
//                   Your innovative concept has been sent to our council database. We will review your pitch shortly.
//                </p>
//                <button onClick={() => setShowModal(false)} className="w-full py-4 bg-neon-orange text-cyber-black font-bold font-pixel uppercase hover:bg-white transition-colors border-2 border-transparent hover:border-white shadow-[0_0_20px_#FF6A00]">
//                  Return to Portal
//                </button>
//             </div>
//           </div>
//         )}

//         {/* FORM CARD */}
//         <div className="w-full max-w-4xl relative z-10 my-10">
//            <div className="bg-cyber-gray/90 border-2 border-gray-800 p-8 md:p-12 shadow-[0_0_30px_-5px_rgba(215,38,255,0.6)] backdrop-blur-md pixel-corners">
//               <div className="text-center mb-10">
//                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-orange/10 border border-neon-orange mb-4 shadow-[0_0_10px_rgba(255,106,0,0.3)]">
//                     <span className="relative flex h-3 w-3">
//                       <span className="animate-ping absolute inline-flex h-full w-full bg-neon-orange opacity-75"></span>
//                       <span className="relative inline-flex h-3 w-3 bg-neon-orange"></span>
//                     </span>
//                     <span className="text-sm font-pixel uppercase tracking-widest text-neon-orange font-bold">Portal Live</span>
//                  </div>
//                  <h1 className="text-3xl md:text-5xl font-bold font-pixel uppercase leading-snug drop-shadow-lg text-white">
//                     Idea Registration <span className="text-neon-magenta underline decoration-4 decoration-neon-orange underline-offset-4" style={{ textShadow: "0 0 10px rgba(215, 38, 255, 0.5)" }}>Portal</span>
//                  </h1>
//                  <p className="text-gray-400 max-w-lg mx-auto text-lg mt-4 font-pixel tracking-wide">
//                     Submit your details below. All fields are mandatory for innovation tracking.
//                  </p>
//               </div>

//               {/* Added autoComplete="off" to form to prevent dropdowns globally */}
//               <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
            
//                   {/* Full Name */}
//                   <div className="space-y-2 group">
//                     <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Full Name</label>
//                     <div className="relative">
//                         <input name="fullName" required autoComplete="off" placeholder="ENTER YOUR FULL NAME" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                         <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                     </div>
//                   </div>

//                   {/* Phone Number - Modified for 10 digit constraint */}
//                   <div className="space-y-2 group">
//                     <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Phone Number</label>
//                     <div className="relative">
//                         <input 
//                             name="phoneNumber" 
//                             required 
//                             type="tel" 
//                             maxLength={10} 
//                             pattern="\d{10}" 
//                             title="Please enter exactly 10 digits"
//                             autoComplete="off"
//                             onInput={(e) => {
//                                 // Strictly remove non-digits and limit to 10
//                                 e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '').slice(0, 10);
//                             }}
//                             placeholder="9876x 4321x" 
//                             className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"
//                         />
//                         <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                     </div>
//                   </div>
            
//                   {/* Degree & Department */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Degree</label>
//                         <div className="relative">
//                             <select name="degree" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel appearance-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all cursor-pointer">
//                                 <option>B.Tech</option>
//                                 <option>B.Sc</option>
//                                 <option>M.Tech</option>
//                                 <option>M.Sc</option>
//                                 <option>MBA</option>
//                             </select>
//                             <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neon-orange">expand_more</span>
//                         </div>
//                     </div>
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Department</label>
//                          <div className="relative">
//                             <select name="department" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel appearance-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all cursor-pointer">
                                // <option>CSE</option>
                                // <option>CSE (AIDS)</option>
                                // <option>MNC</option>
                                // <option>ECE</option>
                                // <option>ECE(VLSI)</option>
                                // <option>EEE</option>
                                // <option>MECH</option>
                                // <option>CHEM</option>
                                // <option>CIVIL</option>
                                // <option>BioTech</option>
                                // <option>MME</option>
                                // <option>OTHER</option>
//                             </select>
//                             <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neon-orange">expand_more</span>
//                         </div>
//                     </div>
//                   </div>

//                   {/* Year & Roll Number - Modified Year constraint */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Year</label>
//                         <div className="relative">
//                              <input 
//                                 name="year" 
//                                 type="number" 
//                                 min="1" 
//                                 max="5" 
//                                 required 
//                                 autoComplete="off"
//                                 onInput={(e) => {
//                                     // Check if value is within 1-5
//                                     const val = parseInt(e.currentTarget.value);
//                                     if (e.currentTarget.value && (val < 1 || val > 5)) {
//                                         // Reset to nearest limit or clear if invalid
//                                         if(val > 5) e.currentTarget.value = "5";
//                                         if(val < 1) e.currentTarget.value = "1";
//                                     }
//                                 }}
//                                 placeholder="E.G. 3" 
//                                 className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"
//                              />
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Roll Number</label>
//                         <div className="relative">
//                              <input name="rollNumber" type="text" required autoComplete="off" placeholder="E.G. 21CS054" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                   </div>

//                   {/* Emails - Modified with specific RegEx patterns */}
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">College Email</label>
//                         <div className="relative">
//                              <input 
//                                 name="collegeEmail" 
//                                 type="email" 
//                                 required 
//                                 autoComplete="off"
//                                 pattern=".+@student\.nitw\.ac\.in" 
//                                 title="Email must end with @student.nitw.ac.in"
//                                 placeholder="ID@STUDENT.NITW.AC.IN" 
//                                 className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"
//                              />
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                     <div className="space-y-2 group">
//                         <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Personal Email</label>
//                         <div className="relative">
//                              <input 
//                                 name="personalEmail" 
//                                 type="email" 
//                                 required 
//                                 autoComplete="off"
//                                 pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com" 
//                                 title="Please enter a valid email ending with .com"
//                                 placeholder="YOU@GMAIL.COM" 
//                                 className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"
//                              />
//                              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
//                         </div>
//                     </div>
//                   </div>

//                   {/* Idea Description */}
//                   <div className="space-y-2 group">
//                     <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Your Ideas</label>
//                     <div className="relative">
//                         <textarea name="ideaDescription" required autoComplete="off" placeholder="DESCRIBE YOUR INNOVATIVE IDEA IN DETAIL HERE..." rows={6} className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all resize-y placeholder-gray-700"></textarea>
//                         <div className="absolute bottom-2 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <div className="pt-6">
//                     <button 
//                         type="submit" 
//                         disabled={isSubmitting} // Disable while sending
//                         className={`group w-full py-5 px-6 border-2 border-neon-magenta text-lg font-bold uppercase font-pixel tracking-widest transition-all flex items-center justify-center gap-3
//                         ${isSubmitting 
//                             ? "bg-gray-800 text-gray-500 cursor-not-allowed border-gray-600" 
//                             : "bg-neon-magenta text-white hover:bg-transparent hover:text-neon-magenta hover:shadow-[0_0_20px_#D726FF]"
//                         }`}
//                     >
//                         {isSubmitting ? "SENDING..." : (
//                             <>Submit Idea <span className="material-symbols-outlined text-[24px] group-hover:translate-x-2 transition-transform">send</span></>
//                         )}
//                     </button>
//                   </div>
//               </form>
//            </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Ideas() {
const [showModal, setShowModal] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
e.preventDefault();
setIsSubmitting(true); // Start loading

const formData = new FormData(e.currentTarget);
const data = Object.fromEntries(formData.entries());

try {
const res = await fetch("/api/ideas", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json"
    }
});

if (res.ok) {
    setShowModal(true);
    (e.target as HTMLFormElement).reset();
} else {
    alert("Failed to submit. Please try again.");
}
} catch (error) {
console.error("Error submitting idea:", error);
alert("Something went wrong. Please check your connection.");
} finally {
setIsSubmitting(false); // Stop loading
}
}

return (
<>
<Navbar />
<div className="min-h-screen pt-20 bg-cyber-black text-warm-white relative flex items-center justify-center p-4">
{/* Background Grid */}
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

{/* SUCCESS MODAL */}
{showModal && (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
    <div className="bg-[#1a1a1a] border-2 border-neon-magenta p-8 max-w-md w-full pixel-corners text-center shadow-[0_0_50px_-10px_#D726FF] animate-fade-in-up">
        <div className="mx-auto flex h-20 w-20 items-center justify-center bg-neon-magenta/10 border-2 border-neon-magenta mb-6 shadow-[0_0_15px_#D726FF]">
            <span className="material-symbols-outlined text-5xl text-neon-magenta">check_circle</span>
        </div>
        {/* Updated Message */}
        <h3 className="text-3xl font-bold font-pixel mb-2 uppercase text-white">Submitted Successfully!</h3>
        <p className="text-gray-400 font-pixel text-lg mb-8 tracking-wider">
            Your innovative concept has been sent to our council database. We will review your pitch shortly.
        </p>
        <button onClick={() => setShowModal(false)} className="w-full py-4 bg-neon-orange text-cyber-black font-bold font-pixel uppercase hover:bg-white transition-colors border-2 border-transparent hover:border-white shadow-[0_0_20px_#FF6A00]">
            Return to Portal
        </button>
    </div>
    </div>
)}

{/* FORM CARD */}
<div className="w-full max-w-4xl relative z-10 my-10">
    <div className="bg-cyber-gray/90 border-2 border-gray-800 p-8 md:p-12 shadow-[0_0_30px_-5px_rgba(215,38,255,0.6)] backdrop-blur-md pixel-corners">
        <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-orange/10 border border-neon-orange mb-4 shadow-[0_0_10px_rgba(255,106,0,0.3)]">
            <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full bg-neon-orange opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 bg-neon-orange"></span>
            </span>
            <span className="text-sm font-pixel uppercase tracking-widest text-neon-orange font-bold">Portal Live</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold font-pixel uppercase leading-snug drop-shadow-lg text-white">
            Idea Registration <span className="text-neon-magenta underline decoration-4 decoration-neon-orange underline-offset-4" style={{ textShadow: "0 0 10px rgba(215, 38, 255, 0.5)" }}>Portal</span>
            </h1>
            <p className="text-gray-400 max-w-lg mx-auto text-lg mt-4 font-pixel tracking-wide">
            Submit your details below. All fields are mandatory for innovation tracking.
            </p>
        </div>

        {/* Added autoComplete="off" to form to prevent dropdowns globally */}
        <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
            
            {/* Full Name */}
            <div className="space-y-2 group">
            <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Full Name</label>
            <div className="relative">
                <input name="fullName" required autoComplete="off" placeholder="ENTER YOUR FULL NAME" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>
            </div>

            {/* Degree & Department */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 group">
                <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Degree</label>
                <div className="relative">
                    <select name="degree" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel appearance-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all cursor-pointer">
                        <option>B.Tech</option>
                        <option>M.Tech</option>
                        <option>M.Sc</option>
                        <option>B.Sc</option>
                        <option>MBA</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neon-orange">expand_more</span>
                </div>
            </div>
            <div className="space-y-2 group">
                <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Department</label>
                    <div className="relative">
                    <select name="department" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel appearance-none focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all cursor-pointer">
                        <option>CSE</option>
                        <option>CSE (AIDS)</option>
                        <option>MNC</option>
                        <option>ECE</option>
                        <option>ECE(VLSI)</option>
                        <option>EEE</option>
                        <option>MECH</option>
                        <option>CHEM</option>
                        <option>CIVIL</option>
                        <option>BioTech</option>
                        <option>MME</option>
                        <option>OTHER</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-neon-orange">expand_more</span>
                </div>
            </div>
            </div>

            {/* Year & Roll Number - Modified Year constraint */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 group">
                <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Year</label>
                <div className="relative">
                        <input 
                        name="year" 
                        type="number" 
                        min="1" 
                        max="5" 
                        required 
                        autoComplete="off"
                        onInput={(e) => {
                            // Check if value is within 1-5
                            const val = parseInt(e.currentTarget.value);
                            if (e.currentTarget.value && (val < 1 || val > 5)) {
                                // Reset to nearest limit or clear if invalid
                                if(val > 5) e.currentTarget.value = "5";
                                if(val < 1) e.currentTarget.value = "1";
                            }
                        }}
                        placeholder="E.G. 3" 
                        className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"
                        />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
            </div>
            <div className="space-y-2 group">
                <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Roll Number</label>
                <div className="relative">
                        <input name="rollNumber" type="text" required autoComplete="off" placeholder="E.G. 21CS054" className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"/>
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
            </div>
            </div>

            {/* Emails - Modified with specific RegEx patterns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 group">
                <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">College Email</label>
                <div className="relative">
                        <input 
                        name="collegeEmail" 
                        type="email" 
                        required 
                        autoComplete="off"
                        pattern=".+@student\.nitw\.ac\.in" 
                        title="Email must end with @student.nitw.ac.in"
                        placeholder="ID@STUDENT.NITW.AC.IN" 
                        className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"
                        />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
            </div>
            <div className="space-y-2 group">
                <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Personal Email</label>
                <div className="relative">
                        <input 
                        name="personalEmail" 
                        type="email" 
                        required 
                        autoComplete="off"
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com" 
                        title="Please enter a valid email ending with .com"
                        placeholder="YOU@GMAIL.COM" 
                        className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"
                        />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
            </div>
            </div>
        
        {/* Phone Number & Google Drive Link */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Phone Number</label>
                <div className="relative">
                    <input 
                        name="phoneNumber" 
                        required 
                        type="tel" 
                        maxLength={10} 
                        pattern="\d{10}" 
                        title="Please enter exactly 10 digits"
                        autoComplete="off"
                        onInput={(e) => {
                            // Strictly remove non-digits and limit to 10
                            e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '').slice(0, 10);
                        }}
                        placeholder="+91 98765 43210" 
                        className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"
                    />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
                </div>

                <div className="space-y-2 group">
                <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Google Drive Link</label>
                <div className="relative">
                    <input 
                        name="driveLink" 
                        required 
                        type="url" 
                        autoComplete="off"
                        placeholder="HAVING VIDEOS/IMAGES/PPT OF PROTOTYPE" 
                        className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all placeholder-gray-700"
                    />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity"></div>
                </div>
                </div>
            </div>
            
            {/* Idea Description */}
            <div className="space-y-2 group">
            <label className="block text-sm font-bold tracking-widest font-pixel uppercase pl-1 text-white">Your Ideas</label>
            <div className="relative">
                <textarea name="ideaDescription" required autoComplete="off" placeholder="DESCRIBE YOUR INNOVATIVE IDEA IN DETAIL HERE..." rows={6} className="w-full bg-[#050505] border-2 border-gray-700 py-3 px-4 text-white font-pixel tracking-wider focus:border-neon-magenta focus:shadow-[0_0_15px_rgba(215,38,255,0.4)] outline-none transition-all resize-y placeholder-gray-700"></textarea>
                <div className="absolute bottom-2 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-orange opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
            <button 
                type="submit" 
                disabled={isSubmitting} // Disable while sending
                className={`group w-full py-5 px-6 border-2 border-neon-magenta text-lg font-bold uppercase font-pixel tracking-widest transition-all flex items-center justify-center gap-3
                ${isSubmitting 
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed border-gray-600" 
                    : "bg-neon-magenta text-white hover:bg-transparent hover:text-neon-magenta hover:shadow-[0_0_20px_#D726FF]"
                }`}
            >
                {isSubmitting ? "SENDING..." : (
                    <>Submit Idea <span className="material-symbols-outlined text-[24px] group-hover:translate-x-2 transition-transform">send</span></>
                )}
            </button>
            </div>
        </form>
    </div>
</div>
</div>
<Footer />
</>
);
}