// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
// //       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
// //         <Image
// //           className="dark:invert"
// //           src="/next.svg"
// //           alt="Next.js logo"
// //           width={100}
// //           height={20}
// //           priority
// //         />
// //         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
// //           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
// //             To get started, edit the page.tsx file.
// //           </h1>
// //           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
// //             Looking for a starting point or more instructions? Head over to{" "}
// //             <a
// //               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //               className="font-medium text-zinc-950 dark:text-zinc-50"
// //             >
// //               Templates
// //             </a>{" "}
// //             or the{" "}
// //             <a
// //               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //               className="font-medium text-zinc-950 dark:text-zinc-50"
// //             >
// //               Learning
// //             </a>{" "}
// //             center.
// //           </p>
// //         </div>
// //         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
// //           <a
// //             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
// //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <Image
// //               className="dark:invert"
// //               src="/vercel.svg"
// //               alt="Vercel logomark"
// //               width={16}
// //               height={16}
// //             />
// //             Deploy Now
// //           </a>
// //           <a
// //             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
// //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Documentation
// //           </a>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }


// // import Navbar from "@/components/Navbar";

// // export default function Home() {
// //   return (
// //     <>
// //       <Navbar />
// //       <main className="min-h-screen pt-20 bg-cyber-black text-warm-white">
// //         {/* HERO */}
// //         <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
// //             <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20 bg-[size:40px_40px]"></div>
// //             <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center gap-8">
// //                 <div className="inline-flex items-center gap-3 px-4 py-1 bg-cyber-gray/80 backdrop-blur-sm border border-lavender/30 mb-4 pixel-corners transform -skew-x-12 border-l-4 border-l-neon-orange">
// //                     <span className="w-2 h-2 bg-neon-orange animate-pulse shadow-[0_0_8px_#FF6A00]"></span>
// //                     <span className="text-lavender text-lg font-pixel uppercase tracking-widest">Est. 2024 // Cyber-Retro</span>
// //                 </div>

// //                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-pixel uppercase leading-[0.9] max-w-6xl drop-shadow-[0_4px_0_rgba(215,38,255,0.4)]">
// //                     "The best way to <br/>
// //                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-orange to-neon-magenta">predict the future</span> <br/>
// //                     is to <span className="border-b-4 border-neon-orange text-white">invent it</span>."
// //                 </h1>
// //             </div>
// //         </header>

// //         {/* MARQUEE */}
// //         <div className="relative bg-cyber-gray overflow-hidden py-3 border-y border-neon-orange/50">
// //             <div className="flex animate-marquee whitespace-nowrap gap-16 font-pixel text-3xl uppercase tracking-widest items-center text-lavender">
// //                 <span>/// Innovation Garage</span>
// //                 <span className="text-neon-orange">✦ Build The Future</span>
// //                 <span>/// Radical Ideas</span>
// //                 <span className="text-neon-magenta">✦ No Limits</span>
// //                 <span>/// Innovation Garage</span>
// //             </div>
// //         </div>
// //       </main>
// //     </>
// //   );
// // }

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main className="bg-background-main text-text-main font-display overflow-x-hidden selection:bg-primary selection:text-background-main">
        
//         {/* ================= HERO SECTION ================= */}
//         <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background-main">
//             <div className="absolute inset-0 z-0">
//                 {/* Scanlines & Gradients */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-background-main/60 via-background-main/90 to-background-main z-10 bg-scanlines bg-[length:100%_4px]"></div>
//                 {/* Background Image with Effects */}
//                 <div className="w-full h-full bg-cover bg-center opacity-10 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal" 
//                      style={{backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')", filter: "contrast(1.2) hue-rotate(15deg)"}}>
//                 </div>
//                 <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0 bg-[size:40px_40px]"></div>
//             </div>

//             {/* Glowing Blobs */}
//             <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary rounded-full blur-[120px] opacity-30 animate-pulse-slow"></div>
//             <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary rounded-full blur-[140px] opacity-20 animate-pulse-slow"></div>

//             <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center gap-8">
//                 <div className="inline-flex items-center gap-3 px-4 py-1 bg-surface-card/80 backdrop-blur-sm border border-highlight/30 transform hover:-translate-y-1 transition-transform mb-4 pixel-corners">
//                     <span className="w-2 h-2 bg-primary animate-pulse shadow-[0_0_8px_#FF6A00]"></span>
//                     <span className="text-highlight text-lg font-pixel uppercase tracking-widest">Est. 2016 // Cyber-Retro</span>
//                 </div>

//                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-pixel uppercase text-text-main leading-[0.9] tracking-normal max-w-6xl drop-shadow-[0_4px_0_rgba(215,38,255,0.4)]">
//                     "The best way to <br/>
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">predict the future</span> <br/>
//                     is to <span className="border-b-4 border-primary text-white">invent it</span>."
//                 </h1>

//                 <p className="max-w-2xl text-text-main/70 text-lg md:text-xl font-display mt-6 bg-background-main/50 backdrop-blur-md p-6 border border-white/10 pixel-corners">
//                     Welcome to the <span className="text-primary font-bold">Innovation Garage</span>. A sanctuary for builders, dreamers, and radical thinkers shaping tomorrow.
//                 </p>
//             </div>
//         </header>

//         {/* ================= MARQUEE STRIP ================= */}
//         <div className="relative bg-surface-card overflow-hidden py-3 border-y border-primary/50 z-20">
//             <div className="absolute inset-0 bg-scanlines opacity-50 pointer-events-none"></div>
//             <div className="flex animate-marquee whitespace-nowrap gap-16 font-pixel text-3xl uppercase tracking-widest items-center text-highlight">
//                 <span>/// Innovation Garage</span>
//                 <span className="text-primary">✦ Build The Future</span>
//                 <span>/// Radical Ideas</span>
//                 <span className="text-secondary">✦ No Limits</span>
//                 <span>/// Innovation Garage</span>
//                 <span className="text-primary">✦ Build The Future</span>
//                 <span>/// Radical Ideas</span>
//                 <span className="text-secondary">✦ No Limits</span>
//                 {/* Duplicated for seamless loop */}
//                 <span>/// Innovation Garage</span>
//                 <span className="text-primary">✦ Build The Future</span>
//             </div>
//         </div>

