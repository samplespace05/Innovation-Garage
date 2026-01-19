// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function Events() {
//   return (
//     <>
//       <Navbar />
//       {/* Main Container matching body class in code3.html */}
//       <main className="flex-1 flex flex-col items-center w-full px-4 md:px-10 py-12 max-w-[1440px] mx-auto bg-cyber-black text-highlight font-pixel min-h-screen">
        
//         {/* HEADER SECTION */}
//         <div className="w-full flex flex-col md:flex-row py-12 gap-8 items-end justify-between mb-12 border-b-4 border-surface-card pb-8">
//             <div className="flex flex-col gap-4 max-w-3xl">
//                 {/* System Active Badge */}
//                 <div className="inline-flex items-center gap-2 bg-surface-card text-secondary px-3 py-1 border-2 border-secondary shadow-[4px_4px_0px_0px_#D726FF] w-fit transform -rotate-1">
//                     <span className="material-symbols-outlined text-xl">calendar_month</span>
//                     <span className="text-xl uppercase tracking-widest">System_V2.0 // Active</span>
//                 </div>
//                 {/* Title */}
//                 <h1 className="text-6xl md:text-8xl font-normal uppercase leading-[0.8] tracking-tight text-warm-white">
//                     EVENTS_<br/>
//                     <span className="text-neon-orange drop-shadow-[4px_4px_0px_rgba(255,106,0,0.8)]">DATABASE</span>
//                 </h1>
//                 {/* Description */}
//                 <p className="text-highlight text-2xl md:text-3xl leading-tight max-w-xl mt-4 border-l-4 border-neon-orange pl-4 bg-white/5 p-2">
//                     {">"} Browsing timeline logs. Accessing upcoming schedules and historical archives.
//                 </p>
//             </div>  
//         </div>

//         {/* FILTERS SECTION */}
//         <div className="w-full mb-16 overflow-x-auto pb-6 scrollbar-hide">
//             <div className="flex gap-4 min-w-max px-2">
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-secondary px-8 border-2 border-white shadow-[4px_4px_0px_0px_#FFF] hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 active:shadow-none">
//                     <span className="text-white text-2xl uppercase font-bold tracking-wide">All Events</span>
//                 </button>
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
//                     <span className="material-symbols-outlined text-[24px]">mic</span>
//                     <span className="text-2xl uppercase tracking-wide">Talks</span>
//                 </button>
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
//                     <span className="material-symbols-outlined text-[24px]">code</span>
//                     <span className="text-2xl uppercase tracking-wide">Hackathons</span>
//                 </button>
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
//                     <span className="material-symbols-outlined text-[24px]">lightbulb</span>
//                     <span className="text-2xl uppercase tracking-wide">Workshops</span>
//                 </button>
//             </div>
//         </div>

// {/* UPCOMING LABEL */}
//         <div className="w-full mb-6 flex items-center gap-4">
//             <div className="bg-secondary text-white px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
//                 2025 // UPCOMING_
//             </div>
//             <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
//         </div>

//         {/* UPCOMING GRID - Updated to match Archive Animation exactly */}
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2 mb-20">
            
//             {/* Card 1: Talks */}
//             <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-[steps(2)] h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-white text-[20px]">mic</span>
//                         <span className="text-white text-xl uppercase tracking-wider font-bold">Talks</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">MAR 12 @ 14:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">AI & Ethics Symposium</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} Debating the moral code of tomorrow. Join experts dissecting AGI implications.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
                        
//                         <button className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             REGISTER_{">"}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Card 2: Hackathon */}
//             <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-[steps(2)] h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-white text-[20px]">code</span>
//                         <span className="text-white text-xl uppercase tracking-wider font-bold">Hack</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">APR 05 / 48H</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">Midnight Hackathon</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} 48 hours to build the impossible. Energy drinks provided. Prizes up to $10k.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
                        
//                         <button className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             REGISTER_{">"}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Card 3: Workshop */}
//             <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-[steps(2)] h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-white text-[20px]">lightbulb</span>
//                         <span className="text-white text-xl uppercase tracking-wider font-bold">Workshop</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">MAY 01 @ 15:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">Design Sprint</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} From idea to prototype in 3 hours. Validate ideas rapidly.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
                        
//                         <button className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             REGISTER_{">"}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* ARCHIVE LABEL */}
//         <div className="w-full mb-6 flex items-center gap-4">
//             <div className="bg-neon-orange text-black px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
//                 2024 // ARCHIVE_
//             </div>
//             <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
//         </div>

//         {/* ARCHIVE GRID */}
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2">
            
//             {/* Archive Card 1 */}
//             <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-black text-[20px]">mic</span>
//                         <span className="text-black text-xl uppercase tracking-wider font-bold">Fireside</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">NOV 20 @ 18:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Founder Stories</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} Unfiltered stories of failure, pivot, and ultimate success from alumni.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <button className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             VIEW_RECAP
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Archive Card 2 */}
//             <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-black text-[20px]">precision_manufacturing</span>
//                         <span className="text-black text-xl uppercase tracking-wider font-bold">Demo Day</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">DEC 15 @ 10:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Robotics Showcase</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} Live demos of student-built rovers and automation systems.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <button className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             VIEW_RECAP
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Archive Card 3 */}
//             <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-black text-[20px]">monetization_on</span>
//                         <span className="text-black text-xl uppercase tracking-wider font-bold">Finance</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">JAN 10 @ 13:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Venture Capital 101</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} How to pitch your seed round. Understand what investors really want.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <button className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             VIEW_RECAP
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* <div className="mt-20 flex justify-center w-full">
//             <button className="flex items-center gap-2 px-10 py-4 border-2 border-white bg-surface-card text-soft-gray hover:bg-white hover:text-black hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 [ ACCESS_OLDER_ARCHIVES ]
//             </button>
//         </div> */}

//         <div className="mt-20 flex justify-center w-full">
//     <button className="
//         flex items-center justify-center gap-2
//         px-16 py-6
//         border-2 border-white
//         bg-surface-card text-gray-400
//         text-2xl font-semibold tracking-wide leading-none
//         hover:bg-white hover:text-black
//         hover:shadow-[12px_12px_0px_0px_#E0AAFF]
//         hover:-translate-x-1 hover:-translate-y-1
//         transition-all
//         relative
//         rounded-none
//     ">
//         [ ACCESS_OLDER_ARCHIVES ]
//     </button>
// </div>


//       </main>
//       <Footer />
//     </>
//   );
// }

// "use client";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";
// import { useState } from "react";

// export default function Events() {
//   const [showRegModal, setShowRegModal] = useState(false);

