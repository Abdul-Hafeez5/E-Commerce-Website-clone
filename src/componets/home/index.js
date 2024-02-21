import React from "react";
import HeroSlider from "../../sliders/HeroSlider";
import Categories from "../../containers/Categories";
import Banners from "../../containers/Banners";
import Products from "../../containers/Products";
import BestSells from "../../containers/BestSells";
import Deals from "../../containers/Deals";
import VegetableGrid from "../../containers/VegetableGrid";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <Categories />
      <Banners />
      <Products />
      <BestSells />
      <Deals />
      <VegetableGrid />
    </>
  );
};

export default Home;
