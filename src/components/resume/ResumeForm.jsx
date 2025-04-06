/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import ProfileForm from "./resume-form/ProfileForm";
import { useResumeStore } from "@/store/useResumeStore";
import EducationForm from "./resume-form/EducationForm";
import WorkExperienceForm from "./resume-form/WorkExperienceForm";
import ThemeColor from "@/components/resume/resume-form/ThemeColor";

const ResumeForm = ({ form, setForm }) => {
  const [step, setStep] = useState(1);
  const { updateResumeField } = useResumeStore();

  const handleChange = (e, field) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        [name]: value,
      },
    }));
  };

  const handleSave = async () => {
    const payload = {
      profile: [form.profile],
      education: [form.education],
      work_experience: [form.workExperience],
    };
    await updateResumeField(form.id, payload);
    toast.success("Resume updated");
  };

  const renderStepForm = () => {
    switch (step) {
      case 1:
        return <ProfileForm handleChange={handleChange} form={form} />;
      case 2:
        return <EducationForm handleChange={handleChange} form={form} />;
      case 3:
        return <WorkExperienceForm handleChange={handleChange} form={form} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            Home
          </Button>
          <ThemeColor setForm={setForm} form={form} />
        </div>
        <Button size="sm" onClick={() => setStep(step + 1 <= 3 ? step + 1 : 3)}>
          Next
        </Button>
      </div>

      <div>{renderStepForm()}</div>

      <div className="pt-4">
        <Button className="w-full" onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default ResumeForm;