//   // Logic to handle registration clicks
//   const handleRegister = (link: string | null) => {
//     if (link) {
//         window.open(link, "_blank");
//     } else {
//         setShowRegModal(true);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       {/* Registration Modal */}
//       {showRegModal && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4 animate-fade-in">
//             <div className="bg-surface-card border-2 border-neon-orange p-8 max-w-md w-full pixel-corners text-center shadow-[0_0_50px_-10px_#FF6A00]">
//                 <div className="mx-auto flex h-20 w-20 items-center justify-center bg-neon-orange/10 border-2 border-neon-orange mb-6 shadow-[0_0_15px_#FF6A00]">
//                     <span className="material-symbols-outlined text-5xl text-neon-orange">hourglass_top</span>
//                 </div>
//                 <h3 className="text-3xl font-bold font-pixel mb-2 uppercase text-white">Access Denied</h3>
//                 <p className="text-highlight font-pixel text-lg mb-8 tracking-wider">
//                     Registration lines are currently encrypted. Please wait for the signal. 
//                     <br/><br/>
//                     <span className="text-neon-orange font-bold">STATUS: COMING SOON</span>
//                 </p>
//                 <button 
//                     onClick={() => setShowRegModal(false)} 
//                     className="w-full py-4 bg-neon-orange text-cyber-black font-bold font-pixel uppercase hover:bg-white transition-colors border-2 border-transparent hover:border-white shadow-[0_0_20px_#FF6A00]"
//                 >
//                     Acknowledge
//                 </button>
//             </div>
//         </div>
//       )}

//       {/* Main Container */}
//       <main className="flex-1 flex flex-col items-center w-full px-4 md:px-10 py-12 max-w-[1440px] mx-auto bg-cyber-black text-highlight font-pixel min-h-screen">
        
//         {/* HEADER SECTION */}
//         <div className="w-full flex flex-col md:flex-row py-12 gap-8 items-end justify-between mb-12 border-b-4 border-surface-card pb-8">
//             <div className="flex flex-col gap-4 max-w-3xl">
//                 {/* System Active Badge */}
//                 <div className="inline-flex items-center gap-2 bg-surface-card text-secondary px-3 py-1 border-2 border-secondary shadow-[4px_4px_0px_0px_#D726FF] w-fit transform -rotate-1">
//                     <span className="material-symbols-outlined text-xl">calendar_month</span>
//                     <span className="text-xl uppercase tracking-widest">System_V2.0 // Active</span>
//                 </div>
//                 {/* Title */}
//                 <h1 className="text-6xl md:text-8xl font-normal uppercase leading-[0.8] tracking-tight text-warm-white">
//                     EVENTS_<br/>
//                     <span className="text-neon-orange drop-shadow-[4px_4px_0px_rgba(255,106,0,0.8)]">DATABASE</span>
//                 </h1>
//                 {/* Description */}
//                 <p className="text-highlight text-2xl md:text-3xl leading-tight max-w-xl mt-4 border-l-4 border-neon-orange pl-4 bg-white/5 p-2">
//                     {">"} Browsing timeline logs. Accessing upcoming schedules and historical archives.
//                 </p>
//             </div>  
//         </div>

//         {/* FILTERS SECTION */}
//         <div className="w-full mb-16 overflow-x-auto pb-6 scrollbar-hide">
//             <div className="flex gap-4 min-w-max px-2">
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-secondary px-8 border-2 border-white shadow-[4px_4px_0px_0px_#FFF] hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 active:shadow-none">
//                     <span className="text-white text-2xl uppercase font-bold tracking-wide">All Events</span>
//                 </button>
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
//                     <span className="material-symbols-outlined text-[24px]">mic</span>
//                     <span className="text-2xl uppercase tracking-wide">Talks</span>
//                 </button>
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
//                     <span className="material-symbols-outlined text-[24px]">code</span>
//                     <span className="text-2xl uppercase tracking-wide">Hackathons</span>
//                 </button>
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
//                     <span className="material-symbols-outlined text-[24px]">lightbulb</span>
//                     <span className="text-2xl uppercase tracking-wide">Workshops</span>
//                 </button>
//             </div>
//         </div>

//         {/* UPCOMING LABEL */}
//         <div className="w-full mb-6 flex items-center gap-4">
//             <div className="bg-secondary text-white px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
//                 2025 // UPCOMING_
//             </div>
//             <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
//         </div>

//         {/* UPCOMING GRID */}
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2 mb-20">
            
//             {/* Card 1: Talks (No link, shows modal) */}
//             <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-white text-[20px]">mic</span>
//                         <span className="text-white text-xl uppercase tracking-wider font-bold">Talks</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">MAR 12 @ 14:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">AI & Ethics Symposium</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} Debating the moral code of tomorrow. Join experts dissecting AGI implications.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <button 
//                             onClick={() => handleRegister(null)}
//                             className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1"
//                         >
//                             REGISTER_{">"}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Card 2: Hackathon (Example with Link) */}
//             <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-white text-[20px]">code</span>
//                         <span className="text-white text-xl uppercase tracking-wider font-bold">Hack</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">APR 05 / 48H</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">Midnight Hackathon</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} 48 hours to build the impossible. Energy drinks provided. Prizes up to $10k.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <button 
//                             onClick={() => handleRegister("https://forms.google.com/example")}
//                             className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1"
//                         >
//                             REGISTER_{">"}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Card 3: Workshop */}
//             <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-white text-[20px]">lightbulb</span>
//                         <span className="text-white text-xl uppercase tracking-wider font-bold">Workshop</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">MAY 01 @ 15:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">Design Sprint</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} From idea to prototype in 3 hours. Validate ideas rapidly.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <button 
//                             onClick={() => handleRegister(null)}
//                             className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1"
//                         >
//                             REGISTER_{">"}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* ARCHIVE LABEL */}
//         <div className="w-full mb-6 flex items-center gap-4">
//             <div className="bg-neon-orange text-black px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
//                 2024 // ARCHIVE_
//             </div>
//             <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
//         </div>

//         {/* ARCHIVE GRID */}
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2">
            
//             {/* Archive Card 1 - Updated to Redirect */}
//             <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-black text-[20px]">mic</span>
//                         <span className="text-black text-xl uppercase tracking-wider font-bold">Fireside</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">NOV 20 @ 18:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Founder Stories</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} Unfiltered stories of failure, pivot, and ultimate success from alumni.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <Link href="/events/founder-stories" className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             VIEW_RECAP
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Archive Card 2 - Updated to Redirect */}
//             <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-black text-[20px]">precision_manufacturing</span>
//                         <span className="text-black text-xl uppercase tracking-wider font-bold">Demo Day</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">DEC 15 @ 10:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Robotics Showcase</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} Live demos of student-built rovers and automation systems.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <Link href="/events/robotics-showcase" className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             VIEW_RECAP
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Archive Card 3 - Updated to Redirect */}
//             <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-black text-[20px]">monetization_on</span>
//                         <span className="text-black text-xl uppercase tracking-wider font-bold">Finance</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">JAN 10 @ 13:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Venture Capital 101</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} How to pitch your seed round. Understand what investors really want.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <Link href="/events/vc-101" className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             VIEW_RECAP
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* Access Archives Button - Updated Link */}
//         <div className="mt-20 flex justify-center w-full">
//             <Link href="/archive" className="
//                 flex items-center justify-center gap-2
//                 px-16 py-6
//                 border-2 border-white
//                 bg-surface-card text-gray-400
//                 text-2xl font-semibold tracking-wide leading-none
//                 hover:bg-white hover:text-black
//                 hover:shadow-[12px_12px_0px_0px_#E0AAFF]
//                 hover:-translate-x-1 hover:-translate-y-1
//                 transition-all
//                 relative
//                 rounded-none
//                 uppercase
//                 font-pixel
//             ">
//                 [ ACCESS_OLDER_ARCHIVES ]
//             </Link>
//         </div>

