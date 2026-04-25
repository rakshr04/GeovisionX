import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Satellite, Droplets, Flame, Sprout } from "lucide-react";
import { NavHeader } from "@/components/ui/nav-header";
import { ShimmerText } from "@/components/ui/shimmer-text";

export function Layout() {
  const navItems = [
    { label: "Flood", href: "/flood", icon: <Droplets className="h-4 w-4" /> },
    { label: "Wildfire", href: "/wildfire", icon: <Flame className="h-4 w-4" /> },
    { label: "Crop", href: "/crop", icon: <Sprout className="h-4 w-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-transparent text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-white/5 backdrop-blur-2xl py-6">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-4">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <Satellite className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
              <div className="absolute inset-0 blur-lg bg-primary/20 rounded-full -z-10"></div>
            </div>
            <ShimmerText className="font-bold text-xl tracking-tighter" variant="cyan">
              GeoVisionX
            </ShimmerText>
          </Link>
          
          <NavHeader items={navItems} />
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
