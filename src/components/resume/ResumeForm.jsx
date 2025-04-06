/* eslint-disable react/prop-types */
import { useState } from "react";
import toast from "react-hot-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ThemeColor from "@/components/resume/ThemeColor";
import { useResumeStore } from "@/store/useResumeStore";

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
        return (
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                type="text"
                field="profile"
                name="first_name"
                label="First name"
                handleChange={handleChange}
                value={form.profile.first_name}
              />
              <Input
                type="text"
                name="last_name"
                field="profile"
                label="Last name"
                handleChange={handleChange}
                value={form.profile.last_name}
              />
            </div>

            <div className="flex gap-2">
              <Input
                type="text"
                label="Phone"
                name="phone"
                field="profile"
                value={form.profile.phone}
                handleChange={handleChange}
              />
              <Input
                type="text"
                label="Email"
                name="email"
                field="profile"
                value={form.profile.email}
                handleChange={handleChange}
              />
            </div>
            <Textarea
              name="address"
              label="Address"
              field="profile"
              handleChange={handleChange}
              value={form.profile.address}
            />

            <Textarea
              name="summary"
              label="Summary"
              field="profile"
              handleChange={handleChange}
              value={form.profile.summary}
            />

            <div className="flex gap-2">
              <Input
                type="text"
                label="job title"
                name="job_title"
                field="profile"
                handleChange={handleChange}
                value={form.profile.job_title}
              />
              <Input
                type="text"
                label="Linkedin"
                name="linkedin"
                field="profile"
                handleChange={handleChange}
                value={form.profile.linkedin}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <Input
              type="text"
              field="education"
              label="University"
              name="university"
              handleChange={handleChange}
              value={form.education.university}
            />

            <Input
              type="text"
              name="degree"
              label="degree"
              field="education"
              handleChange={handleChange}
              value={form.education.degree}
            />
            <Input
              type="text"
              name="major"
              label="Major"
              field="education"
              handleChange={handleChange}
              value={form.education.major}
            />
            <Input
              type="date"
              name="start_date"
              label="start date"
              field="education"
              handleChange={handleChange}
              value={form.education.start_date}
            />
            <Input
              type="date"
              name="end_date"
              label="end date"
              field="education"
              handleChange={handleChange}
              value={form.education.end_date}
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
              value={form.work_experience.company}
              onChange={(e) =>
                handleChange("workExperience", "company", e.target.value)
              }
            />
            <Input
              label="Location"
              value={form.work_experience.location}
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
          <ThemeColor resume={form} />
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
