"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

type InternalLink = { name: string; path: string; external?: false };
type ExternalLink = { name: string; href: string; external: true };
type NavLink = InternalLink | ExternalLink;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Ideas", path: "/ideas" },
    { name: "Gallery", path: "/gallery" },
    { name: "Teams", path: "/teams" },
    // Certificates is now an external link that opens in a new tab
    { name: "Certificates", href: "https://certificates.ignitw.in/", external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-main/90 backdrop-blur-md border-b border-white/10 h-20 font-pixel">
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-4 group" onClick={() => setIsOpen(false)}>
          
          <div className="relative size-12 flex items-center justify-center">
             <Image 
               src="/logo.png"
               alt="Innovation Garage"
               width={48}
               height={48}
               className="object-contain drop-shadow-[0_0_5px_rgba(255,106,0,0.6)]"
               priority
             />
          </div>

          <h2 className="text-text-main text-2xl md:text-3xl uppercase tracking-widest leading-none">
            Innovation<br/><span className="text-primary">Garage</span>
          </h2>
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            link.external ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl uppercase tracking-widest transition-colors relative hover:text-secondary ${"text-white/70"}`}
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name}
                href={link.path}
                className={`text-xl uppercase tracking-widest transition-colors relative hover:text-secondary
                ${pathname === link.path ? "text-secondary decoration-2 underline underline-offset-8" : "text-white/70"}`}
              >
                {link.name}
              </Link>
            )
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
                  link.external ? (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className={`text-3xl uppercase tracking-widest py-4 border-b border-white/10 transition-all ${"text-white/60 hover:text-white hover:pl-4 hover:bg-white/5"}`}
                    >
                      {">"} {link.name}
                    </a>
                  ) : (
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
                  )
                ))}
            </div>
        </div>
      )}
    </nav>
  );
}
