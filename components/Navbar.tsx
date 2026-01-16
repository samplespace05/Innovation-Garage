"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Ideas", path: "/ideas" },
    { name: "Teams", path: "/teams" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-black/90 backdrop-blur-md border-b border-white/10 h-20">
      <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-7 group">
          <div className="size-10 bg-gradient-to-br from-neon-orange to-neon-magenta flex items-center justify-center shadow-[0_0_10px_rgba(255,106,0,0.4)] transition-all group-hover:shadow-[0_0_20px_rgba(215,38,255,0.6)] pixel-corners">
            <span className="material-symbols-outlined text-white text-[24px]">terminal</span>
          </div>
          <h2 className="text-warm-white text-2xl md:text-3xl font-pixel uppercase tracking-widest leading-none">
            Innovation<br/><span className="text-neon-orange">Garage</span>
          </h2>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.path}
              className={`text-xl font-pixel uppercase tracking-widest transition-colors relative hover:text-neon-magenta
              ${pathname === link.path ? "text-neon-magenta decoration-2 underline underline-offset-8" : "text-white/70"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}