//         {/* ================= ABOUT SECTION ================= */}
//         <section className="relative py-24 px-6 bg-background-main overflow-hidden">
//             <div className="max-w-[1280px] mx-auto relative z-10">
//                 <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
//                     <div>
//                         <span className="text-primary font-pixel text-xl uppercase tracking-widest mb-2 block">01 // Who We Are</span>
//                         <h2 className="text-5xl md:text-6xl font-pixel uppercase text-text-main leading-none">
//                             About The <span className="text-secondary">Garage</span>
//                         </h2>
//                     </div>
//                     <p className="max-w-md text-text-main/60 font-display text-sm text-right hidden md:block">
//                         A collaborative ecosystem where students experiment without fear of failure.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Mission Card */}
//                     <div className="group relative p-8 rounded-none bg-surface-card border border-white/10 hover:border-primary transition-all duration-300 pixel-corners">
//                         <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[4rem]"></div>
//                         <div className="flex items-start justify-between mb-8">
//                             <div className="size-14 bg-background-main border border-primary text-primary flex items-center justify-center pixel-corners shadow-[4px_4px_0_0_#FF6A00]">
//                                 <span className="material-symbols-outlined text-3xl">target</span>
//                             </div>
//                             <span className="font-pixel text-6xl text-white/5 group-hover:text-primary/10 transition-colors">01</span>
//                         </div>
//                         <h3 className="text-3xl font-pixel uppercase text-text-main mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
//                         <p className="text-text-main/70 text-lg leading-relaxed font-display mb-6">
//                             Innovation happens at the intersection of discipline and play. We foster a community of diverse thinkers who challenge the status quo.
//                         </p>
//                     </div>

//                     {/* History Card */}
//                     <div className="group relative p-8 rounded-none bg-surface-card border border-white/10 hover:border-secondary transition-all duration-300 pixel-corners">
//                         <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-[4rem]"></div>
//                         <div className="flex items-start justify-between mb-8">
//                             <div className="size-14 bg-background-main border border-secondary text-secondary flex items-center justify-center pixel-corners shadow-[4px_4px_0_0_#D726FF]">
//                                 <span className="material-symbols-outlined text-3xl">history_edu</span>
//                             </div>
//                             <span className="font-pixel text-6xl text-white/5 group-hover:text-secondary/10 transition-colors">02</span>
//                         </div>
//                         <h3 className="text-3xl font-pixel uppercase text-text-main mb-4 group-hover:text-secondary transition-colors">Our History</h3>
//                         <p className="text-text-main/70 text-lg leading-relaxed font-display mb-6">
//                             From a basement meetup for hardware hackers to a premier campus hub launching 50+ startups. What began as a small group is now a movement.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         {/* ================= PAST EVENTS SLIDER ================= */}
//         <section className="py-20 px-6 bg-surface-card border-t border-white/10 relative overflow-hidden">
//             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
//             <div className="max-w-[1400px] mx-auto relative z-10">
//                 <div className="flex flex-wrap justify-between items-end mb-12 gap-4">
//                     <div>
//                         <span className="text-highlight font-pixel text-xl uppercase tracking-widest mb-2 block">02 // Rewind</span>
//                         <h2 className="text-5xl md:text-6xl text-text-main font-pixel uppercase">Past <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Events</span></h2>
//                     </div>
//                     {/* <div className="flex gap-2">
//                         <button className="w-12 h-12 border border-white/20 hover:bg-white hover:text-black flex items-center justify-center transition-colors pixel-corners">
//                             <span className="material-symbols-outlined">arrow_back</span>
//                         </button>
//                         <button className="w-12 h-12 border border-white/20 hover:bg-white hover:text-black flex items-center justify-center transition-colors pixel-corners">
//                             <span className="material-symbols-outlined">arrow_forward</span>
//                         </button>
//                     </div> */}
//                 </div>

//                 {/* Horizontal Scroll Container */}
//                 <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-thin scrollbar-thumb-primary scrollbar-track-background-main">
                    
//                     {/* Event Card 1 */}
//                     <a className="min-w-[300px] md:min-w-[380px] snap-center group relative block bg-background-main border border-white/10 hover:border-primary transition-all duration-300 pixel-corners" href="#">
//                         <div className="h-56 w-full overflow-hidden relative border-b border-white/10">
//                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')", opacity: 0.8}}></div>
//                             <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="absolute top-4 right-4 bg-black/80 text-primary border border-primary px-2 py-1 font-pixel text-lg uppercase tracking-wider">Hackathon</span>
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-3xl font-pixel uppercase text-text-main mb-2 truncate">Cyber Summit 23</h3>
//                             <p className="text-text-main/60 font-display text-sm mb-4">48 hours of non-stop coding marathon.</p>
//                             <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
//                                 <span className="text-s font-pixel uppercase text-white/50">Oct 12, 2023</span>
//                                 <span className="text-primary font-pixel uppercase text-sm group-hover:translate-x-1 transition-transform">Details {">"}</span>
//                             </div>
//                         </div>
//                     </a>

//                     {/* Event Card 2 */}
//                     <a className="min-w-[300px] md:min-w-[380px] snap-center group relative block bg-background-main border border-white/10 hover:border-secondary transition-all duration-300 pixel-corners" href="#">
//                         <div className="h-56 w-full overflow-hidden relative border-b border-white/10">
//                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop')", opacity: 0.8}}></div>
//                             <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="absolute top-4 right-4 bg-black/80 text-secondary border border-secondary px-2 py-1 font-pixel text-lg uppercase tracking-wider">Workshop</span>
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-3xl font-pixel uppercase text-text-main mb-2 truncate">Design Thinking</h3>
//                             <p className="text-text-main/60 font-display text-sm mb-4">Prototyping future interfaces & UI.</p>
//                             <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
//                                 <span className="text-s font-pixel uppercase text-white/50">Nov 05, 2023</span>
//                                 <span className="text-secondary font-pixel uppercase text-sm group-hover:translate-x-1 transition-transform">Details {">"}</span>
//                             </div>
//                         </div>
//                     </a>

