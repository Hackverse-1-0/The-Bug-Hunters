import { Smartphone, Lock, Trash2, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const RemoteControl = () => {
  const handleLock = () => {
    toast.success("Device locked remotely 🔒");
  };

  const handleLocate = () => {
    toast.success("Locating your device... 📍");
  };

  const handleWipe = () => {
    toast.error("Remote wipe initiated. Your data is being securely erased.");
  };

  return (
    <Card className="p-6 card-shadow bg-gradient-to-br from-card to-destructive/5">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-warning/20">
            <Smartphone className="w-6 h-6 text-warning" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Remote Device Control</h3>
            <p className="text-sm text-muted-foreground">
              Protect your device from anywhere
            </p>
          </div>
        </div>

        <div className="grid gap-3">
          <Button
            onClick={handleLock}
            variant="outline"
            className="w-full justify-start border-primary/30 hover:bg-primary/10"
          >
            <Lock className="w-4 h-4 mr-2" />
            Lock Device
          </Button>

          <Button
            onClick={handleLocate}
            variant="outline"
            className="w-full justify-start border-accent/30 hover:bg-accent/10"
          >
            <MapPin className="w-4 h-4 mr-2" />
            Locate Device
          </Button>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start border-destructive/30 hover:bg-destructive/10 text-destructive"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Wipe Device Data
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete all data
                  from your device. Make sure you have a backup before proceeding.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleWipe}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Yes, Wipe Data
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-warning/10 border border-warning/30">
          <p className="text-xs text-warning flex items-center gap-2">
            <Lock className="w-3 h-3" />
            These features require device administrator permissions
          </p>
        </div>
      </div>
    </Card>
  );
};

export default RemoteControl;
