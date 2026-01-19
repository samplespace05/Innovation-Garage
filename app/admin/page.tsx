// "use client";
// import { useState } from "react";
// import Navbar from "@/components/Navbar";

// export default function AdminDashboard() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [password, setPassword] = useState("");
//   const [activeTab, setActiveTab] = useState<"IG_idea_submissions" | "Newsletter" | "Broadcast">("IG_idea_submissions");
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Broadcast State
//   const [broadcastSubject, setBroadcastSubject] = useState("");
//   const [broadcastMessage, setBroadcastMessage] = useState("");
//   const [broadcasting, setBroadcasting] = useState(false);
//   const [broadcastStatus, setBroadcastStatus] = useState("");

//   // --- LOGIN LOGIC ---
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch("/api/admin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ password, sheetName: "IG_idea_submissions" }),
//       });

//       const result = await res.json();
//       if (res.status === 200 && result.success) {
//         setIsAuthenticated(true);
//         setData(result.data);
//       } else {
//         setError("INCORRECT ACCESS CODE");
//       }
//     } catch (err) {
//       setError("System Error: Unable to verify credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- FETCH DATA (View Tables) ---
//   const fetchData = async (sheetName: "IG_idea_submissions" | "Newsletter") => {
//     setLoading(true);
//     setActiveTab(sheetName);
//     setError("");
    
//     try {
//       const res = await fetch("/api/admin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ password, sheetName }),
//       });
//       const result = await res.json();
      
//       if (result.success) setData(result.data);
//       else {
//         setIsAuthenticated(false);
//         setError("Session Expired.");
//       }
//     } catch (err) {
//       setError("Failed to fetch data stream.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- SEND BROADCAST (New Feature) ---
//   const handleBroadcast = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if(!confirm("⚠️ INITIATE MASS TRANSMISSION?\nThis will send emails to ALL subscribers.")) return;

//     setBroadcasting(true);
//     setBroadcastStatus("TRANSMITTING...");

//     try {
//         const res = await fetch("/api/admin", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ 
//                 password, 
//                 action: "broadcastEmail", 
//                 subject: broadcastSubject,
//                 message: broadcastMessage
//             }),
//         });
//         const result = await res.json();
//         if (result.success) {
//             setBroadcastStatus("✅ " + result.data); 
//             setBroadcastSubject("");
//             setBroadcastMessage("");
//         } else {
//             setBroadcastStatus("❌ ERROR: " + result.error);
//         }
//     } catch (err) {
//         setBroadcastStatus("❌ SYSTEM FAILURE");
//     } finally {
//         setBroadcasting(false);
//     }
//   };

//   // --- RENDER: LOGIN SCREEN ---
//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center font-pixel p-4">
//         <div className="max-w-md w-full border-2 border-red-600 p-8 bg-gray-900 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
//           <div className="flex items-center gap-4 mb-8 text-red-500">
//             <span className="material-symbols-outlined text-4xl">lock</span>
//             <h1 className="text-3xl uppercase tracking-widest">Restricted Area</h1>
//           </div>
//           <form onSubmit={handleLogin} className="space-y-6">
//             <div className="space-y-2">
//               <label className="text-gray-500 uppercase text-sm">Enter Access Code</label>
//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-black border border-gray-700 p-3 text-white focus:border-red-500 outline-none text-xl tracking-widest placeholder-gray-800" placeholder="••••••••" />
//             </div>
//             {error && <p className="text-red-500 animate-pulse bg-red-900/20 p-2 border border-red-900">{error}</p>}
//             <button type="submit" disabled={loading} className={`w-full bg-red-600 text-black font-bold py-3 uppercase hover:bg-white transition-colors flex justify-center items-center gap-2 ${loading ? "opacity-50 cursor-wait" : ""}`}>
//               {loading ? "VERIFYING..." : "UNLOCK TERMINAL"}
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 text-white font-mono">
//       <Navbar />
//       <div className="pt-24 px-6 max-w-[1600px] mx-auto">
        
//         {/* HEADER & TABS */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-700 pb-4 gap-4">
//             <div>
//                 <h1 className="text-3xl font-pixel text-neon-orange mb-2">ADMIN_CONSOLE // V1.0</h1>
//                 <p className="text-gray-400">Database Access Level: ROOT</p>
//             </div>
//             <div className="flex gap-4">
//                 <button onClick={() => fetchData("IG_idea_submissions")} className={`px-6 py-2 font-bold uppercase border-2 transition-all ${activeTab === "IG_idea_submissions" ? "bg-neon-orange text-black border-neon-orange" : "border-gray-600 text-gray-400 hover:border-white"}`}>Ideas</button>
//                 <button onClick={() => fetchData("Newsletter")} className={`px-6 py-2 font-bold uppercase border-2 transition-all ${activeTab === "Newsletter" ? "bg-neon-magenta text-black border-neon-magenta" : "border-gray-600 text-gray-400 hover:border-white"}`}>Subscribers</button>
//                 <button onClick={() => { setActiveTab("Broadcast"); setData([]); }} className={`px-6 py-2 font-bold uppercase border-2 transition-all ${activeTab === "Broadcast" ? "bg-red-600 text-black border-red-600" : "border-gray-600 text-gray-400 hover:border-white"}`}>Broadcast</button>
//             </div>
//         </div>

//         {/* CONTENT AREA */}
//         {activeTab === "Broadcast" ? (
//             <div className="bg-black border border-gray-800 p-8 min-h-[500px] flex flex-col items-center justify-center">
//                 <div className="max-w-2xl w-full border-2 border-red-600/50 p-8 bg-red-900/5 relative pixel-corners">
//                     <div className="absolute top-0 left-0 bg-red-600 text-black px-2 py-1 text-xs font-bold uppercase">Admin Clearance Required</div>
//                     <h2 className="text-2xl font-pixel text-red-500 mb-6 uppercase tracking-widest flex items-center gap-3">
//                         <span className="material-symbols-outlined">tower_broadcast</span> Mass Transmission
//                     </h2>
//                     <form onSubmit={handleBroadcast} className="space-y-6">
//                         <div>
//                             <label className="block text-gray-500 text-sm mb-2 uppercase">Subject Line</label>
//                             <input type="text" required value={broadcastSubject} onChange={(e) => setBroadcastSubject(e.target.value)} placeholder="[IMPORTANT] Hackathon Updates..." className="w-full bg-black border border-gray-700 p-3 text-white focus:border-red-500 outline-none font-mono"/>
//                         </div>
//                         <div>
//                             <label className="block text-gray-500 text-sm mb-2 uppercase">Message Body (HTML Allowed)</label>
//                             <textarea required rows={6} value={broadcastMessage} onChange={(e) => setBroadcastMessage(e.target.value)} placeholder="Agents, the time has come..." className="w-full bg-black border border-gray-700 p-3 text-white focus:border-red-500 outline-none font-mono"/>
//                         </div>
//                         <div className="flex items-center justify-between">
//                             <p className="text-neon-orange font-pixel text-sm animate-pulse">{broadcastStatus}</p>
//                             <button type="submit" disabled={broadcasting} className={`px-8 py-3 bg-red-600 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors ${broadcasting ? "opacity-50 cursor-not-allowed" : ""}`}>
//                                 {broadcasting ? "SENDING..." : "LAUNCH BROADCAST"}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         ) : (
//             <div className="bg-black border border-gray-800 overflow-x-auto min-h-[500px] relative">
//                 {loading && <div className="absolute inset-0 bg-black/80 z-10 flex items-center justify-center text-neon-orange font-pixel text-2xl animate-pulse">FETCHING DATA STREAMS...</div>}
//                 {!loading && data.length === 0 ? (
//                     <div className="flex h-64 items-center justify-center text-gray-600 font-pixel text-xl">[ DATABASE EMPTY ]</div>
//                 ) : (
//                     <table className="w-full text-left border-collapse">
//                         <thead className="bg-gray-800 text-gray-300 font-pixel uppercase tracking-wider text-sm sticky top-0">
//                             <tr>{data.length > 0 && Object.keys(data[0]).map((key) => <th key={key} className="p-4 border-b border-gray-700 whitespace-nowrap">{key}</th>)}</tr>
//                         </thead>
//                         <tbody className="divide-y divide-gray-800">
//                             {data.map((row, i) => (
//                                 <tr key={i} className="hover:bg-white/5 transition-colors">
//                                     {Object.values(row).map((val: any, j) => <td key={j} className="p-4 text-sm text-gray-300 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">{val}</td>)}
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         )}
//       </div>
//     </div>
//   );
// }












// "use client";
// import { useState } from "react";
// import Navbar from "@/components/Navbar";