//                     {/* Event Card 3 */}
//                     <a className="min-w-[300px] md:min-w-[380px] snap-center group relative block bg-background-main border border-white/10 hover:border-highlight transition-all duration-300 pixel-corners" href="#">
//                         <div className="h-56 w-full overflow-hidden relative border-b border-white/10">
//                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop')", opacity: 0.8}}></div>
//                             <div className="absolute inset-0 bg-highlight/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="absolute top-4 right-4 bg-black/80 text-highlight border border-highlight px-2 py-1 font-pixel text-lg uppercase tracking-wider">Panel</span>
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-3xl font-pixel uppercase text-text-main mb-2 truncate">AI Ethics Forum</h3>
//                             <p className="text-text-main/60 font-display text-sm mb-4">Debating the ghost in the machine.</p>
//                             <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
//                                 <span className="text-s font-pixel uppercase text-white/50">Dec 10, 2023</span>
//                                 <span className="text-highlight font-pixel uppercase text-sm group-hover:translate-x-1 transition-transform">Details {">"}</span>
//                             </div>
//                         </div>
//                     </a>

//                     {/* Event Card 4 */}
//                     <a className="min-w-[300px] md:min-w-[380px] snap-center group relative block bg-background-main border border-white/10 hover:border-primary transition-all duration-300 pixel-corners" href="#">
//                         <div className="h-56 w-full overflow-hidden relative border-b border-white/10">
//                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop')", opacity: 0.8}}></div>
//                             <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="absolute top-4 right-4 bg-black/80 text-primary border border-primary px-2 py-1 font-pixel text-lg uppercase tracking-wider">Showcase</span>
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-3xl font-pixel uppercase text-text-main mb-2 truncate">Robotics Demo</h3>
//                             <p className="text-text-main/60 font-display text-sm mb-4">Autonomous systems in action.</p>
//                             <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
//                                 <span className="text-s font-pixel uppercase text-white/50">Jan 15, 2024</span>
//                                 <span className="text-primary font-pixel uppercase text-sm group-hover:translate-x-1 transition-transform">Details {">"}</span>
//                             </div>
//                         </div>
//                     </a>

//                 </div>
//             </div>
//         </section>

//       </main>
//       <Footer />
//     </>
//   );
// }




// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main className="bg-background-main text-text-main font-display overflow-x-hidden selection:bg-primary selection:text-background-main">
        
//         {/* ================= HERO SECTION ================= */}
//         <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background-main">
//             <div className="absolute inset-0 z-0">
//                 <div className="absolute inset-0 bg-gradient-to-b from-background-main/60 via-background-main/90 to-background-main z-10 bg-scanlines bg-[length:100%_4px]"></div>
//                 <div className="w-full h-full bg-cover bg-center opacity-10 mix-blend-luminosity transition-all duration-700 hover:mix-blend-normal" 
//                      style={{backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')", filter: "contrast(1.2) hue-rotate(15deg)"}}>
//                 </div>
//                 <div className="absolute inset-0 bg-grid-pattern opacity-20 z-0 bg-[size:40px_40px]"></div>
//             </div>

//             <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary rounded-full blur-[120px] opacity-30 animate-pulse-slow"></div>
//             <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary rounded-full blur-[140px] opacity-20 animate-pulse-slow"></div>

//             <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center gap-8">
//                 <div className="inline-flex items-center gap-3 px-4 py-1 bg-surface-card/80 backdrop-blur-sm border border-highlight/30 transform hover:-translate-y-1 transition-transform mb-4 pixel-corners">
//                     <span className="w-2 h-2 bg-primary animate-pulse shadow-[0_0_8px_#FF6A00]"></span>
//                     <span className="text-highlight text-lg font-pixel uppercase tracking-widest">Est. 2016 // Cyber-Retro</span>
//                 </div>

//                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-pixel uppercase text-text-main leading-[0.9] tracking-normal max-w-6xl drop-shadow-[0_4px_0_rgba(215,38,255,0.4)]">
//                     "The best way to <br/>
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">predict the future</span> <br/>
//                     is to <span className="border-b-4 border-primary text-white">invent it</span>."
//                 </h1>

//                 <p className="max-w-2xl text-text-main/70 text-lg md:text-xl font-display mt-6 bg-background-main/50 backdrop-blur-md p-6 border border-white/10 pixel-corners">
//                     Welcome to the <span className="text-primary font-bold">Innovation Garage</span>. A sanctuary for builders, dreamers, and radical thinkers shaping tomorrow.
//                 </p>
//             </div>
//         </header>

//         {/* ================= MARQUEE STRIP ================= */}
//         <div className="relative bg-surface-card overflow-hidden py-3 border-y border-primary/50 z-20">
//             <div className="absolute inset-0 bg-scanlines opacity-50 pointer-events-none"></div>
//             <div className="flex animate-marquee whitespace-nowrap gap-16 font-pixel text-3xl uppercase tracking-widest items-center text-highlight">
//                 <span>/// Innovation Garage</span>
//                 <span className="text-primary">✦ Build The Future</span>
//                 <span>/// Radical Ideas</span>
//                 <span className="text-secondary">✦ No Limits</span>
//                 <span>/// Innovation Garage</span>
//                 <span className="text-primary">✦ Build The Future</span>
//                 <span>/// Radical Ideas</span>
//                 <span className="text-secondary">✦ No Limits</span>
//                 <span>/// Innovation Garage</span>
//                 <span className="text-primary">✦ Build The Future</span>
//             </div>
//         </div>

