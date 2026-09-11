"use client";

import { useState, useEffect } from "react";

type TeamData = Record<string, string | number>;

export default function AttendanceAdmin() {
  const [teams, setTeams] = useState<TeamData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedTeam, setSelectedTeam] = useState<TeamData | null>(null);
  const [updates, setUpdates] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const res = await fetch("/api/hq/attendance");
      const data = await res.json();
      if (data.success) {
        setTeams(data.data);
      } else {
        console.error("Failed to load teams");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const filteredTeams = teams.filter((t) => {
    const teamName = String(t["Team Name"] || "").toLowerCase();
    return teamName.includes(search.toLowerCase());
  });

  const handleSelectTeam = (team: TeamData) => {
    setSelectedTeam(team);
    setUpdates({});
    setMessage("");
  };

  const handleUpdate = (field: string, val: string) => {
    setUpdates((prev) => ({ ...prev, [field]: val }));
  };

  const handleCheckAllAttendance = () => {
    if (!selectedTeam) return;
    const newUpdates = { ...updates };
    newUpdates["Leader Attendance"] = "Present";
    for (let i = 1; i <= 5; i++) {
      newUpdates[`Member ${i} Attendance`] = "Present";
    }
    setUpdates(newUpdates);
  };

  const saveUpdates = async () => {
    if (!selectedTeam) return;
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch("/api/hq/attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _rowIndex: selectedTeam._rowIndex,
          updates,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage("✅ Saved successfully!");
        // Update local state to reflect changes
        const updatedTeams = teams.map(t => {
          if (t._rowIndex === selectedTeam._rowIndex) {
            return { ...t, ...updates };
          }
          return t;
        });
        setTeams(updatedTeams);
        setSelectedTeam({ ...selectedTeam, ...updates });
      } else {
        setMessage("❌ Failed to save.");
      }
    } catch (e) {
      console.error(e);
      setMessage("❌ Error saving.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-white min-h-screen bg-gray-900">Loading teams...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-12 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Sidebar - Search & List */}
        <div className="md:col-span-1 border-r border-gray-700 pr-4">
          <h1 className="text-2xl font-bold mb-4 text-orange-500">SIH Attendance Portal</h1>
          <input
            type="text"
            placeholder="Search by Team Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-800 text-white border border-gray-600 rounded px-4 py-2 mb-4 focus:outline-none focus:border-orange-500"
          />
          <div className="overflow-y-auto h-[70vh] space-y-2 pr-2 custom-scrollbar">
            {filteredTeams.map((team) => (
              <div
                key={String(team._rowIndex)}
                onClick={() => handleSelectTeam(team)}
                className={`p-3 rounded cursor-pointer transition ${
                  selectedTeam?._rowIndex === team._rowIndex
                    ? "bg-orange-500 text-white"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                <div className="font-semibold">{team["Team Name"]}</div>
                <div className="text-sm opacity-80">{team["Theme"] || "General"}</div>
              </div>
            ))}
            {filteredTeams.length === 0 && (
              <div className="text-gray-400 text-sm">No teams found.</div>
            )}
          </div>
        </div>

        {/* Right Panel - Team Details & Controls */}
        <div className="md:col-span-2 pl-4">
          {selectedTeam ? (
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-3xl font-bold">{selectedTeam["Team Name"]}</h2>
                  <p className="text-gray-400">Theme: {selectedTeam["Theme"]}</p>
                </div>
                <button
                  onClick={saveUpdates}
                  disabled={saving}
                  className="bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white px-6 py-2 rounded font-semibold transition shadow-lg"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>

              {message && <div className="text-lg">{message}</div>}

              {/* Refreshments Section */}
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-orange-400 border-b border-gray-700 pb-2">Refreshments</h3>
                <div className="flex flex-wrap gap-4">
                  {[1, 2, 3, 4, 5].map((num) => {
                    const colName = `Refreshment ${num}`;
                    const val = updates[colName] !== undefined ? updates[colName] : selectedTeam[colName];
                    const isChecked = val === "Yes";
                    return (
                      <label key={num} className="flex items-center space-x-2 cursor-pointer bg-gray-900 p-2 rounded border border-gray-600 hover:border-gray-500 transition">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => handleUpdate(colName, e.target.checked ? "Yes" : "")}
                          className="w-5 h-5 accent-orange-500"
                        />
                        <span className="font-medium">Refreshment {num}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Attendance Section */}
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-md">
                <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <h3 className="text-xl font-bold text-orange-400">Member Attendance</h3>
                  <button
                    onClick={handleCheckAllAttendance}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded text-sm transition"
                  >
                    Mark All 6 Present
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Leader */}
                  <MemberCard
                    role="Leader"
                    name={String(selectedTeam["Leader Name"] || "")}
                    email={String(selectedTeam["Leader Email"] || "")}
                    phone={String(selectedTeam["Leader Phone"] || "")}
                    attendanceKey="Leader Attendance"
                    currentValue={updates["Leader Attendance"] !== undefined ? updates["Leader Attendance"] : String(selectedTeam["Leader Attendance"] || "")}
                    onUpdate={handleUpdate}
                  />

                  {/* Members 1 to 5 */}
                  {[1, 2, 3, 4, 5].map((num) => (
                    <MemberCard
                      key={num}
                      role={`Member ${num}`}
                      name={String(selectedTeam[`Member ${num} Name`] || "")}
                      email={String(selectedTeam[`Member ${num} Email`] || "")}
                      phone={String(selectedTeam[`Member ${num} Phone`] || "")}
                      attendanceKey={`Member ${num} Attendance`}
                      currentValue={updates[`Member ${num} Attendance`] !== undefined ? updates[`Member ${num} Attendance`] : String(selectedTeam[`Member ${num} Attendance`] || "")}
                      onUpdate={handleUpdate}
                    />
                  ))}
                </div>
              </div>

            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500 text-xl border-2 border-dashed border-gray-700 rounded-lg">
              Select a team from the list to manage attendance.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// Subcomponent for cleaner code
function MemberCard({
  role,
  name,
  email,
  phone,
  attendanceKey,
  currentValue,
  onUpdate,
}: {
  role: string;
  name: string;
  email: string;
  phone: string;
  attendanceKey: string;
  currentValue: string;
  onUpdate: (key: string, val: string) => void;
}) {
  if (!name) return null; // Don't show if empty

  const isPresent = currentValue === "Present";

  return (
    <div className={`p-4 rounded border transition ${isPresent ? 'bg-green-900/30 border-green-700' : 'bg-gray-900 border-gray-700'}`}>
      <div className="flex justify-between items-start">
        <div>
          <div className="text-xs text-orange-400 font-bold uppercase tracking-wider">{role}</div>
          <div className="font-bold text-lg">{name}</div>
          <div className="text-sm text-gray-400">{email}</div>
          <div className="text-sm text-gray-400">{phone}</div>
        </div>
        <label className="flex items-center space-x-2 cursor-pointer mt-1">
          <input
            type="checkbox"
            checked={isPresent}
            onChange={(e) => onUpdate(attendanceKey, e.target.checked ? "Present" : "")}
            className="w-6 h-6 accent-green-500 cursor-pointer"
          />
          <span className="font-medium text-sm">Present</span>
        </label>
      </div>
    </div>
  );
}