// // Types for our Event System
// type Question = {
//   id: number;
//   label: string;
//   type: "text" | "number" | "dropdown";
//   options?: string; // Comma separated for dropdowns
// };

// export default function AdminDashboard() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [password, setPassword] = useState("");
//   const [activeTab, setActiveTab] = useState<"IG_idea_submissions" | "Newsletter" | "Broadcast" | "Events">("IG_idea_submissions");
//   const [data, setData] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Broadcast State
//   const [broadcastSubject, setBroadcastSubject] = useState("");
//   const [broadcastMessage, setBroadcastMessage] = useState("");
//   const [broadcasting, setBroadcasting] = useState(false);
//   const [broadcastStatus, setBroadcastStatus] = useState("");

//   // Event Creator State
//   const [eventTitle, setEventTitle] = useState("");
//   const [eventDate, setEventDate] = useState("");
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [creatingEvent, setCreatingEvent] = useState(false);
//   const [createStatus, setCreateStatus] = useState("");

//   // --- LOGIN LOGIC ---
//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ password, sheetName: "IG_idea_submissions" }),
//       });
//       const result = await res.json();
//       if (res.status === 200 && result.success) {
//         setIsAuthenticated(true);
//         setData(result.data);
//       } else setError("INCORRECT ACCESS CODE");
//     } catch (err) { setError("System Error"); } finally { setLoading(false); }
//   };

//   // --- GENERIC FETCH ---
//   const fetchData = async (sheetName: string, tabName: any) => {
//     setLoading(true);
//     setActiveTab(tabName);
//     setError("");
//     try {
//       const res = await fetch("/api/admin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ password, sheetName }),
//       });
//       const result = await res.json();
//       if (result.success) setData(result.data);
//       else setError("Failed to fetch data.");
//     } catch (err) { setError("System Error"); } finally { setLoading(false); }
//   };

//   // --- CREATE EVENT LOGIC ---
//   const addQuestion = () => {
//     setQuestions([...questions, { id: Date.now(), label: "", type: "text" }]);
//   };

//   const removeQuestion = (id: number) => {
//     setQuestions(questions.filter(q => q.id !== id));
//   };

//   const handleCreateEvent = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setCreatingEvent(true);
//     setCreateStatus("INITIALIZING DATABASE...");

//     try {
//       const res = await fetch("/api/admin", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           password,
//           action: "createEvent",
//           title: eventTitle,
//           dateString: eventDate,
//           formConfig: questions
//         }),
//       });
//       const result = await res.json();
//       if (result.success) {
//         setCreateStatus("✅ EVENT DEPLOYED: " + result.data);
//         setEventTitle("");
//         setEventDate("");
//         setQuestions([]);
//         // Refresh the list to show the new event
//         setTimeout(() => fetchData("Events_Master", "Events"), 2000);
//       } else {
//         setCreateStatus("❌ ERROR: " + result.error);
//       }
//     } catch (err) {
//       setCreateStatus("❌ SYSTEM FAILURE");
//     } finally {
//       setCreatingEvent(false);
//     }
//   };

//   // --- RENDER LOGIN ---
//   if (!isAuthenticated) return (
//     <div className="min-h-screen bg-black flex items-center justify-center font-pixel p-4">
//         {/* ... (Keep your existing Login UI) ... */}
//         <div className="max-w-md w-full border-2 border-red-600 p-8 bg-gray-900 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
//           <div className="flex items-center gap-4 mb-8 text-red-500">
//             <span className="material-symbols-outlined text-4xl">lock</span>
//             <h1 className="text-3xl uppercase tracking-widest">Restricted Area</h1>
//           </div>
//           <form onSubmit={handleLogin} className="space-y-6">
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-black border border-gray-700 p-3 text-white focus:border-red-500 outline-none text-xl tracking-widest" placeholder="ACCESS CODE" />
//             <button type="submit" className="w-full bg-red-600 text-black font-bold py-3 uppercase">UNLOCK</button>
//           </form>
//           {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
//         </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-900 text-white font-mono">
//       <Navbar />
//       <div className="pt-24 px-6 max-w-[1600px] mx-auto">
        
//         {/* HEADER */}
//         <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-700 pb-4 gap-4">
//             <div>
//                 <h1 className="text-3xl font-pixel text-neon-orange mb-2">ADMIN_CONSOLE // V2.0</h1>
//                 <p className="text-gray-400">Database Access Level: ROOT</p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//                 <button onClick={() => fetchData("IG_idea_submissions", "IG_idea_submissions")} className={`px-4 py-2 font-bold uppercase border-2 ${activeTab === "IG_idea_submissions" ? "bg-neon-orange text-black border-neon-orange" : "border-gray-600 text-gray-400"}`}>Ideas</button>
//                 <button onClick={() => fetchData("Newsletter", "Newsletter")} className={`px-4 py-2 font-bold uppercase border-2 ${activeTab === "Newsletter" ? "bg-neon-magenta text-black border-neon-magenta" : "border-gray-600 text-gray-400"}`}>Subscribers</button>
//                 <button onClick={() => fetchData("Events_Master", "Events")} className={`px-4 py-2 font-bold uppercase border-2 ${activeTab === "Events" ? "bg-cyan-400 text-black border-cyan-400" : "border-gray-600 text-gray-400"}`}>Events</button>
//                 <button onClick={() => { setActiveTab("Broadcast"); setData([]); }} className={`px-4 py-2 font-bold uppercase border-2 ${activeTab === "Broadcast" ? "bg-red-600 text-black border-red-600" : "border-gray-600 text-gray-400"}`}>Broadcast</button>
//             </div>
//         </div>

//         {/* CONTENT AREA */}
        
//         {/* 1. EVENTS MANAGER TAB (New) */}
//         {activeTab === "Events" && (
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* LIST OF EVENTS */}
//                 <div className="bg-black border border-gray-800 p-6 min-h-[500px]">
//                     <h3 className="text-xl font-pixel text-cyan-400 mb-6 uppercase">Active Events</h3>
//                     {loading ? <p className="animate-pulse">LOADING PROTOCOLS...</p> : (
//                         <div className="space-y-4">
//                             {data.map((evt, i) => (
//                                 <div key={i} className="border border-gray-700 p-4 hover:border-cyan-400 transition-colors cursor-pointer group" onClick={() => fetchData(`Reg_${evt.EventID}`, "IG_idea_submissions")}>
//                                     <div className="flex justify-between items-start">
//                                         <div>
//                                             <h4 className="font-bold text-lg text-white group-hover:text-cyan-400">{evt.Title}</h4>
//                                             <p className="text-sm text-gray-500">{evt.DateString}</p>
//                                         </div>
//                                         <span className="text-xs bg-gray-800 px-2 py-1 text-gray-400">{evt.Status}</span>
//                                     </div>
//                                     <p className="text-xs text-gray-600 mt-2 font-mono">ID: {evt.EventID}</p>
//                                     <div className="mt-2 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
//                                         Click to view registrations &rarr;
//                                     </div>
//                                 </div>
//                             ))}
//                             {data.length === 0 && <p className="text-gray-600">No events found.</p>}
//                         </div>
//                     )}
//                 </div>

//                 {/* EVENT CREATOR FORM */}
//                 <div className="bg-gray-800/50 border border-gray-700 p-6">
//                     <h3 className="text-xl font-pixel text-white mb-6 uppercase flex items-center gap-2">
//                         <span className="material-symbols-outlined">add_circle</span> Create New Event
//                     </h3>
//                     <form onSubmit={handleCreateEvent} className="space-y-6">
//                         <div className="grid grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-xs uppercase text-gray-400 mb-1">Event Title</label>
//                                 <input required type="text" value={eventTitle} onChange={e => setEventTitle(e.target.value)} className="w-full bg-black border border-gray-600 p-2 text-white focus:border-cyan-400 outline-none" placeholder="e.g. Velocity Hackathon" />
//                             </div>
//                             <div>
//                                 <label className="block text-xs uppercase text-gray-400 mb-1">Date String</label>
//                                 <input required type="text" value={eventDate} onChange={e => setEventDate(e.target.value)} className="w-full bg-black border border-gray-600 p-2 text-white focus:border-cyan-400 outline-none" placeholder="e.g. March 10-12" />
//                             </div>
//                         </div>

//                         {/* DYNAMIC QUESTIONS BUILDER */}
//                         <div className="border-t border-gray-700 pt-4">
//                             <label className="block text-xs uppercase text-cyan-400 mb-3">Registration Form Config</label>
                            
