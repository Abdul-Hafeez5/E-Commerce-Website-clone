import Categories from "./containers/Categories";
import Banners from "./containers/Banners";
import Header from "./containers/Header";
import HeroSlider from "./components/sliders/HeroSlider";
import Products from "./containers/Products";
import BestSells from "./containers/BestSells";
import Deals from "./containers/Deals";
import VegetableGrid from "./containers/VegetableGrid";
import QuickViews from "./containers/QuickViews";
import Footer from "./containers/Footer";
import LastHeroSec from "./containers/LastHeroSec";
import ScrollToTopArrow from "./components/ScrollTopArrow";

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
      <LastHeroSec />
      <QuickViews />
      <ScrollToTopArrow />
      <Footer />
    </div>
  );
}

export default App;