//       </main>
//       <Footer />
//     </>
//   );
// }








// "use client";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";
// import { useState } from "react";
// import InteractiveNodes from "@/components/InteractiveNodes"; 

// export default function Events() {
//   const [showRegModal, setShowRegModal] = useState(false);

//   // Logic to handle registration clicks
//   const handleRegister = (link: string | null) => {
//     if (link) {
//         window.open(link, "_blank");
//     } else {
//         setShowRegModal(true);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       {/* Registration Modal */}
//       {showRegModal && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4 animate-fade-in">
//             <div className="bg-surface-card border-2 border-neon-orange p-8 max-w-md w-full pixel-corners text-center shadow-[0_0_50px_-10px_#FF6A00]">
//                 <div className="mx-auto flex h-20 w-20 items-center justify-center bg-neon-orange/10 border-2 border-neon-orange mb-6 shadow-[0_0_15px_#FF6A00]">
//                     <span className="material-symbols-outlined text-5xl text-neon-orange">hourglass_top</span>
//                 </div>
//                 <h3 className="text-3xl font-bold font-pixel mb-2 uppercase text-white">Access Denied</h3>
//                 <p className="text-highlight font-pixel text-lg mb-8 tracking-wider">
//                     Registration lines are currently encrypted. Please wait for the signal. 
//                     <br/><br/>
//                     <span className="text-neon-orange font-bold">STATUS: COMING SOON</span>
//                 </p>
//                 <button 
//                     onClick={() => setShowRegModal(false)} 
//                     className="w-full py-4 bg-neon-orange text-cyber-black font-bold font-pixel uppercase hover:bg-white transition-colors border-2 border-transparent hover:border-white shadow-[0_0_20px_#FF6A00]"
//                 >
//                     Acknowledge
//                 </button>
//             </div>
//         </div>
//       )}

//       {/* Main Container */}
//       <main className="flex-1 flex flex-col items-center w-full px-4 md:px-10 py-12 max-w-[1440px] mx-auto bg-cyber-black text-highlight font-pixel min-h-screen">
        
//         {/* HEADER SECTION - UPDATED LAYOUT */}
//         <div className="relative w-full py-12 mb-12 border-b-4 border-surface-card pb-8 overflow-hidden rounded-md group">
            
//             {/* 1. BACKGROUND ANIMATION (Absolute) */}
//             <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
//                 <InteractiveNodes biasRight={true} /> {/* Bias prop enabled */}
//             </div>

//             {/* 2. GRADIENT FADE (To ensure text on left is readable) */}
//             <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyber-black via-cyber-black/80 to-transparent pointer-events-none"></div>

//             {/* 3. CONTENT (Relative z-10) */}
//             <div className="relative z-10 flex flex-col gap-4 max-w-3xl pointer-events-none">
//                 <div className="inline-flex items-center gap-2 bg-surface-card text-secondary px-3 py-1 border-2 border-secondary shadow-[4px_4px_0px_0px_#D726FF] w-fit transform -rotate-1">
//                     <span className="material-symbols-outlined text-xl">calendar_month</span>
//                     <span className="text-xl uppercase tracking-widest">System_V2.0 // Active</span>
//                 </div>
//                 <h1 className="text-6xl md:text-8xl font-normal uppercase leading-[0.8] tracking-tight text-warm-white">
//                     EVENTS_<br/>
//                     <span className="text-neon-orange drop-shadow-[4px_4px_0px_rgba(255,106,0,0.8)]">DATABASE</span>
//                 </h1>
//                 <p className="text-highlight text-2xl md:text-3xl leading-tight max-w-xl mt-4 border-l-4 border-neon-orange pl-4 bg-black/40 p-2 backdrop-blur-sm">
//                     {">"} Browsing timeline logs. Accessing upcoming schedules and historical archives.
//                 </p>
//             </div>  
//         </div>

//         {/* FILTERS SECTION */}
//         <div className="w-full mb-16 overflow-x-auto pb-6 scrollbar-hide">
//             <div className="flex gap-4 min-w-max px-2">
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-secondary px-8 border-2 border-white shadow-[4px_4px_0px_0px_#FFF] hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 active:shadow-none">
//                     <span className="text-white text-2xl uppercase font-bold tracking-wide">All Events</span>
//                 </button>
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
//                     <span className="material-symbols-outlined text-[24px]">mic</span>
//                     <span className="text-2xl uppercase tracking-wide">Talks</span>
//                 </button>
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
//                     <span className="material-symbols-outlined text-[24px]">code</span>
//                     <span className="text-2xl uppercase tracking-wide">Hackathons</span>
//                 </button>
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
//                     <span className="material-symbols-outlined text-[24px]">lightbulb</span>
//                     <span className="text-2xl uppercase tracking-wide">Workshops</span>
//                 </button>
//             </div>
//         </div>

//         {/* UPCOMING LABEL */}
//         <div className="w-full mb-6 flex items-center gap-4">
//             <div className="bg-secondary text-white px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
//                 2025 // UPCOMING_
//             </div>
//             <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
//         </div>

//         {/* UPCOMING GRID */}
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2 mb-20">
            
//             {/* Card 1: Talks (No link, shows modal) */}
//             <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-white text-[20px]">mic</span>
//                         <span className="text-white text-xl uppercase tracking-wider font-bold">Talks</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">MAR 12 @ 14:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">AI & Ethics Symposium</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} Debating the moral code of tomorrow. Join experts dissecting AGI implications.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <button 
//                             onClick={() => handleRegister(null)}
//                             className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1"
//                         >
//                             REGISTER_{">"}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Card 2: Hackathon (Example with Link) */}
//             <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-white text-[20px]">code</span>
//                         <span className="text-white text-xl uppercase tracking-wider font-bold">Hack</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">APR 05 / 48H</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">Midnight Hackathon</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} 48 hours to build the impossible. Energy drinks provided. Prizes up to $10k.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <button 
//                             onClick={() => handleRegister("https://forms.google.com/example")}
//                             className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1"
//                         >
//                             REGISTER_{">"}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Card 3: Workshop */}
//             <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-white text-[20px]">lightbulb</span>
//                         <span className="text-white text-xl uppercase tracking-wider font-bold">Workshop</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">MAY 01 @ 15:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">Design Sprint</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} From idea to prototype in 3 hours. Validate ideas rapidly.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <button 
//                             onClick={() => handleRegister(null)}
//                             className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1"
//                         >
//                             REGISTER_{">"}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* ARCHIVE LABEL */}
//         <div className="w-full mb-6 flex items-center gap-4">
//             <div className="bg-neon-orange text-black px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
//                 2024 // ARCHIVE_
//             </div>
//             <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
//         </div>

//         {/* ARCHIVE GRID */}
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2">
            
//             {/* Archive Card 1 */}
//             <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-black text-[20px]">mic</span>
//                         <span className="text-black text-xl uppercase tracking-wider font-bold">Fireside</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">NOV 20 @ 18:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Founder Stories</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} Unfiltered stories of failure, pivot, and ultimate success from alumni.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <Link href="/events/founder-stories" className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             VIEW_RECAP
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Archive Card 2 */}
//             <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-black text-[20px]">precision_manufacturing</span>
//                         <span className="text-black text-xl uppercase tracking-wider font-bold">Demo Day</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">DEC 15 @ 10:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Robotics Showcase</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} Live demos of student-built rovers and automation systems.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <Link href="/events/robotics-showcase" className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             VIEW_RECAP
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Archive Card 3 */}
//             <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-black text-[20px]">monetization_on</span>
//                         <span className="text-black text-xl uppercase tracking-wider font-bold">Finance</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">JAN 10 @ 13:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Venture Capital 101</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} How to pitch your seed round. Understand what investors really want.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <Link href="/events/vc-101" className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             VIEW_RECAP
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* Access Archives Button - Updated Link */}
//         <div className="mt-20 flex justify-center w-full">
//             <Link href="/archive" className="
//                 flex items-center justify-center gap-2
//                 px-16 py-6
//                 border-2 border-white
//                 bg-surface-card text-gray-400
//                 text-2xl font-semibold tracking-wide leading-none
//                 hover:bg-white hover:text-black
//                 hover:shadow-[12px_12px_0px_0px_#E0AAFF]
//                 hover:-translate-x-1 hover:-translate-y-1
//                 transition-all
//                 relative
//                 rounded-none
//                 uppercase
//                 font-pixel
//             ">
//                 [ ACCESS_OLDER_ARCHIVES ]
//             </Link>
//         </div>

