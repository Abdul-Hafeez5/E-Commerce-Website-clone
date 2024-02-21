import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Landing Page/containers/Header";
import LastHeroSec from "../Pages/Landing Page/containers/LastHeroSec";
import QuickViews from "../Pages/Landing Page/containers/QuickViews";
import ScrollToTopArrow from "../Pages/Landing Page/components/ScrollTopArrow";
import Footer from "../Pages/Landing Page/containers/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <LastHeroSec />
      <QuickViews />
      <ScrollToTopArrow />
      <Footer />
    </div>
  );
};

export default Layout;