//         {/* ================= ABOUT SECTION ================= */}
//         <section className="relative py-24 px-6 bg-background-main overflow-hidden">
//             <div className="max-w-[1280px] mx-auto relative z-10">
//                 <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
//                     <div>
//                         <span className="text-primary font-pixel text-xl uppercase tracking-widest mb-2 block">01 // Who We Are</span>
//                         <h2 className="text-5xl md:text-6xl font-pixel uppercase text-text-main leading-none">
//                             About The <span className="text-secondary">Garage</span>
//                         </h2>
//                     </div>
//                     <p className="max-w-md text-text-main/60 font-display text-sm text-right hidden md:block">
//                         A collaborative ecosystem where students experiment without fear of failure.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Mission Card */}
//                     <div className="group relative p-8 rounded-none bg-surface-card border border-white/10 hover:border-primary transition-all duration-300 pixel-corners">
//                         <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[4rem]"></div>
//                         <div className="flex items-start justify-between mb-8">
//                             <div className="size-14 bg-background-main border border-primary text-primary flex items-center justify-center pixel-corners shadow-[4px_4px_0_0_#FF6A00]">
//                                 <span className="material-symbols-outlined text-3xl">target</span>
//                             </div>
//                             <span className="font-pixel text-6xl text-white/5 group-hover:text-primary/10 transition-colors">01</span>
//                         </div>
//                         <h3 className="text-3xl font-pixel uppercase text-text-main mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
//                         <p className="text-text-main/70 text-lg leading-relaxed font-display mb-6">
//                             Innovation happens at the intersection of discipline and play. We foster a community of diverse thinkers who challenge the status quo.
//                         </p>
//                     </div>

//                     {/* History Card */}
//                     <div className="group relative p-8 rounded-none bg-surface-card border border-white/10 hover:border-secondary transition-all duration-300 pixel-corners">
//                         <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-[4rem]"></div>
//                         <div className="flex items-start justify-between mb-8">
//                             <div className="size-14 bg-background-main border border-secondary text-secondary flex items-center justify-center pixel-corners shadow-[4px_4px_0_0_#D726FF]">
//                                 <span className="material-symbols-outlined text-3xl">history_edu</span>
//                             </div>
//                             <span className="font-pixel text-6xl text-white/5 group-hover:text-secondary/10 transition-colors">02</span>
//                         </div>
//                         <h3 className="text-3xl font-pixel uppercase text-text-main mb-4 group-hover:text-secondary transition-colors">Our History</h3>
//                         <p className="text-text-main/70 text-lg leading-relaxed font-display mb-6">
//                             From a basement meetup for hardware hackers to a premier campus hub launching 50+ startups. What began as a small group is now a movement.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         {/* ================= PAST EVENTS SLIDER ================= */}
//         <section className="py-20 px-6 bg-surface-card border-t border-white/10 relative overflow-hidden">
//             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
//             <div className="max-w-[1400px] mx-auto relative z-10">
//                 <div className="flex flex-wrap justify-between items-end mb-12 gap-4">
//                     <div>
//                         <span className="text-highlight font-pixel text-xl uppercase tracking-widest mb-2 block">02 // Rewind</span>
//                         <h2 className="text-5xl md:text-6xl text-text-main font-pixel uppercase">Past <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Events</span></h2>
//                     </div>
//                 </div>

//                 {/* Horizontal Scroll Container */}
//                 <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-thin scrollbar-thumb-primary scrollbar-track-background-main">
                    
//                     {/* Event Card 1 - Updated HREF */}
//                     <a className="min-w-[300px] md:min-w-[380px] snap-center group relative block bg-background-main border border-white/10 hover:border-primary transition-all duration-300 pixel-corners" href="/events">
//                         <div className="h-56 w-full overflow-hidden relative border-b border-white/10">
//                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')", opacity: 0.8}}></div>
//                             <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="absolute top-4 right-4 bg-black/80 text-primary border border-primary px-2 py-1 font-pixel text-lg uppercase tracking-wider">Hackathon</span>
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-3xl font-pixel uppercase text-text-main mb-2 truncate">Cyber Summit 23</h3>
//                             <p className="text-text-main/60 font-display text-sm mb-4">48 hours of non-stop coding marathon.</p>
//                             <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
//                                 <span className="text-s font-pixel uppercase text-white/50">Oct 12, 2023</span>
//                                 <span className="text-primary font-pixel uppercase text-sm group-hover:translate-x-1 transition-transform">Details {">"}</span>
//                             </div>
//                         </div>
//                     </a>

//                     {/* Event Card 2 - Updated HREF */}
//                     <a className="min-w-[300px] md:min-w-[380px] snap-center group relative block bg-background-main border border-white/10 hover:border-secondary transition-all duration-300 pixel-corners" href="/events">
//                         <div className="h-56 w-full overflow-hidden relative border-b border-white/10">
//                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop')", opacity: 0.8}}></div>
//                             <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="absolute top-4 right-4 bg-black/80 text-secondary border border-secondary px-2 py-1 font-pixel text-lg uppercase tracking-wider">Workshop</span>
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-3xl font-pixel uppercase text-text-main mb-2 truncate">Design Thinking</h3>
//                             <p className="text-text-main/60 font-display text-sm mb-4">Prototyping future interfaces & UI.</p>
//                             <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
//                                 <span className="text-s font-pixel uppercase text-white/50">Nov 05, 2023</span>
//                                 <span className="text-secondary font-pixel uppercase text-sm group-hover:translate-x-1 transition-transform">Details {">"}</span>
//                             </div>
//                         </div>
//                     </a>