//       </main>
//       <Footer />
//     </>
//   );
// }







// "use client";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";
// import { useState } from "react";
// import InteractiveGrid from "@/components/InteractiveGrid"; // <--- Import the Grid Component

// export default function Events() {
//   const [showRegModal, setShowRegModal] = useState(false);

//   // Logic to handle registration clicks
//   const handleRegister = (link: string | null) => {
//     if (link) {
//         window.open(link, "_blank");
//     } else {
//         setShowRegModal(true);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       {/* Registration Modal */}
//       {showRegModal && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4 animate-fade-in">
//             <div className="bg-surface-card border-2 border-neon-orange p-8 max-w-md w-full pixel-corners text-center shadow-[0_0_50px_-10px_#FF6A00]">
//                 <div className="mx-auto flex h-20 w-20 items-center justify-center bg-neon-orange/10 border-2 border-neon-orange mb-6 shadow-[0_0_15px_#FF6A00]">
//                     <span className="material-symbols-outlined text-5xl text-neon-orange">hourglass_top</span>
//                 </div>
//                 <h3 className="text-3xl font-bold font-pixel mb-2 uppercase text-white">Access Denied</h3>
//                 <p className="text-highlight font-pixel text-lg mb-8 tracking-wider">
//                     Registration lines are currently encrypted. Please wait for the signal. 
//                     <br/><br/>
//                     <span className="text-neon-orange font-bold">STATUS: COMING SOON</span>
//                 </p>
//                 <button 
//                     onClick={() => setShowRegModal(false)} 
//                     className="w-full py-4 bg-neon-orange text-cyber-black font-bold font-pixel uppercase hover:bg-white transition-colors border-2 border-transparent hover:border-white shadow-[0_0_20px_#FF6A00]"
//                 >
//                     Acknowledge
//                 </button>
//             </div>
//         </div>
//       )}

//       {/* Main Container */}
//       <main className="flex-1 flex flex-col items-center w-full px-4 md:px-10 py-12 max-w-[1440px] mx-auto bg-cyber-black text-highlight font-pixel min-h-screen">
        
//         {/* HEADER SECTION - UPDATED */}
//         {/* This container now holds the animation in the background */}
//         <div className="relative w-full py-12 mb-12 border-b-4 border-surface-card pb-8 overflow-hidden group">
            
//             {/* 1. INTERACTIVE GRID BACKGROUND */}
//             <div className="absolute inset-0 z-0 opacity-60 pointer-events-auto">
//                 <InteractiveGrid /> 
//             </div>

//             {/* 2. GRADIENT FADE (Crucial for text readability) */}
//             <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyber-black via-cyber-black/70 to-transparent pointer-events-none"></div>

//             {/* 3. TEXT CONTENT (On Top) */}
//             <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
//                 <div className="inline-flex items-center gap-2 bg-surface-card text-secondary px-3 py-1 border-2 border-secondary shadow-[4px_4px_0px_0px_#D726FF] w-fit transform -rotate-1">
//                     <span className="material-symbols-outlined text-xl">calendar_month</span>
//                     <span className="text-xl uppercase tracking-widest">System_V2.0 // Active</span>
//                 </div>
//                 <h1 className="text-6xl md:text-8xl font-normal uppercase leading-[0.8] tracking-tight text-warm-white drop-shadow-md">
//                     EVENTS_<br/>
//                     <span className="text-neon-orange drop-shadow-[4px_4px_0px_rgba(255,106,0,0.8)]">DATABASE</span>
//                 </h1>
//                 <p className="text-highlight text-2xl md:text-3xl leading-tight max-w-xl mt-4 border-l-4 border-neon-orange pl-4 bg-black/40 p-2 backdrop-blur-sm">
//                     {">"} Browsing timeline logs. Accessing upcoming schedules and historical archives.
//                 </p>
//             </div>  
//         </div>

