/* eslint-disable react/prop-types */
import { Input } from "@/components/ui/input";

const EducationForm = ({ handleChange, form }) => {
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
};

export default EducationForm;
