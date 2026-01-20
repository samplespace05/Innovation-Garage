


// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Events", path: "/events" },
//     { name: "Ideas", path: "/ideas" },
//     { name: "Teams", path: "/teams" },
//     { name: "Certificates", path: "/certificates" }, // Added your new page
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-background-main/90 backdrop-blur-md border-b border-white/10 h-20 font-pixel">
//       <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
        
//         {/* LOGO */}
//         <Link href="/" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>
//           <div className="size-10 bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_10px_rgba(255,106,0,0.4)] transition-all group-hover:shadow-[0_0_20px_rgba(215,38,255,0.6)] pixel-corners">
//             <span className="material-symbols-outlined text-white text-[24px]"></span>
//           </div>
//           <h2 className="text-text-main text-2xl md:text-3xl uppercase tracking-widest leading-none">
//             Innovation<br/><span className="text-primary">Garage</span>
//           </h2>
//         </Link>

//         {/* DESKTOP MENU (Hidden on Mobile) */}
//         <div className="hidden lg:flex items-center gap-12">
//           {navLinks.map((link) => (
//             <Link 
//               key={link.name}
//               href={link.path}
//               className={`text-xl uppercase tracking-widest transition-colors relative hover:text-secondary
//               ${pathname === link.path ? "text-secondary decoration-2 underline underline-offset-8" : "text-white/70"}`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* MOBILE HAMBURGER BUTTON (Visible on Mobile) */}
//         <button 
//             className="lg:hidden text-white hover:text-primary transition-colors p-2"
//             onClick={() => setIsOpen(!isOpen)}
//             aria-label="Toggle Menu"
//         >
//             <span className="material-symbols-outlined text-4xl">
//                 {isOpen ? "close" : "menu"}
//             </span>
//         </button>
//       </div>

//       {/* MOBILE MENU DROPDOWN */}
//       {/* This renders only when isOpen is true */}
//       {isOpen && (
//         <div className="lg:hidden absolute top-20 left-0 w-full bg-background-main border-b-4 border-primary shadow-[0_10px_30px_rgba(0,0,0,0.8)] animate-fade-in h-screen">
//             <div className="flex flex-col p-8 gap-6">
//                 {navLinks.map((link) => (
//                     <Link 
//                         key={link.name}
//                         href={link.path}
//                         onClick={() => setIsOpen(false)} // Close menu when a link is clicked
//                         className={`text-3xl uppercase tracking-widest py-4 border-b border-white/10 transition-all
//                         ${pathname === link.path 
//                             ? "text-primary pl-4 border-l-4 border-primary bg-white/5" 
//                             : "text-white/60 hover:text-white hover:pl-4 hover:bg-white/5"}`}
//                     >
//                         {">"} {link.name}
//                     </Link>
//                 ))}
//             </div>
//         </div>
//       )}
//     </nav>
//   );
// }






"use client";
import Link from "next/link";
import Image from "next/image"; // 1. IMPORT THIS
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Ideas", path: "/ideas" },
    { name: "Gallery", path: "/gallery" },
    { name: "Teams", path: "/teams" },
    { name: "Certificates", path: "/certificates" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-main/90 backdrop-blur-md border-b border-white/10 h-20 font-pixel">
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>
          
          {/* 2. REPLACED THE OLD DIV WITH IMAGE COMPONENT */}
          <div className="relative size-12 flex items-center justify-center">
             <Image 
               src="/logo.png"            // Ensure logo.png is in your 'public' folder
               alt="Innovation Garage"
               width={48}                 // width in pixels (matches size-12 approx)
               height={48}                // height in pixels
               className="object-contain drop-shadow-[0_0_5px_rgba(255,106,0,0.6)]" // Optional: Added a glow to match your previous style
               priority                   // Loads image immediately since it's above the fold
             />
          </div>

          <h2 className="text-text-main text-2xl md:text-3xl uppercase tracking-widest leading-none">
            Innovation<br/><span className="text-primary">Garage</span>
          </h2>
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.path}
              className={`text-xl uppercase tracking-widest transition-colors relative hover:text-secondary
              ${pathname === link.path ? "text-secondary decoration-2 underline underline-offset-8" : "text-white/70"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <button 
            className="lg:hidden text-white hover:text-primary transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
        >
            <span className="material-symbols-outlined text-4xl">
                {isOpen ? "close" : "menu"}
            </span>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background-main border-b-4 border-primary shadow-[0_10px_30px_rgba(0,0,0,0.8)] animate-fade-in h-screen">
            <div className="flex flex-col p-8 gap-6">
                {navLinks.map((link) => (
                    <Link 
                        key={link.name}
                        href={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-3xl uppercase tracking-widest py-4 border-b border-white/10 transition-all
                        ${pathname === link.path 
                            ? "text-primary pl-4 border-l-4 border-primary bg-white/5" 
                            : "text-white/60 hover:text-white hover:pl-4 hover:bg-white/5"}`}
                    >
                        {">"} {link.name}
                    </Link>
                ))}
            </div>
        </div>
      )}
    </nav>
  );
}