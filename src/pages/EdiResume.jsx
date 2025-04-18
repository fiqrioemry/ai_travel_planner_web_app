import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useParams } from "react-router-dom";
import LoadingPage from "@/components/LoadingPage";
import { useResumeStore } from "@/store/useResumeStore";
import ResumeForm from "@/components/resume/ResumeForm";
import ResumePreview from "@/components/resume/ResumePreview";

const EditResume = () => {
  const { user } = useUser();
  const { resumeId } = useParams();
  const { getResumeDetail, resume } = useResumeStore();

  const [form, setForm] = useState({
    theme: resume?.theme || "",
    profile: resume?.profile || [],
    education: resume?.education || {},
    work_experience: resume?.work_experience || {},
  });

  useEffect(() => {
    getResumeDetail(resumeId, user.id);
  }, [getResumeDetail, resumeId, user.id]);

  if (!resume) return <LoadingPage />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
      <ResumeForm form={form} setForm={setForm} />
      <ResumePreview form={form} />
    </div>
  );
};

export default EditResume;
