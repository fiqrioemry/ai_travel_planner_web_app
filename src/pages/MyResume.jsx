import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import LoadingPage from "@/components/LoadingPage";
import { useResumeStore } from "@/store/useResumeStore";
import CreateResume from "@/components/resume/CreateResume";

const MyResume = () => {
  const { user } = useUser();
  const { getAllResumes, resumes } = useResumeStore();

  useEffect(() => {
    getAllResumes(user.id);
  }, [getAllResumes, user.id]);

  if (!resumes) return <LoadingPage />;

  const isEmpty = resumes.length === 0;

  return (
    <section className="container mx-auto py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">My Resumes</h1>
      </div>

      {isEmpty ? (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold mb-2">
            You have no resumes yet
          </h2>
          <p className="text-gray-500 mb-6">
            Start creating your first resume now.
          </p>
          <CreateResume />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-900"
            >
              <h3 className="text-lg font-medium">
                {resume.title || "Untitled Resume"}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {resume.updatedAt
                  ? new Date(resume.updatedAt).toLocaleDateString()
                  : "No date"}
              </p>
              <div className="flex justify-end">
                <Button size="sm">View</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyResume;
