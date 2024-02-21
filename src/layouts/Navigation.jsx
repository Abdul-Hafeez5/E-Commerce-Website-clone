import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HeroSlider from "../Pages/Landing Page/components/sliders/HeroSlider";
import Categories from "../Pages/Landing Page/containers/Categories";
import Banners from "../Pages/Landing Page/containers/Banners";
import Products from "../Pages/Landing Page/containers/Products";
import BestSells from "../Pages/Landing Page/containers/BestSells";
import Deals from "../Pages/Landing Page/containers/Deals";
import VegetableGrid from "../Pages/Landing Page/containers/VegetableGrid";
import DealsApp from "../Pages/Deals/DealsApp";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <HeroSlider />
                <Categories />
                <Banners />
                <Products />
                <BestSells />
                <Deals />
                <VegetableGrid />
              </>
            }
          />
          <Route path="deals" element={<DealsApp />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Navigation;
