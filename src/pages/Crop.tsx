import React, { useState } from "react";
import { InputSection } from "@/components/dashboard/InputSection";
import { OutputSection } from "@/components/dashboard/OutputSection";
import { detectCrop, CropResult } from "@/lib/inference";
import { Card, CardContent } from "@/components/ui/card";
import { Sprout, CheckCircle2, Map } from "lucide-react";

export function Crop() {
  const [image, setImage] = useState<string | null>(null);
  const [sensor, setSensor] = useState("sentinel-2");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<CropResult | null>(null);

  const loadSample = () => {
    // Unsplash aerial farmland image
    setImage("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800");
    setResult(null);
  };

  const runInference = async () => {
    if (!image) return;
    setIsProcessing(true);
    try {
      const res = await detectCrop(image);
      setResult(res);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 md:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Crop Classification</h1>
        <p className="text-muted-foreground mt-2">Differentiate agricultural land from non-crop areas.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 h-[calc(100vh-200px)] min-h-[600px]">
        {/* Left Column: Input */}
        <div className="flex flex-col gap-6">
          <InputSection 
            title="Satellite Feed"
            onLoadSample={loadSample}
            onRunInference={runInference}
            isProcessing={isProcessing}
            hasImage={!!image}
            selectedSensor={sensor}
            onSensorChange={setSensor}
          />
          
          <Card className="flex-1 overflow-hidden">
            <CardContent className="p-0 h-full relative flex items-center justify-center bg-muted">
              {image ? (
                <div className="relative w-full h-full">
                  <img src={image} alt="Satellite Input" className="w-full h-full object-cover" />
                  {/* Overlay */}
                  {result && (
                    <div className="absolute inset-0 bg-green-500/20 mix-blend-multiply flex items-center justify-center">
                       <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg font-bold border border-green-500/50 text-green-700 dark:text-green-400">
                        Vegetation Classified
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-muted-foreground">No image loaded</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Output */}
        <OutputSection 
          title="Inference Results" 
          isProcessing={isProcessing} 
          hasRun={!!result}
        >
          {result && (
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-green-500/5 border-green-500/20">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-green-500/10 rounded-full">
                    <Sprout className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Crop Coverage</p>
                    <p className="text-3xl font-bold">{result.cropPercent}%</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Model Confidence</p>
                    <div className="w-full bg-secondary rounded-full h-2.5 mt-2">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: `${result.confidence}%` }}></div>
                    </div>
                    <p className="text-right text-xs mt-1 font-mono">{result.confidence}%</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Map className="h-4 w-4" /> Telemetry Stats
                    </h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Input Size:</span>
                      <span>180 MB (Multispectral)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Output Size:</span>
                      <span className="text-green-500 font-medium">1.5 KB (Vector Mask)</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span className="font-medium">Bandwidth Saved:</span>
                      <span className="font-bold text-green-500">99.99%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </OutputSection>
      </div>
    </div>
  );
}
