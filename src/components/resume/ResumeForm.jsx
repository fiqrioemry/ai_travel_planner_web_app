/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/store/useResumeStore";
import ThemeColor from "@/components/resume/ThemeColor";

const ResumeForm = ({ resume }) => {
  const [step, setStep] = useState(1);
  const { updateResumeField } = useResumeStore();
  const [form, setForm] = useState({
    theme: resume.theme,
    profile: resume.profile?.[0] || {},
    education: resume.education?.[0] || {},
    workExperience: resume.workExperience?.[0] || {},
  });

  const handleChange = (section, field, value) => {
    setForm((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSave = async () => {
    const payload = {
      profile: [form.profile],
      education: [form.education],
      work_experience: [form.workExperience],
    };
    await updateResumeField(resume.id, payload);
    toast.success("Resume updated");
  };

  const renderStepForm = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <Input
              label="First Name"
              value={form.profile.firstName}
              onChange={(e) =>
                handleChange("profile", "firstName", e.target.value)
              }
            />
            <Input
              label="Last Name"
              value={form.profile.lastName}
              onChange={(e) =>
                handleChange("profile", "lastName", e.target.value)
              }
            />
            <Input
              label="Job Title"
              value={form.profile.jobTitle}
              onChange={(e) =>
                handleChange("profile", "jobTitle", e.target.value)
              }
            />
            <Input
              label="Email"
              value={form.profile.email}
              onChange={(e) => handleChange("profile", "email", e.target.value)}
            />
            <Input
              label="Address"
              value={form.profile.address}
              onChange={(e) =>
                handleChange("profile", "address", e.target.value)
              }
            />
            <Input
              label="Phone"
              value={form.profile.phone}
              onChange={(e) => handleChange("profile", "phone", e.target.value)}
            />
            <Input
              label="Summary"
              value={form.profile.summary}
              onChange={(e) =>
                handleChange("profile", "summary", e.target.value)
              }
            />
            <Input
              label="LinkedIn"
              value={form.profile.linkedin}
              onChange={(e) =>
                handleChange("profile", "linkedin", e.target.value)
              }
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <Input
              label="University"
              value={form.education.university}
              onChange={(e) =>
                handleChange("education", "university", e.target.value)
              }
            />
            <Input
              label="Degree"
              value={form.education.degree}
              onChange={(e) =>
                handleChange("education", "degree", e.target.value)
              }
            />
            <Input
              label="Major"
              value={form.education.major}
              onChange={(e) =>
                handleChange("education", "major", e.target.value)
              }
            />
            <Input
              label="Start Date"
              value={form.education.startDate}
              onChange={(e) =>
                handleChange("education", "startDate", e.target.value)
              }
            />
            <Input
              label="End Date"
              value={form.education.endDate}
              onChange={(e) =>
                handleChange("education", "endDate", e.target.value)
              }
            />
            <Input
              label="Description"
              value={form.education.description}
              onChange={(e) =>
                handleChange("education", "description", e.target.value)
              }
            />
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <Input
              label="Position"
              value={form.workExperience.position}
              onChange={(e) =>
                handleChange("workExperience", "position", e.target.value)
              }
            />
            <Input
              label="Company"
              value={form.workExperience.company}
              onChange={(e) =>
                handleChange("workExperience", "company", e.target.value)
              }
            />
            <Input
              label="Location"
              value={form.workExperience.location}
              onChange={(e) =>
                handleChange("workExperience", "location", e.target.value)
              }
            />
            <Input
              label="Start Date"
              value={form.workExperience.startDate}
              onChange={(e) =>
                handleChange("workExperience", "startDate", e.target.value)
              }
            />
            <Input
              label="End Date"
              value={form.workExperience.endDate}
              onChange={(e) =>
                handleChange("workExperience", "endDate", e.target.value)
              }
            />
            <Input
              label="Job Description"
              value={form.workExperience.jobDesc}
              onChange={(e) =>
                handleChange("workExperience", "jobDesc", e.target.value)
              }
            />
          </div>
        );
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
          <ThemeColor resume={resume} />
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

const Input = ({ label, value, onChange }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">{label}</label>
    <input
      type="text"
      value={value || ""}
      onChange={onChange}
      className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);