//                     {/* Event Card 3 - Updated HREF */}
//                     <a className="min-w-[300px] md:min-w-[380px] snap-center group relative block bg-background-main border border-white/10 hover:border-highlight transition-all duration-300 pixel-corners" href="/events">
//                         <div className="h-56 w-full overflow-hidden relative border-b border-white/10">
//                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop')", opacity: 0.8}}></div>
//                             <div className="absolute inset-0 bg-highlight/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="absolute top-4 right-4 bg-black/80 text-highlight border border-highlight px-2 py-1 font-pixel text-lg uppercase tracking-wider">Panel</span>
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-3xl font-pixel uppercase text-text-main mb-2 truncate">AI Ethics Forum</h3>
//                             <p className="text-text-main/60 font-display text-sm mb-4">Debating the ghost in the machine.</p>
//                             <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
//                                 <span className="text-s font-pixel uppercase text-white/50">Dec 10, 2023</span>
//                                 <span className="text-highlight font-pixel uppercase text-sm group-hover:translate-x-1 transition-transform">Details {">"}</span>
//                             </div>
//                         </div>
//                     </a>

//                     {/* Event Card 4 - Updated HREF */}
//                     <a className="min-w-[300px] md:min-w-[380px] snap-center group relative block bg-background-main border border-white/10 hover:border-primary transition-all duration-300 pixel-corners" href="/events">
//                         <div className="h-56 w-full overflow-hidden relative border-b border-white/10">
//                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop')", opacity: 0.8}}></div>
//                             <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="absolute top-4 right-4 bg-black/80 text-primary border border-primary px-2 py-1 font-pixel text-lg uppercase tracking-wider">Showcase</span>
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-3xl font-pixel uppercase text-text-main mb-2 truncate">Robotics Demo</h3>
//                             <p className="text-text-main/60 font-display text-sm mb-4">Autonomous systems in action.</p>
//                             <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
//                                 <span className="text-s font-pixel uppercase text-white/50">Jan 15, 2024</span>
//                                 <span className="text-primary font-pixel uppercase text-sm group-hover:translate-x-1 transition-transform">Details {">"}</span>
//                             </div>
//                         </div>
//                     </a>

//                 </div>
//             </div>
//         </section>

//       </main>
//       <Footer />
//     </>
//   );
// }



// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import InteractiveGrid from "@/components/InteractiveGrid"; // Import the new component

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <main className="bg-background-main text-text-main font-display overflow-x-hidden selection:bg-primary selection:text-background-main">
        
//         {/* ================= HERO SECTION ================= */}
//         <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background-main">
            
//             {/* --- NEW INTERACTIVE BACKGROUND START --- */}
//             <div className="absolute inset-0 z-0">
//                 {/* Dark Gradient Overlay to ensure text readability */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-background-main/80 via-transparent to-background-main z-10 pointer-events-none"></div>
                
//                 {/* The Interactive Grid Component */}
//                 <InteractiveGrid />
                
//                 {/* Optional: Static Scanlines on top for texture */}
//                 <div className="absolute inset-0 bg-scanlines bg-[length:100%_4px] opacity-30 z-10 pointer-events-none"></div>
//             </div>
//             {/* --- NEW INTERACTIVE BACKGROUND END --- */}

//             {/* Glowing Blobs (Keep these, they add nice color depth behind the grid) */}
//             <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary rounded-full blur-[120px] opacity-20 animate-pulse-slow pointer-events-none"></div>
//             <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary rounded-full blur-[140px] opacity-15 animate-pulse-slow pointer-events-none"></div>

//             <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center gap-8 pointer-events-none"> 
//                 {/* pointer-events-none on container allows clicks to pass through to the canvas, 
//                     but we must re-enable pointer-events on buttons/text if selectable */}
                
//                 <div className="inline-flex items-center gap-3 px-4 py-1 bg-surface-card/80 backdrop-blur-sm border border-highlight/30 transform hover:-translate-y-1 transition-transform mb-4 pixel-corners pointer-events-auto">
//                     <span className="w-2 h-2 bg-primary animate-pulse shadow-[0_0_8px_#FF6A00]"></span>
//                     <span className="text-highlight text-lg font-pixel uppercase tracking-widest">Est. 2016 // Cyber-Retro</span>
//                 </div>

//                 <h1 className="text-5xl md:text-7xl lg:text-8xl font-pixel uppercase text-text-main leading-[0.9] tracking-normal max-w-6xl drop-shadow-[0_4px_0_rgba(215,38,255,0.4)]">
//                     "The best way to <br/>
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">predict the future</span> <br/>
//                     is to <span className="border-b-4 border-primary text-white">invent it</span>."
//                 </h1>

//                 <p className="max-w-2xl text-text-main/70 text-lg md:text-xl font-display mt-6 bg-background-main/50 backdrop-blur-md p-6 border border-white/10 pixel-corners pointer-events-auto">
//                     Welcome to the <span className="text-primary font-bold">Innovation Garage</span>. A sanctuary for builders, dreamers, and radical thinkers shaping tomorrow.
//                 </p>
//             </div>
//         </header>

//         {/* ... Rest of the page (Marquee, About, Past Events) remains exactly the same ... */}
//         {/* ================= MARQUEE STRIP ================= */}
//         <div className="relative bg-surface-card overflow-hidden py-3 border-y border-primary/50 z-20">
//             <div className="absolute inset-0 bg-scanlines opacity-50 pointer-events-none"></div>
//             <div className="flex animate-marquee whitespace-nowrap gap-16 font-pixel text-3xl uppercase tracking-widest items-center text-highlight">
//                 <span>/// Innovation Garage</span>
//                 <span className="text-primary">✦ Build The Future</span>
//                 <span>/// Radical Ideas</span>
//                 <span className="text-secondary">✦ No Limits</span>
//                 <span>/// Innovation Garage</span>
//                 <span className="text-primary">✦ Build The Future</span>
//                 <span>/// Radical Ideas</span>
//                 <span className="text-secondary">✦ No Limits</span>
//                 <span>/// Innovation Garage</span>
//                 <span className="text-primary">✦ Build The Future</span>
//             </div>
//         </div>

