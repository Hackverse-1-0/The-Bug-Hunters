import { Shield, Camera, Mic, Ban } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface AppAccess {
  id: string;
  appName: string;
  icon: string;
  usingCamera: boolean;
  usingMic: boolean;
  isBlocked: boolean;
}

const ProtectionStatus = () => {
  const { toast } = useToast();
  const [apps, setApps] = useState<AppAccess[]>([
    {
      id: "1",
      appName: "Instagram",
      icon: "📷",
      usingCamera: true,
      usingMic: false,
      isBlocked: false,
    },
    {
      id: "2",
      appName: "WhatsApp",
      icon: "💬",
      usingCamera: false,
      usingMic: true,
      isBlocked: false,
    },
    {
      id: "3",
      appName: "Zoom",
      icon: "📹",
      usingCamera: true,
      usingMic: true,
      isBlocked: false,
    },
  ]);

  const handleBlockApp = (appId: string) => {
    setApps(apps.map(app => 
      app.id === appId ? { ...app, isBlocked: !app.isBlocked } : app
    ));
    const app = apps.find(a => a.id === appId);
    toast({
      title: app?.isBlocked ? "Access Restored" : "Access Blocked",
      description: app?.isBlocked 
        ? `${app.appName} can now access camera/microphone` 
        : `${app.appName} is blocked from camera/microphone`,
    });
  };

  const activeApps = apps.filter(app => !app.isBlocked && (app.usingCamera || app.usingMic));

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-success/20 glow-primary animate-pulse-slow">
          <Shield className="w-12 h-12 text-success" />
        </div>
        <h2 className="text-2xl font-semibold">
          {activeApps.length === 0 ? "You're fully protected 💚" : "Active Monitoring 👀"}
        </h2>
        <p className="text-muted-foreground">
          {activeApps.length === 0 
            ? "No apps using camera or microphone" 
            : `${activeApps.length} app${activeApps.length > 1 ? 's' : ''} accessing your device`}
        </p>
      </div>

      {/* Transparent Dashboard */}
      <Card className="bg-card/40 backdrop-blur-md border-primary/20 card-shadow">
        <div className="p-4 space-y-3">
          <h3 className="text-sm font-semibold flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            Active Access Monitor
          </h3>
          
          {apps.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              No apps detected
            </p>
          ) : (
            <div className="space-y-2">
              {apps.map((app) => (
                <div
                  key={app.id}
                  className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                    app.isBlocked
                      ? "bg-destructive/10 border border-destructive/30"
                      : "bg-background/60 border border-border/50"
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-2xl">{app.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{app.appName}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {app.usingCamera && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Camera className="w-3 h-3" />
                            Camera
                          </span>
                        )}
                        {app.usingMic && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Mic className="w-3 h-3" />
                            Mic
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    size="sm"
                    variant={app.isBlocked ? "outline" : "destructive"}
                    onClick={() => handleBlockApp(app.id)}
                    className="shrink-0"
                  >
                    {app.isBlocked ? (
                      <>
                        <Shield className="w-3 h-3" />
                        Unblock
                      </>
                    ) : (
                      <>
                        <Ban className="w-3 h-3" />
                        Block
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ProtectionStatus;
