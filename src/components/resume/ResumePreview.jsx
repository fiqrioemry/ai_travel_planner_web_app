/* eslint-disable react/prop-types */
const ResumePreview = ({ resume }) => {
  const profile = resume?.profile?.[0] || {};
  const education = resume?.education || [];
  const experience = resume?.work_experience || [];

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md text-gray-900 font-sans text-sm leading-relaxed space-y-6">
      {/* Header */}
      <div className="text-center border-b pb-4">
        <h1 className="text-2xl font-bold uppercase tracking-wide">
          {profile.firstName} {profile.lastName}
        </h1>
        <p className="text-sm text-gray-600">{profile.jobTitle}</p>
        <div className="mt-2 flex flex-col sm:flex-row sm:justify-center gap-1 text-xs text-gray-500">
          <span>{profile.email}</span>
          <span>{profile.phone}</span>
          <span>{profile.address}</span>
          <span>{profile.linkedin}</span>
        </div>
      </div>

      {/* Summary */}
      {profile.summary && (
        <section>
          <h2 className="text-base font-semibold border-b mb-2">Summary</h2>
          <p>{profile.summary}</p>
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section>
          <h2 className="text-base font-semibold border-b mb-2">Education</h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx}>
                <div className="font-medium">
                  {edu.degree} in {edu.major}, {edu.university}
                </div>
                <div className="text-xs text-gray-500">
                  {edu.startDate} – {edu.endDate}
                </div>
                {edu.description && (
                  <p className="text-sm">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Work Experience */}
      {experience.length > 0 && (
        <section>
          <h2 className="text-base font-semibold border-b mb-2">
            Work Experience
          </h2>
          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <div key={idx}>
                <div className="font-medium">
                  {exp.position} @ {exp.company} ({exp.location})
                </div>
                <div className="text-xs text-gray-500">
                  {exp.startDate} – {exp.endDate}
                </div>
                {exp.jobDesc && <p className="text-sm">{exp.jobDesc}</p>}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ResumePreview;
