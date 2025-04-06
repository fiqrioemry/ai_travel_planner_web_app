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
    <section className="container mx-auto py-12 px-4">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">🎓 My Resumes</h1>
        {!isEmpty && <CreateResume />}
      </div>

      {isEmpty ? (
        <div className="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <h2 className="text-2xl font-semibold mb-2">No resumes found</h2>
          <p className="text-gray-500 mb-6">
            You haven’t created any resumes yet. Let’s get started!
          </p>
          <CreateResume />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {resumes.map((resume) => (
            <div
              key={resume.id}
              className="border p-5 rounded-2xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                {resume.title || "Untitled Resume"}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Last updated:{" "}
                {resume.updatedAt
                  ? new Date(resume.updatedAt).toLocaleDateString()
                  : "Unknown"}
              </p>
              <div className="flex justify-end">
                <Button size="sm" variant="secondary">
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyResume;
