// page
import Home from "./pages/Home";
import MyResume from "./pages/MyResume";
import NotFound from "./pages/NotFound";
import ViewResume from "./pages/ViewResume";
import CreateResume from "./pages/CreateResume";
import LoadingPage from "./components/LoadingPage";

// configuration
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./hooks/useTheme";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./hooks/useScrollToTop";
import { Route, Routes } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";

function App() {
  useTheme();
  const { loading, authCheck } = useAuthStore();

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  if (loading) return <LoadingPage />;

  return (
    <>
      <Toaster />
      <ScrollToTop />
      <Routes>
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
