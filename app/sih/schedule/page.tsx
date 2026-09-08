"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const scheduleData = [
  {
    date: "11th September, 2026",
    events: [
      { time: "5:30PM - 6:15PM", title: "Inaugural Ceremony + Briefing", desc: "Briefing of rules and about the checkpoints and requirements for the nominations", venue: "TBD" },
      { time: "6:30PM - 7:15PM", title: "Physical Registrations", desc: "Team verification, participant registration and completion of required formalities", venue: "IG Building" },
      { time: "07:15PM", title: "Hackathon Begins", desc: "Problem statements finalized; teams begin working on their selected PS", venue: "IG Building" },
      { time: "7:15PM - 8:30PM", title: "Lap 1", desc: "Understand and analyse the Problem Statement; identify the core problem, target users and key requirements", venue: "IG Building" },
      { time: "8:30PM - 9:00PM", title: "Dinner", desc: "", venue: "IG Building" },
      { time: "9:00PM - 11:30PM", title: "Lap 1 (continued)", desc: "Develop the basic/raw solution idea and prepare initial approach for mentor review", venue: "IG Building" },
      { time: "11:30PM - 12:00AM", title: "Checkpoint 1", desc: "No eliminations. Problem understanding + proposed solution. Mentors provide guidance, identify gaps and suggest improvements", venue: "IG Building", isCheckpoint: true }
    ]
  },
  {
    date: "12th September, 2026",
    events: [
      { time: "12:00AM - 12:45AM", title: "Fun Time + Refreshments 1", desc: "", venue: "IG Building" },
      { time: "12:45AM - 7:30AM", title: "Lap 2", desc: "Refine the solution based on mentor feedback; conduct feasibility analysis and finalize the proposed approach", venue: "IG Building" },
      { time: "7:30AM - 8:30AM", title: "Breakfast", desc: "", venue: "IG Building" },
      { time: "8:30AM - 2:00PM", title: "Lap 3", desc: "Define system architecture/workflow, technology stack and implementation plan; begin prototype development", venue: "IG Building" },
      { time: "11:00AM - 11:30AM", title: "Refreshments 2", desc: "", venue: "IG Building" },
      { time: "2:00PM - 3:30PM", title: "Lunch", desc: "", venue: "IG Building" },
      { time: "3:30PM - 4:30PM", title: "Checkpoint 2", desc: "Eliminations! Evaluation of problem understanding, innovation, feasibility, technical approach and implementation progress. Working proof/prototype expected wherever applicable", venue: "IG Building", isCheckpoint: true },
      { time: "4:30PM - 5:00PM", title: "Refreshments 3 + Announcement", desc: "Announcement of nominated teams progressing to the next evaluation stage", venue: "IG Building" },
      { time: "5:00PM - 8:30PM", title: "Lap 5", desc: "Continue development of functional prototype/MVP based on checkpoint feedback", venue: "IG Building" },
      { time: "8:30PM - 10:00PM", title: "Dinner", desc: "", venue: "IG Building" },
      { time: "10:00PM - 11:30PM", title: "Lap 5 (continued)", desc: "Integrate major features, test the solution and prepare a stable demonstrable prototype", venue: "IG Building" },
      { time: "11:30PM - 12:00AM", title: "Checkpoint 3", desc: "No eliminations. Prototype/MVP review; demonstrate implemented features and receive final technical/mentor feedback", venue: "IG Building", isCheckpoint: true }
    ]
  },
  {
    date: "13th September, 2026",
    events: [
      { time: "12:00AM - 12:45AM", title: "Fun Time + Refreshments 4", desc: "", venue: "IG Building" },
      { time: "12:45AM - 7:30AM", title: "Lap 6", desc: "Implement final improvements, resolve issues and complete the solution/prototype", venue: "IG Building" },
      { time: "7:30AM - 8:30AM", title: "Breakfast", desc: "", venue: "IG Building" },
      { time: "8:30AM - 11:30AM", title: "Lap 6 (continued)", desc: "Final testing, documentation and preparation of presentation/demo for the judging round", venue: "IG Building" },
      { time: "11:30AM - 12:00PM", title: "Final Mentorship + Refreshments 5", desc: "Final mentor review of solution, prototype and presentation; last-minute suggestions and improvements", venue: "IG Building" },
      { time: "12:00PM - 4:00PM", title: "Final Judging Round", desc: "Final pitch + live prototype/demo. Evaluation based on innovation, feasibility, impact, technical implementation, scalability and presentation", venue: "IG Building", isCheckpoint: true },
      { time: "4:00PM - 5:00PM", title: "Closing Ceremony", desc: "Results, awards, concluding remarks and further instructions for nominated teams", venue: "ALC" }
    ]
  }
];

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow relative w-full bg-background-main text-text-main font-pixel min-h-screen overflow-x-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[image:var(--bg-grid-radial)] bg-[size:32px_32px] pointer-events-none opacity-20 fixed" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none fixed" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none fixed" />

        <div className="relative z-10 max-w-[1000px] mx-auto px-6 py-12 lg:py-20 flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-4 text-center items-center">
            <Link href="/sih" className="text-secondary hover:text-white uppercase tracking-widest text-sm flex items-center gap-2 mb-4 transition-colors">
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Dashboard
            </Link>
            <div className="inline-flex items-center gap-3 px-4 py-1 border border-secondary/60 bg-surface-card/80 backdrop-blur-sm shadow-[0_0_20px_rgba(215,38,255,0.15)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-secondary opacity-75" />
                <span className="relative inline-flex rounded-sm h-3 w-3 bg-secondary" />
              </span>
              <span className="text-xl font-pixel tracking-widest uppercase text-white">
                Event Itinerary
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-pixel font-bold leading-tight text-text-main uppercase mt-4">
              SIH <span className="text-primary">IGNITE</span> SCHEDULE
            </h1>
            <p className="text-white/50 text-lg md:text-xl font-pixel mt-2">
              Internal Round — NIT Warangal (11-13 September, 2026)
            </p>
          </div>

          {/* Schedule List */}
          <div className="flex flex-col gap-16">
            {scheduleData.map((day, dayIdx) => (
              <div key={dayIdx} className="flex flex-col gap-8">
                {/* Day Header */}
                <div className="border-b-2 border-primary/40 pb-4">
                  <h2 className="text-3xl md:text-4xl font-pixel uppercase tracking-widest text-primary">
                    {day.date}
                  </h2>
                </div>

                {/* Timeline */}
                <div className="flex flex-col gap-6 relative before:absolute before:inset-0 before:ml-5 md:before:ml-[144px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                  {day.events.map((event, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

                      {/* Timeline Dot */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background-main bg-surface-card group-hover:border-secondary transition-colors absolute left-0 md:left-1/2 -translate-x-1/2 z-10">
                        {event.isCheckpoint ? (
                          <span className="material-symbols-outlined text-primary text-xl">flag</span>
                        ) : (
                          <span className="material-symbols-outlined text-white/30 text-base">schedule</span>
                        )}
                      </div>

                      {/* Content Box */}
                      <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 p-5 bg-surface-card/60 border border-white/5 group-hover:border-white/20 group-hover:bg-surface-card transition-all relative">
                        <div className="flex flex-col gap-2">
                          <span className="text-secondary font-mono tracking-widest text-sm md:text-base">
                            {event.time}
                          </span>
                          <h3 className={`text-xl md:text-2xl font-pixel uppercase ${event.isCheckpoint ? "text-primary" : "text-white"}`}>
                            {event.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="material-symbols-outlined text-white/40 text-sm">location_on</span>
                            <span className="text-white/40 font-mono text-xs uppercase tracking-wider">{event.venue}</span>
                          </div>
                          {event.desc && (
                            <p className="text-white/60 font-sans text-sm md:text-base mt-2 leading-relaxed">
                              {event.desc}
                            </p>
                          )}
                        </div>
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
