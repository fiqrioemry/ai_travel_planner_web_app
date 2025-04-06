/* eslint-disable react/prop-types */
const EducationPreview = ({ theme, education }) => {
  return (
    <div className="my-6">
      <h2
        className="text-xs uppercase font-bold mb-2"
        style={{
          color: theme,
        }}
      >
        Education
      </h2>
      <hr
        style={{
          borderColor: theme,
        }}
      />

      {education?.map((edu, index) => (
        <div key={index} className="my-5">
          <h2
            className="text-sm font-bold"
            style={{
              color: theme,
            }}
          >
            {edu.university}
          </h2>
          <h2 className="text-xs flex justify-between">
            {edu?.degree} in {edu?.major}
            <span>
              {edu?.start_date} - {edu?.end_date}
            </span>
          </h2>
          <p className="text-xs my-2">{edu?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationPreview;
