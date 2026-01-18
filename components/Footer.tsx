// // import Link from "next/link";

// // export default function Footer() {
// //   return (
// //     <footer className="bg-cyber-black text-white py-16 px-6 border-t-2 border-neon-orange relative">
// //       {/* Top Gradient Border */}
// //       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-orange via-neon-magenta to-neon-orange"></div>
      
// //       <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
// //         {/* Brand Section */}
// //         <div className="max-w-sm">
// //           <div className="flex items-center gap-2 mb-4">
// //             <span className="material-symbols-outlined text-neon-orange text-[32px]">terminal</span>
// //             <h3 className="text-white font-pixel text-3xl uppercase">Innovation Garage</h3>
// //           </div>
          
// //           <p className="text-gray-600 text-lg font-pixel uppercase tracking-widest">© 2024 Innovation Garage.</p>
// //         </div>

// //         {/* Links Section */}
// //         <div className="flex flex-wrap gap-8 md:gap-16">
// //           <div className="flex flex-row gap-4">
// //             {/* <h4 className="text-lavender font-pixel text-xl uppercase tracking-widest border-b border-white/10 pb-2 mb-2">Platform</h4> */}
// //             {["Home", "Events", "Ideas", "Teams"].map((item) => (
// //                <Link key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-lg font-pixel text-gray-400 hover:text-neon-orange transition-colors uppercase">
// //                  {item}
// //                </Link>
// //             ))}
// //           </div>

// //           <div className="flex flex-col gap-4">
// //             <h4 className="text-lavender font-pixel text-xl uppercase tracking-widest border-b border-white/10 pb-2 mb-2">Connect</h4>
// //             <div className="flex gap-4">
// //               <a href="#" className="size-12 bg-cyber-gray border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all pixel-corners group">
// //                 <span className="font-bold font-display group-hover:scale-110 transition-transform">in</span>
// //               </a>
// //               <a href="#" className="size-12 bg-cyber-gray border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:border-purple-500 transition-all pixel-corners group">
// //                 <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">photo_camera</span>
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }


// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="w-full border-t border-white/10 bg-cyber-charcoal py-10 text-center relative z-10">
//       <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
//         {/* Brand & Copyright */}
//         <div className="flex flex-col md:items-start items-center gap-2">
//           <h3 className="text-lg font-bold font-display uppercase text-cyber-white">
//             Innovation Garage
//           </h3>
//           <p className="text-lg text-gray-500 uppercase tracking-widest font-pixel">
//             © 2024. All systems operational.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex gap-6 font-pixel">
//           {["Home", "Events", "Ideas", "Teams"].map((item) => (
//             <Link
//               key={item}
//               href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//               className="text-lg text-gray-400 hover:text-cyber-magenta uppercase hover:underline decoration-2 underline-offset-4 transition-colors"
//             >
//               {item}
//             </Link>
//           ))}
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-4">
//           {/* LinkedIn (Work Icon) */}
//           <a
//             href="#"
//             className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm text-gray-400 hover:border-cyber-magenta hover:text-cyber-magenta transition-all group"
//             aria-label="LinkedIn"
//           >
//             <span className="material-symbols-outlined group-hover:scale-110 transition-transform">work</span>
//           </a>

//           {/* Instagram (Camera Icon) */}
//           <a
//             href="#"
//             className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm text-gray-400 hover:border-cyber-orange hover:text-cyber-orange transition-all group"
//             aria-label="Instagram"
//           >
//             <span className="material-symbols-outlined group-hover:scale-110 transition-transform">camera_alt</span>
//           </a>

//           {/* WhatsApp (New Icon) */}
//           <a
//             href="#"
//             className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm text-gray-400  transition-all group"
//             aria-label="WhatsApp"
//           >
//             {/* Using SVG for precise Brand Icon */}
//             <svg 
//                 className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" 
//                 viewBox="0 0 24 24" 
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }


// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="w-full border-t border-white/10 bg-cyber-charcoal py-10 text-center relative z-10">
//       <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
//         {/* Brand & Copyright */}
//         <div className="flex flex-col md:items-start items-center gap-2">
//           <h3 className="text-lg font-bold font-display uppercase text-cyber-white">
//             Innovation Garage
//           </h3>
//           <p className="text-lg text-gray-500 uppercase tracking-widest font-pixel">
//             © 2024. All systems operational.
//           </p>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex gap-6 font-pixel">
//           {["Home", "Events", "Ideas", "Teams"].map((item) => (
//             <Link
//               key={item}
//               href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//               className="text-lg text-gray-400 hover:text-cyber-magenta uppercase hover:underline decoration-2 underline-offset-4 transition-colors"
//             >
//               {item}
//             </Link>
//           ))}
//         </div>

//         {/* Social Icons */}
//         <div className="flex gap-4">
//           {/* LinkedIn (Brand Icon) */}
//           <a
//             href="#"
//             className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm text-gray-400 hover:border-[#0077B5] hover:text-[#0077B5] transition-all group"
//             aria-label="LinkedIn"
//           >
//             <svg 
//                 className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" 
//                 viewBox="0 0 24 24" 
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//             </svg>
//           </a>