//         {/* ================= ABOUT SECTION ================= */}
//         <section className="relative py-24 px-6 bg-background-main overflow-hidden">
//             <div className="max-w-[1280px] mx-auto relative z-10">
//                 <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
//                     <div>
//                         <span className="text-primary font-pixel text-xl uppercase tracking-widest mb-2 block">01 // Who We Are</span>
//                         <h2 className="text-5xl md:text-6xl font-pixel uppercase text-text-main leading-none">
//                             About The <span className="text-secondary">Garage</span>
//                         </h2>
//                     </div>
//                     <p className="max-w-md text-text-main/60 font-display text-sm text-right hidden md:block">
//                         A collaborative ecosystem where students experiment without fear of failure.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     {/* Mission Card */}
//                     <div className="group relative p-8 rounded-none bg-surface-card border border-white/10 hover:border-primary transition-all duration-300 pixel-corners">
//                         <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[4rem]"></div>
//                         <div className="flex items-start justify-between mb-8">
//                             <div className="size-14 bg-background-main border border-primary text-primary flex items-center justify-center pixel-corners shadow-[4px_4px_0_0_#FF6A00]">
//                                 <span className="material-symbols-outlined text-3xl">target</span>
//                             </div>
//                             <span className="font-pixel text-6xl text-white/5 group-hover:text-primary/10 transition-colors">01</span>
//                         </div>
//                         <h3 className="text-3xl font-pixel uppercase text-text-main mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
//                         <p className="text-text-main/70 text-lg leading-relaxed font-display mb-6">
//                             Innovation happens at the intersection of discipline and play. We foster a community of diverse thinkers who challenge the status quo.
//                         </p>
//                     </div>

//                     {/* History Card */}
//                     <div className="group relative p-8 rounded-none bg-surface-card border border-white/10 hover:border-secondary transition-all duration-300 pixel-corners">
//                         <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-[4rem]"></div>
//                         <div className="flex items-start justify-between mb-8">
//                             <div className="size-14 bg-background-main border border-secondary text-secondary flex items-center justify-center pixel-corners shadow-[4px_4px_0_0_#D726FF]">
//                                 <span className="material-symbols-outlined text-3xl">history_edu</span>
//                             </div>
//                             <span className="font-pixel text-6xl text-white/5 group-hover:text-secondary/10 transition-colors">02</span>
//                         </div>
//                         <h3 className="text-3xl font-pixel uppercase text-text-main mb-4 group-hover:text-secondary transition-colors">Our History</h3>
//                         <p className="text-text-main/70 text-lg leading-relaxed font-display mb-6">
//                             From a basement meetup for hardware hackers to a premier campus hub launching 50+ startups. What began as a small group is now a movement.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         {/* ================= PAST EVENTS SLIDER ================= */}
//         <section className="py-20 px-6 bg-surface-card border-t border-white/10 relative overflow-hidden">
//             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
//             <div className="max-w-[1400px] mx-auto relative z-10">
//                 <div className="flex flex-wrap justify-between items-end mb-12 gap-4">
//                     <div>
//                         <span className="text-highlight font-pixel text-xl uppercase tracking-widest mb-2 block">02 // Rewind</span>
//                         <h2 className="text-5xl md:text-6xl text-text-main font-pixel uppercase">Past <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Events</span></h2>
//                     </div>
//                 </div>

//                 {/* Horizontal Scroll Container */}
//                 <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-thin scrollbar-thumb-primary scrollbar-track-background-main">
                    
//                     {/* Event Card 1 */}
//                     <a className="min-w-[300px] md:min-w-[380px] snap-center group relative block bg-background-main border border-white/10 hover:border-primary transition-all duration-300 pixel-corners" href="#">
//                         <div className="h-56 w-full overflow-hidden relative border-b border-white/10">
//                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')", opacity: 0.8}}></div>
//                             <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="absolute top-4 right-4 bg-black/80 text-primary border border-primary px-2 py-1 font-pixel text-lg uppercase tracking-wider">Hackathon</span>
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-3xl font-pixel uppercase text-text-main mb-2 truncate">Cyber Summit 23</h3>
//                             <p className="text-text-main/60 font-display text-sm mb-4">48 hours of non-stop coding marathon.</p>
//                             <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
//                                 <span className="text-s font-pixel uppercase text-white/50">Oct 12, 2023</span>
//                                 <span className="text-primary font-pixel uppercase text-sm group-hover:translate-x-1 transition-transform">Details {">"}</span>
//                             </div>
//                         </div>
//                     </a>

//                     {/* Event Card 2 */}
//                     <a className="min-w-[300px] md:min-w-[380px] snap-center group relative block bg-background-main border border-white/10 hover:border-secondary transition-all duration-300 pixel-corners" href="#">
//                         <div className="h-56 w-full overflow-hidden relative border-b border-white/10">
//                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop')", opacity: 0.8}}></div>
//                             <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="absolute top-4 right-4 bg-black/80 text-secondary border border-secondary px-2 py-1 font-pixel text-lg uppercase tracking-wider">Workshop</span>
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-3xl font-pixel uppercase text-text-main mb-2 truncate">Design Thinking</h3>
//                             <p className="text-text-main/60 font-display text-sm mb-4">Prototyping future interfaces & UI.</p>
//                             <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
//                                 <span className="text-s font-pixel uppercase text-white/50">Nov 05, 2023</span>
//                                 <span className="text-secondary font-pixel uppercase text-sm group-hover:translate-x-1 transition-transform">Details {">"}</span>
//                             </div>
//                         </div>
//                     </a>

//                     {/* Event Card 3 */}
//                     <a className="min-w-[300px] md:min-w-[380px] snap-center group relative block bg-background-main border border-white/10 hover:border-highlight transition-all duration-300 pixel-corners" href="#">
//                         <div className="h-56 w-full overflow-hidden relative border-b border-white/10">
//                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop')", opacity: 0.8}}></div>
//                             <div className="absolute inset-0 bg-highlight/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="absolute top-4 right-4 bg-black/80 text-highlight border border-highlight px-2 py-1 font-pixel text-lg uppercase tracking-wider">Panel</span>
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-3xl font-pixel uppercase text-text-main mb-2 truncate">AI Ethics Forum</h3>
//                             <p className="text-text-main/60 font-display text-sm mb-4">Debating the ghost in the machine.</p>
//                             <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
//                                 <span className="text-s font-pixel uppercase text-white/50">Dec 10, 2023</span>
//                                 <span className="text-highlight font-pixel uppercase text-sm group-hover:translate-x-1 transition-transform">Details {">"}</span>
//                             </div>
//                         </div>
//                     </a>

