import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface OutputSectionProps {
  title: string;
  isProcessing: boolean;
  hasRun: boolean;
  children: React.ReactNode;
}

export function OutputSection({
  title,
  isProcessing,
  hasRun,
  children
}: OutputSectionProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        {isProcessing ? (
          <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-muted-foreground">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p>Processing via TerraMind AI...</p>
          </div>
        ) : !hasRun ? (
          <div className="flex flex-1 items-center justify-center text-muted-foreground">
            <p>Run inference to view results.</p>
          </div>
        ) : (
          <div className="flex-1 space-y-6">
            {children}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
