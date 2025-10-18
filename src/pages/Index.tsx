import { Shield, Settings, Menu, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProtectionStatus from "@/components/ProtectionStatus";
import ThreatScanner from "@/components/ThreatScanner";
import CloudBackup from "@/components/CloudBackup";
import RemoteControl from "@/components/RemoteControl";
import PrivacySettings from "@/components/PrivacySettings";
import InstallPrompt from "@/components/InstallPrompt";
import AlertsDashboard from "@/components/AlertsDashboard";

const Index = () => {
  return (
    <div className="min-h-screen gradient-hero">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10 border-2 border-primary/30">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-primary/20 text-primary font-semibold">U</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg gradient-primary glow-primary">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Sentinel</h1>
                  <p className="text-xs text-muted-foreground">Your AI Guardian</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 pb-24 max-w-2xl">
        <div className="space-y-8">
          {/* Protection Status */}
          <section>
            <ProtectionStatus />
          </section>

          {/* Active Monitoring Dashboard */}
          <section>
            <AlertsDashboard />
          </section>

          {/* AI Threat Scanner */}
          <section>
            <ThreatScanner />
          </section>

          {/* Cloud Backup */}
          <section>
            <CloudBackup />
          </section>

          {/* Remote Control */}
          <section>
            <RemoteControl />
          </section>

          {/* Privacy Settings */}
          <section>
            <PrivacySettings />
          </section>
        </div>
      </main>

      {/* Install Prompt */}
      <InstallPrompt />

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border">
        <div className="container mx-auto px-4 py-3 max-w-2xl">
          <div className="flex justify-around items-center">
            <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
              <Shield className="w-5 h-5 mb-1 text-primary" />
              <span className="text-xs">Protect</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
              <span className="text-xs">Scan</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
              <span className="text-xs">Backup</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
              <span className="text-xs">Settings</span>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Index;
