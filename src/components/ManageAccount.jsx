import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
} from "@/components/ui/dialog";
import { User } from "lucide-react";
import { UserProfile } from "@clerk/clerk-react";

const ManageAccount = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <User size={18} />
        <span>Manage Account</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <UserProfile />
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ManageAccount;
