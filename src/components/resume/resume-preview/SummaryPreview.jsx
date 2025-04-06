/* eslint-disable react/prop-types */
const SummaryPreview = ({ theme, profile }) => {
  return (
    <div>
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
      <p className="text-[10px]">{profile?.summary}</p>
    </div>
  );
};

export default SummaryPreview;