//                             {/* Standard Fields Notice */}
//                             <div className="text-xs text-gray-500 mb-4 bg-black/50 p-2 border border-dashed border-gray-700">
//                                 Default fields included: Name, Email, Roll No, Phone, Branch, Year.
//                             </div>

//                             {questions.map((q, idx) => (
//                                 <div key={q.id} className="flex gap-2 mb-2 items-start animate-fade-in">
//                                     <div className="flex-1">
//                                         <input type="text" placeholder="Question Label (e.g. GitHub Link)" value={q.label} 
//                                             onChange={(e) => {
//                                                 const newQ = [...questions];
//                                                 newQ[idx].label = e.target.value;
//                                                 setQuestions(newQ);
//                                             }}
//                                             className="w-full bg-black border border-gray-600 p-2 text-sm text-white focus:border-cyan-400 outline-none"
//                                         />
//                                     </div>
//                                     <select 
//                                         value={q.type}
//                                         onChange={(e) => {
//                                             const newQ = [...questions];
//                                             newQ[idx].type = e.target.value as any;
//                                             setQuestions(newQ);
//                                         }}
//                                         className="bg-black border border-gray-600 p-2 text-sm text-gray-300 outline-none"
//                                     >
//                                         <option value="text">Text</option>
//                                         <option value="number">Number</option>
//                                         <option value="dropdown">Dropdown</option>
//                                     </select>
//                                     <button type="button" onClick={() => removeQuestion(q.id)} className="p-2 text-red-500 hover:text-white hover:bg-red-500 transition-colors">
//                                         <span className="material-symbols-outlined text-lg">delete</span>
//                                     </button>
//                                 </div>
//                             ))}

//                             <button type="button" onClick={addQuestion} className="mt-2 text-xs uppercase font-bold text-cyan-400 hover:text-white flex items-center gap-1">
//                                 <span className="material-symbols-outlined text-sm">add</span> Add Custom Field
//                             </button>
//                         </div>

//                         <div className="pt-4 border-t border-gray-700">
//                             <p className="text-cyan-400 text-xs mb-2 animate-pulse">{createStatus}</p>
//                             <button type="submit" disabled={creatingEvent} className={`w-full py-3 bg-cyan-600 text-black font-bold uppercase hover:bg-white transition-colors ${creatingEvent ? "opacity-50" : ""}`}>
//                                 {creatingEvent ? "DEPLOYING..." : "LAUNCH EVENT"}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         )}

//         {/* 2. BROADCAST TAB (From Previous Step) */}
//         {activeTab === "Broadcast" && (
//              <div className="bg-black border border-gray-800 p-8 min-h-[500px] flex flex-col items-center justify-center">
//                  {/* ... (Keep your existing Broadcast UI here) ... */}
//                  <div className="text-gray-500 text-center">
//                     <p>Select "Broadcast" to see the mass mailer interface.</p>
//                  </div>
//              </div>
//         )}

//         {/* 3. DEFAULT TABLE VIEW (Ideas / Newsletter / Registration Data) */}
//         {(activeTab === "IG_idea_submissions" || activeTab === "Newsletter") && (
//             <div className="bg-black border border-gray-800 overflow-x-auto min-h-[500px] relative">
//                 {loading && <div className="absolute inset-0 bg-black/80 z-10 flex items-center justify-center text-neon-orange font-pixel text-2xl animate-pulse">FETCHING DATA...</div>}
                
//                 {!loading && data.length === 0 ? (
//                     <div className="flex h-64 items-center justify-center text-gray-600 font-pixel text-xl">[ DATABASE EMPTY ]</div>
//                 ) : (
//                     <table className="w-full text-left border-collapse">
//                         <thead className="bg-gray-800 text-gray-300 font-pixel uppercase tracking-wider text-sm sticky top-0">
//                             <tr>{data.length > 0 && Object.keys(data[0]).map((key) => <th key={key} className="p-4 border-b border-gray-700 whitespace-nowrap">{key}</th>)}</tr>
//                         </thead>
//                         <tbody className="divide-y divide-gray-800">
//                             {data.map((row, i) => (
//                                 <tr key={i} className="hover:bg-white/5 transition-colors">
//                                     {Object.values(row).map((val: any, j) => <td key={j} className="p-4 text-sm text-gray-300 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">{val}</td>)}
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         )}

//       </div>
//     </div>
//   );
// }










// "use client";
// import { useState, useEffect } from "react";
// import Navbar from "@/components/Navbar";

// type Question = { id: number; label: string; type: "text" | "number" | "dropdown"; };

// export default function AdminDashboard() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [password, setPassword] = useState("");
//   const [activeTab, setActiveTab] = useState<"Overview" | "Events" | "Broadcast">("Overview");
//   const [loading, setLoading] = useState(false);
//   const [statusMsg, setStatusMsg] = useState("");

//   // Data States
//   const [events, setEvents] = useState<any[]>([]); // List of all events from Master Sheet
//   const [subscribers, setSubscribers] = useState<any[]>([]);

//   // Broadcast State
//   const [targetGroup, setTargetGroup] = useState("Newsletter"); // "Newsletter" or EventID
//   const [emailSubject, setEmailSubject] = useState("");
//   const [emailBody, setEmailBody] = useState("");

//   // Event Creator State
//   const [eventTitle, setEventTitle] = useState("");
//   const [eventDate, setEventDate] = useState("");
//   const [questions, setQuestions] = useState<Question[]>([]);

//   // --- 1. CORE FETCHING ---
//   const fetchMasterData = async () => {
//     setLoading(true);
//     try {
//       // Fetch Events
//       const res1 = await fetch("/api/admin", {
//         method: "POST",
//         body: JSON.stringify({ password, sheetName: "Events_Master" }),
//       });
//       const data1 = await res1.json();
//       if (data1.success) setEvents(data1.data);

//       // Fetch Newsletter Count (Optional, just to show numbers)
//       const res2 = await fetch("/api/admin", {
//         method: "POST",
//         body: JSON.stringify({ password, sheetName: "Newsletter" }),
//       });
//       const data2 = await res2.json();
//       if (data2.success) setSubscribers(data2.data);

//     } catch (e) { console.error(e); } finally { setLoading(false); }
//   };

//   // --- 2. EVENT ACTIONS (Status Update) ---
//   const updateEventStatus = async (eventID: string, newStatus: string) => {
//     if (!confirm(`Are you sure you want to set this event to ${newStatus}?`)) return;
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin", {
//         method: "POST",
//         body: JSON.stringify({ 
//             password, 
//             action: "updateEventStatus",
//             eventID,
//             newStatus
//         }),
//       });
//       const result = await res.json();
//       if (result.success) {
//         setStatusMsg(`Event ${newStatus} Successfully`);
//         fetchMasterData(); // Refresh list
//       }
//     } catch (e) { setStatusMsg("Update Failed"); } finally { setLoading(false); }
//   };

//   // --- 3. CREATE EVENT ---
//   const handleCreateEvent = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin", {
//         method: "POST",
//         body: JSON.stringify({
//           password,
//           action: "createEvent",
//           title: eventTitle,
//           dateString: eventDate,
//           formConfig: questions
//         }),
//       });
//       const result = await res.json();
//       if (result.success) {
//         setStatusMsg("Event Created ✅");
//         setEventTitle(""); setQuestions([]); fetchMasterData();
//       }
//     } catch (e) { setStatusMsg("Creation Failed"); } finally { setLoading(false); }
//   };

//   // --- 4. BROADCAST ---
//   const handleBroadcast = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if(!confirm(`Send email to group: ${targetGroup}?`)) return;
//     setLoading(true);
//     try {
//         const res = await fetch("/api/admin", {
//             method: "POST",
//             body: JSON.stringify({ 
//                 password, 
//                 action: "broadcastEmail", 
//                 targetGroup, // "Newsletter" or EventID
//                 subject: emailSubject,
//                 message: emailBody
//             }),
//         });
//         const result = await res.json();
//         if(result.success) setStatusMsg(result.data);
//     } catch(e) { setStatusMsg("Broadcast Failed"); } finally { setLoading(false); }
//   };

//   // --- LOGIN ---
//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simple check here, real auth in API
//     if (password) { setIsAuthenticated(true); fetchMasterData(); }
//   };

//   if (!isAuthenticated) return (
//     <div className="min-h-screen bg-black flex items-center justify-center font-pixel p-4">
//         <form onSubmit={handleLogin} className="border-2 border-red-600 p-8 space-y-4">
//             <h1 className="text-red-500 text-2xl uppercase">Admin Access</h1>
//             <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full bg-black border border-gray-700 p-2 text-white" placeholder="PASSWORD" />
//             <button className="w-full bg-red-600 p-2 font-bold">ENTER</button>
//         </form>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-900 text-white font-mono pt-24 px-6 max-w-[1600px] mx-auto">
//         <Navbar />
        
