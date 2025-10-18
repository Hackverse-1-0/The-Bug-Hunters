import { Cloud, Download, Upload, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const CloudBackup = () => {
  const handleBackup = () => {
    toast.success("Backup started with AES-256 encryption 🔒");
  };

  const handleRestore = () => {
    toast.success("Restoring your data securely... 📁");
  };

  return (
    <Card className="p-6 card-shadow bg-gradient-to-br from-card to-accent/5">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-accent/20 glow-accent">
            <Cloud className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Encrypted Cloud Backup</h3>
            <p className="text-sm text-muted-foreground">
              Your data, protected with military-grade encryption
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-3 rounded-lg bg-background/50 border border-border">
          <Lock className="w-4 h-4 text-success" />
          <div className="flex-1">
            <p className="text-sm font-medium">Last backup</p>
            <p className="text-xs text-muted-foreground">2 hours ago • 2.4 GB</p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-success/20 text-success">
            Synced
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={handleBackup}
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
          >
            <Upload className="w-4 h-4 mr-2" />
            Backup Now
          </Button>
          <Button
            onClick={handleRestore}
            variant="outline"
            className="border-accent/30 hover:bg-accent/10"
          >
            <Download className="w-4 h-4 mr-2" />
            Restore
          </Button>
        </div>

        <div className="pt-2 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Storage used</span>
            <span className="font-medium">2.4 GB / 15 GB</span>
          </div>
          <div className="w-full h-2 bg-background/50 rounded-full overflow-hidden">
            <div className="h-full gradient-accent" style={{ width: "16%" }} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CloudBackup;
