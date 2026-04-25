import React from "react";
import { NavbarHero } from "@/components/ui/hero-with-video";

export function Landing() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Earth Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&q=80&w=2000"
          alt="Earth from Space"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Subtle glass overlay and gradient */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <NavbarHero />
      </div>
    </div>
  );
}