//         {/* FILTERS SECTION */}
//         <div className="w-full mb-16 overflow-x-auto pb-6 scrollbar-hide">
//             <div className="flex gap-4 min-w-max px-2">
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-secondary px-8 border-2 border-white shadow-[4px_4px_0px_0px_#FFF] hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 active:shadow-none">
//                     <span className="text-white text-2xl uppercase font-bold tracking-wide">All Events</span>
//                 </button>
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
//                     <span className="material-symbols-outlined text-[24px]">mic</span>
//                     <span className="text-2xl uppercase tracking-wide">Talks</span>
//                 </button>
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
//                     <span className="material-symbols-outlined text-[24px]">code</span>
//                     <span className="text-2xl uppercase tracking-wide">Hackathons</span>
//                 </button>
//                 <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
//                     <span className="material-symbols-outlined text-[24px]">lightbulb</span>
//                     <span className="text-2xl uppercase tracking-wide">Workshops</span>
//                 </button>
//             </div>
//         </div>

//         {/* UPCOMING LABEL */}
//         <div className="w-full mb-6 flex items-center gap-4">
//             <div className="bg-secondary text-white px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
//                 2025 // UPCOMING_
//             </div>
//             <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
//         </div>

//         {/* UPCOMING GRID */}
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2 mb-20">
            
//             {/* Card 1: Talks */}
//             <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#FF6A00] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-white text-[20px]">mic</span>
//                         <span className="text-white text-xl uppercase tracking-wider font-bold">Talks</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">MAR 12 @ 14:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">AI & Ethics Symposium</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} Debating the moral code of tomorrow. Join experts dissecting AGI implications.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <button 
//                             onClick={() => handleRegister(null)}
//                             className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1"
//                         >
//                             REGISTER_{">"}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Card 2: Hackathon */}
//             <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#FF6A00] hover:-translate-x-1 hover:-translate-y-1 transition-all  h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-white text-[20px]">code</span>
//                         <span className="text-white text-xl uppercase tracking-wider font-bold">Hack</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">APR 05 / 48H</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">Midnight Hackathon</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} 48 hours to build the impossible. Energy drinks provided. Prizes up to $10k.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <button 
//                             onClick={() => handleRegister("https://forms.google.com/example")}
//                             className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1"
//                         >
//                             REGISTER_{">"}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Card 3: Workshop */}
//             <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#FF6A00] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-white text-[20px]">lightbulb</span>
//                         <span className="text-white text-xl uppercase tracking-wider font-bold">Workshop</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">MAY 01 @ 15:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">Design Sprint</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} From idea to prototype in 3 hours. Validate ideas rapidly.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <button 
//                             onClick={() => handleRegister(null)}
//                             className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1"
//                         >
//                             REGISTER_{">"}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* ARCHIVE LABEL */}
//         <div className="w-full mb-6 flex items-center gap-4">
//             <div className="bg-neon-orange text-black px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
//                 2024 // ARCHIVE_
//             </div>
//             <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
//         </div>

//         {/* ARCHIVE GRID */}
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2">
            
//             {/* Archive Card 1 */}
//             <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-black text-[20px]">mic</span>
//                         <span className="text-black text-xl uppercase tracking-wider font-bold">Fireside</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">NOV 20 @ 18:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Founder Stories</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} Unfiltered stories of failure, pivot, and ultimate success from alumni.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <Link href="/events/founder-stories" className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             VIEW_RECAP
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Archive Card 2 */}
//             <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-black text-[20px]">precision_manufacturing</span>
//                         <span className="text-black text-xl uppercase tracking-wider font-bold">Demo Day</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">DEC 15 @ 10:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Robotics Showcase</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} Live demos of student-built rovers and automation systems.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <Link href="/events/robotics-showcase" className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             VIEW_RECAP
//                         </Link>
//                     </div>
//                 </div>
//             </div>

//             {/* Archive Card 3 */}
//             <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
//                 <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
//                     <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000')"}}></div>
//                     <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
//                     <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                         <span className="material-symbols-outlined text-black text-[20px]">monetization_on</span>
//                         <span className="text-black text-xl uppercase tracking-wider font-bold">Finance</span>
//                     </div>
//                 </div>
//                 <div className="p-6 flex flex-col flex-1 gap-5">
//                     <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                         <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">JAN 10 @ 13:00</span>
//                     </div>
//                     <div className="flex-1">
//                         <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Venture Capital 101</h3>
//                         <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                             {">>"} How to pitch your seed round. Understand what investors really want.
//                         </p>
//                     </div>
//                     <div className="pt-2 flex items-center justify-between mt-auto">
//                         <Link href="/events/vc-101" className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                             VIEW_RECAP
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         {/* Access Archives Button */}
//         <div className="mt-20 flex justify-center w-full">
//             <Link href="/archive" className="
//                 flex items-center justify-center gap-2
//                 px-16 py-6
//                 border-2 border-white
//                 bg-surface-card text-gray-400
//                 text-2xl font-semibold tracking-wide leading-none
//                  hover:text-white
//                 hover:shadow-[12px_12px_0px_0px_#E0AAFF]
//                 hover:-translate-x-1 hover:-translate-y-1
//                 transition-all
//                 relative
//                 rounded-none
//                 uppercase
//                 font-pixel
//             ">
//                 [ ACCESS_OLDER_ARCHIVES ]
//             </Link>
//         </div>

//       </main>
//       <Footer />
//     </>
//   );
// }






// "use client";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";
// import { useState } from "react";
// import InteractiveGrid from "@/components/InteractiveGrid";
// import EventRegistrationModal from "@/components/EventRegistrationModal";

// // 1. Define Event Data Structure
// type Category = "All" | "Talks" | "Hackathons" | "Workshops";

// interface EventItem {
//   id: number;
//   category: Category;
//   title: string;
//   date: string;
//   description: string;
//   image: string;
//   link: string | null; // null = "Coming Soon" modal
// }
// type Event = {
//   id: string;
//   title: string;
//   date: string; // "March 10-12" or ISO string
//   config: any[];
//   // If you add Status/OpenTime to backend later, add it here
// };
// // 2. Create the Data Array (Move static cards here)
// const upcomingEvents: EventItem[] = [
//   {
//     id: 1,
//     category: "Hackathons",
//     title: "Velocity '26",
//     date: "JAN 24 / 48H",
//     description: "48 hours to build the impossible. Energy drinks provided. Prizes up to 30000.",
//     image: "/events/velocity.png",
//     link: "https://forms.google.com/example"
//   },
//   {
//     id: 2,
//     category: "Workshops",
//     title: "Agentic AI 2.0",
//     date: "Feb '26",
//     description: "From idea to prototype in 3 hours. Validate ideas rapidly.",
//     image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000",
//     link: null
//   }
// ];


// // Archive Data
// const archiveEvents = [
//   {
//     id: 1,
//     tag: "Hackathon",
//     icon: "mic", // Material Symbol Name
//     date: "NOV 20 @ 18:00",
//     title: "Ignite '36",
//     description: "Unfiltered stories of failure, pivot, and ultimate success",
//     image: "/events/ignite36.png",
//     link: "/events/ignite36"
//   },
//   {
//     id: 2,
//     tag: "Demo Day",
//     icon: "precision_manufacturing",
//     date: "22 Sept @ 7:00 pm",
//     title: "Freshers Induction",
//     description: "Live demos of student-built rovers and automation systems.",
//     image: "/events/induction25.png",
//     link: "/events/induction25"
//   },
//   {
//     id: 3,
//     tag: "Workshop",
//     icon: "monetization_on",
//     date: "8 Oct @ 6:30 pm",
//     title: "Agentic AI Workshop",
//     description: "The workshop aimed to introduce participants to Agentic AI concepts.",
//     image: "/events/agenticai.png",
//     link: "/events/agenticai"
//   },
//   {
//     id: 4,
//     tag: "Event",
//     icon: "simulation",
//     date: "24 Oct @ 4:30 pm",
//     title: "Startup Simulation",
//     description: "Startup Simulation challenges you to conquer real-world startup chaos.    ",
//     image: "/events/startupsimulation.png",
//     link: "/events/startupsimulation"
//   }
// ];


// export default function Events() {
//   const [showRegModal, setShowRegModal] = useState(false);
//   const [activeFilter, setActiveFilter] = useState<Category>("All"); // 3. State for Filter

//   // Logic to handle registration clicks
//   const handleRegister = (link: string | null) => {
//     if (link) {
//         window.open(link, "_blank");
//     } else {
//         setShowRegModal(true);
//     }
//   };

