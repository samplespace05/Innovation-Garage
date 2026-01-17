// // import Navbar from "@/components/Navbar";
// // import Footer from "@/components/Footer";
// // import Link from "next/link";

// // export default function EventRecap({ params }: { params: { slug: string } }) {
// //   // In a real app, fetch data based on params.slug
// //   const eventTitle = params.slug.replace(/-/g, " ").toUpperCase();

// //   return (
// //     <>
// //       <Navbar />
// //       <main className="bg-cyber-black text-warm-white font-pixel min-h-screen pt-20">
        
// //         {/* HERO HEADER */}
// //         <header className="relative h-[60vh] w-full bg-surface-card border-b-4 border-neon-orange overflow-hidden flex items-end p-8 md:p-16">
// //             <div className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay" 
// //                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000')"}}></div>
// //             <div className="relative z-10 max-w-5xl">
// //                 <span className="bg-neon-orange text-black px-4 py-1 text-xl font-bold uppercase mb-4 inline-block transform -skew-x-12">
// //                     Event Archive // {params.slug}
// //                 </span>
// //                 <h1 className="text-6xl md:text-8xl text-white font-bold leading-none drop-shadow-[4px_4px_0_#D726FF]">
// //                     {eventTitle}
// //                 </h1>
// //             </div>
// //         </header>

// //         {/* CONTENT GRID */}
// //         <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            
// //             {/* Main Content */}
// //             <div className="md:col-span-2 space-y-8 font-display">
// //                 <div className="bg-surface-card border border-white/10 p-8 pixel-corners">
// //                     <h2 className="text-3xl font-pixel text-secondary mb-6 border-b border-white/10 pb-2">Event De-Briefing</h2>
// //                     <p className="text-xl text-highlight leading-relaxed mb-6">
// //                         This event brought together over 200 participants from across the region to challenge the status quo. 
// //                         From innovative hacks to deep-dive discussions on future tech, the energy was palpable.
// //                     </p>
// //                     <p className="text-lg text-gray-400 leading-relaxed">
// //                         Highlights included keynotes from industry veterans, 24-hour coding sprints, and networking sessions that sparked new startups.
// //                         Our mission to foster a collaborative ecosystem was fully realized through the diverse projects showcased.
// //                     </p>
// //                 </div>

// //                 {/* Gallery Grid Stub */}
// //                 <div className="grid grid-cols-2 gap-4">
// //                     <div className="h-48 bg-gray-800 border border-white/10 relative group overflow-hidden">
// //                         <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000')"}}></div>
// //                     </div>
// //                     <div className="h-48 bg-gray-800 border border-white/10 relative group overflow-hidden">
// //                         <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000')"}}></div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Sidebar Info */}
// //             <div className="space-y-6">
// //                 <div className="bg-surface-card border-l-4 border-neon-orange p-6">
// //                     <h3 className="text-gray-500 text-sm uppercase tracking-widest font-display mb-1">Date Executed</h3>
// //                     <p className="text-2xl text-white font-pixel">NOV 20, 2024</p>
// //                 </div>
// //                 <div className="bg-surface-card border-l-4 border-secondary p-6">
// //                     <h3 className="text-gray-500 text-sm uppercase tracking-widest font-display mb-1">Location</h3>
// //                     <p className="text-2xl text-white font-pixel">Main Auditorium, Campus</p>
// //                 </div>
// //                 <div className="bg-surface-card border-l-4 border-white p-6">
// //                     <h3 className="text-gray-500 text-sm uppercase tracking-widest font-display mb-1">Participants</h3>
// //                     <p className="text-2xl text-white font-pixel">250+ Hackers</p>
// //                 </div>

// //                 <Link href="/events" className="block w-full py-4 text-center border-2 border-white/20 text-gray-400 hover:text-white hover:border-white transition-all uppercase font-pixel tracking-widest">
// //                     {"<"} Return to Database
// //                 </Link>
// //             </div>
// //         </div>

// //       </main>
// //       <Footer />
// //     </>
// //   );
// // }



// // import Navbar from "@/components/Navbar";
// // import Footer from "@/components/Footer";
// // import Link from "next/link";

// // // 1. Update the Props Type to use Promise
// // export default async function EventRecap({ params }: { params: Promise<{ slug: string }> }) {
  
// //   // 2. Await the params to get the actual data
// //   const { slug } = await params;

// //   // 3. Now you can safely use 'slug'
// //   const eventTitle = slug.replace(/-/g, " ").toUpperCase();

// //   return (
// //     <>
// //       <Navbar />
// //       <main className="bg-cyber-black text-warm-white font-pixel min-h-screen pt-20">
        
