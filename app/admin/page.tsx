"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"IG_idea_submissions" | "Newsletter">("IG_idea_submissions");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // --- NEW LOGIN LOGIC (Server-Side Verification) ---
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Attempt to fetch data immediately to verify password
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            password: password, // Send input to server
            sheetName: "IG_idea_submissions" 
        }),
      });

      const result = await res.json();

      if (res.status === 200 && result.success) {
        setIsAuthenticated(true);
        setData(result.data); // Load the data we just fetched
      } else {
        setError("INCORRECT ACCESS CODE");
      }
    } catch (err) {
      setError("System Error: Unable to verify credentials.");
    } finally {
      setLoading(false);
    }
  };

  // --- DATA FETCHING (For switching tabs) ---
  const fetchData = async (sheetName: "IG_idea_submissions" | "Newsletter") => {
    setLoading(true);
    setActiveTab(sheetName);
    setError(""); // Clear previous errors
    
    try {
      const res = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            password: password, // Use the stored password state
            sheetName: sheetName 
        }),
      });
      const result = await res.json();
      
      if (result.success) {
        setData(result.data);
      } else {
        // If session expired or password somehow changed
        setIsAuthenticated(false);
        setError("Session Expired. Please login again.");
      }
    } catch (err) {
      setError("Failed to fetch data stream.");
    } finally {
      setLoading(false);
    }
  };

  // --- RENDER: LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center font-pixel p-4">
        <div className="max-w-md w-full border-2 border-red-600 p-8 bg-gray-900 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
          <div className="flex items-center gap-4 mb-8 text-red-500">
            <span className="material-symbols-outlined text-4xl">lock</span>
            <h1 className="text-3xl uppercase tracking-widest">Restricted Area</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-gray-500 uppercase text-sm">Enter Access Code</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-gray-700 p-3 text-white focus:border-red-500 outline-none text-xl tracking-widest placeholder-gray-800"
                placeholder="••••••••"
              />
            </div>
            {error && <p className="text-red-500 animate-pulse bg-red-900/20 p-2 border border-red-900">{error}</p>}
            
            <button 
                type="submit" 
                disabled={loading}
                className={`w-full bg-red-600 text-black font-bold py-3 uppercase hover:bg-white transition-colors flex justify-center items-center gap-2
                ${loading ? "opacity-50 cursor-wait" : ""}`}
            >
              {loading ? "VERIFYING..." : "UNLOCK TERMINAL"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- RENDER: DASHBOARD ---
  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono">
      <Navbar />
      
      <div className="pt-24 px-6 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-700 pb-4 gap-4">
            <div>
                <h1 className="text-3xl font-pixel text-neon-orange mb-2">ADMIN_CONSOLE // V1.0</h1>
                <p className="text-gray-400">Database Access Level: ROOT</p>
            </div>
            <div className="flex gap-4">
                <button 
                    onClick={() => fetchData("IG_idea_submissions")}
                    className={`px-6 py-2 font-bold uppercase border-2 transition-all
                    ${activeTab === "IG_idea_submissions" ? "bg-neon-orange text-black border-neon-orange" : "border-gray-600 text-gray-400 hover:border-white"}`}
                >
                    Ideas
                </button>
                <button 
                    onClick={() => fetchData("Newsletter")}
                    className={`px-6 py-2 font-bold uppercase border-2 transition-all
                    ${activeTab === "Newsletter" ? "bg-neon-magenta text-black border-neon-magenta" : "border-gray-600 text-gray-400 hover:border-white"}`}
                >
                    Subscribers
                </button>
            </div>
        </div>

        {/* DATA TABLE */}
        <div className="bg-black border border-gray-800 overflow-x-auto min-h-[500px] relative">
            {loading && (
                <div className="absolute inset-0 bg-black/80 z-10 flex items-center justify-center text-neon-orange font-pixel text-2xl animate-pulse">
                    FETCHING DATA STREAMS...
                </div>
            )}
            
            {!loading && data.length === 0 ? (
                <div className="flex h-64 items-center justify-center text-gray-600 font-pixel text-xl">
                    [ DATABASE EMPTY ]
                </div>
            ) : (
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-800 text-gray-300 font-pixel uppercase tracking-wider text-sm sticky top-0">
                        <tr>
                            {data.length > 0 && Object.keys(data[0]).map((key) => (
                                <th key={key} className="p-4 border-b border-gray-700 whitespace-nowrap">
                                    {key}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                        {data.map((row, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors">
                                {Object.values(row).map((val: any, j) => (
                                    <td key={j} className="p-4 text-sm text-gray-300 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">
                                        {val}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
        
        <div className="mt-4 text-right text-gray-600 text-xs uppercase">
            Total Records: {data.length} // Encryption: Standard
        </div>
      </div>
    </div>
  );
}