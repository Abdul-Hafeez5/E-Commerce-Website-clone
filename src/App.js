// import Categories from "./Pages/Landing Page/containers/Categories";
// import Banners from "./Pages/Landing Page/containers/Banners";
import Header from "./Pages/Landing Page/containers/Header";
// import HeroSlider from "./Pages/Landing Page/components/sliders/HeroSlider";
// import Products from "./Pages/Landing Page/containers/Products";
// import BestSells from "./Pages/Landing Page/containers/BestSells";
// import Deals from "./Pages/Landing Page/containers/Deals";
import VegetableGrid from "./Pages/Landing Page/containers/VegetableGrid";
import QuickViews from "./Pages/Landing Page/containers/QuickViews";
import Footer from "./Pages/Landing Page/containers/Footer";
import LastHeroSec from "./Pages/Landing Page/containers/LastHeroSec";
import ScrollToTopArrow from "./Pages/Landing Page/components/ScrollTopArrow";
import DealsApp from "./Pages/Deals/DealsApp";

function App() {
  return (
    <div>
      <Header />
      <DealsApp />
      {/* <HeroSlider /> */}
      {/* <Categories /> */}
      {/* <Banners /> */}
      {/* <Products /> */}
      {/* <BestSells /> */}
      {/* <Deals /> */}
      <VegetableGrid />
      <LastHeroSec />
      <QuickViews />
      <ScrollToTopArrow />
      <Footer />
    </div>
  );
}

export default App;
