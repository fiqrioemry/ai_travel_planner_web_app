const ResumePreview = ({ resume }) => {
  return (
    <div
      className="shadow-lg h-full p-14 border-t-[20px]"
      style={{
        borderColor: resume?.themeColor,
      }}
    >
      {/* Personal Detail  */}
      <div>
        <h2
          className="font-bold text-xl text-center"
          style={{
            color: resume?.themeColor,
          }}
        >
          {resume?.firstName} {resume?.lastName}
        </h2>
        <h2 className="text-center text-sm font-medium">{resume?.jobTitle}</h2>
        <h2
          className="text-center font-normal text-xs"
          style={{
            color: resume?.themeColor,
          }}
        >
          {resume?.address}
        </h2>

        <div className="flex justify-between">
          <h2
            className="font-normal text-xs"
            style={{
              color: resume?.themeColor,
            }}
          >
            {resume?.phone}
          </h2>
          <h2
            className="font-normal text-xs"
            style={{
              color: resume?.themeColor,
            }}
          >
            {resume?.email}
          </h2>
        </div>
        <hr
          className="border-[1.5px] my-2"
          style={{
            borderColor: resume?.themeColor,
          }}
        />
      </div>
      {/* Summery  */}
      <SummeryPreview resume={resume} />
      {/* Professional Experience  */}
      {resume?.Experience?.length > 0 && <ExperiencePreview resume={resume} />}
      {/* Educational  */}
      {resume?.education?.length > 0 && <EducationalPreview resume={resume} />}
      {/* Skilss  */}
      {resume?.skills?.length > 0 && <SkillsPreview resume={resume} />}
    </div>
  );
};

export default ResumePreview;
