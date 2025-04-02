import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SignIn } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";

const ClerkLogin = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full text-xs md:text-base px-4 md:px-6">
          Ayo mulai
        </Button>
      </DialogTrigger>
      <DialogTitle>
        <DialogContent>
          <SignIn />
        </DialogContent>
      </DialogTitle>
    </Dialog>
  );
};

export default ClerkLogin;
