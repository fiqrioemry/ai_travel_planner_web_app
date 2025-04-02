import Footer from "./Footer";
import Header from "./Header";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