//         {/* TOP BAR */}
//         <div className="flex justify-between items-end mb-8 border-b border-gray-700 pb-4">
//             <h1 className="text-3xl font-pixel text-neon-orange">COMMAND_CENTER</h1>
//             <div className="flex gap-2">
//                 <button onClick={() => setActiveTab("Events")} className={`px-4 py-2 border ${activeTab==="Events"?"bg-cyan-500 text-black":"text-gray-400"}`}>EVENTS MANAGER</button>
//                 <button onClick={() => setActiveTab("Broadcast")} className={`px-4 py-2 border ${activeTab==="Broadcast"?"bg-red-500 text-black":"text-gray-400"}`}>BROADCAST</button>
//             </div>
//         </div>

//         {statusMsg && <div className="bg-blue-900/50 p-4 mb-4 border border-blue-500 text-blue-200">{statusMsg}</div>}

//         {/* === EVENTS TAB === */}
//         {activeTab === "Events" && (
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                 {/* LIST */}
//                 <div className="lg:col-span-2 space-y-4">
//                     <h3 className="text-xl text-cyan-400 uppercase mb-4">Event Protocols</h3>
//                     {events.filter(e => e.Status !== "Archived").map((evt: any) => (
//                         <div key={evt.EventID} className="bg-black border border-gray-700 p-4 flex justify-between items-center group hover:border-cyan-400">
//                             <div>
//                                 <div className="flex items-center gap-3">
//                                     <h4 className="text-lg font-bold">{evt.Title}</h4>
//                                     <span className={`text-xs px-2 py-0.5 ${evt.Status === 'Active' ? 'bg-green-900 text-green-400' : 'bg-red-900 text-red-400'}`}>
//                                         {evt.Status}
//                                     </span>
//                                 </div>
//                                 <p className="text-gray-500 text-xs mt-1">ID: {evt.EventID}</p>
//                             </div>
                            
//                             <div className="flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
//                                 {/* TOGGLE STATUS BUTTON */}
//                                 {evt.Status === "Active" ? (
//                                     <button onClick={() => updateEventStatus(evt.EventID, "Closed")} className="px-3 py-1 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black text-xs uppercase">
//                                         Stop Responses
//                                     </button>
//                                 ) : (
//                                     <button onClick={() => updateEventStatus(evt.EventID, "Active")} className="px-3 py-1 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black text-xs uppercase">
//                                         Re-Open
//                                     </button>
//                                 )}

//                                 {/* ARCHIVE BUTTON (Soft Delete) */}
//                                 <button onClick={() => updateEventStatus(evt.EventID, "Archived")} className="px-3 py-1 border border-red-600 text-red-600 hover:bg-red-600 hover:text-black text-xs uppercase">
//                                     Delete
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* CREATOR */}
//                 <div className="bg-gray-800/50 border border-gray-700 p-6 h-fit">
//                     <h3 className="text-xl text-white uppercase mb-4">Deploy New Event</h3>
//                     <form onSubmit={handleCreateEvent} className="space-y-4">
//                         <input required value={eventTitle} onChange={e=>setEventTitle(e.target.value)} className="w-full bg-black border border-gray-600 p-2 text-white" placeholder="Event Title" />
//                         <input required value={eventDate} onChange={e=>setEventDate(e.target.value)} className="w-full bg-black border border-gray-600 p-2 text-white" placeholder="Date Display (e.g. Jan 24)" />
                        
//                         <div className="border-t border-gray-700 pt-2">
//                             <p className="text-xs text-gray-400 mb-2">Custom Fields:</p>
//                             {questions.map((q, i) => (
//                                 <div key={i} className="flex gap-2 mb-2">
//                                     <span className="text-xs bg-gray-700 px-2 py-1 flex items-center">{q.label}</span>
//                                     <button type="button" onClick={()=>setQuestions(questions.filter((_, idx)=>idx!==i))} className="text-red-500">×</button>
//                                 </div>
//                             ))}
//                             <div className="flex gap-2">
//                                 <input id="newQ" className="bg-black border border-gray-600 p-1 text-xs text-white flex-1" placeholder="Label" />
//                                 <button type="button" onClick={()=>{
//                                     const val = (document.getElementById('newQ') as HTMLInputElement).value;
//                                     if(val) setQuestions([...questions, {id: Date.now(), label: val, type: 'text'}]);
//                                 }} className="bg-cyan-600 text-black px-2 text-xs">+</button>
//                             </div>
//                         </div>

//                         <button disabled={loading} className="w-full bg-cyan-600 text-black font-bold py-2 uppercase mt-4">
//                             {loading ? "..." : "Launch"}
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         )}

//         {/* === BROADCAST TAB === */}
//         {activeTab === "Broadcast" && (
//             <div className="max-w-2xl mx-auto border-2 border-red-600/50 p-8 bg-red-900/5">
//                 <h2 className="text-2xl font-pixel text-red-500 mb-6 uppercase flex items-center gap-2">
//                     <span className="material-symbols-outlined">tower_broadcast</span> Targeted Transmission
//                 </h2>
//                 <form onSubmit={handleBroadcast} className="space-y-6">
//                     <div>
//                         <label className="block text-gray-500 text-sm mb-2 uppercase">Target Audience</label>
//                         <select 
//                             value={targetGroup} 
//                             onChange={(e) => setTargetGroup(e.target.value)}
//                             className="w-full bg-black border border-gray-700 p-3 text-white focus:border-red-500 outline-none"
//                         >
//                             <option value="Newsletter">Newsletter Subscribers (All)</option>
//                             <optgroup label="Specific Event Registrants">
//                                 {events.filter(e => e.Status !== "Archived").map(evt => (
//                                     <option key={evt.EventID} value={evt.EventID}>
//                                         {evt.Title} (Registrants)
//                                     </option>
//                                 ))}
//                             </optgroup>
//                         </select>
//                     </div>

//                     <div>
//                         <label className="block text-gray-500 text-sm mb-2 uppercase">Subject Line</label>
//                         <input required value={emailSubject} onChange={e=>setEmailSubject(e.target.value)} className="w-full bg-black border border-gray-700 p-3 text-white focus:border-red-500 outline-none" placeholder="Update regarding..." />
//                     </div>

//                     <div>
//                         <label className="block text-gray-500 text-sm mb-2 uppercase">Message</label>
//                         <textarea required rows={5} value={emailBody} onChange={e=>setEmailBody(e.target.value)} className="w-full bg-black border border-gray-700 p-3 text-white focus:border-red-500 outline-none" placeholder="HTML allowed..." />
//                     </div>

//                     <button disabled={loading} className="w-full bg-red-600 text-black font-bold py-3 uppercase hover:bg-white transition-colors">
//                         {loading ? "TRANSMITTING..." : "SEND TRANSMISSION"}
//                     </button>
//                 </form>
//             </div>
//         )}
//     </div>
//   );
// }







// "use client";
// import { useState, useEffect } from "react";
// import Navbar from "@/components/Navbar"; 

// // Type definitions
// type Question = { id: number; label: string; type: "text" | "number" | "dropdown"; };

// export default function AdminDashboard() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [password, setPassword] = useState("");
//   const [activeTab, setActiveTab] = useState<"Ideas" | "Events" | "Broadcast">("Ideas");
//   const [loading, setLoading] = useState(false);
//   const [statusMsg, setStatusMsg] = useState("");

//   // Data States
//   const [ideas, setIdeas] = useState<any[]>([]); // Stores Student Ideas
//   const [events, setEvents] = useState<any[]>([]); // Stores Events
//   const [subscribers, setSubscribers] = useState<any[]>([]); // Stores Newsletter emails

//   // Broadcast State
//   const [targetGroup, setTargetGroup] = useState("Newsletter");
//   const [emailSubject, setEmailSubject] = useState("");
//   const [emailBody, setEmailBody] = useState("");

//   // Event Creator State
//   const [eventTitle, setEventTitle] = useState("");
//   const [eventDate, setEventDate] = useState("");
//   const [questions, setQuestions] = useState<Question[]>([]);

//   // --- 1. CORE FETCHING ---
//   const fetchMasterData = async () => {
//     setLoading(true);
//     try {
//       // A. Fetch Student Ideas (IG_idea_submissions)
//       const resIdeas = await fetch("/api/admin", {
//         method: "POST",
//         body: JSON.stringify({ password, sheetName: "IG_idea_submissions" }),
//       });
//       const dataIdeas = await resIdeas.json();
//       if (dataIdeas.success) setIdeas(dataIdeas.data);

