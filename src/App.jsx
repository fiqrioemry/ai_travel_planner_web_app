// page
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import LoadingPage from "./components/LoadingPage";

// configuration
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./hooks/useTheme";
import { ProtectedRoute } from "./middleware";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./hooks/useScrollToTop";
import { Route, Routes } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import Test from "./pages/Test";

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
          <Route path="test" element={<Test />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
