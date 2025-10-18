import { AlertTriangle, CheckCircle, Info, XCircle, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Alert {
  id: string;
  type: "warning" | "success" | "info" | "error";
  title: string;
  description: string;
  time: string;
}

const AlertsDashboard = () => {
  const alerts: Alert[] = [
    {
      id: "1",
      type: "success",
      title: "Camera access blocked",
      description: "Instagram attempted to access camera - Blocked successfully",
      time: "2 min ago",
    },
    {
      id: "2",
      type: "warning",
      title: "Suspicious link detected",
      description: "Phishing attempt detected in WhatsApp message",
      time: "15 min ago",
    },
    {
      id: "3",
      type: "info",
      title: "Backup completed",
      description: "Cloud backup finished successfully",
      time: "1 hour ago",
    },
    {
      id: "4",
      type: "success",
      title: "Threat scan complete",
      description: "No threats detected - All apps are safe",
      time: "3 hours ago",
    },
  ];

  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      case "success":
        return <CheckCircle className="w-5 h-5 text-success" />;
      case "error":
        return <XCircle className="w-5 h-5 text-destructive" />;
      default:
        return <Info className="w-5 h-5 text-accent" />;
    }
  };

  const getAlertBadgeVariant = (type: Alert["type"]) => {
    switch (type) {
      case "warning":
        return "warning" as const;
      case "success":
        return "success" as const;
      case "error":
        return "destructive" as const;
      default:
        return "secondary" as const;
    }
  };

  return (
    <Card className="bg-card/40 backdrop-blur-md border-primary/20 card-shadow">
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Active Monitoring Dashboard
          </h3>
          <Badge variant="outline" className="text-xs">
            {alerts.length} alerts
          </Badge>
        </div>

        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-start gap-3 p-3 rounded-lg bg-background/60 border border-border/50 hover:bg-background/80 transition-all"
            >
              <div className="shrink-0 mt-0.5">{getAlertIcon(alert.type)}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium">{alert.title}</p>
                  <Badge variant={getAlertBadgeVariant(alert.type)} className="text-xs shrink-0">
                    {alert.type}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {alert.description}
                </p>
                <p className="text-xs text-muted-foreground/60 mt-1">
                  {alert.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AlertsDashboard;
