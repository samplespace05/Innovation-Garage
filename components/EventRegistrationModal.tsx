// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// type Question = {
//   id: number;
//   label: string;
//   type: "text" | "number" | "dropdown";
//   options?: string;
// };

// type ModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   event: {
//     id: string;
//     title: string;
//     config: Question[];
//   };
// };

// export default function EventRegistrationModal({ isOpen, onClose, event }: ModalProps) {
//   const [formData, setFormData] = useState<any>({});
//   const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

//   // Handle Standard & Custom Inputs
//   const handleChange = (field: string, value: string) => {
//     setFormData((prev: any) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("submitting");

//     // 1. Separate Common Fields from Custom Answers
//     const common = {
//       fullName: formData["Full Name"],
//       email: formData["Email"],
//       rollNumber: formData["Roll Number"],
//       phone: formData["Phone"],
//       branch: formData["Branch"],
//       year: formData["Year"]
//     };

//     // 2. Extract Custom Answers in Order
//     const customAnswers = event.config.map(q => formData[q.label] || "");

//     try {
//       const res = await fetch("/api/event-register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           eventID: event.id,
//           eventName: event.title,
//           common,
//           customAnswers
//         }),
//       });

//       const result = await res.json();
//       if (result.success) {
//         setStatus("success");
//       } else {
//         setStatus("error");
//       }
//     } catch (err) {
//       setStatus("error");
//     }
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
//           {/* Backdrop */}
//           <motion.div 
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="absolute inset-0 bg-black/80 backdrop-blur-sm"
//           />

//           {/* Modal Card */}
//           <motion.div 
//             initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
//             className="relative bg-[#111] border-2 border-neon-orange w-full max-w-2xl max-h-[90vh] overflow-y-auto pixel-corners shadow-[0_0_30px_rgba(255,106,0,0.3)]"
//           >
//             {/* Header */}
//             <div className="bg-neon-orange p-4 flex justify-between items-center sticky top-0 z-10">
//               <h2 className="text-black font-pixel text-xl uppercase font-bold truncate pr-4">
//                 REGISTER: {event.title}
//               </h2>
//               <button onClick={onClose} className="text-black hover:bg-white/20 p-1 rounded transition-colors">
//                 <span className="material-symbols-outlined">close</span>
//               </button>
//             </div>

//             {/* Success State */}
//             {status === "success" ? (
//               <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
//                 <span className="material-symbols-outlined text-6xl text-neon-orange mb-4">verified</span>
//                 <h3 className="text-2xl font-pixel text-white mb-2">ACCESS GRANTED</h3>
//                 <p className="text-gray-400 font-mono mb-6">Your registration ticket has been sent to your email.</p>
//                 <button onClick={onClose} className="px-8 py-3 bg-white text-black font-bold uppercase hover:bg-gray-200 pixel-corners">
//                   Close Terminal
//                 </button>
//               </div>
//             ) : (
//               /* Form */
//               <form onSubmit={handleSubmit} className="p-6 space-y-6">
                
//                 {/* Standard Fields (Always Required) */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <Input label="Full Name" required onChange={v => handleChange("Full Name", v)} />
//                   <Input label="Email" type="email" required onChange={v => handleChange("Email", v)} />
//                   <Input label="Roll Number" required onChange={v => handleChange("Roll Number", v)} />
//                   <Input label="Phone" type="tel" required onChange={v => handleChange("Phone", v)} />
//                   <Input label="Branch" required onChange={v => handleChange("Branch", v)} />
//                   <Input label="Year" type="number" required onChange={v     => handleChange("Year", v)} />
//                 </div>

//                 {/* DYNAMIC FIELDS (From Admin Config) */}
//                 {event.config.length > 0 && (
//                   <div className="border-t border-gray-800 pt-6 mt-6">
//                     <h4 className="text-neon-orange font-pixel text-sm uppercase mb-4">Additional Details</h4>
//                     <div className="space-y-4">
//                       {event.config.map((q) => (
//                         <div key={q.id}>
//                           <label className="block text-gray-500 text-xs uppercase mb-1 font-bold">{q.label}</label>
//                           {q.type === "dropdown" ? (
//                             <select 
//                               required 
//                               className="w-full bg-[#050505] border border-gray-700 p-3 text-white outline-none focus:border-neon-orange"
//                               onChange={(e) => handleChange(q.label, e.target.value)}
//                             >
//                               <option value="">Select Option</option>
//                               {/* If you add options logic in Admin later, map them here. For now standard inputs. */}
//                             </select>
//                           ) : (
//                             <input 
//                               type={q.type} 
//                               required 
//                               className="w-full bg-[#050505] border border-gray-700 p-3 text-white outline-none focus:border-neon-orange placeholder-gray-800 font-mono"
//                               placeholder={`ENTER ${q.label.toUpperCase()}`}
//                               onChange={(e) => handleChange(q.label, e.target.value)}
//                             />
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Footer Actions */}
//                 <div className="pt-6 border-t border-gray-800 flex justify-end gap-4">
//                   <button type="button" onClick={onClose} className="px-6 py-3 text-gray-500 hover:text-white uppercase font-bold text-sm">Cancel</button>
//                   <button 
//                     type="submit" 
//                     disabled={status === "submitting"}
//                     className={`px-8 py-3 bg-neon-orange text-black font-bold uppercase tracking-widest hover:bg-white transition-colors pixel-corners ${status === "submitting" ? "opacity-50" : ""}`}
//                   >
//                     {status === "submitting" ? "PROCESSING..." : "CONFIRM REGISTRATION"}
//                   </button>
//                 </div>
                
//                 {status === "error" && <p className="text-red-500 text-center text-sm font-mono">⚠️ System Error. Please try again.</p>}
//               </form>
//             )}
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }

