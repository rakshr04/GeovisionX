import React from "react";
import { Button } from "./button";
import { ArrowRight, Satellite } from "lucide-react";
import { Link } from "react-router-dom";
import { ShimmerText } from "./shimmer-text";

export function NavbarHero() {
  return (
    <div className="relative flex-1 flex items-center justify-center overflow-hidden pt-10 pb-5 bg-transparent h-full">
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <ShimmerText className="text-4xl md:text-6xl font-black tracking-tighter uppercase" variant="cyan" duration={3}>
              GeoVisionX
            </ShimmerText>
          </div>
          <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-3 py-1 text-sm font-medium">
            <Satellite className="mr-2 h-4 w-4" />
            <span className="text-gray-200">Orbital Compute AI/ML</span>
          </div>
          <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Downlink Insight, <br className="hidden sm:inline" />
            <span className="text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Not Data.</span>
          </h1>
          <p className="mb-10 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Simulated TerraMind inference at the edge. Convert raw satellite imagery into tiny actionable outputs like flood masks, wildfire burn areas, and crop classification before downlink.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 w-full justify-center">
            <Button asChild size="lg" className="h-12 px-8 text-base shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <Link to="/flood">
                Try Live Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base bg-white/5 backdrop-blur-md border-white/20 hover:bg-white/10">
              <Link to="/features">View Features</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
    </div>
  );
}