//           {/* Instagram (Brand Icon) */}
//           <a
//             href="#"
//             className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm text-gray-400 hover:border-[#E1306C] hover:text-[#E1306C] transition-all group"
//             aria-label="Instagram"
//           >
//             <svg 
//                 className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" 
//                 viewBox="0 0 24 24" 
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
//             </svg>
//           </a>

//           {/* WhatsApp (Brand Icon) */}
//           <a
//             href="#"
//             className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-sm text-gray-400 hover:border-[#25D366] hover:text-[#25D366] transition-all group"
//             aria-label="WhatsApp"
//           >
//             <svg 
//                 className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" 
//                 viewBox="0 0 24 24" 
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
//             </svg>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client"; // Needs to be client component for interactivity
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("LOADING");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: { "Content-Type": "application/json" }
      });

      if (res.ok) {
        setStatus("SUCCESS");
        setEmail("");
        // Reset message after 3 seconds
        setTimeout(() => setStatus("IDLE"), 3000);
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  }

  return (
    <footer className="w-full border-t border-white/10 bg-cyber-black py-12 px-6 relative z-10 text-warm-white font-pixel">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* 1. Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
             {/* 2. Added Image component with specific width/height */}
             <Image 
                src="/logo.png" 
                alt="Innovation Garage Logo" 
                width={48} 
                height={48} 
                className="object-contain"
             />
             <h3 className="text-2xl font-bold uppercase text-white tracking-widest">Innovation<br/>Garage</h3>
          </div>
          <p className="text-gray-500 text-sm font-display leading-relaxed">
            Building the future, one pixel at a time. Join the community of radical thinkers and doers.
          </p>
          <p className="text-gray-600 uppercase tracking-widest text-s mt-2">© 2026. Systems Online.</p>
        </div>

        {/* 2. Navigation */}
        <div className="flex flex-col gap-4">
          <h4 className="text-neon-magenta text-xl uppercase tracking-widest border-b border-white/10 pb-2 mb-2 w-fit">Platform</h4>
          {["Home", "Events", "Ideas", "Teams", "Certificates"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-gray-400 hover:text-neon-orange uppercase hover:translate-x-2 transition-transform duration-200 w-fit"
            >
              {">"} {item}
            </Link>
          ))}
        </div>

        {/* 3. Connect (Socials) */}
        <div className="flex flex-col gap-4">
          <h4 className="text-neon-magenta text-xl uppercase tracking-widest border-b border-white/10 pb-2 mb-2 w-fit">Connect</h4>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/ig-nitw/" aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center border border-white/20 bg-surface-card text-gray-400 hover:border-[#0077B5] hover:text-[#0077B5] hover:shadow-[0_0_10px_#0077B5] transition-all group pixel-corners">
                <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#https://www.instagram.com/ig_nitw/" aria-label="Instagram" className="w-12 h-12 flex items-center justify-center border border-white/20 bg-surface-card text-gray-400 hover:border-[#E1306C] hover:text-[#E1306C] hover:shadow-[0_0_10px_#E1306C] transition-all group pixel-corners">
                <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://chat.whatsapp.com/EMAVIAzhTjtI5J6FsQyx6I" aria-label="WhatsApp" className="w-12 h-12 flex items-center justify-center border border-white/20 bg-surface-card text-gray-400 hover:border-[#25D366] hover:text-[#25D366] hover:shadow-[0_0_10px_#25D366] transition-all group pixel-corners">
                <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
            </a>
            <a 
            href="https://www.facebook.com/TheInnovationGarage/" 
            aria-label="Facebook" 
            className="w-12 h-12 flex items-center justify-center border border-white/20 bg-surface-card text-gray-400 hover:border-[#1877F2] hover:text-[#1877F2] hover:shadow-[0_0_10px_#1877F2] transition-all group pixel-corners"
          >
            <svg 
              className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" 
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>  
          </a>
          </div>
        </div>

        {/* 4. Newsletter Subscription (New Section) */}
        <div className="flex flex-col gap-4">
          <h4 className="text-neon-magenta text-xl uppercase tracking-widest border-b border-white/10 pb-2 mb-2 w-fit">Updates</h4>
          <p className="text-gray-500 text-sm font-display">
            Join the inner circle. Get notified about hackathons and workshops.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
            <input 
                type="email" 
                placeholder="YOUR@EMAIL.COM" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "LOADING" || status === "SUCCESS"}
                className="bg-surface-card border-2 border-white/20 px-4 py-3 text-white font-pixel placeholder:text-gray-600 focus:border-neon-orange outline-none transition-colors pixel-corners disabled:opacity-50"
            />
            <button 
                type="submit" 
                disabled={status === "LOADING" || status === "SUCCESS"}
                className={`px-4 py-3 font-bold font-pixel uppercase tracking-wider pixel-corners border-2 transition-all
                ${status === "SUCCESS" 
                    ? "bg-green-500 border-green-500 text-black cursor-default" 
                    : "bg-transparent border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-black"
                }`}
            >
                {status === "LOADING" ? "TRANSMITTING..." : 
                 status === "SUCCESS" ? "REGISTERED!" : 
                 status === "ERROR" ? "RETRY?" : "SUBSCRIBE"}
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}