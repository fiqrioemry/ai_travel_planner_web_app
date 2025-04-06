import ProfilePreview from "./resume-preview/ProfilePreview";
import SummaryPreview from "./resume-preview/SummaryPreview";
import EducationPreview from "./resume-preview/EducationPreview";
import WorkExperiencePreview from "./resume-preview/WorkExperiencePreview";

/* eslint-disable react/prop-types */
const ResumePreview = ({ form }) => {
  console.log(form);
  const theme = form?.theme;
  const profile = form?.profile;
  const education = form?.education;
  const work_experience = form?.work_experience;

  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: form?.theme,
      }}
    >
      <ProfilePreview theme={theme} profile={profile} />
      <SummaryPreview theme={theme} profile={profile} />
      <EducationPreview theme={theme} education={education} />
      <WorkExperiencePreview theme={theme} workExperience={work_experience} />
    </div>
  );
};

export default ResumePreview;
