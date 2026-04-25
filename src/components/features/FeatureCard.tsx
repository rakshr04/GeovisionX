import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  linkTo: string;
}

import { GlowCard } from "@/components/ui/spotlight-card";

export function FeatureCard({ title, description, icon: Icon, linkTo }: FeatureCardProps) {
  return (
    <GlowCard 
      customSize 
      className="flex flex-col h-full bg-black/20 border-white/10 hover:border-white/20 transition-colors"
      glowColor="blue"
    >
      <div className="flex flex-col h-full z-20">
        <div className="p-6 pb-0">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        
        <div className="flex-1 px-6 py-4">
          {/* Content area */}
        </div>
        
        <div className="p-6 pt-0">
          <Button asChild className="w-full shadow-lg" variant="secondary">
            <Link to={linkTo}>Launch Dashboard</Link>
          </Button>
        </div>
      </div>
    </GlowCard>
  );
}
