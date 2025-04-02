import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, FileText, Brain } from "lucide-react";

function Test() {
  return (
    <section className="container mx-auto">
      <div className="mt-12 py-12 text-center">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Craft the <span className="text-primary">ATS Friendly Resume</span>
        </h1>

        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Let AI do the heavy lifting — create job-winning resumes in minutes,
          not hours.
        </p>

        <div>
          <a href="/dashboard">
            <Button size="lg" className="w-40 py-6 text-md md:text-lg">
              Get Started
              <ArrowRight size={24} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>

      <div className="mt-10 mb-10 text-center">
        <h2 className="font-bold text-3xl mb-2">🚀 How It Works?</h2>
        <p className="text-lg md:text-xl text-gray-500 mb-8">
          Your AI-powered resume journey in just three simple steps.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="block rounded-xl border p-8 shadow-xl transition hover:border-primary/20 hover:shadow-primary/20">
            <FileText className="h-10 w-10 text-primary mx-auto" />
            <h3 className="mt-4 text-xl font-bold text-black dark:text-white">
              Fill Out Your Details ✍️
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Start by entering your personal info, work history, education,
              skills, and more through our guided form.
            </p>
          </div>

          <div className="block rounded-xl border p-8 shadow-xl transition hover:border-primary/20 hover:shadow-primary/20">
            <Brain className="h-10 w-10 text-primary mx-auto" />
            <h3 className="mt-4 text-xl font-bold text-black dark:text-white">
              Let AI Optimize It 🤖
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Our smart AI enhances your content to make it ATS-friendly and
              professionally written for your industry.
            </p>
          </div>

          <div className="block rounded-xl border p-8 shadow-xl transition hover:border-primary/20 hover:shadow-primary/20">
            <Sparkles className="h-10 w-10 text-primary mx-auto" />
            <h3 className="mt-4 text-xl font-bold text-black dark:text-white">
              Download & Share 📄
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Instantly preview your resume, download it in PDF format, and
              share it with potential employers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test;
