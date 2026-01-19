// "use client";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { useState } from "react";

// // Mock Data for Team Members
// const teamData = {
//   Startup: [
//     { name: "David Kim", role: "Addl. Sec", dept: "Operations", img: "/assets/p2.jpg" },
//     { name: "Sarah J.", role: "Executive", dept: "Outreach", img: "/assets/p3.jpg" },
//   ],
//   "AI Wing": [
//     { name: "Leo Turner", role: "Addl. Sec", dept: "Research", img: "/assets/p4.jpg" },
//     { name: "Elena R.", role: "Executive", dept: "NLP Dept", img: "/assets/p5.jpg" },
//   ],
//   Tech: [
//     { name: "Jordan Lee", role: "Tech Lead", dept: "DevOps", img: "/assets/p6.jpg" },
//   ],
//   ECC: [
//     { name: "Sophia Chen", role: "Lead", dept: "Comms", img: "/assets/p7.jpg" },
//   ]
// };

// export default function Teams() {
//   const [activeTab, setActiveTab] = useState<keyof typeof teamData>("Startup");

//   return (
//     <>
//       <Navbar />
//       <main className="min-h-screen pt-24 bg-cyber-black text-warm-white relative">
//         <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none fixed"></div>
        
//         <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-12 flex flex-col gap-20">
          
//           {/* LEADERSHIP SECTION */}
//           <section>
//             <div className="flex flex-col items-center mb-16 text-center">
//               <div className="inline-flex items-center gap-2 px-4 py-1 border border-neon-orange bg-cyber-gray/80 backdrop-blur-sm shadow-[0_0_10px_rgba(255,106,0,0.2)] mb-6">
//                 <span className="relative flex h-3 w-3">
//                   <span className="animate-ping absolute inline-flex h-full w-full bg-neon-orange opacity-75"></span>
//                   <span className="relative inline-flex h-3 w-3 bg-neon-orange"></span>
//                 </span>
//                 <span className="text-lg font-bold font-pixel tracking-widest uppercase text-white">Core Command</span>
//               </div>
//               <h1 className="text-4xl md:text-6xl font-pixel font-bold leading-tight text-white mb-4 uppercase">
//                 Leadership
//               </h1>
//               <p className="text-gray-400 text-xl max-w-2xl mx-auto font-display">Guiding the vision and execution of student innovation.</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//               {/* Faculty Advisor Card */}
//               <div className="group relative bg-cyber-gray border-2 border-white/10 p-8 hover:border-neon-magenta transition-all duration-300 hover:shadow-retro-magenta pixel-corners">
//                 <div className="absolute top-4 right-4 opacity-50">
//                   <span className="material-symbols-outlined text-4xl text-white/20">school</span>
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
//                   <div className="w-32 h-32 overflow-hidden border-2 border-neon-magenta shrink-0 bg-black relative pixel-corners">
//                      {/* Placeholder Image */}
//                     <div className="w-full h-full bg-gray-800"></div> 
//                   </div>
//                   <div className="text-center sm:text-left flex-1">
//                     <h3 className="text-3xl font-bold font-pixel text-white mb-2 uppercase">Dr. Eleanor Vance</h3>
//                     <div className="inline-block bg-neon-orange/10 px-2 py-0.5 mb-3 border border-neon-orange/20">
//                       <p className="text-neon-orange text-lg font-bold font-pixel uppercase tracking-wide">Faculty Advisor</p>
//                     </div>
//                     <p className="text-gray-400 text-lg mb-6 leading-tight font-display">Dept. of Computer Science & Engineering</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Gen Sec Card */}
//               <div className="group relative bg-cyber-gray border-2 border-white/10 p-8 hover:border-neon-orange transition-all duration-300 hover:shadow-retro-orange pixel-corners">
//                 <div className="absolute top-4 right-4 opacity-50">
//                   <span className="material-symbols-outlined text-4xl text-white/20">badge</span>
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
//                   <div className="w-32 h-32 overflow-hidden border-2 border-neon-orange shrink-0 bg-black pixel-corners">
//                     <div className="w-full h-full bg-gray-800"></div>
//                   </div>
//                   <div className="text-center sm:text-left flex-1">
//                     <h3 className="text-3xl font-bold font-pixel text-white mb-2 uppercase">Marcus Thorne</h3>
//                     <div className="inline-block bg-neon-orange/10 px-2 py-0.5 mb-3 border border-neon-orange/20">
//                       <p className="text-neon-orange text-lg font-bold font-pixel uppercase tracking-wide">General Secretary</p>
//                     </div>
//                     <p className="text-gray-400 text-lg mb-6 leading-tight font-display">Student Council • Final Year</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* SQUADRONS TABS SECTION */}
//           <section className="w-full pb-20">
//             <div className="flex flex-col items-center mb-10 text-center">
//               <h2 className="text-4xl md:text-5xl font-pixel font-bold text-white mb-2 uppercase">Squadrons</h2>
//               <div className="h-1 w-32 bg-gradient-to-r from-neon-magenta via-white to-neon-orange mb-6"></div>
//             </div>

