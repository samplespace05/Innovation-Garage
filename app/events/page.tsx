import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Events() {
  return (
    <>
      <Navbar />
      {/* Main Container matching body class in code3.html */}
      <main className="flex-1 flex flex-col items-center w-full px-4 md:px-10 py-12 max-w-[1440px] mx-auto bg-cyber-black text-highlight font-pixel min-h-screen">
        
        {/* HEADER SECTION */}
        <div className="w-full flex flex-col md:flex-row py-12 gap-8 items-end justify-between mb-12 border-b-4 border-surface-card pb-8">
            <div className="flex flex-col gap-4 max-w-3xl">
                {/* System Active Badge */}
                <div className="inline-flex items-center gap-2 bg-surface-card text-secondary px-3 py-1 border-2 border-secondary shadow-[4px_4px_0px_0px_#D726FF] w-fit transform -rotate-1">
                    <span className="material-symbols-outlined text-xl">calendar_month</span>
                    <span className="text-xl uppercase tracking-widest">System_V2.0 // Active</span>
                </div>
                {/* Title */}
                <h1 className="text-6xl md:text-8xl font-normal uppercase leading-[0.8] tracking-tight text-warm-white">
                    EVENTS_<br/>
                    <span className="text-neon-orange drop-shadow-[4px_4px_0px_rgba(255,106,0,0.8)]">DATABASE</span>
                </h1>
                {/* Description */}
                <p className="text-highlight text-2xl md:text-3xl leading-tight max-w-xl mt-4 border-l-4 border-neon-orange pl-4 bg-white/5 p-2">
                    {">"} Browsing timeline logs. Accessing upcoming schedules and historical archives.
                </p>
            </div>  
        </div>

        {/* FILTERS SECTION */}
        <div className="w-full mb-16 overflow-x-auto pb-6 scrollbar-hide">
            <div className="flex gap-4 min-w-max px-2">
                <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-secondary px-8 border-2 border-white shadow-[4px_4px_0px_0px_#FFF] hover:translate-y-1 hover:shadow-none transition-all active:translate-y-1 active:shadow-none">
                    <span className="text-white text-2xl uppercase font-bold tracking-wide">All Events</span>
                </button>
                <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
                    <span className="material-symbols-outlined text-[24px]">mic</span>
                    <span className="text-2xl uppercase tracking-wide">Talks</span>
                </button>
                <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
                    <span className="material-symbols-outlined text-[24px]">code</span>
                    <span className="text-2xl uppercase tracking-wide">Hackathons</span>
                </button>
                <button className="flex h-14 items-center justify-center gap-x-2 rounded-none bg-surface-card px-8 border-2 border-neon-orange text-neon-orange shadow-[4px_4px_0px_0px_#FF6A00] hover:bg-neon-orange hover:text-black hover:translate-y-1 hover:shadow-none transition-all group">
                    <span className="material-symbols-outlined text-[24px]">lightbulb</span>
                    <span className="text-2xl uppercase tracking-wide">Workshops</span>
                </button>
            </div>
        </div>

{/* UPCOMING LABEL */}
        <div className="w-full mb-6 flex items-center gap-4">
            <div className="bg-secondary text-white px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
                2025 // UPCOMING_
            </div>
            <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
        </div>

        {/* UPCOMING GRID - Updated to match Archive Animation exactly */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2 mb-20">
            
            {/* Card 1: Talks */}
            <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-[steps(2)] h-full relative rounded-none">
                <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
                    <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000')"}}></div>
                    <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
                    <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
                        <span className="material-symbols-outlined text-white text-[20px]">mic</span>
                        <span className="text-white text-xl uppercase tracking-wider font-bold">Talks</span>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-5">
                    <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
                        <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">MAR 12 @ 14:00</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">AI & Ethics Symposium</h3>
                        <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
                            {">>"} Debating the moral code of tomorrow. Join experts dissecting AGI implications.
                        </p>
                    </div>
                    <div className="pt-2 flex items-center justify-between mt-auto">
                        
                        <button className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
                            REGISTER_{">"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Card 2: Hackathon */}
            <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-[steps(2)] h-full relative rounded-none">
                <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
                    <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000')"}}></div>
                    <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
                    <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
                        <span className="material-symbols-outlined text-white text-[20px]">code</span>
                        <span className="text-white text-xl uppercase tracking-wider font-bold">Hack</span>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-5">
                    <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
                        <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">APR 05 / 48H</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">Midnight Hackathon</h3>
                        <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
                            {">>"} 48 hours to build the impossible. Energy drinks provided. Prizes up to $10k.
                        </p>
                    </div>
                    <div className="pt-2 flex items-center justify-between mt-auto">
                        
                        <button className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
                            REGISTER_{">"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Card 3: Workshop */}
            <div className="group flex flex-col bg-surface-card border-2 border-secondary shadow-retro-magenta hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 ease-[steps(2)] h-full relative rounded-none">
                <div className="relative h-64 w-full overflow-hidden border-b-2 border-secondary bg-black">
                    <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000')"}}></div>
                    <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
                    <div className="absolute top-4 left-0 bg-secondary border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
                        <span className="material-symbols-outlined text-white text-[20px]">lightbulb</span>
                        <span className="text-white text-xl uppercase tracking-wider font-bold">Workshop</span>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-5">
                    <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
                        <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">MAY 01 @ 15:00</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-secondary transition-colors underline decoration-4 underline-offset-4 decoration-neon-orange">Design Sprint</h3>
                        <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
                            {">>"} From idea to prototype in 3 hours. Validate ideas rapidly.
                        </p>
                    </div>
                    <div className="pt-2 flex items-center justify-between mt-auto">
                        
                        <button className="bg-transparent text-secondary px-5 py-2 text-xl uppercase hover:bg-secondary hover:text-white transition-colors border-2 border-secondary font-bold shadow-[2px_2px_0px_0px_#D726FF] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
                            REGISTER_{">"}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* ARCHIVE LABEL */}
        <div className="w-full mb-6 flex items-center gap-4">
            <div className="bg-neon-orange text-black px-4 py-2 text-2xl font-bold border-2 border-white shadow-[4px_4px_0_0_#FFF] tracking-wider transform -skew-x-12">
                2024 // ARCHIVE_
            </div>
            <div className="h-1 flex-1 bg-surface-card border-b-4 border-dashed border-gray-700"></div>
        </div>

        {/* ARCHIVE GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2">
            
            {/* Archive Card 1 */}
            <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
                <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
                    <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000')"}}></div>
                    <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
                    <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
                        <span className="material-symbols-outlined text-black text-[20px]">mic</span>
                        <span className="text-black text-xl uppercase tracking-wider font-bold">Fireside</span>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-5">
                    <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
                        <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">NOV 20 @ 18:00</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Founder Stories</h3>
                        <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
                            {">>"} Unfiltered stories of failure, pivot, and ultimate success from alumni.
                        </p>
                    </div>
                    <div className="pt-2 flex items-center justify-between mt-auto">
                        <button className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
                            VIEW_RECAP
                        </button>
                    </div>
                </div>
            </div>

            {/* Archive Card 2 */}
            <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
                <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
                    <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000')"}}></div>
                    <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
                    <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
                        <span className="material-symbols-outlined text-black text-[20px]">precision_manufacturing</span>
                        <span className="text-black text-xl uppercase tracking-wider font-bold">Demo Day</span>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-5">
                    <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
                        <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">DEC 15 @ 10:00</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Robotics Showcase</h3>
                        <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
                            {">>"} Live demos of student-built rovers and automation systems.
                        </p>
                    </div>
                    <div className="pt-2 flex items-center justify-between mt-auto">
                        <button className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
                            VIEW_RECAP
                        </button>
                    </div>
                </div>
            </div>

            {/* Archive Card 3 */}
            <div className="group flex flex-col bg-surface-card border-2 border-neon-orange shadow-retro-orange hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
                <div className="relative h-64 w-full overflow-hidden border-b-2 border-neon-orange bg-black">
                    <div className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1000')"}}></div>
                    <div className="absolute inset-0 bg-neon-orange/20 mix-blend-overlay"></div>
                    <div className="absolute top-4 left-0 bg-neon-orange border-r-2 border-y-2 border-white px-4 py-1 flex items-center gap-1 shadow-[2px_2px_0_0_#FFF]">
                        <span className="material-symbols-outlined text-black text-[20px]">monetization_on</span>
                        <span className="text-black text-xl uppercase tracking-wider font-bold">Finance</span>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-1 gap-5">
                    <div className="flex justify-between items-start border-b-2 border-dashed border-gray-700 pb-4">
                        <span className="bg-highlight text-cyber-black px-3 py-1 border-2 border-white text-xl shadow-[3px_3px_0px_0px_#FFF] font-bold">JAN 10 @ 13:00</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-warm-white text-4xl uppercase leading-none mb-3 group-hover:text-neon-orange transition-colors underline decoration-4 underline-offset-4 decoration-secondary">Venture Capital 101</h3>
                        <p className="text-highlight text-2xl leading-snug line-clamp-3 opacity-80">
                            {">>"} How to pitch your seed round. Understand what investors really want.
                        </p>
                    </div>
                    <div className="pt-2 flex items-center justify-between mt-auto">
                        <button className="bg-transparent text-neon-orange px-5 py-2 text-xl uppercase hover:bg-neon-orange hover:text-black transition-colors border-2 border-neon-orange font-bold shadow-[2px_2px_0px_0px_#FF6A00] hover:shadow-none translate-x-0 hover:translate-x-1 hover:translate-y-1">
                            VIEW_RECAP
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* <div className="mt-20 flex justify-center w-full">
            <button className="flex items-center gap-2 px-10 py-4 border-2 border-white bg-surface-card text-soft-gray hover:bg-white hover:text-black hover:shadow-[12px_12px_0px_0px_#E0AAFF] hover:-translate-x-1 hover:-translate-y-1 transition-all h-full relative rounded-none">
                [ ACCESS_OLDER_ARCHIVES ]
            </button>
        </div> */}

        <div className="mt-20 flex justify-center w-full">
    <button className="
        flex items-center justify-center gap-2
        px-16 py-6
        border-2 border-white
        bg-surface-card text-gray-400
        text-2xl font-semibold tracking-wide leading-none
        hover:bg-white hover:text-black
        hover:shadow-[12px_12px_0px_0px_#E0AAFF]
        hover:-translate-x-1 hover:-translate-y-1
        transition-all
        relative
        rounded-none
    ">
        [ ACCESS_OLDER_ARCHIVES ]
    </button>
</div>


      </main>
      <Footer />
    </>
  );
}


