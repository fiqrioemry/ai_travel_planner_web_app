import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Loader2, Plus } from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { useCallback, useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { resumeInitialState } from "@/config/state";
import { useResumeStore } from "@/store/useResumeStore";

const CreateResume = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { createNewResume, loading } = useResumeStore();
  const [formData, setFormData] = useState(resumeInitialState);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetAndCloseDialog = useCallback(() => {
    setFormData(resumeInitialState);
    setIsOpen(false);
  }, []);

  const handleCancel = () => {
    if (formData.title) setShowConfirmation(true);
    else resetAndCloseDialog();
  };

  const handleCreateResume = async () => {
    const resume = await createNewResume(user, formData);
    setIsOpen(false);
    navigate("/resume/" + resume.id + "/edit");
  };

  const handleCloseDialog = () => {
    if (formData.title) setShowConfirmation(true);
    else resetAndCloseDialog();
  };

  const handleConfirmation = (confirmed) => {
    if (confirmed) resetAndCloseDialog();
    setShowConfirmation(false);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => (!open ? handleCloseDialog() : setIsOpen(open))}
      >
        <Button size="lg" onClick={() => setIsOpen(true)}>
          <Plus />
          <span>Resume</span>
        </Button>
        <DialogContent>
          <DialogTitle className="text-center mb-2">
            Create New Resume
          </DialogTitle>
          <DialogDescription className="text-center space-y-2 mb-4">
            <p>Add a title for your new resume</p>
            <Input
              name="title"
              className="my-2"
              value={formData.title}
              onChange={handleFormChange}
              placeholder="Example : Data Analyst Resume"
            />
          </DialogDescription>
          <div className="flex justify-end gap-5">
            <Button onClick={handleCancel} variant="delete">
              Cancel
            </Button>
            <Button disabled={!formData.title} onClick={handleCreateResume}>
              {loading ? <Loader2 className="animate-spin" /> : "Create"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* confirmation box */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="w-full sm:max-w-xl rounded-lg">
          <div className="text-center mt-4 mb-4">
            <DialogTitle>
              <h4>Unsaved Changes</h4>
            </DialogTitle>
            <p className="text-gray-600">
              You have unsaved changes of new resume?
            </p>
          </div>
          <div className="flex justify-center gap-2 ">
            <Button variant="delete" onClick={() => handleConfirmation(true)}>
              Yes, discard
            </Button>
            <Button onClick={() => handleConfirmation(false)}>
              No, keep It
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateResume;
