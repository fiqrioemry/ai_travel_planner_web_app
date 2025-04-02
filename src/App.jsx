// page
import Home from "./pages/Home";
import MyResume from "./pages/MyResume";
import NotFound from "./pages/NotFound";
import FactorOne from "./pages/FactorOne";
import ViewResume from "./pages/ViewResume";
import ClerkSignIn from "./pages/ClerkSignIn";
import ClerkSignUp from "./pages/ClerkSignUp";
import CreateResume from "./pages/CreateResume";
import LoadingPage from "./components/LoadingPage";

// configuration
import { Toaster } from "react-hot-toast";
import { useTheme } from "./hooks/useTheme";
import { useUser } from "@clerk/clerk-react";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./hooks/useScrollToTop";
import { Route, Routes } from "react-router-dom";
import { NonProtectedRoute } from "./middleware";

function App() {
  useTheme();
  const { isLoaded } = useUser();

  if (!isLoaded) return <LoadingPage />;

  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route
          path="/sign-up"
          element={
            <NonProtectedRoute>
              <ClerkSignUp />
            </NonProtectedRoute>
          }
        />

        <Route
          path="/sign-in"
          element={
            <NonProtectedRoute>
              <ClerkSignIn />
            </NonProtectedRoute>
          }
        />

        <Route
          path="/sign-in/factor-one"
          element={
            <NonProtectedRoute>
              <FactorOne />
            </NonProtectedRoute>
          }
        />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<MyResume />} />
          <Route path="resume/:resumeId" element={<ViewResume />} />
          <Route path="resume/create-resume" element={<CreateResume />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
