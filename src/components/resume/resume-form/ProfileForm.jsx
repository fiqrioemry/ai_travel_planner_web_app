/* eslint-disable react/prop-types */
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ProfileForm = ({ handleChange, form }) => {
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
};

export default ProfileForm;
