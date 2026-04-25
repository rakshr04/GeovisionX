import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon } from "lucide-react";

interface InputSectionProps {
  onLoadSample: () => void;
  onRunInference: () => void;
  isProcessing: boolean;
  hasImage: boolean;
  selectedSensor: string;
  onSensorChange: (val: string) => void;
  title?: string;
}

export function InputSection({
  onLoadSample,
  onRunInference,
  isProcessing,
  hasImage,
  selectedSensor,
  onSensorChange,
  title = "Input Data"
}: InputSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Sensor Type</label>
          <select 
            className="flex h-10 w-full items-center justify-between rounded-md border border-white/20 bg-black/20 backdrop-blur-md px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={selectedSensor}
            onChange={(e) => onSensorChange(e.target.value)}
          >
            <option value="sentinel-1">Sentinel-1 (SAR)</option>
            <option value="sentinel-2">Sentinel-2 (Optical)</option>
          </select>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => document.getElementById("file-upload")?.click()}
          >
            <Upload className="mr-2 h-4 w-4" />
            Upload Image
          </Button>
          <input type="file" id="file-upload" className="hidden" accept="image/*" />
          
          <Button 
            variant="secondary" 
            className="flex-1"
            onClick={onLoadSample}
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Use Sample Data
          </Button>
        </div>

        <Button 
          className="w-full" 
          size="lg"
          onClick={onRunInference}
          disabled={!hasImage || isProcessing}
        >
          {isProcessing ? "Running Inference..." : "Run Orbital Inference"}
        </Button>
      </CardContent>
    </Card>
  );
}
