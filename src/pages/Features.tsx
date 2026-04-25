import React from "react";
import { FeatureCard } from "@/components/features/FeatureCard";
import { Droplets, Flame, Sprout } from "lucide-react";

export function Features() {
  return (
    <div className="container mx-auto px-4 py-20 md:px-8 min-h-[calc(100vh-80px)]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Orbital Inference Capabilities</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Process Earth observation data directly on the satellite. Downlink only the critical insights you need, saving 99% of bandwidth.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        <FeatureCard 
          title="Flood Detection"
          description="Rapid mapping of inundated areas using SAR or optical imagery. Outputs precise flood masks and risk assessment."
          icon={Droplets}
          linkTo="/flood"
        />
        <FeatureCard 
          title="Wildfire Detection"
          description="Track active burn areas and assess damage severity in real-time. Calculate NDVI deltas automatically."
          icon={Flame}
          linkTo="/wildfire"
        />
        <FeatureCard 
          title="Crop Classification"
          description="Differentiate agricultural land from non-crop areas with high confidence to monitor food security."
          icon={Sprout}
          linkTo="/crop"
        />
      </div>
    </div>
  );
}
