// src/pages/SignUp.jsx
import { SignUp } from "@clerk/clerk-react";

const ClerkSignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        appearance={{
          elements: {
            card: "shadow-md border rounded-lg",
          },
        }}
      />
    </div>
  );
};

export default ClerkSignUp;
