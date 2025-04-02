// src/pages/SignIn.jsx
import { SignIn } from "@clerk/clerk-react";

const ClerkSignIn = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        appearance={{
          elements: {
            card: "shadow-md border rounded-lg",
          },
        }}
      />
    </div>
  );
};

export default ClerkSignIn;
