"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Idea {
  _id: string;
  fullName: string;
  department: string;
  ideaDescription: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [ideas, setIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    fetch("/api/ideas")
      .then((res) => res.json())
      .then((data) => setIdeas(data.ideas || []));
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-warm-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b-2 border-neon-blue pb-4">
          <h1 className="text-4xl font-pixel text-neon-blue uppercase">Admin // Mainframe</h1>
          <Link href="/" className="px-4 py-2 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black font-pixel transition-colors pixel-corners">
            EXIT_SYSTEM
          </Link>
        </div>

        <div className="bg-cyber-gray border-2 border-gray-700 p-1 pixel-corners">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800 text-neon-orange font-pixel text-xl border-b-2 border-neon-orange">
                <th className="p-4">Timestamp</th>
                <th className="p-4">Student Name</th>
                <th className="p-4">Department</th>
                <th className="p-4">Idea Preview</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody className="font-display text-gray-300">
              {ideas.map((idea) => (
                <tr key={idea._id} className="border-b border-gray-700 hover:bg-gray-900 transition-colors">
                  <td className="p-4 font-mono text-sm text-gray-500">
                    {new Date(idea.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4 font-bold text-white">{idea.fullName}</td>
                  <td className="p-4">
                    <span className="bg-gray-800 px-2 py-1 rounded text-xs border border-gray-600">{idea.department}</span>
                  </td>
                  <td className="p-4 max-w-md truncate opacity-80">{idea.ideaDescription}</td>
                  <td className="p-4">
                    <button className="text-neon-magenta hover:text-white font-pixel uppercase underline decoration-dashed">
                      Expand_Data
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {ideas.length === 0 && (
            <div className="p-8 text-center font-pixel text-gray-500 text-xl">
              NO_DATA_FOUND // WAITING_FOR_INPUT
            </div>
          )}
        </div>
      </div>
    </div>
  );
}