import { SignUp } from "@clerk/clerk-react";

const ClerkSignUp = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-100 to-teal-200 dark:from-gray-800 dark:to-gray-700">
        <img
          src="/images/signup-illustration.svg"
          alt="Sign Up Illustration"
          className="max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
      <div className="flex items-center justify-center bg-white dark:bg-gray-900 p-6">
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          appearance={{
            elements: {
              formFieldInput: "rounded-md",
            },
          }}
        />
      </div>
    </div>
  );
};

export default ClerkSignUp;