//   // 4. Filter Logic
//   const filteredEvents = activeFilter === "All" 
//     ? upcomingEvents 
//     : upcomingEvents.filter(event => event.category === activeFilter);

//   return (
//     <>
//       <Navbar />
//       {/* Registration Modal */}
//       {showRegModal && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm px-4 animate-fade-in">
//             <div className="bg-surface-card border-2 border-neon-orange p-8 max-w-md w-full pixel-corners text-center shadow-[0_0_50px_-10px_#FF6A00]">
//                 <div className="mx-auto flex h-20 w-20 items-center justify-center bg-neon-orange/10 border-2 border-neon-orange mb-6 shadow-[0_0_15px_#FF6A00]">
//                     <span className="material-symbols-outlined text-5xl text-neon-orange">hourglass_top</span>
//                 </div>
//                 <h3 className="text-3xl font-bold font-pixel mb-2 uppercase text-white">Access Denied</h3>
//                 <p className="text-highlight font-pixel text-lg mb-8 tracking-wider">
//                     Registration lines are currently encrypted. Please wait for the signal. 
//                     <br/><br/>
//                     <span className="text-neon-orange font-bold">STATUS: COMING SOON</span>
//                 </p>
//                 <button 
//                     onClick={() => setShowRegModal(false)} 
//                     className="w-full py-4 bg-neon-orange text-cyber-black font-bold font-pixel uppercase hover:bg-white transition-colors border-2 border-transparent hover:border-white shadow-[0_0_20px_#FF6A00]"
//                 >
//                     Acknowledge
//                 </button>
//             </div>
//         </div>
//       )}

//       {/* Main Container */}
//       <main className="flex-1 flex flex-col items-center w-full px-4 md:px-10 py-12 max-w-[1440px] mx-auto bg-cyber-black text-highlight font-pixel min-h-screen">
        
//         {/* HEADER SECTION */}
//         <div className="relative w-full py-12 mb-12 border-b-4 border-surface-card pb-8 overflow-hidden group">
//             <div className="absolute inset-0 z-0 opacity-60 pointer-events-auto">
//                 <InteractiveGrid /> 
//             </div>
//             <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyber-black via-cyber-black/70 to-transparent pointer-events-none"></div>
//             <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
//                 <div className="inline-flex items-center gap-2 bg-surface-card text-secondary px-3 py-1 border-2 border-secondary shadow-[4px_4px_0px_0px_#D726FF] w-fit transform -rotate-1">
//                     <span className="material-symbols-outlined text-xl">calendar_month</span>
//                     <span className="text-xl uppercase tracking-widest">SYSTEM // OPERATIONAL</span>
//                 </div>
//                 <h1 className="text-6xl md:text-8xl font-normal uppercase leading-[0.8] tracking-tight text-warm-white drop-shadow-md">
//                     EVENTS_<br/>
//                     <span className="text-neon-orange ">DATABASE</span>
//                 </h1>
//                 <p className="text-highlight text-2xl md:text-3xl leading-tight max-w-xl mt-4 border-l-4 border-neon-orange pl-4 bg-black/40 p-2 backdrop-blur-sm">
//                     {">"} Browsing timeline logs. Accessing upcoming schedules and historical archives.
//                 </p>
//             </div>  
//         </div>

//         {/* 5. DYNAMIC FILTERS SECTION */}
//         <div className="w-full mb-16 overflow-x-auto pb-6 scrollbar-hide">
//             <div className="flex gap-4 min-w-max px-2">
                
//                 {/* Helper function for buttons to keep code clean */}
//                 {[
//                     { name: "All", label: "All Events", icon: null, color: "white" },
//                     { name: "Talks", label: "Talks", icon: "mic", color: "neon-orange" },
//                     { name: "Hackathons", label: "Hackathons", icon: "code", color: "neon-orange" },
//                     { name: "Workshops", label: "Workshops", icon: "lightbulb", color: "neon-orange" },
//                 ].map((btn) => (
//                     <button 
//                         key={btn.name}
//                         onClick={() => setActiveFilter(btn.name as Category)}
//                         className={`flex h-14 items-center justify-center gap-x-2 rounded-none px-8 border-2 transition-all group
//                         ${activeFilter === btn.name 
//                             ? `bg-secondary border-white text-white shadow-[4px_4px_0px_0px_#FFF] translate-y-1 shadow-none` // Active Style
//                             : `bg-surface-card border-${btn.color} text-${btn.color} shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-${btn.color} hover:text-black hover:translate-y-1 hover:shadow-none` // Inactive Style
//                         }`}
//                     >
//                         {btn.icon && <span className="material-symbols-outlined text-[24px]">{btn.icon}</span>}
//                         <span className="text-2xl uppercase font-bold tracking-wide">{btn.label}</span>
//                     </button>
//                 ))}

//             </div>
//         </div>

//         {/* UPCOMING LABEL */}
//         <div className="w-full mb-6 flex items-center gap-4">
//             <div className="bg-secondary text-white px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
//                 2026 // UPCOMING_
//             </div>
//             <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
//         </div>

//         {/* 6. DYNAMIC UPCOMING GRID */}
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2 mb-20 min-h-[400px]">
//             {filteredEvents.length > 0 ? (
//                 filteredEvents.map((event) => (
//                     <div key={event.id} className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#FF6A00] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none animate-fade-in">
//                         <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
//                             <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: `url('${event.image}')`}}></div>
//                             <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
//                             <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                                 <span className="material-symbols-outlined text-white text-[20px]">
//                                     {event.category === "Talks" ? "mic" : event.category === "Hackathons" ? "code" : "lightbulb"}
//                                 </span>
//                                 <span className="text-white text-xl uppercase tracking-wider font-bold">
//                                     {event.category === "Hackathons" ? "Hack" : event.category === "Workshops" ? "Workshop" : "Talks"}
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="p-6 flex flex-col flex-1 gap-5">
//                             <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                                 <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">{event.date}</span>
//                             </div>
//                             <div className="flex-1">
//                                 <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">{event.title}</h3>
//                                 <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                                     {">>"} {event.description}
//                                 </p>
//                             </div>
//                             <div className="pt-2 flex items-center justify-between mt-auto">
//                                 <button 
//                                     onClick={() => handleRegister(event.link)}
//                                     className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1"
//                                 >
//                                     REGISTER_{">"}
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))
//             ) : (
//                 // Fallback if no events match (Empty State)
//                 <div className="col-span-full flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-700 text-gray-500 font-pixel text-xl">
//                     <span className="material-symbols-outlined text-4xl mb-2">search_off</span>
//                     NO EVENTS FOUND IN THIS CATEGORY
//                 </div>
//             )}
//         </div>

//         {/* ARCHIVE LABEL */}
//         <div className="w-full mb-6 flex items-center gap-4">
//             <div className="bg-neon-orange text-black px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
//                 2025 // ARCHIVE_
//             </div>
//             <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
//         </div>

//         {/* ARCHIVE GRID */}
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2">
            
//             {archiveEvents.map((event) => (
//                 <div key={event.id} className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
                    
//                     {/* Image Section */}
//                     <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
//                         <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: `url('${event.image}')`}}></div>
//                         <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
                        