// //         {/* HERO HEADER */}
// //         <header className="relative h-[60vh] w-full bg-surface-card border-b-4 border-neon-orange overflow-hidden flex items-end p-8 md:p-16">
// //             <div className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay" 
// //                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000')"}}></div>
// //             <div className="relative z-10 max-w-5xl">
// //                 <span className="bg-neon-orange text-black px-4 py-1 text-xl font-bold uppercase mb-4 inline-block transform -skew-x-12">
// //                     Event Archive // {slug}
// //                 </span>
// //                 <h1 className="text-6xl md:text-8xl text-white font-bold leading-none drop-shadow-[4px_4px_0_#D726FF]">
// //                     {eventTitle}
// //                 </h1>
// //             </div>
// //         </header>

// //         {/* CONTENT GRID */}
// //         <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            
// //             {/* Main Content */}
// //             <div className="md:col-span-2 space-y-8 font-display">
// //                 <div className="bg-surface-card border border-white/10 p-8 pixel-corners">
// //                     <h2 className="text-3xl font-pixel text-secondary mb-6 border-b border-white/10 pb-2">Event De-Briefing</h2>
// //                     <p className="text-xl text-highlight leading-relaxed mb-6">
// //                         This event brought together over 200 participants from across the region to challenge the status quo. 
// //                         From innovative hacks to deep-dive discussions on future tech, the energy was palpable.
// //                     </p>
// //                     <p className="text-lg text-gray-400 leading-relaxed">
// //                         Highlights included keynotes from industry veterans, 24-hour coding sprints, and networking sessions that sparked new startups.
// //                         Our mission to foster a collaborative ecosystem was fully realized through the diverse projects showcased.
// //                     </p>
// //                 </div>

// //                 {/* Gallery Grid Stub */}
// //                 <div className="grid grid-cols-2 gap-4">
// //                     <div className="h-48 bg-gray-800 border border-white/10 relative group overflow-hidden">
// //                         <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000')"}}></div>
// //                     </div>
// //                     <div className="h-48 bg-gray-800 border border-white/10 relative group overflow-hidden">
// //                         <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000')"}}></div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Sidebar Info */}
// //             <div className="space-y-6">
// //                 <div className="bg-surface-card border-l-4 border-neon-orange p-6">
// //                     <h3 className="text-gray-500 text-sm uppercase tracking-widest font-display mb-1">Date Executed</h3>
// //                     <p className="text-2xl text-white font-pixel">NOV 20, 2024</p>
// //                 </div>
// //                 <div className="bg-surface-card border-l-4 border-secondary p-6">
// //                     <h3 className="text-gray-500 text-sm uppercase tracking-widest font-display mb-1">Location</h3>
// //                     <p className="text-2xl text-white font-pixel">Main Auditorium, Campus</p>
// //                 </div>
// //                 <div className="bg-surface-card border-l-4 border-white p-6">
// //                     <h3 className="text-gray-500 text-sm uppercase tracking-widest font-display mb-1">Participants</h3>
// //                     <p className="text-2xl text-white font-pixel">250+ Hackers</p>
// //                 </div>

// //                 <Link href="/events" className="block w-full py-4 text-center border-2 border-white/20 text-gray-400 hover:text-white hover:border-white transition-all uppercase font-pixel tracking-widest">
// //                     {"<"} Return to Database
// //                 </Link>
// //             </div>
// //         </div>

// //       </main>
// //       <Footer />
// //     </>
// //   );
// // }



// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";
// import { notFound } from "next/navigation";

// // 1. Define the shape of your event data
// type EventData = {
//   title: string;
//   date: string;
//   location: string;
//   participants: string;
//   brief: string;
//   fullDescription: string;
//   image: string;
// };

// // 2. Create your "Database" of events
// // The keys (e.g., 'founder-stories') MUST match the hrefs you set in your Events page
// const eventsDatabase: Record<string, EventData> = {
//   "founder-stories": {
//     title: "FOUNDER STORIES",
//     date: "NOV 20, 2024",
//     location: "Main Auditorium",
//     participants: "150+ Attendees",
//     brief: "Unfiltered stories of failure, pivot, and ultimate success from alumni.",
//     fullDescription: "An intimate evening with three successful alumni founders who returned to campus to share the brutal truths of entrepreneurship. Unlike typical success stories, this session focused on the 'near-death experiences' of their startups. They discussed fundraising rejections, co-founder disputes, and the pivot points that saved their companies.",
//     image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000"
//   },
//   "robotics-showcase": {
//     title: "ROBOTICS SHOWCASE",
//     date: "DEC 15, 2024",
//     location: "Lab Complex B",
//     participants: "50+ Teams",
//     brief: "Live demos of student-built rovers, drones, and automation systems.",
//     fullDescription: "The annual Robotics Showcase featured over 20 working prototypes ranging from agricultural drones to autonomous delivery rovers. The highlight was 'Project Icarus', a solar-powered glider that stayed airborne for 6 hours. Industry experts from Boston Dynamics provided live feedback to the student teams.",
//     image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000"
//   },
//   "vc-101": {
//     title: "VENTURE CAPITAL 101",
//     date: "JAN 10, 2025",
//     location: "Seminar Hall 4",
//     participants: "80+ Students",
//     brief: "How to pitch your seed round. Understand what investors really want.",
//     fullDescription: "A deep dive into the mind of a VC. We hosted a partner from a leading micro-VC fund who broke down the unit economics of a startup. Students learned how to build a cap table, the difference between pre-money and post-money valuation, and watched a live tear-down of a pitch deck.",
//     image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000"
//   }
// };

