import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant =
  | "default"
  | "secondary"
  | "destructive"
  | "red"
  | "blue"
  | "green"
  | "yellow"
  | "purple"
  | "pink"
  | "orange"
  | "cyan"
  | "indigo"
  | "violet"
  | "rose"
  | "amber"
  | "lime"
  | "emerald"
  | "sky"
  | "slate"
  | "fuchsia";

interface ShimmerTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  duration?: number;
  delay?: number;
  spread?: number;
}

const variantMap: Record<Variant, string> = {
  default: "",
  secondary: "text-secondary-foreground",
  destructive: "text-destructive",
  red: "text-red-500",
  blue: "text-blue-500",
  green: "text-green-500",
  yellow: "text-yellow-500",
  purple: "text-purple-500",
  pink: "text-pink-500",
  orange: "text-orange-500",
  cyan: "text-cyan-400",
  indigo: "text-indigo-500",
  violet: "text-violet-500",
  rose: "text-rose-500",
  amber: "text-amber-500",
  lime: "text-lime-500",
  emerald: "text-emerald-500",
  sky: "text-sky-500",
  slate: "text-slate-400",
  fuchsia: "text-fuchsia-500",
};

export function ShimmerText({
  children,
  className,
  variant = "default",
  duration = 2,
  delay = 0,
}: ShimmerTextProps) {
  return (
    <div className={cn("relative inline-block overflow-hidden", className)}>
      <motion.span
        className={cn(
          "inline-block bg-clip-text text-transparent",
          variantMap[variant]
        )}
        style={{
          backgroundImage: `linear-gradient(90deg, currentColor 0%, currentColor 45%, rgba(255,255,255,0.9) 50%, currentColor 55%, currentColor 100%)`,
          backgroundSize: "300% 100%",
          WebkitBackgroundClip: "text",
        }}
        initial={{ backgroundPosition: "-150% 0%" }}
        animate={{
          backgroundPosition: ["-150% 0%", "150% 0%"],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}

export default ShimmerText;
