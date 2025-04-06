/* eslint-disable react/prop-types */
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const WorkExperienceForm = ({ handleChange, form }) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          type="text"
          field="work_experience"
          name="position"
          label="position"
          handleChange={handleChange}
          value={form.work_experience.position}
        />
        <Input
          type="text"
          name="location"
          label="location"
          field="work_experience"
          handleChange={handleChange}
          value={form.work_experience.location}
        />
      </div>
      <Input
        type="text"
        field="work_experience"
        name="company"
        label="company"
        handleChange={handleChange}
        value={form.work_experience.company}
      />

      <div className="flex gap-2">
        <Input
          type="date"
          name="start_date"
          label="start date"
          field="work_experience"
          handleChange={handleChange}
          value={form.work_experience.start_date}
        />
        <Input
          type="date"
          name="end_date"
          label="end date"
          field="work_experience"
          handleChange={handleChange}
          value={form.work_experience.end_date}
        />
      </div>

      <Textarea
        name="description"
        label="description"
        field="work_experience"
        handleChange={handleChange}
        value={form.work_experience.description}
      />
    </div>
  );
};

export default WorkExperienceForm;