// // Helper Input Component
// function Input({ label, type = "text", required, onChange }: any) {
//   return (
//     <div>
//       <label className="block text-gray-500 text-xs uppercase mb-1 font-bold">{label}</label>
//       <input 
//         type={type} 
//         required={required} 
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full bg-[#050505] border border-gray-700 p-3 text-white outline-none focus:border-neon-orange placeholder-gray-800 font-mono"
//         placeholder={`ENTER ${label.toUpperCase()}`}
//       />
//     </div>
//   );
// }











"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Question = {
  id: number;
  label: string;
  type: "text" | "number" | "dropdown";
  options?: string;
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  event: {
    id: string;
    title: string;
    config: Question[];
  };
};

export default function EventRegistrationModal({ isOpen, onClose, event }: ModalProps) {
  const [formData, setFormData] = useState<any>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Handle Standard & Custom Inputs
  const handleChange = (field: string, value: string) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // 1. Separate Common Fields from Custom Answers
    const common = {
      fullName: formData["Full Name"],
      email: formData["Email"],
      rollNumber: formData["Roll Number"],
      phone: formData["Phone"],
      branch: formData["Branch"],
      year: formData["Year"]
    };

    // 2. Extract Custom Answers in Order
    const customAnswers = event.config.map(q => formData[q.label] || "");

    try {
      const res = await fetch("/api/event-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventID: event.id,
          eventName: event.title,
          common,
          customAnswers
        }),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-[#111] border-2 border-neon-orange w-full max-w-2xl max-h-[90vh] overflow-y-auto pixel-corners shadow-[0_0_30px_rgba(255,106,0,0.3)]"
          >
            {/* Header */}
            <div className="bg-neon-orange p-4 flex justify-between items-center sticky top-0 z-10">
              <h2 className="text-black font-pixel text-xl uppercase font-bold truncate pr-4">
                REGISTER: {event.title}
              </h2>
              <button onClick={onClose} className="text-black hover:bg-white/20 p-1 rounded transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Success State */}
            {status === "success" ? (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <span className="material-symbols-outlined text-6xl text-neon-orange mb-4">verified</span>
                <h3 className="text-2xl font-pixel text-white mb-2">ACCESS GRANTED</h3>
                <p className="text-gray-400 font-mono mb-6">Your registration ticket has been sent to your email.</p>
                <button onClick={onClose} className="px-8 py-3 bg-white text-black font-bold uppercase hover:bg-gray-200 pixel-corners">
                  Close Terminal
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                
                {/* Standard Fields (Always Required) - FIXED SECTION */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Full Name" required onChange={(v) => handleChange("Full Name", v)} />
                  <Input label="Email" type="email" required onChange={(v) => handleChange("Email", v)} />
                  <Input label="Roll Number" required onChange={(v) => handleChange("Roll Number", v)} />
                  <Input label="Phone" type="tel" required onChange={(v) => handleChange("Phone", v)} />
                  <Input label="Branch" required onChange={(v) => handleChange("Branch", v)} />
                  <Input label="Year" type="number" required onChange={(v) => handleChange("Year", v)} />
                </div>

                {/* DYNAMIC FIELDS (From Admin Config) */}
                {event.config.length > 0 && (
                  <div className="border-t border-gray-800 pt-6 mt-6">
                    <h4 className="text-neon-orange font-pixel text-sm uppercase mb-4">Additional Details</h4>
                    <div className="space-y-4">
                      {event.config.map((q) => (
                        <div key={q.id}>
                          <label className="block text-gray-500 text-xs uppercase mb-1 font-bold">{q.label}</label>
                          {q.type === "dropdown" ? (
                            <select 
                              required 
                              className="w-full bg-[#050505] border border-gray-700 p-3 text-white outline-none focus:border-neon-orange"
                              onChange={(e) => handleChange(q.label, e.target.value)}
                            >
                              <option value="">Select Option</option>
                              {/* Future: Add logic to map q.options if available */}
                            </select>
                          ) : (
                            <input 
                              type={q.type} 
                              required 
                              className="w-full bg-[#050505] border border-gray-700 p-3 text-white outline-none focus:border-neon-orange placeholder-gray-800 font-mono"
                              placeholder={`ENTER ${q.label.toUpperCase()}`}
                              onChange={(e) => handleChange(q.label, e.target.value)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer Actions */}
                <div className="pt-6 border-t border-gray-800 flex justify-end gap-4">
                  <button type="button" onClick={onClose} className="px-6 py-3 text-gray-500 hover:text-white uppercase font-bold text-sm">Cancel</button>
                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className={`px-8 py-3 bg-neon-orange text-black font-bold uppercase tracking-widest hover:bg-white transition-colors pixel-corners ${status === "submitting" ? "opacity-50" : ""}`}
                  >
                    {status === "submitting" ? "PROCESSING..." : "CONFIRM REGISTRATION"}
                  </button>
                </div>
                
                {status === "error" && <p className="text-red-500 text-center text-sm font-mono">⚠️ System Error. Please try again.</p>}
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ----------------------------------------------------
// HELPER COMPONENT (Updated with Proper Types)
// ----------------------------------------------------

interface InputProps {
  label: string;
  type?: string;
  required?: boolean;
  onChange: (value: string) => void;
}

function Input({ label, type = "text", required, onChange }: InputProps) {
  return (
    <div>
      <label className="block text-gray-500 text-xs uppercase mb-1 font-bold">{label}</label>
      <input 
        type={type} 
        required={required} 
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#050505] border border-gray-700 p-3 text-white outline-none focus:border-neon-orange placeholder-gray-800 font-mono"
        placeholder={`ENTER ${label.toUpperCase()}`}
      />
    </div>
  );
}