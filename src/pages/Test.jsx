import { ArrowRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function Test() {
  return (
    <section className="container mx-auto">
      <div className="mt-12 py-12 text-center">
        <h1 className="mb-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Craft the <span className="text-primary">ATS Friendly Resume</span>
        </h1>
        <p className="mb-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          with Resume Generator
        </p>

        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Let AI do the heavy lifting — create job-winning resumes in minutes,
          not hours.
        </p>

        <div>
          <a href="/dashboard">
            <Button size="lg" className="w-40 py-6 text-md md:text-lg">
              Get Started
              <ArrowRight size={24} />
            </Button>
          </a>
        </div>
      </div>
      <div className="mt-10 text-center">
        <h2 className="font-bold text-3xl">How it Works?</h2>
        <p className="text-lg md:text-xl text-gray-500">bla bla bla bla</p>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            className="block rounded-xl border p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
            href="#"
          >
            <Share2 className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold text-black">
              Share & Start Accepting Responses
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </div>
          <div
            className="block rounded-xl border p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
            href="#"
          >
            <Share2 className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold text-black">
              Share & Start Accepting Responses
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </div>

          <div
            className="block rounded-xl border p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
            href="#"
          >
            <Share2 className="h-8 w-8" />

            <h2 className="mt-4 text-xl font-bold text-black">
              Share & Start Accepting Responses
            </h2>

            <p className="mt-1 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo
              possimus adipisci distinctio alias voluptatum blanditiis
              laudantium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test;
