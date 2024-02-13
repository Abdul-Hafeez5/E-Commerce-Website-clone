import Categories from "./containers/Categories";
import Banners from "./containers/Banners";
import Header from "./containers/Header";
import HeroSlider from "./components/sliders/HeroSlider";
import Products from "./containers/Products";
import BestSells from "./containers/BestSells";
import Deals from "./containers/Deals";
import VegetableGrid from "./containers/VegetableGrid";
import HeroSec from "./components/HeroSec";
import { banner9 } from "./assets/Deals/index";
import QuickViews from "./containers/QuickViews";
import MainFooter from "./components/MainFooter";

function App() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <Categories />
      <Banners />
      <Products />
      <BestSells />
      <Deals />
      <VegetableGrid />
      <HeroSec
        heading={"Stay home & get your daily needs from our shop"}
        subHeading={"Start You'r Daily Shopping with Nest Mart"}
        img={banner9}
      />
      <QuickViews />
      <MainFooter />
    </div>
  );
}

export default App;