//       // B. Fetch Events
//       const resEvents = await fetch("/api/admin", {
//         method: "POST",
//         body: JSON.stringify({ password, sheetName: "Events_Master" }),
//       });
//       const dataEvents = await resEvents.json();
//       if (dataEvents.success) setEvents(dataEvents.data);

//       // C. Fetch Newsletter (for counts)
//       const resNews = await fetch("/api/admin", {
//         method: "POST",
//         body: JSON.stringify({ password, sheetName: "Newsletter" }),
//       });
//       const dataNews = await resNews.json();
//       if (dataNews.success) setSubscribers(dataNews.data);

//     } catch (e) { console.error(e); } finally { setLoading(false); }
//   };

//   // --- 2. EVENT ACTIONS ---
//   const updateEventStatus = async (eventID: string, newStatus: string) => {
//     if (!confirm(`Confirm action: Set event to ${newStatus}?`)) return;
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin", {
//         method: "POST",
//         body: JSON.stringify({ password, action: "updateEventStatus", eventID, newStatus }),
//       });
//       const result = await res.json();
//       if (result.success) {
//         setStatusMsg(`Success: Event updated to ${newStatus}`);
//         fetchMasterData();
//       }
//     } catch (e) { setStatusMsg("Error: Update failed"); } finally { setLoading(false); }
//   };

//   // --- 3. CREATE EVENT ---
//   const handleCreateEvent = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch("/api/admin", {
//         method: "POST",
//         body: JSON.stringify({
//           password,
//           action: "createEvent",
//           title: eventTitle,
//           dateString: eventDate,
//           formConfig: questions
//         }),
//       });
//       const result = await res.json();
//       if (result.success) {
//         setStatusMsg("Success: Event published successfully");
//         setEventTitle(""); setQuestions([]); fetchMasterData();
//       }
//     } catch (e) { setStatusMsg("Error: Creation failed"); } finally { setLoading(false); }
//   };

//   // --- 4. BROADCAST ---
//   const handleBroadcast = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if(!confirm(`Confirm: Send email to ${targetGroup}?`)) return;
//     setLoading(true);
//     try {
//         const res = await fetch("/api/admin", {
//             method: "POST",
//             body: JSON.stringify({ 
//                 password, 
//                 action: "broadcastEmail", 
//                 targetGroup,
//                 subject: emailSubject,
//                 message: emailBody
//             }),
//         });
//         const result = await res.json();
//         if(result.success) setStatusMsg(result.data);
//     } catch(e) { setStatusMsg("Error: Broadcast failed"); } finally { setLoading(false); }
//   };

//   // --- LOGIN ---
//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (password) { setIsAuthenticated(true); fetchMasterData(); }
//   };

//   // --- AUTH SCREEN (Professional) ---
//   if (!isAuthenticated) return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full border border-gray-200">
//             <div className="mb-6 text-center">
//                 <h1 className="text-gray-900 text-2xl font-bold">Admin Portal</h1>
//                 <p className="text-gray-500 text-sm mt-1">Innovation Garage</p>
//             </div>
//             <form onSubmit={handleLogin} className="space-y-4">
//                 <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-1">Access Key</label>
//                     <input 
//                         type="password" 
//                         value={password} 
//                         onChange={e=>setPassword(e.target.value)} 
//                         className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" 
//                         placeholder="Enter credentials" 
//                     />
//                 </div>
//                 <button className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm">
//                     Authenticate
//                 </button>
//             </form>
//         </div>
//     </div>
//   );

//   // --- MAIN DASHBOARD (Professional) ---
//   return (
//     <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
        
//         {/* TOP NAVIGATION */}
//         <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
//             <div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                     <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold">IG</div>
//                     <span className="font-semibold text-lg tracking-tight">Admin Console</span>
//                 </div>
//                 <div className="flex items-center gap-6">
//                     <span className="text-sm text-gray-500">Status: <span className="text-green-600 font-medium">Online</span></span>
//                     <button onClick={() => setIsAuthenticated(false)} className="text-sm text-red-600 hover:text-red-800 font-medium">Logout</button>
//                 </div>
//             </div>
//         </header>

//         {/* MAIN CONTENT */}
//         <main className="max-w-[1600px] mx-auto px-6 py-8">
            
//             {/* STATUS BANNER */}
//             {statusMsg && (
//                 <div className="mb-6 p-4 rounded-md bg-blue-50 border border-blue-100 text-blue-800 flex items-center justify-between">
//                     <span>{statusMsg}</span>
//                     <button onClick={() => setStatusMsg("")} className="text-blue-600 hover:text-blue-900">Dismiss</button>
//                 </div>
//             )}

//             {/* TABS */}
//             <div className="flex border-b border-gray-200 mb-8">
//                 {["Ideas", "Events", "Broadcast"].map((tab) => (
//                     <button 
//                         key={tab}
//                         onClick={() => setActiveTab(tab as any)}
//                         className={`px-6 py-3 text-sm font-medium transition-colors border-b-2 ${
//                             activeTab === tab 
//                             ? "border-blue-600 text-blue-600" 
//                             : "border-transparent text-gray-500 hover:text-gray-700"
//                         }`}
//                     >
//                         {tab === "Ideas" ? "Inbound Ideas" : tab === "Events" ? "Event Manager" : "Communications"}
//                     </button>
//                 ))}
//             </div>

//             {/* === TAB 1: IDEAS (INBOUND) === */}
//             {activeTab === "Ideas" && (
//                 <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
//                     <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
//                         <h3 className="font-semibold text-gray-800">Submitted Ideas</h3>
//                         <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded border">Total: {ideas.length}</span>
//                     </div>
                    
//                     <div className="overflow-x-auto">
//                         {loading ? (
//                             <div className="p-8 text-center text-gray-500">Loading records...</div>
//                         ) : ideas.length === 0 ? (
//                             <div className="p-8 text-center text-gray-500">No ideas submitted yet.</div>
//                         ) : (
//                             <table className="w-full text-left text-sm">
//                                 <thead className="bg-gray-50 text-gray-500 font-medium">
//                                     <tr>
//                                         {/* 🔴 FIXED: REMOVED .slice() TO SHOW ALL COLUMNS */}
//                                         {Object.keys(ideas[0]).map((key) => (
//                                             <th key={key} className="px-6 py-3 whitespace-nowrap bg-gray-50 border-b border-gray-100">{key}</th>
//                                         ))}
//                                     </tr>
//                                 </thead>
//                                 <tbody className="divide-y divide-gray-100">
//                                     {ideas.map((row, i) => (
//                                         <tr key={i} className="hover:bg-gray-50/50">
//                                             {/* 🔴 FIXED: REMOVED .slice() TO SHOW ALL DATA */}
//                                             {Object.values(row).map((val: any, j) => (
//                                                 <td key={j} className="px-6 py-3 text-gray-700 max-w-[300px] truncate" title={val}>
//                                                     {val}
//                                                 </td>
//                                             ))}
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         )}
//                     </div>
//                 </div>
//             )}

//             {/* === TAB 2: EVENTS MANAGER === */}
//             {activeTab === "Events" && (
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
//                     {/* LEFT: LIST */}
//                     <div className="lg:col-span-2 space-y-4">
//                         {events.filter(e => e.Status !== "Archived").length === 0 && (
//                             <div className="p-8 text-center text-gray-500 bg-white rounded-lg border border-dashed">No active events found.</div>
//                         )}
//                         {events.filter(e => e.Status !== "Archived").map((evt: any) => (
//                             <div key={evt.EventID} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow flex justify-between items-center">
//                                 <div>
//                                     <div className="flex items-center gap-3">
//                                         <h4 className="text-lg font-semibold text-gray-900">{evt.Title}</h4>
//                                         <span className={`text-xs px-2 py-1 rounded-full font-medium ${
//                                             evt.Status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
//                                         }`}>
//                                             {evt.Status}
//                                         </span>
//                                     </div>
//                                     <div className="text-sm text-gray-500 mt-1 flex gap-4">
//                                         <span>Date: {evt.DateString}</span>
//                                         <span className="font-mono text-xs text-gray-400">ID: {evt.EventID}</span>
//                                     </div>
//                                 </div>
                                
