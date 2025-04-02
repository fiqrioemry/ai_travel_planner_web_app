import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <img
        src="/error-not-found.png"
        alt="Page not found"
        className="w-72 h-72 object-contain mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">Oops! Page Not Found</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        It looks like the page you&lsquo;re trying to access doesn&lsquo;t exist
        or has been moved. No worries! You can head back to the homepage and
        continue exploring.
      </p>
      <Button
        onClick={() => navigate("/")}
        className="rounded-full w-44 px-6 py-2 text-sm"
      >
        🔙 Back to Home
      </Button>
    </section>
  );
};

export default NotFound;
