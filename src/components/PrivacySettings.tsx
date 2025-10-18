import { ShieldCheck, Eye, Database, Bell } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface PrivacySetting {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  defaultEnabled: boolean;
}

const PrivacySettings = () => {
  const [settings, setSettings] = useState<Record<string, boolean>>({
    onDevice: true,
    analytics: false,
    notifications: true,
    dataCollection: false,
  });

  const privacySettings: PrivacySetting[] = [
    {
      id: "onDevice",
      label: "On-Device Processing",
      description: "Process all data locally, never send to cloud",
      icon: <ShieldCheck className="w-5 h-5" />,
      defaultEnabled: true,
    },
    {
      id: "analytics",
      label: "Usage Analytics",
      description: "Help improve SecureMe with anonymous usage data",
      icon: <Database className="w-5 h-5" />,
      defaultEnabled: false,
    },
    {
      id: "notifications",
      label: "Security Alerts",
      description: "Get notified of potential security threats",
      icon: <Bell className="w-5 h-5" />,
      defaultEnabled: true,
    },
    {
      id: "dataCollection",
      label: "Minimal Data Collection",
      description: "Only collect essential security information",
      icon: <Eye className="w-5 h-5" />,
      defaultEnabled: false,
    },
  ];

  const handleToggle = (id: string) => {
    setSettings((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Card className="p-6 card-shadow">
      <div className="space-y-4">
        <div className="flex items-center gap-3 pb-2">
          <div className="p-3 rounded-full bg-primary/20 glow-primary">
            <ShieldCheck className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Privacy-First Settings</h3>
            <p className="text-sm text-muted-foreground">
              You're in complete control of your data
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {privacySettings.map((setting) => (
            <div
              key={setting.id}
              className="flex items-start justify-between p-4 rounded-lg bg-secondary/50 border border-border hover:bg-secondary/70 transition-colors"
            >
              <div className="flex gap-3 flex-1">
                <div className="text-primary mt-1">{setting.icon}</div>
                <div className="flex-1">
                  <Label htmlFor={setting.id} className="font-medium cursor-pointer">
                    {setting.label}
                  </Label>
                  <p className="text-xs text-muted-foreground mt-1">
                    {setting.description}
                  </p>
                </div>
              </div>
              <Switch
                id={setting.id}
                checked={settings[setting.id]}
                onCheckedChange={() => handleToggle(setting.id)}
              />
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 rounded-lg bg-success/10 border border-success/30">
          <p className="text-xs text-success flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            All your privacy preferences are stored locally and encrypted
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PrivacySettings;
