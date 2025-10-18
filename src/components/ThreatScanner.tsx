import { useState } from "react";
import { Brain, AlertTriangle, CheckCircle2, Scan } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const ThreatScanner = () => {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [lastScan, setLastScan] = useState<Date | null>(null);

  const handleScan = () => {
    setScanning(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanning(false);
          setLastScan(new Date());
          toast.success("Scan complete! No threats detected 🎉");
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <Card className="p-6 card-shadow bg-gradient-to-br from-card to-secondary">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-primary/20 glow-primary">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">AI Threat Detector</h3>
            <p className="text-sm text-muted-foreground">
              Powered by advanced machine learning
            </p>
          </div>
        </div>

        {scanning && (
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-center text-muted-foreground">
              Scanning apps, messages, and links... {progress}%
            </p>
          </div>
        )}

        {lastScan && !scanning && (
          <div className="flex items-center gap-2 text-sm text-success">
            <CheckCircle2 className="w-4 h-4" />
            <span>Last scan: {lastScan.toLocaleTimeString()}</span>
          </div>
        )}

        <Button
          onClick={handleScan}
          disabled={scanning}
          className="w-full gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          <Scan className="w-4 h-4 mr-2" />
          {scanning ? "Scanning..." : "Run Security Scan"}
        </Button>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="text-center p-3 rounded-lg bg-background/50">
            <p className="text-2xl font-bold text-success">0</p>
            <p className="text-xs text-muted-foreground">Threats Blocked</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-background/50">
            <p className="text-2xl font-bold text-primary">247</p>
            <p className="text-xs text-muted-foreground">Apps Scanned</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ThreatScanner;