//                         {/* Corner Tag */}
//                         <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
//                             <span className="material-symbols-outlined text-black text-[20px]">{event.icon}</span>
//                             <span className="text-black text-xl uppercase tracking-wider font-bold">{event.tag}</span>
//                         </div>
//                     </div>

//                     {/* Content Section */}
//                     <div className="p-6 flex flex-col flex-1 gap-5">
//                         <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
//                             <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">{event.date}</span>
//                         </div>
//                         <div className="flex-1">
//                             <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">{event.title}</h3>
//                             <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
//                                 {">>"} {event.description}
//                             </p>
//                         </div>
//                         <div className="pt-2 flex items-center justify-between mt-auto">
//                             <Link href={event.link} className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
//                                 VIEW_RECAP
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             ))}

//         </div>

//         {/* Access Archives Button */}
//         <div className="mt-20 flex justify-center w-full">
//             <Link href="/archive" className="
//                 flex items-center justify-center gap-2
//                 px-16 py-6
//                 border-2 border-white
//                 bg-surface-card text-gray-400
//                 text-2xl font-semibold tracking-wide leading-none
//                 hover:text-white
//                 hover:shadow-[12px_12px_0px_0px_#E0AAFF]
//                 hover:-translate-x-1 hover:-translate-y-1
//                 transition-all
//                 relative
//                 rounded-none
//                 uppercase
//                 font-pixel
//             ">
//                 [ ACCESS_OLDER_ARCHIVES ]
//             </Link>
//         </div>

//       </main>
//       <Footer />
//     </>
//   );
// }




















"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import InteractiveGrid from "@/components/InteractiveGrid";
import EventRegistrationModal from "@/components/EventRegistrationModal";

// ==========================================
// 1. TYPES & INTERFACES
// ==========================================
type Category = "All" | "Talks" | "Hackathons" | "Workshops";

interface EventItem {
  id: number;
  category: Category;
  title: string;
  date: string;
  description: string;
  image: string;
  link: string | null; // Legacy external link (e.g. Google Forms)
  adminEventId?: string; // 🔴 LINK TO BACKEND (e.g. "evt_1737...")
}

// Data structure coming from the API
interface ServerEvent {
  id: string;
  title: string;
  status: string;
  config: any[]; // The dynamic questions
}

// ==========================================
// 2. STATIC DATA (Your Design Control)
// ==========================================
const upcomingEvents: EventItem[] = [
  {
    id: 1,
    category: "Hackathons",
    title: "Velocity '26",
    date: "JAN 24 / 48H",
    description: "48 hours to build the impossible. Energy drinks provided. Prizes up to 30000.",
    image: "/events/velocity.png",
    link: null, 
    // 👇 PASTE THE ID YOU GOT FROM ADMIN PANEL HERE (e.g., "evt_170000...")
    // If this ID exists in the Admin Panel and is Active, the Modal opens.
    adminEventId: "evt_1768853845084" 
  },
  {
    id: 2,
    category: "Workshops",
    title: "Agentic AI 2.0",
    date: "Feb '26",
    description: "From idea to prototype in 3 hours. Validate ideas rapidly.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000",
    link: null,
    // No adminEventId + No link = "Coming Soon" Toast
  }
];

// Archive Data (Unchanged)
const archiveEvents = [
  {
    id: 1,
    tag: "Hackathon",
    icon: "mic",
    date: "NOV 20 @ 18:00",
    title: "Ignite '36",
    description: "Unfiltered stories of failure, pivot, and ultimate success",
    image: "/events/ignite36.png",
    link: "/events/ignite36"
  },
  {
    id: 2,
    tag: "Demo Day",
    icon: "precision_manufacturing",
    date: "22 Sept @ 7:00 pm",
    title: "Freshers Induction",
    description: "Live demos of student-built rovers and automation systems.",
    image: "/events/induction25.png",
    link: "/events/induction25"
  },
  {
    id: 3,
    tag: "Workshop",
    icon: "monetization_on",
    date: "8 Oct @ 6:30 pm",
    title: "Agentic AI Workshop",
    description: "The workshop aimed to introduce participants to Agentic AI concepts.",
    image: "/events/agenticai.png",
    link: "/events/agenticai"
  },
  {
    id: 4,
    tag: "Event",
    icon: "simulation",
    date: "24 Oct @ 4:30 pm",
    title: "Startup Simulation",
    description: "Startup Simulation challenges you to conquer real-world startup chaos.",
    image: "/events/startupsimulation.png",
    link: "/events/startupsimulation"
  }
];

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function Events() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  
  // Dynamic Logic States
  const [serverEvents, setServerEvents] = useState<ServerEvent[]>([]); // Stores live forms
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEventConfig, setSelectedEventConfig] = useState<any>(null);
  
  // UI States
  const [toastMessage, setToastMessage] = useState("");

  // --- FETCH ACTIVE EVENTS ON LOAD ---
  useEffect(() => {
    async function fetchActiveEvents() {
      try {
        const res = await fetch("/api/events");
        const result = await res.json();
        if (result.success) {
          setServerEvents(result.data); // Only 'Active' events return here
        }
      } catch (e) {
        console.error("System Error: Failed to sync with event database");
      }
    }
    fetchActiveEvents();
  }, []);

  // --- HANDLE REGISTER CLICK ---
