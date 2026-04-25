export interface FloodResult {
  floodPercentage: number;
  maskUrl: string;
  risk: "low" | "medium" | "high";
}

export interface WildfireResult {
  burnArea: number; // km2
  severity: string;
  ndviDelta: number;
}

export interface CropResult {
  cropPercent: number;
  nonCropPercent: number;
  confidence: number;
}

// Simulate delay for inference
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function detectFlood(image: File | string): Promise<FloodResult> {
  await delay(1500); // 1.5s simulation
  
  const floodPercentage = Math.floor(Math.random() * 40) + 10; // 10% to 50%
  let risk: "low" | "medium" | "high" = "low";
  if (floodPercentage > 35) risk = "high";
  else if (floodPercentage > 20) risk = "medium";

  return {
    floodPercentage,
    maskUrl: "", // Handled by UI visualization
    risk
  };
}

export async function detectWildfire(image: File | string): Promise<WildfireResult> {
  await delay(2000);
  
  const burnArea = +(Math.random() * 15 + 5).toFixed(1); // 5.0 to 20.0 km2
  const severities = ["Low", "Moderate", "High", "Critical"];
  const severity = severities[Math.floor(Math.random() * severities.length)];
  const ndviDelta = -(Math.random() * 0.4 + 0.2).toFixed(2); // -0.20 to -0.60

  return {
    burnArea,
    severity,
    ndviDelta
  };
}

export async function detectCrop(image: File | string): Promise<CropResult> {
  await delay(1200);
  
  const cropPercent = Math.floor(Math.random() * 60) + 30; // 30% to 90%
  const nonCropPercent = 100 - cropPercent;
  const confidence = +(Math.random() * 15 + 80).toFixed(1); // 80.0 to 95.0%

  return {
    cropPercent,
    nonCropPercent,
    confidence
  };
}