//             {/* Tab Buttons */}
//             <div className="flex flex-wrap justify-center gap-4 mb-12">
//               {Object.keys(teamData).map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab as any)}
//                   className={`px-8 py-3 border-2 text-xl font-pixel uppercase tracking-widest transition-all duration-200 pixel-corners ${
//                     activeTab === tab 
//                     ? "bg-neon-magenta text-white border-neon-magenta shadow-neon-glow" 
//                     : "bg-cyber-gray border-white/10 text-gray-400 hover:border-neon-magenta hover:text-neon-magenta"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             {/* Tab Content Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse-slow">
//               {teamData[activeTab].map((member, idx) => (
//                 <div key={idx} className="bg-cyber-gray border-2 border-white/5 p-4 flex flex-col items-center text-center hover:border-white/20 transition-all group relative pixel-corners">
//                   <div className="w-full aspect-square bg-black mb-4 overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-300">
//                     {/* <Image src={member.img} ... /> */}
//                     <div className="w-full h-full bg-gray-800"></div>
//                   </div>
//                   <h4 className="text-2xl font-bold font-pixel text-white uppercase tracking-wide">{member.name}</h4>
//                   <p className="text-neon-magenta text-lg font-pixel uppercase mb-1 font-bold">{member.role}</p>
//                   <p className="text-gray-500 text-lg mb-4 font-display">{member.dept}</p>
//                   <button className="w-full py-2 border border-white/20 text-lavender hover:bg-neon-magenta hover:border-neon-magenta hover:text-white transition-all uppercase flex justify-center items-center gap-2 pixel-corners font-pixel">
//                     <span className="material-symbols-outlined text-lg">link</span> Connect
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }



"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import LinkedIn from "next-auth/providers/linkedin";