//                     {/* Event Card 4 */}
//                     <a className="min-w-[300px] md:min-w-[380px] snap-center group relative block bg-background-main border border-white/10 hover:border-primary transition-all duration-300 pixel-corners" href="#">
//                         <div className="h-56 w-full overflow-hidden relative border-b border-white/10">
//                             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop')", opacity: 0.8}}></div>
//                             <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                             <span className="absolute top-4 right-4 bg-black/80 text-primary border border-primary px-2 py-1 font-pixel text-lg uppercase tracking-wider">Showcase</span>
//                         </div>
//                         <div className="p-6">
//                             <h3 className="text-3xl font-pixel uppercase text-text-main mb-2 truncate">Robotics Demo</h3>
//                             <p className="text-text-main/60 font-display text-sm mb-4">Autonomous systems in action.</p>
//                             <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
//                                 <span className="text-s font-pixel uppercase text-white/50">Jan 15, 2024</span>
//                                 <span className="text-primary font-pixel uppercase text-sm group-hover:translate-x-1 transition-transform">Details {">"}</span>
//                             </div>
//                         </div>
//                     </a>

//                 </div>
//             </div>
//         </section>

//       </main>
//       <Footer />
//     </>
//   );
// }

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveNodes from "@/components/InteractiveNodes"; // <--- Updated Import
import IdeasPromo from "@/components/IdeasPromo";