//                                 <div className="flex items-center gap-2">
//                                     {evt.Status === "Active" ? (
//                                         <button onClick={() => updateEventStatus(evt.EventID, "Closed")} className="px-3 py-1.5 text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 rounded hover:bg-amber-100">
//                                             Close Registration
//                                         </button>
//                                     ) : (
//                                         <button onClick={() => updateEventStatus(evt.EventID, "Active")} className="px-3 py-1.5 text-xs font-medium bg-green-50 text-green-700 border border-green-200 rounded hover:bg-green-100">
//                                             Re-Open
//                                         </button>
//                                     )}
//                                     <button onClick={() => updateEventStatus(evt.EventID, "Archived")} className="px-3 py-1.5 text-xs font-medium bg-white text-red-600 border border-gray-200 rounded hover:bg-red-50 hover:border-red-200">
//                                         Delete
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* RIGHT: CREATOR FORM */}
//                     <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm h-fit sticky top-24">
//                         <div className="mb-4 pb-4 border-b border-gray-100">
//                             <h3 className="text-lg font-semibold text-gray-900">Create New Event</h3>
//                             <p className="text-xs text-gray-500">This will generate a database sheet and registration form.</p>
//                         </div>
                        
//                         <form onSubmit={handleCreateEvent} className="space-y-4">
//                             <div>
//                                 <label className="block text-xs font-medium text-gray-700 mb-1">Event Title</label>
//                                 <input required value={eventTitle} onChange={e=>setEventTitle(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Velocity Hackathon" />
//                             </div>
//                             <div>
//                                 <label className="block text-xs font-medium text-gray-700 mb-1">Display Date</label>
//                                 <input required value={eventDate} onChange={e=>setEventDate(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Jan 24-26, 2026" />
//                             </div>
                            
//                             <div className="bg-gray-50 p-3 rounded border border-gray-100">
//                                 <div className="flex justify-between items-center mb-2">
//                                     <span className="text-xs font-semibold text-gray-700">Form Fields</span>
//                                     <span className="text-[10px] text-gray-400">Standard fields auto-included</span>
//                                 </div>
                                
//                                 <div className="space-y-2 mb-2">
//                                     {questions.map((q, i) => (
//                                         <div key={i} className="flex items-center justify-between bg-white border px-2 py-1 rounded text-xs">
//                                             <span className="font-medium text-gray-700">{q.label}</span>
//                                             <button type="button" onClick={()=>setQuestions(questions.filter((_, idx)=>idx!==i))} className="text-red-400 hover:text-red-600">×</button>
//                                         </div>
//                                     ))}
//                                 </div>

//                                 <div className="flex gap-2">
//                                     <input id="newQ" className="flex-1 border border-gray-300 rounded px-2 py-1 text-xs" placeholder="Add field label (e.g. GitHub)" />
//                                     <button type="button" onClick={()=>{
//                                         const val = (document.getElementById('newQ') as HTMLInputElement).value;
//                                         if(val) {
//                                             setQuestions([...questions, {id: Date.now(), label: val, type: 'text'}]);
//                                             (document.getElementById('newQ') as HTMLInputElement).value = "";
//                                         }
//                                     }} className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-xs font-bold">+</button>
//                                 </div>
//                             </div>

//                             <button disabled={loading} className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition-colors disabled:opacity-50 text-sm">
//                                 {loading ? "Processing..." : "Publish Event"}
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}

//             {/* === TAB 3: BROADCAST === */}
//             {activeTab === "Broadcast" && (
//                 <div className="max-w-3xl mx-auto">
//                     <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-8">
//                         <div className="mb-6">
//                             <h2 className="text-xl font-bold text-gray-900">Email Broadcast System</h2>
//                             <p className="text-sm text-gray-500">Send updates to newsletter subscribers or event attendees.</p>
//                         </div>

//                         <form onSubmit={handleBroadcast} className="space-y-6">
//                             <div className="grid grid-cols-2 gap-6">
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Recipient Group</label>
//                                     <select 
//                                         value={targetGroup} 
//                                         onChange={(e) => setTargetGroup(e.target.value)}
//                                         className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
//                                     >
//                                         <option value="Newsletter">All Newsletter Subscribers</option>
//                                         <optgroup label="Specific Event Attendees">
//                                             {events.filter(e => e.Status !== "Archived").map(evt => (
//                                                 <option key={evt.EventID} value={evt.EventID}>
//                                                     {evt.Title} (Attendees Only)
//                                                 </option>
//                                             ))}
//                                         </optgroup>
//                                     </select>
//                                 </div>
//                                 <div>
//                                     <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
//                                     <div className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-600">
//                                         Ready to send via Gmail
//                                     </div>
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Email Subject</label>
//                                 <input required value={emailSubject} onChange={e=>setEmailSubject(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Important Update..." />
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">Message Body (HTML Supported)</label>
//                                 <textarea required rows={8} value={emailBody} onChange={e=>setEmailBody(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none font-mono text-gray-700" placeholder="Type your message here..." />
//                             </div>

//                             <div className="flex justify-end pt-4 border-t border-gray-100">
//                                 <button disabled={loading} className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50">
//                                     {loading ? "Sending..." : "Send Broadcast"}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             )}
//         </main>
//     </div>
//   );
// }














"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar"; 