//   const handleRegister = (eventItem: EventItem) => {
    // 1. Check if it's a Dynamic Admin Event
    // if (eventItem.adminEventId) {
    //     // Look for this ID in the list of ACTIVE events fetched from server
    //     const liveConfig = serverEvents.find(e => e.id === eventItem.adminEventId);
        
    //     if (liveConfig) {
    //         // Found & Active -> Open Modal
    //         setSelectedEventConfig({
    //             id: liveConfig.id,
    //             title: eventItem.title, // Use the pretty static title from your code
    //             config: liveConfig.config // Use the dynamic questions from DB
    //         });
    //         setIsModalOpen(true);
    //         return;
    //     } else {
    //         // ID exists in code, but not returned by API -> Event is Closed/Inactive
    //         showToast("REGISTRATION CLOSED / NOT YET ACTIVE");
    //         return;
    //     }
    // }
    // Inside handleRegister
    const handleRegister = (eventItem: EventItem) => {
    // 1. Check if it's a Dynamic Admin Event
    if (eventItem.adminEventId) {
        // Look for this ID in the list of events fetched from server
        const liveConfig = serverEvents.find(e => e.id === eventItem.adminEventId);
        
        // CHECK STATUS HERE
        if (liveConfig && liveConfig.status === "Active") {
            // Found & Active -> Open Modal
            setSelectedEventConfig({
                id: liveConfig.id,
                title: eventItem.title, 
                config: liveConfig.config 
            });
            setIsModalOpen(true);
            return;
        } else {
            // If status is "Closed", "Archived" or event not found
            showToast("REGISTRATION CLOSED / NOT YET ACTIVE");
            return;
        }
    }
    // 2. Legacy External Link (Google Form Fallback)
    if (eventItem.link) {
      window.open(eventItem.link, "_blank");
      return;
    }

    // 3. No ID and No Link -> Coming Soon
    showToast("REGISTRATION LINES ENCRYPTED. COMING SOON.");
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3500);
  };

  // Filter Logic
  const filteredEvents = activeFilter === "All" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === activeFilter);

  return (
    <>
      <Navbar />
      
      {/* 🔴 DYNAMIC MODAL COMPONENT */}
      {selectedEventConfig && (
        <EventRegistrationModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            event={selectedEventConfig}
        />
      )}

      {/* 🔴 TOAST NOTIFICATION (Fixed Position) */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-[100] bg-surface-card border-l-4 border-neon-orange p-6 shadow-[0_0_20px_rgba(255,106,0,0.3)] animate-fade-in-left max-w-sm">
            <div className="flex items-center gap-3 mb-1">
                <span className="material-symbols-outlined text-neon-orange">warning</span>
                <h4 className="text-neon-orange font-pixel uppercase font-bold text-lg">System Alert</h4>
            </div>
            <p className="text-white font-mono text-sm leading-relaxed">{toastMessage}</p>
        </div>
      )}

      <main className="flex-1 flex flex-col items-center w-full px-4 md:px-10 py-12 max-w-[1440px] mx-auto bg-cyber-black text-highlight font-pixel min-h-screen">
        
        {/* HEADER SECTION */}
        <div className="relative w-full py-12 mb-12 border-b-4 border-surface-card pb-8 overflow-hidden group">
            <div className="absolute inset-0 z-0 opacity-60 pointer-events-auto">
                <InteractiveGrid /> 
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-cyber-black via-cyber-black/70 to-transparent pointer-events-none"></div>
            <div className="relative z-10 flex flex-col gap-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 bg-surface-card text-secondary px-3 py-1 border-2 border-secondary shadow-[4px_4px_0px_0px_#D726FF] w-fit transform -rotate-1">
                    <span className="material-symbols-outlined text-xl">calendar_month</span>
                    <span className="text-xl uppercase tracking-widest">System_V2.0 // Active</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-normal uppercase leading-[0.8] tracking-tight text-warm-white drop-shadow-md">
                    EVENTS_<br/>
                    <span className="text-neon-orange ">DATABASE</span>
                </h1>
                <p className="text-highlight text-2xl md:text-3xl leading-tight max-w-xl mt-4 border-l-4 border-neon-orange pl-4 bg-black/40 p-2 backdrop-blur-sm">
                    {">"} Browsing timeline logs. Accessing upcoming schedules and historical archives.
                </p>
            </div>  
        </div>

        {/* FILTERS SECTION */}
        <div className="w-full mb-16 overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-4 min-w-max px-2">
                {[
                    { name: "All", label: "All Events", icon: null, color: "white" },
                    { name: "Talks", label: "Talks", icon: "mic", color: "neon-orange" },
                    { name: "Hackathons", label: "Hackathons", icon: "code", color: "neon-orange" },
                    { name: "Workshops", label: "Workshops", icon: "lightbulb", color: "neon-orange" },
                ].map((btn) => (
                    <button 
                        key={btn.name}
                        onClick={() => setActiveFilter(btn.name as Category)}
                        className={`flex h-14 items-center justify-center gap-x-2 rounded-none px-8 border-2 transition-all group
                        ${activeFilter === btn.name 
                            ? `bg-secondary border-white text-white shadow-[4px_4px_0px_0px_#FFF] translate-y-1 shadow-none` 
                            : `bg-surface-card border-${btn.color} text-${btn.color} shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-${btn.color} hover:text-black hover:translate-y-1 hover:shadow-none`
                        }`}
                    >
                        {btn.icon && <span className="material-symbols-outlined text-[24px]">{btn.icon}</span>}
                        <span className="text-2xl uppercase font-bold tracking-wide">{btn.label}</span>
                    </button>
                ))}
            </div>
        </div>

        {/* UPCOMING LABEL */}
        <div className="w-full mb-6 flex items-center gap-4">
            <div className="bg-secondary text-white px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
                2026 // UPCOMING_
            </div>
            <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
        </div>

        {/* UPCOMING GRID (DYNAMICALLY INTERACTIVE) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2 mb-20 min-h-[400px]">
            {filteredEvents.length > 0 ? (
                filteredEvents.map((event) => (
                    <div key={event.id} className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#FF6A00] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none animate-fade-in">
                        <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
                            <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: `url('${event.image}')`}}></div>
                            <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
                            <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
                                <span className="material-symbols-outlined text-white text-[20px]">
                                    {event.category === "Talks" ? "mic" : event.category === "Hackathons" ? "code" : "lightbulb"}
                                </span>
                                <span className="text-white text-xl uppercase tracking-wider font-bold">
                                    {event.category === "Hackathons" ? "Hack" : event.category === "Workshops" ? "Workshop" : "Talks"}
                                </span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col flex-1 gap-5">
                            <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
                                <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">{event.date}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">{event.title}</h3>
                                <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
                                    {">>"} {event.description}
                                </p>
                            </div>
                            <div className="pt-2 flex items-center justify-between mt-auto">
                                <button 
                                    onClick={() => handleRegister(event)} // 🔴 PASS FULL EVENT OBJECT
                                    className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1"
                                >
                                    REGISTER_{">"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="col-span-full flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-700 text-gray-500 font-pixel text-xl">
                    <span className="material-symbols-outlined text-4xl mb-2">search_off</span>
                    NO EVENTS FOUND IN THIS CATEGORY
                </div>
            )}
        </div>

        {/* ARCHIVE LABEL */}
        <div className="w-full mb-6 flex items-center gap-4">
            <div className="bg-neon-orange text-black px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
                2025 // ARCHIVE_
            </div>
            <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
        </div>

        {/* ARCHIVE GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2">
            
            {archiveEvents.map((event) => (
                <div key={event.id} className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
                    <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
                        <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: `url('${event.image}')`}}></div>
                        <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
                        <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
                            <span className="material-symbols-outlined text-black text-[20px]">{event.icon}</span>
                            <span className="text-black text-xl uppercase tracking-wider font-bold">{event.tag}</span>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1 gap-5">
                        <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
                            <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">{event.date}</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">{event.title}</h3>
                            <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
                                {">>"} {event.description}
                            </p>
                        </div>
                        <div className="pt-2 flex items-center justify-between mt-auto">
                            <Link href={event.link || "/events"} className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
                                VIEW_RECAP
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

        </div>

        {/* Access Archives Button */}
        <div className="mt-20 flex justify-center w-full">
            <Link href="/archive" className="
                flex items-center justify-center gap-2
                px-16 py-6
                border-2 border-white
                bg-surface-card text-gray-400
                text-2xl font-semibold tracking-wide leading-none
                hover:text-white
                hover:shadow-[12px_12px_0px_0px_#E0AAFF]
                hover:-translate-x-1 hover:-translate-y-1
                transition-all
                relative
                rounded-none
                uppercase
                font-pixel
            ">
                [ ACCESS_OLDER_ARCHIVES ]
            </Link>
        </div>

      </main>
      <Footer />
    </>
  );
}