const teamData = {
  ECC: [
    { 
      name: "Avdhesh Mehta", 
      role: "Addl. Sec", 
      dept: "MME Dept. - 4th Year", 
      img: "/teams/Avdhesh.png", 
      link: "" 
    },
    { 
      name: "Naitik Lunkad", 
      role: "Executive", 
      dept: "CHEM Dept. - 3rd Year", 
      img: "/teams/Naitik.png", 
      link: "https://www.linkedin.com/in/naitik-lunkad-664937349/" 
    },
    { 
      name: "Vikalp Saxena", 
      role: "Executive", 
      dept: "BT Dept. - 3rd Year", 
      img: "/teams/Vikalp.png", 
      link: "https://www.linkedin.com/in/vikalp-saxena-751a27206/" 
    },
    { 
      name: "K Jnana Vaishnavi", 
      role: "Executive", 
      dept: "CHEM Dept. - 3rd Year", 
      img: "/teams/Vaishnavi.png", 
      link: "https://www.linkedin.com/in/vaishnavi-kuppa-436650301/" 
    },
    { 
      name: "Vatsal Saini", 
      role: "Executive", 
      dept: "MECH Dept. - 2nd Year", 
      img: "/teams/Vatsal.jpeg", 
      link: "https://www.linkedin.com/in/vatsal-saini-b7bb23323/" 
    }
  ],
  "AI Wing": [
    { 
      name: "Anirvesh Mangipudi", 
      role: "Addl. Sec", 
      dept: "ECE Dept. - 3rd Year", 
      img: "/teams/Anirvesh.png", 
      link: "https://www.linkedin.com/in/anirvesh-mangipudi-7112222b7/" 
    },
    { 
      name: "Vedant Amit Agrawal", 
      role: "Executive", 
      dept: "CSE Dept. - 3rd Year", 
      img: "/teams/Vedant.png", 
      link: "https://www.linkedin.com/in/vedant-agrawal-0ba2a7325/" 
    },
    { 
      name: "A Mukesh Reddy", 
      role: "Executive", 
      dept: "BT Dept. - 2nd Year", 
      img: "/teams/Mukesh.png", 
      link: "https://www.linkedin.com/in/0xmukesh/" 
    }
  ],
  Tech: [
    { 
      name: "Aayush A Singh", 
      role: "Addl. Sec", 
      dept: "EEE Dept. - 3rd Year", 
      img: "/teams/Aayush.png", 
      link: "https://www.linkedin.com/in/aayush-singh-1413ab283/" 
    },
    { 
      name: "Trupti S Aggarwal", 
      role: "Executive", 
      dept: "MnC Dept. - 2nd Year", 
      img: "/teams/Trupti.png", 
      link: "https://www.linkedin.com/in/trupti-aggarwal-a91670350/" 
    },
    { 
      name: "Don Roy Chacko", 
      role: "Executive", 
      dept: "CSE Dept. - 2nd Year", 
      img: "/teams/Don.png", 
      link: "https://www.linkedin.com/in/don-chacko/" 
    },
    { 
      name: "Goutham Koushik Sai", 
      role: "Executive", 
      dept: "MECH Dept. - 2nd Year", 
      img: "/teams/Goutham.png", 
      link: "https://www.linkedin.com/in/koushik-sai-goutham-a6b622333/" 
    },
    { 
      name: "Ashutosh S Bhat", 
      role: "Executive", 
      dept: "ECE Dept. - 2nd Year", 
      img: "/teams/Ashutosh.png", 
      link: "https://www.linkedin.com/in/ashutosh-b-365206328/" 
    }
  ],
  Design: [
    { 
      name: "Mokshith Srinivas", 
      role: "Addl. Sec", 
      dept: "MECH Dept. - 3rd Year", 
      img: "/teams/Mokshith.png", 
      link: "https://www.linkedin.com/in/mokshith-srinivas-surutkar-436322280/" 
    },
    { 
      name: "Hardik Nishad", 
      role: "Executive", 
      dept: "CHEM Dept. - 2nd Year", 
      img: "/teams/Hardik.png", 
      link: "https://www.linkedin.com/in/hardik-nishad-1b36aa311/" 
    },
    { 
      name: "Shubhankar Rawat", 
      role: "Executive", 
      dept: "BT Dept. - 2nd Year", 
      img: "/teams/Shubhankar.png", 
      link: "https://www.linkedin.com/in/shubhankar-rawat-aa754622a/" 
    }
  ],
  Startup: [
    { 
      name: "Akshay Kumar Korepu", 
      role: "Executive", 
      dept: "MnC Dept. - 2nd Year", 
      img: "/teams/Akshay.png", 
      link: "https://www.linkedin.com/in/akshaykumarkorepu/" 
    },
    { 
      name: "Shambhavi Dhange", 
      role: "Executive", 
      dept: "MnC Dept. - 2nd Year", 
      img: "/teams/Shambhavi.png", 
      link: "https://www.linkedin.com/in/shambhavi-dhange-768049343/" 
    },
    { 
      name: "Atharv Kaushik", 
      role: "Executive", 
      dept: "CHEM Dept. - 2nd Year", 
      img: "/teams/Atharv.png", 
      link: "https://www.linkedin.com/in/atharvkaushik/" 
    },
    { 
      name: "M Rithik", 
      role: "Executive", 
      dept: "BT Dept. - 2nd Year", 
      img: "/teams/Rithik.png", 
      link: "https://www.linkedin.com/in/rithik-m-295a13389/" 
    },
    { 
      name: "Mrinaal Gupta", 
      role: "Executive", 
      dept: "CSE(AI DS) Dept. - 2nd Year", 
      img: "/teams/Mrinaal.png", 
      link: "https://www.linkedin.com/in/mrinaal-gupta-52240a279/" 
    }
  ]
};
export default function Teams() {
  const [activeTab, setActiveTab] = useState<keyof typeof teamData>("Startup");

  return (
    <>
      <Navbar />
      <main className="flex-grow relative w-full bg-background-main text-text-main font-pixel min-h-screen">
        
        {/* Background Effects from code1.html */}
        <div className="absolute inset-0 bg-[image:var(--bg-grid-radial)] bg-[size:32px_32px] pointer-events-none opacity-20 fixed"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none fixed"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none fixed"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-12 lg:py-20 flex flex-col gap-20">
          
          {/* LEADERSHIP SECTION */}
          <section>
            <div className="flex flex-col items-center pt-5 mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-none border border-primary bg-surface-card/80 backdrop-blur-sm shadow-[0_0_10px_rgba(255,106,0,0.2)] mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-sm h-3 w-3 bg-primary"></span>
                </span>
                <span className="text-lg font-bold text-text-main tracking-widest uppercase">Core Command</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-arial font-bold leading-tight tracking-tight text-text-main mb-4 uppercase">
                Leadership
              </h1>
              <p className="text-gray-400 text-xl max-w-2xl mx-auto font-pixel">Guiding the vision and execution of student innovation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Faculty Advisor
              <div className="group relative bg-surface-card border-2 border-white/10 p-8 hover:border-secondary transition-all duration-300 shadow-none hover:shadow-[8px_8px_0px_0px_rgba(215,38,255,0.5)]">
                <div className="absolute top-4 right-4 opacity-50">

                </div>
                <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                  <div className="w-32 h-32 overflow-hidden border-2 border-secondary shrink-0 bg-background-main relative">
                    <img 
                      src="https://randomuser.me/api/portraits/women/68.jpg" 
                      alt="Faculty Advisor" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      style={{ imageRendering: "pixelated" }}
                    />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/50 pointer-events-none"></div>
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-3xl font-bold text-text-main font-arial mb-2 uppercase">Dr. Eleanor Vance</h3>
                    <div className="inline-block bg-primary/10 px-2 py-0.5 mb-3 border border-primary/20">
                      <p className="text-primary text-lg font-bold uppercase tracking-wide font-pixel">Faculty Advisor</p>
                    </div>
                    <p className="text-gray-400 text-lg mb-6 leading-tight font-pixel">Dept. of Computer Science & Engineering</p>
                    <a className="inline-flex items-center gap-2 text-lg text-cyber-lavender hover:text-secondary transition-colors uppercase border-b border-cyber-lavender/30 hover:border-secondary pb-0.5 font-pixel" href="#">
                      <span className="material-symbols-outlined text-xl">link</span>
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div> */}

              {/* General Secretary */}
              <div className="group relative bg-surface-card border-2 border-white/10 p-8 hover:border-primary transition-all duration-300 shadow-none hover:shadow-[8px_8px_0px_0px_rgba(255,106,0,0.5)]">
                <div className="absolute top-4 right-4 opacity-50">
                  {/* <span className="material-symbols-outlined text-4xl text-white/20">badge</span> */}
                </div>
                <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                  <div className="w-32 h-32 overflow-hidden border-2 border-primary shrink-0 bg-background-main">
                    <img 
                      src="/teams/Lavanya.png" 
                      alt="General Secretary" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      style={{ imageRendering: "pixelated" }}
                    />
                  </div>
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-3xl font-bold text-text-main font-arial mb-2 uppercase">Lavanya Trivedi</h3>
                    <div className="inline-block bg-primary/10 px-2 py-0.5 mb-3 border border-primary/20">
                      <p className="text-primary text-lg font-bold uppercase tracking-wide font-pixel">General Secretary</p>
                    </div>
                    <p className="text-gray-400 text-lg mb-6 leading-tight font-pixel">3rd Year</p>
                    <a className="inline-flex items-center gap-2 text-lg text-cyber-lavender hover:text-primary transition-colors uppercase border-b border-cyber-lavender/30 hover:border-primary pb-0.5 font-pixel" href="https://www.linkedin.com/in/lavanyatrivedi/?originalSubdomain=in">
                      <span className="material-symbols-outlined text-xl">link</span>
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SQUADRONS SECTION */}
          <section className="w-full">
            <div className="flex flex-col items-center mb-10 text-center">
              <h2 className="text-4xl md:text-6xl font-arial font-bold text-text-main mb-2 uppercase">
                Squadrons
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-secondary via-white to-primary mb-6"></div>
              <p className="text-gray-400 text-xl font-pixel">Initialize team protocol below</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(teamData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`cursor-pointer px-8 py-3 border-2 text-xl uppercase tracking-widest transition-all duration-200 select-none font-pixel ${
                    activeTab === tab 
                    ? "bg-secondary text-white border-secondary shadow-neon-hover" 
                    : "bg-surface-card border-white/10 text-gray-400 hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                {teamData[activeTab].map((member, idx) => (
                  <div key={idx} className="bg-surface-card border-2 border-white/5 p-4 flex flex-col items-center text-center hover:border-white/20 transition-all group relative">
                    <div className="absolute top-2 right-2 text-white/10 group-hover:text-white/30">
                      {/* <span className="material-symbols-outlined">rocket_launch</span> */}
                    </div>
                    <div className="w-full aspect-square bg-background-main mb-4 overflow-hidden border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-300">
                      <img 
                        src={member.img} 
                        alt={member.name}
                        className="w-full h-full object-cover" 
                        style={{ imageRendering: "pixelated" }}
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-text-main font-arial uppercase tracking-wide">{member.name}</h4>
                    <p className={`text-lg uppercase mb-1 font-bold font-pixel ${member.role === 'Addl. Sec' ? 'text-secondary' : 'text-primary'}`}>
                      {member.role}
                    </p>
                    <p className="text-gray-500 text-lg mb-4 font-pixel">{member.dept}</p>
                    <a className={`w-full py-2 border border-white/20 text-cyber-lavender hover:text-white transition-all uppercase flex justify-center items-center gap-2 font-pixel ${
                        member.role === 'Addl. Sec' 
                        ? 'hover:bg-secondary hover:border-secondary' 
                        : 'hover:bg-primary hover:border-primary'
                    }`} href={member.link}>
                      <span className="material-symbols-outlined text-lg">link</span> Connect
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}