// Type definitions
type Question = { id: number; label: string; type: "text" | "number" | "dropdown"; };

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"Ideas" | "Events" | "Network" | "Broadcast">("Ideas");
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  // Data States
  const [ideas, setIdeas] = useState<any[]>([]); 
  const [events, setEvents] = useState<any[]>([]); 
  const [subscribers, setSubscribers] = useState<any[]>([]);
  
  // Specific Event Data Viewer State
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [selectedEventData, setSelectedEventData] = useState<any[]>([]);
  const [selectedEventTitle, setSelectedEventTitle] = useState("");

  // Broadcast State
  const [targetGroup, setTargetGroup] = useState("Newsletter");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");

  // Event Creator State
  const [eventTitle, setEventTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  // --- 1. CORE FETCHING ---
  const fetchMasterData = async () => {
    setLoading(true);
    try {
      // A. Fetch Student Ideas (IG_idea_submissions)
      const resIdeas = await fetch("/api/admin", {
        method: "POST",
        body: JSON.stringify({ password, sheetName: "IG_idea_submissions" }),
      });
      const dataIdeas = await resIdeas.json();
      if (dataIdeas.success) setIdeas(dataIdeas.data);

      // B. Fetch Events
      const resEvents = await fetch("/api/admin", {
        method: "POST",
        body: JSON.stringify({ password, sheetName: "Events_Master" }),
      });
      const dataEvents = await resEvents.json();
      if (dataEvents.success) setEvents(dataEvents.data);

      // C. Fetch Newsletter
      const resNews = await fetch("/api/admin", {
        method: "POST",
        body: JSON.stringify({ password, sheetName: "Newsletter" }),
      });
      const dataNews = await resNews.json();
      if (dataNews.success) setSubscribers(dataNews.data);

    } catch (e) { console.error(e); } finally { setLoading(false); }
  };

  // --- 2. FETCH SPECIFIC EVENT REGISTRATIONS ---
  const viewEventData = async (eventId: string, title: string) => {
    setLoading(true);
    setSelectedEventTitle(title);
    setSelectedEventId(eventId);
    try {
        const res = await fetch("/api/admin", {
            method: "POST",
            body: JSON.stringify({ password, sheetName: "Reg_" + eventId }),
        });
        const result = await res.json();
        if (result.success) {
            setSelectedEventData(result.data);
        } else {
            setSelectedEventData([]); // Empty if no one registered
        }
    } catch (e) { setStatusMsg("ERROR FETCHING REGISTRATIONS"); } finally { setLoading(false); }
  };

  const closeEventView = () => {
      setSelectedEventId(null);
      setSelectedEventData([]);
  };

  // --- 3. EVENT ACTIONS ---
  const updateEventStatus = async (eventID: string, newStatus: string) => {
    const actionWord = newStatus === "Archived" ? "DELETE" : newStatus === "Active" ? "ACTIVATE" : "CLOSE";
    if (!confirm(`CONFIRM ACTION: ${actionWord} PROTOCOL?`)) return;
    
    setLoading(true);
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        body: JSON.stringify({ password, action: "updateEventStatus", eventID, newStatus }),
      });
      const result = await res.json();
      if (result.success) {
        setStatusMsg(`SUCCESS: STATUS UPDATED TO [${newStatus}]`);
        fetchMasterData();
      }
    } catch (e) { setStatusMsg("ERROR: UPDATE FAILED"); } finally { setLoading(false); }
  };

  // --- 4. CREATE EVENT ---
  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        body: JSON.stringify({
          password,
          action: "createEvent",
          title: eventTitle,
          dateString: eventDate,
          formConfig: questions
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatusMsg("SUCCESS: EVENT DEPLOYED TO MAINFRAME");
        setEventTitle(""); setQuestions([]); fetchMasterData();
      }
    } catch (e) { setStatusMsg("ERROR: DEPLOYMENT FAILED"); } finally { setLoading(false); }
  };

  // --- 5. BROADCAST ---
  const handleBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!confirm(`INITIATE TRANSMISSION TO: ${targetGroup}?`)) return;
    setLoading(true);
    try {
        const res = await fetch("/api/admin", {
            method: "POST",
            body: JSON.stringify({ 
                password, 
                action: "broadcastEmail", 
                targetGroup,
                subject: emailSubject,
                message: emailBody
            }),
        });
        const result = await res.json();
        if(result.success) setStatusMsg(result.data);
    } catch(e) { setStatusMsg("ERROR: TRANSMISSION FAILED"); } finally { setLoading(false); }
  };

  // --- LOGIN ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password) { setIsAuthenticated(true); fetchMasterData(); }
  };

  // --- RENDER LOGIN ---
  if (!isAuthenticated) return (
    <div className="min-h-screen bg-black flex items-center justify-center font-pixel p-4">
        <div className="max-w-md w-full border-2 border-red-600 p-8 bg-gray-900 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
          <div className="flex items-center gap-4 mb-8 text-red-500">
            <span className="material-symbols-outlined text-4xl">lock</span>
            <h1 className="text-3xl uppercase tracking-widest">Restricted Area</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-black border border-gray-700 p-3 text-white focus:border-red-500 outline-none text-xl tracking-widest placeholder-gray-800" placeholder="ACCESS CODE" />
            <button type="submit" className="w-full bg-red-600 text-black font-bold py-3 uppercase hover:bg-white transition-colors flex justify-center items-center gap-2">UNLOCK TERMINAL</button>
          </form>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <Navbar />
      <div className="pt-24 px-6 max-w-[1600px] mx-auto">
        
        {/* HEADER & TABS */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-700 pb-4 gap-4">
            <div>
                <h1 className="text-3xl font-pixel text-neon-orange mb-2">ADMIN_CONSOLE // V2.5</h1>
                <p className="text-gray-400">Database Access Level: ROOT</p>
            </div>
            <div className="flex flex-wrap gap-2">
                <button onClick={() => {setActiveTab("Ideas"); closeEventView()}} className={`px-4 py-2 font-bold uppercase border-2 transition-all ${activeTab === "Ideas" ? "bg-neon-orange text-black border-neon-orange" : "border-gray-600 text-gray-400 hover:border-white"}`}>Inbound Ideas</button>
                <button onClick={() => {setActiveTab("Events"); closeEventView()}} className={`px-4 py-2 font-bold uppercase border-2 transition-all ${activeTab === "Events" ? "bg-cyan-400 text-black border-cyan-400" : "border-gray-600 text-gray-400 hover:border-white"}`}>Events</button>
                <button onClick={() => {setActiveTab("Network"); closeEventView()}} className={`px-4 py-2 font-bold uppercase border-2 transition-all ${activeTab === "Network" ? "bg-purple-500 text-black border-purple-500" : "border-gray-600 text-gray-400 hover:border-white"}`}>Network</button>
                <button onClick={() => {setActiveTab("Broadcast"); closeEventView()}} className={`px-4 py-2 font-bold uppercase border-2 transition-all ${activeTab === "Broadcast" ? "bg-red-600 text-black border-red-600" : "border-gray-600 text-gray-400 hover:border-white"}`}>Broadcast</button>
            </div>
        </div>

        {statusMsg && <div className="bg-blue-900/20 border border-blue-500 text-blue-400 p-4 mb-6 font-pixel uppercase tracking-wider">{statusMsg}</div>}

        {/* CONTENT AREA */}
        
        {/* 1. IDEAS TAB (Full Table with Text Wrapping) */}
        {activeTab === "Ideas" && (
            <div className="bg-black border border-gray-800 overflow-x-auto min-h-[500px] relative">
                {/* Stats Bar */}
                <div className="bg-[#111] border-b border-gray-800 p-3 flex justify-between items-center px-6">
                    <span className="text-neon-orange font-bold font-pixel">TOTAL IDEAS: {ideas.length}</span>
                    <button onClick={fetchMasterData} className="text-xs text-gray-500 hover:text-white uppercase">[REFRESH]</button>
                </div>

                {loading ? <div className="p-10 text-center text-neon-orange font-pixel animate-pulse">ACCESSING DATA STREAMS...</div> : (
                    <>
                        {ideas.length === 0 ? (
                            <div className="p-10 text-center text-gray-600 font-pixel">[ NO SIGNALS DETECTED ]</div>
                        ) : (
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-gray-800 text-gray-300 font-pixel uppercase tracking-wider text-xs sticky top-0">
                                    <tr>{Object.keys(ideas[0]).map((key) => <th key={key} className="p-4 border-b border-gray-700 whitespace-nowrap">{key}</th>)}</tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800">
                                    {ideas.map((row, i) => (
                                        <tr key={i} className="hover:bg-white/5 transition-colors">
                                            {Object.values(row).map((val: any, j) => (
                                                // Added min-w and break-words to ensure text wraps and links are visible
                                                <td key={j} className="p-4 text-xs text-gray-400 font-mono min-w-[200px] max-w-[400px] break-words align-top">
                                                    {val}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </>
                )}
            </div>
        )}

        {/* 2. EVENTS MANAGER TAB */}
        {activeTab === "Events" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* LEFT SIDE: List OR Detail View */}
                <div className="space-y-8">
                    
                    {/* VIEW A: REGISTRATION DATA TABLE (When an event is selected) */}
                    {selectedEventId ? (
                        <div className="bg-black border border-cyan-500 min-h-[500px] relative shadow-[0_0_20px_rgba(0,255,255,0.1)]">
                            <div className="bg-cyan-900/20 border-b border-cyan-500 p-4 flex justify-between items-center">
                                <div>
                                    <h3 className="text-cyan-400 font-bold uppercase font-pixel text-lg">{selectedEventTitle}</h3>
                                    <p className="text-xs text-cyan-200/50 font-mono">REGISTRATIONS_LOG</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-white font-bold bg-cyan-600/50 px-2 py-1 rounded text-xs">COUNT: {selectedEventData.length}</span>
                                    <button onClick={closeEventView} className="text-cyan-400 hover:text-white uppercase font-bold text-sm border border-cyan-400 px-3 py-1 hover:bg-cyan-400 hover:text-black transition-colors">
                                        CLOSE VIEW_
                                    </button>
                                </div>
                            </div>
                            
                            <div className="overflow-x-auto h-[600px]">
                                {loading ? <div className="p-10 text-center animate-pulse text-cyan-400">DECRYPTING DATA...</div> : selectedEventData.length === 0 ? (
                                    <div className="p-10 text-center text-gray-500 italic">No entities registered yet.</div>
                                ) : (
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-gray-800 text-gray-300 font-pixel uppercase tracking-wider text-xs sticky top-0">
                                            <tr>{Object.keys(selectedEventData[0]).map((key) => <th key={key} className="p-3 border-b border-gray-700 whitespace-nowrap">{key}</th>)}</tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-800">
                                            {selectedEventData.map((row, i) => (
                                                <tr key={i} className="hover:bg-cyan-900/10 transition-colors">
                                                    {Object.values(row).map((val: any, j) => (
                                                        <td key={j} className="p-3 text-xs text-gray-300 font-mono whitespace-nowrap">{val}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    ) : (
                        /* VIEW B: EVENT LIST (Default View) */
                        <>
                            {/* ACTIVE & CLOSED */}
                            <div className="bg-black border border-gray-800 p-6 min-h-[400px]">
                                <h3 className="text-xl font-pixel text-cyan-400 mb-6 uppercase border-b border-cyan-900 pb-2">Active Protocols</h3>
                                <div className="space-y-4">
                                    {events.filter(e => e.Status !== "Archived").map((evt, i) => (
                                        <div key={i} className="border border-gray-700 p-4 hover:border-cyan-400 transition-colors group bg-[#0a0a0a]">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="font-bold text-lg text-white group-hover:text-cyan-400 font-pixel">{evt.Title}</h4>
                                                    <p className="text-xs text-gray-500 font-mono">{evt.DateString}</p>
                                                </div>
                                                <span className={`text-xs px-2 py-1 uppercase font-bold border ${evt.Status === 'Active' ? 'text-green-400 border-green-900 bg-green-900/20' : 'text-yellow-400 border-yellow-900 bg-yellow-900/20'}`}>
                                                    {evt.Status}
                                                </span>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                <button onClick={() => viewEventData(evt.EventID, evt.Title)} className="flex-1 py-2 bg-gray-800 text-white text-xs uppercase hover:bg-gray-700 transition-colors font-bold border border-gray-600">
                                                    VIEW DATA
                                                </button>
                                                
                                                {evt.Status === "Active" ? (
                                                    <button onClick={() => updateEventStatus(evt.EventID, "Closed")} className="px-3 border border-yellow-600 text-yellow-600 text-xs uppercase hover:bg-yellow-600 hover:text-black font-bold">Stop Reg</button>
                                                ) : (
                                                    <button onClick={() => updateEventStatus(evt.EventID, "Active")} className="px-3 border border-green-600 text-green-600 text-xs uppercase hover:bg-green-600 hover:text-black font-bold">Re-Open</button>
                                                )}
                                                
                                                <button onClick={() => updateEventStatus(evt.EventID, "Archived")} className="px-3 border border-red-600 text-red-600 text-xs uppercase hover:bg-red-600 hover:text-black font-bold">DEL</button>
                                            </div>
                                        </div>
                                    ))}
                                    {events.filter(e => e.Status !== "Archived").length === 0 && <p className="text-gray-600 font-mono text-sm">[ NO ACTIVE PROTOCOLS ]</p>}
                                </div>
                            </div>

                            {/* ARCHIVED HISTORY */}
                            <div className="bg-black/50 border border-gray-800 p-6 opacity-80 hover:opacity-100 transition-opacity">
                                <h3 className="text-sm font-pixel text-gray-500 mb-4 uppercase">Deprecated Logs (Archived)</h3>
                                <div className="space-y-2">
                                    {events.filter(e => e.Status === "Archived").map((evt, i) => (
                                        <div key={i} className="flex justify-between items-center border-b border-gray-800 pb-2">
                                            <div>
                                                <span className="text-gray-600 font-mono text-xs line-through block">{evt.Title}</span>
                                                <button onClick={() => viewEventData(evt.EventID, evt.Title)} className="text-[10px] text-gray-500 hover:text-white uppercase underline">[VIEW OLD DATA]</button>
                                            </div>
                                            <button onClick={() => updateEventStatus(evt.EventID, "Closed")} className="text-xs text-blue-500 hover:text-white uppercase">[RESTORE]</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* RIGHT: CREATOR FORM (Hidden if viewing specific event data to save space) */}
                {!selectedEventId && (
                    <div className="bg-gray-800/20 border border-gray-700 p-6 h-fit">
                        <h3 className="text-xl font-pixel text-white mb-6 uppercase flex items-center gap-2">
                            <span className="material-symbols-outlined">add_circle</span> Deploy New Event
                        </h3>
                        <form onSubmit={handleCreateEvent} className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs uppercase text-gray-400 mb-1">Event Title</label>
                                    <input required type="text" value={eventTitle} onChange={e => setEventTitle(e.target.value)} className="w-full bg-black border border-gray-600 p-2 text-white focus:border-cyan-400 outline-none font-mono" placeholder="e.g. Velocity" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-gray-400 mb-1">Date String</label>
                                    <input required type="text" value={eventDate} onChange={e => setEventDate(e.target.value)} className="w-full bg-black border border-gray-600 p-2 text-white focus:border-cyan-400 outline-none font-mono" placeholder="e.g. Jan 24" />
                                </div>
                            </div>

                            <div className="border-t border-gray-700 pt-4">
                                <label className="block text-xs uppercase text-cyan-400 mb-3">Custom Data Fields</label>
                                {questions.map((q, idx) => (
                                    <div key={q.id} className="flex gap-2 mb-2 items-start">
                                        <div className="flex-1 bg-gray-900 border border-gray-700 p-2 text-xs text-white">{q.label}</div>
                                        <button type="button" onClick={() => setQuestions(questions.filter(qi => qi.id !== q.id))} className="p-2 text-red-500 hover:text-white hover:bg-red-500 border border-gray-700">×</button>
                                    </div>
                                ))}
                                <div className="flex gap-2 mt-2">
                                    <input id="newQ" className="bg-black border border-gray-600 p-2 text-xs text-white flex-1 outline-none focus:border-cyan-400" placeholder="Add Field (e.g. GitHub Link)" />
                                    <button type="button" onClick={()=>{
                                        const val = (document.getElementById('newQ') as HTMLInputElement).value;
                                        if(val) {
                                            setQuestions([...questions, {id: Date.now(), label: val, type: 'text'}]);
                                            (document.getElementById('newQ') as HTMLInputElement).value = "";
                                        }
                                    }} className="bg-cyan-900/50 border border-cyan-500 text-cyan-400 px-3 text-lg hover:bg-cyan-400 hover:text-black transition-colors">+</button>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-gray-700">
                                <button type="submit" disabled={loading} className={`w-full py-3 bg-cyan-600 text-black font-bold uppercase hover:bg-white transition-colors ${loading ? "opacity-50" : ""}`}>
                                    {loading ? "DEPLOYING..." : "LAUNCH EVENT"}
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        )}

        {/* 3. NETWORK TAB (NEWSLETTER LIST) */}
        {activeTab === "Network" && (
            <div className="bg-black border border-gray-800 overflow-x-auto min-h-[500px] relative">
                <div className="bg-[#111] border-b border-gray-800 p-3 flex justify-between items-center px-6">
                    <span className="text-purple-500 font-bold font-pixel">TOTAL SUBSCRIBERS: {subscribers.length}</span>
                    <button onClick={fetchMasterData} className="text-xs text-gray-500 hover:text-white uppercase">[REFRESH]</button>
                </div>
                {loading ? <div className="p-10 text-center text-purple-500 font-pixel animate-pulse">SCANNING NETWORK...</div> : (
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-800 text-gray-300 font-pixel uppercase tracking-wider text-xs sticky top-0">
                            <tr>
                                <th className="p-4 border-b border-gray-700">TIMESTAMP</th>
                                <th className="p-4 border-b border-gray-700">EMAIL IDENTITY</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {subscribers.map((row: any, i) => (
                                <tr key={i} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-xs text-gray-500 font-mono">{row.Timestamp || row[0]}</td>
                                    <td className="p-4 text-sm text-white font-mono">{row.Email || row[1]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        )}

        {/* 4. BROADCAST TAB */}
        {activeTab === "Broadcast" && (
             <div className="bg-black border border-gray-800 p-8 min-h-[500px] flex flex-col items-center justify-center">
                <div className="max-w-2xl w-full border-2 border-red-600/50 p-8 bg-red-900/5 relative pixel-corners">
                    <div className="absolute top-0 left-0 bg-red-600 text-black px-2 py-1 text-xs font-bold uppercase">Admin Clearance Required</div>
                    <h2 className="text-2xl font-pixel text-red-500 mb-6 uppercase tracking-widest flex items-center gap-3">
                        <span className="material-symbols-outlined">tower_broadcast</span> Mass Transmission
                    </h2>
                    <form onSubmit={handleBroadcast} className="space-y-6">
                        <div>
                            <label className="block text-gray-500 text-sm mb-2 uppercase">Target Audience</label>
                            <select value={targetGroup} onChange={(e) => setTargetGroup(e.target.value)} className="w-full bg-black border border-gray-700 p-3 text-white focus:border-red-500 outline-none font-mono">
                                <option value="Newsletter">Newsletter Subscribers (All)</option>
                                <optgroup label="Specific Event Registrants">
                                    {events.filter(e => e.Status !== "Archived").map(evt => (
                                        <option key={evt.EventID} value={evt.EventID}>{evt.Title} (Attendees)</option>
                                    ))}
                                </optgroup>
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-500 text-sm mb-2 uppercase">Subject Line</label>
                            <input type="text" required value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} placeholder="[IMPORTANT] Update..." className="w-full bg-black border border-gray-700 p-3 text-white focus:border-red-500 outline-none font-mono"/>
                        </div>
                        <div>
                            <label className="block text-gray-500 text-sm mb-2 uppercase">Message Body</label>
                            <textarea required rows={6} value={emailBody} onChange={(e) => setEmailBody(e.target.value)} placeholder="Agents, the time has come..." className="w-full bg-black border border-gray-700 p-3 text-white focus:border-red-500 outline-none font-mono"/>
                        </div>
                        <button type="submit" disabled={loading} className={`w-full px-8 py-3 bg-red-600 text-black font-bold uppercase tracking-widest hover:bg-white transition-colors ${loading ? "opacity-50" : ""}`}>
                            {loading ? "SENDING..." : "LAUNCH BROADCAST"}
                        </button>
                    </form>
                </div>
            </div>
        )}

      </div>
    </div>
  );
}