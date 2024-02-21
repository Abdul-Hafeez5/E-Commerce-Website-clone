import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../containers/Header";
import LastHeroSec from "../containers/LastHeroSec";
import QuickViews from "../containers/QuickViews";
import ScrollToTopArrow from "../componets/ScrollTopArrow";
import Footer from "../containers/Footer";

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
