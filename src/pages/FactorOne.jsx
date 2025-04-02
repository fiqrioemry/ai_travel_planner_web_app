// src/pages/FactorOne.jsx
import { SignIn } from "@clerk/clerk-react";

const FactorOne = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <SignIn
        path="/sign-in/factor-one"
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

export default FactorOne;
