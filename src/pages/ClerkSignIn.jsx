import { SignIn } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const ClerkSignIn = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
      <div className="space-y-4">
        <Link to="/" className="text-sm text-blue-600 hover:underline">
          ← Back to home
        </Link>

        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </div>
  );
};

export default ClerkSignIn;
