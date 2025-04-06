/* eslint-disable react/prop-types */
const ProfilePreview = ({ form, profile }) => {
  const { first_name, last_name, job_title, email, phone, address } = profile;
  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{
          color: form,
        }}
      >
        {first_name} {last_name}
      </h2>
      <h2 className="text-center text-sm font-medium">{job_title}</h2>
      <h2
        className="text-center font-normal text-xs"
        style={{
          color: form,
        }}
      >
        {address}
      </h2>

      <div className="flex justify-between">
        <h2
          className="font-normal text-xs"
          style={{
            color: form,
          }}
        >
          {phone}
        </h2>
        <h2
          className="font-normal text-xs"
          style={{
            color: form,
          }}
        >
          {email}
        </h2>
      </div>
      <hr
        className="border-[1.5px] my-2"
        style={{
          borderColor: form,
        }}
      />
    </div>
  );
};

export default ProfilePreview;
