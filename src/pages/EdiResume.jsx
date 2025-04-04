const CreateResume = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      <ResumeForm />

      <ResumePreview />
    </div>
  );
};

export default CreateResume;