// Past Events Data
const pastEvents = [
  {
    id: 1,
    title: "Startup Simulation",
    description: "A hands-on startup game where teams made real-time decisions across tech, finance, and marketing.",
    date: "Oct 24, 2025",
    tag: "SHOWCASE",
    image: "/events/startupsimulation.png",
    link: "/events",
    theme: "primary" // Options: primary, secondary, highlight
  },
  {
    id: 2,
    title: "Ignite 36",
    description: "A 36-hour hackathon where teams built and pitched solutions to problem statements. Ideas went from concept to demo fast.",
    date: "Sept 27-28, 2025",
    tag: "Hackathon",
    image: "/events/ignite36.png",
    link: "/events",
    theme: "secondary"
  },
  {
    id: 3,
    title: "E-Summit",
    description: "Focused on inspiring stories, challenges, and opportunities and was highly beneficial for aspiring entrepreneurs.",
    date: "March, 2024",
    tag: "Flagship",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2070&auto=format&fit=crop",
    link: "/events",
    theme: "highlight"
  },
  {
    id: 4,
    title: "Agentic AI workshop",
    description: "The workshop aimed to provide hands-on experience in building autonomous AI agents using n8n",
    date: "Oct 8, 2024",
    tag: "Workshop",
    image: "/events/agenticai.png",
    link: "/events",
    theme: "primary"
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-background-main text-text-main font-display overflow-x-hidden selection:bg-primary selection:text-background-main">
        
        {/* ================= HERO SECTION ================= */}
        <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background-main">
            
            {/* --- NEW BACKGROUND START --- */}
            <div className="absolute inset-0 z-0">
                {/* 1. The Interactive Constellation Animation */}
                <div className="absolute inset-0 z-0">
                    <InteractiveNodes />
                </div>

                {/* 2. Gradient Overlay (Kept for text readability) */}
                <div className="absolute inset-0 bg-gradient-to-b from-background-main/80 via-transparent to-background-main z-10 pointer-events-none"></div>
                
                {/* 3. Optional: Scanlines for texture (You can remove if you want it super clean) */}
                <div className="absolute inset-0 bg-scanlines bg-[length:100%_4px] opacity-20 z-10 pointer-events-none"></div>
            </div>
            {/* --- NEW BACKGROUND END --- */}

            {/* Glowing Blobs (Keep these for color depth) */}
            <div className="absolute top-1/4 left-10 w-64 h-64 bg-secondary rounded-full blur-[120px] opacity-20 animate-pulse-slow pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary rounded-full blur-[140px] opacity-15 animate-pulse-slow pointer-events-none"></div>

            <div className="relative z-20 container mx-auto px-6 flex flex-col items-center text-center gap-8 pointer-events-none"> 
                {/* pointer-events-none allows clicks to pass through to canvas, 
                    we re-enable it on interactive elements below */}
                
                <div className="inline-flex items-center gap-3 px-4 py-1 bg-surface-card/80 backdrop-blur-sm border border-highlight/30 transform hover:-translate-y-1 transition-transform mb-4 pixel-corners pointer-events-auto">
                    <span className="w-2 h-2 bg-primary animate-pulse shadow-[0_0_8px_#FF6A00]"></span>
                    <span className="text-highlight text-lg font-pixel uppercase tracking-widest">Est. 2026 // NIT Warangal</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-pixel uppercase text-text-main leading-[0.9] tracking-normal max-w-6xl drop-shadow-[0_4px_0_rgba(215,38,255,0.4)] pointer-events-auto">
                    "The best way to <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">predict the future</span> <br/>
                    is to <span className="border-b-4 border-primary text-white">invent it</span>."
                </h1>

                <p className="max-w-2xl text-text-main/70 text-lg md:text-xl font-display mt-6 bg-background-main/50 backdrop-blur-md p-6 border border-white/10 pixel-corners pointer-events-auto">
                    Welcome to the <span className="text-primary font-bold">Innovation Garage</span>. A hands-on community to build, experiment, and explore.
                </p>
            </div>
        </header>

        {/* ... The rest of the page (Marquee, About, etc.) remains exactly the same ... */}
        {/* ================= MARQUEE STRIP ================= */}
        <div className="relative bg-surface-card overflow-hidden py-3 border-y border-primary/50 z-20">
            <div className="absolute inset-0 bg-scanlines opacity-50 pointer-events-none"></div>
            <div className="flex animate-marquee whitespace-nowrap gap-16 font-pixel text-3xl uppercase tracking-widest items-center text-highlight">
                <span>/// Innovation Garage</span>
                <span className="text-primary">✦ Build The Future</span>
                <span>/// Radical Ideas</span>
                <span className="text-secondary">✦ No Limits</span>
                <span>/// Innovation Garage</span>
                <span className="text-primary">✦ Build The Future</span>
                <span>/// Radical Ideas</span>
                <span className="text-secondary">✦ No Limits</span>
                <span>/// Innovation Garage</span>
                <span className="text-primary">✦ Build The Future</span>
            </div>
        </div>

        {/* ================= ABOUT SECTION ================= */}
        <section className="relative py-24 px-6 bg-background-main overflow-hidden">
            <div className="max-w-[1280px] mx-auto relative z-10">
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8">
                    <div>
                        <span className="text-primary font-pixel text-xl uppercase tracking-widest mb-2 block">01 // Who Are We</span>
                        <h2 className="text-5xl md:text-6xl font-pixel uppercase text-text-main leading-none">
                            About The <span className="text-secondary">Garage</span>
                        </h2>
                    </div>
                    <p className="max-w-md text-text-main/60 font-display text-l text-right hidden md:block">
                        A collaborative ecosystem where students experiment without fear of failure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission Card */}
                    <div className="group relative p-8 rounded-none bg-surface-card border border-white/10 hover:border-primary transition-all duration-300 pixel-corners">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[4rem]"></div>
                        <div className="flex items-start justify-between mb-8">
                            <div className="size-14 bg-background-main border border-primary text-primary flex items-center justify-center pixel-corners shadow-[4px_4px_0_0_#FF6A00]">
                                <span className="material-symbols-outlined text-3xl">target</span>
                            </div>
                            <span className="font-pixel text-6xl text-white/5 group-hover:text-primary/10 transition-colors">01</span>
                        </div>
                        <h3 className="text-3xl font-pixel uppercase text-text-main mb-4 group-hover:text-primary transition-colors">Our Mission</h3>
                        <p className="text-text-main/70 text-lg leading-relaxed font-display mb-6">
                            To support students in turning ideas into projects and collaborations. 
We bring students from diverse backgrounds together to learn and build side by side.
                        </p>
                    </div>

                    {/* History Card */}
                    <div className="group relative p-8 rounded-none bg-surface-card border border-white/10 hover:border-secondary transition-all duration-300 pixel-corners">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-[4rem]"></div>
                        <div className="flex items-start justify-between mb-8">
                            <div className="size-14 bg-background-main border border-secondary text-secondary flex items-center justify-center pixel-corners shadow-[4px_4px_0_0_#D726FF]">
                                <span className="material-symbols-outlined text-3xl">history_edu</span>
                            </div>
                            <span className="font-pixel text-6xl text-white/5 group-hover:text-secondary/10 transition-colors">02</span>
                        </div>
                        <h3 className="text-3xl font-pixel uppercase text-text-main mb-4 group-hover:text-secondary transition-colors">Our History</h3>
                        <p className="text-text-main/70 text-lg leading-relaxed font-display mb-6">
                            What began as a small student meetup has grown into a campus makerspace for creation and skill development. Founded in 2013, Innovation Garage has supported 50+ startups and serves as a startup incubator at NITW.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* ================= NEW IG_TANK PROMO SECTION ================= */}
        <IdeasPromo /> 
        {/* ============================================================= */}

        {/* ================= PAST EVENTS SLIDER ================= */}
        <section className="py-20 px-6 bg-surface-card border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-wrap justify-between items-end mb-12 gap-4">
                    <div>
                        <span className="text-highlight font-pixel text-xl uppercase tracking-widest mb-2 block">03 // Rewind</span>
                        <h2 className="text-5xl md:text-6xl text-text-main font-pixel uppercase">Past <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Events</span></h2>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-thin scrollbar-thumb-primary scrollbar-track-background-main">
                    
                    {pastEvents.map((event) => {
                        // Strict mapping to keep your exact design colors
                        const colors = {
                            primary: {
                                hover: "hover:border-primary",
                                overlay: "bg-primary/20",
                                text: "text-primary",
                                border: "border-primary"
                            },
                            secondary: {
                                hover: "hover:border-secondary",
                                overlay: "bg-secondary/20",
                                text: "text-secondary",
                                border: "border-secondary"
                            },
                            highlight: {
                                hover: "hover:border-highlight",
                                overlay: "bg-highlight/20",
                                text: "text-highlight",
                                border: "border-highlight"
                            }
                        }[event.theme as 'primary' | 'secondary' | 'highlight'];

                        return (
                            <a key={event.id} className={`min-w-[300px] md:min-w-[380px] snap-center group relative block bg-background-main border border-white/10 ${colors.hover} transition-all duration-300 pixel-corners`} href={event.link}>
                                <div className="h-56 w-full overflow-hidden relative border-b border-white/10">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: `url('${event.image}')`, opacity: 0.8}}></div>
                                    <div className={`absolute inset-0 ${colors.overlay} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                    <span className={`absolute top-4 right-4 bg-black/80 ${colors.text} border ${colors.border} px-2 py-1 font-pixel text-lg uppercase tracking-wider`}>{event.tag}</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-3xl font-pixel uppercase text-text-main mb-2 truncate">{event.title}</h3>
                                    <p className="text-text-main/60 font-display text-sm mb-4">{event.description}</p>
                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                                        <span className="text-s font-pixel uppercase text-white/50">{event.date}</span>
                                        <span className={`${colors.text} font-pixel uppercase text-sm group-hover:translate-x-1 transition-transform`}>Details {">"}</span>
                                    </div>
                                </div>
                            </a>
                        );
                    })}

                </div>
            </div>
        </section>

      </main>
      <Footer />
    </>
  );
}