// export default async function EventRecap({ params }: { params: Promise<{ slug: string }> }) {
  
//   // 3. Await params to get the slug
//   const { slug } = await params;

//   // 4. Look up the specific event using the slug
//   const event = eventsDatabase[slug];

//   // 5. If the slug doesn't exist in our database, show a 404 page
//   if (!event) {
//     notFound();
//   }

//   return (
//     <>
//       <Navbar />
//       <main className="bg-cyber-black text-warm-white font-pixel min-h-screen pt-20">
        
//         {/* HERO HEADER - Uses dynamic title and image */}
//         <header className="relative h-[60vh] w-full bg-surface-card border-b-4 border-neon-orange overflow-hidden flex items-end p-8 md:p-16">
//             <div className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay" 
//                  style={{backgroundImage: `url('${event.image}')`}}></div>
//             <div className="relative z-10 max-w-5xl">
//                 <span className="bg-neon-orange text-black px-4 py-1 text-xl font-bold uppercase mb-4 inline-block transform -skew-x-12">
//                     Event Archive // {slug}
//                 </span>
//                 <h1 className="text-6xl md:text-8xl text-white font-bold leading-none drop-shadow-[4px_4px_0_#D726FF]">
//                     {event.title}
//                 </h1>
//             </div>
//         </header>

//         {/* CONTENT GRID */}
//         <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            
//             {/* Main Content - Uses dynamic descriptions */}
//             <div className="md:col-span-2 space-y-8 font-display">
//                 <div className="bg-surface-card border border-white/10 p-8 pixel-corners">
//                     <h2 className="text-3xl font-pixel text-secondary mb-6 border-b border-white/10 pb-2">Event De-Briefing</h2>
//                     <p className="text-xl text-highlight leading-relaxed mb-6">
//                         {event.brief}
//                     </p>
//                     <p className="text-lg text-gray-400 leading-relaxed">
//                         {event.fullDescription}
//                     </p>
//                 </div>

//                 {/* Gallery Grid Stub - Kept static for layout, can be dynamic too if you add array of images */}
//                 <div className="grid grid-cols-2 gap-4">
//                     <div className="h-48 bg-gray-800 border border-white/10 relative group overflow-hidden">
//                         <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000')"}}></div>
//                     </div>
//                     <div className="h-48 bg-gray-800 border border-white/10 relative group overflow-hidden">
//                         <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000')"}}></div>
//                     </div>
//                 </div>
//             </div>

//             {/* Sidebar Info - Uses dynamic stats */}
//             <div className="space-y-6">
//                 <div className="bg-surface-card border-l-4 border-neon-orange p-6">
//                     <h3 className="text-gray-500 text-sm uppercase tracking-widest font-display mb-1">Date Executed</h3>
//                     <p className="text-2xl text-white font-pixel">{event.date}</p>
//                 </div>
//                 <div className="bg-surface-card border-l-4 border-secondary p-6">
//                     <h3 className="text-gray-500 text-sm uppercase tracking-widest font-display mb-1">Location</h3>
//                     <p className="text-2xl text-white font-pixel">{event.location}</p>
//                 </div>
//                 <div className="bg-surface-card border-l-4 border-white p-6">
//                     <h3 className="text-gray-500 text-sm uppercase tracking-widest font-display mb-1">Participants</h3>
//                     <p className="text-2xl text-white font-pixel">{event.participants}</p>
//                 </div>

//                 <Link href="/events" className="block w-full py-4 text-center border-2 border-white/20 text-gray-400 hover:text-white hover:border-white transition-all uppercase font-pixel tracking-widest">
//                     {"<"} Return to Database
//                 </Link>
//             </div>
//         </div>

//       </main>
//       <Footer />
//     </>
//   );
// }



import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

// 1. Update the type to include 'gallery' (an array of strings)
type EventData = {
  title: string;
  date: string;
  location: string;
  participants: string;
  brief: string;
  fullDescription: string;
  image: string;
  gallery: string[]; // <--- New Field
};

// 2. Add gallery images to each event in the database
const eventsDatabase: Record<string, EventData> = {
  "founder-stories": {
    title: "FOUNDER STORIES",
    date: "NOV 20, 2024",
    location: "Main Auditorium",
    participants: "150+ Attendees",
    brief: "Unfiltered stories of failure, pivot, and ultimate success from alumni.",
    fullDescription: "An intimate evening with three successful alumni founders who returned to campus to share the brutal truths of entrepreneurship. Unlike typical success stories, this session focused on the 'near-death experiences' of their startups. They discussed fundraising rejections, co-founder disputes, and the pivot points that saved their companies.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000",
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000"
    ]
  },
  "robotics-showcase": {
    title: "ROBOTICS SHOWCASE",
    date: "DEC 15, 2024",
    location: "Lab Complex B",
    participants: "50+ Teams",
    brief: "Live demos of student-built rovers, drones, and automation systems.",
    fullDescription: "The annual Robotics Showcase featured over 20 working prototypes ranging from agricultural drones to autonomous delivery rovers. The highlight was 'Project Icarus', a solar-powered glider that stayed airborne for 6 hours. Industry experts from Boston Dynamics provided live feedback to the student teams.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
      "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=1000",
      "https://images.unsplash.com/photo-1535378437327-b7149236addf?q=80&w=1000"
    ]
  },
  "vc-101": {
    title: "VENTURE CAPITAL 101",
    date: "JAN 10, 2025",
    location: "Seminar Hall 4",
    participants: "80+ Students",
    brief: "How to pitch your seed round. Understand what investors really want.",
    fullDescription: "A deep dive into the mind of a VC. We hosted a partner from a leading micro-VC fund who broke down the unit economics of a startup. Students learned how to build a cap table, the difference between pre-money and post-money valuation, and watched a live tear-down of a pitch deck.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000",
    gallery: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000",
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1000",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000"
    ]
  }
};

export default async function EventRecap({ params }: { params: Promise<{ slug: string }> }) {
  
  const { slug } = await params;
  const event = eventsDatabase[slug];

  if (!event) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="bg-cyber-black text-warm-white font-pixel min-h-screen pt-20">
        
        {/* HERO HEADER */}
        <header className="relative h-[60vh] w-full bg-surface-card border-b-4 border-neon-orange overflow-hidden flex items-end p-8 md:p-16">
            <div className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay" 
                 style={{backgroundImage: `url('${event.image}')`}}></div>
            <div className="relative z-10 max-w-5xl">
                <span className="bg-neon-orange text-black px-4 py-1 text-xl font-bold uppercase mb-4 inline-block transform -skew-x-12">
                    Event Archive // {slug}
                </span>
                <h1 className="text-6xl md:text-8xl text-white font-bold leading-none drop-shadow-[4px_4px_0_#D726FF]">
                    {event.title}
                </h1>
            </div>
        </header>

        {/* CONTENT GRID */}
        <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8 font-display">
                <div className="bg-surface-card border border-white/10 p-8 pixel-corners">
                    <h2 className="text-3xl font-pixel text-secondary mb-6 border-b border-white/10 pb-2">Event De-Briefing</h2>
                    <p className="text-xl text-highlight leading-relaxed mb-6">
                        {event.brief}
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed">
                        {event.fullDescription}
                    </p>
                </div>

                {/* 3. Dynamic Gallery Grid */}
                <h3 className="text-2xl font-pixel text-white mb-4 uppercase tracking-widest border-l-4 border-neon-orange pl-3">
                    Mission Evidence
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {event.gallery.map((imgUrl, index) => (
                        <div key={index} className="h-48 bg-gray-800 border border-white/10 relative group overflow-hidden pixel-corners">
                            <div 
                                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" 
                                style={{backgroundImage: `url('${imgUrl}')`}}
                            ></div>
                            <div className="absolute inset-0 bg-neon-orange/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
                <div className="bg-surface-card border-l-4 border-neon-orange p-6">
                    <h3 className="text-gray-500 text-sm uppercase tracking-widest font-display mb-1">Date Executed</h3>
                    <p className="text-2xl text-white font-pixel">{event.date}</p>
                </div>
                <div className="bg-surface-card border-l-4 border-secondary p-6">
                    <h3 className="text-gray-500 text-sm uppercase tracking-widest font-display mb-1">Location</h3>
                    <p className="text-2xl text-white font-pixel">{event.location}</p>
                </div>
                <div className="bg-surface-card border-l-4 border-white p-6">
                    <h3 className="text-gray-500 text-sm uppercase tracking-widest font-display mb-1">Participants</h3>
                    <p className="text-2xl text-white font-pixel">{event.participants}</p>
                </div>

                <Link href="/events" className="block w-full py-4 text-center border-2 border-white/20 text-gray-400 hover:text-white hover:border-white transition-all uppercase font-pixel tracking-widest">
                    {"<"} Return to Database
                </Link>
            </div>
        </div>

      </main>
      <Footer />
    </>
  );
}