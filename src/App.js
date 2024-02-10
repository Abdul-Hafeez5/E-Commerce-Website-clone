import Categories from "./containers/Categories";
import Banners from "./containers/Banners";
import Header from "./containers/Header";
import HeroSlider from "./components/sliders/HeroSlider";
import Products from "./containers/Products";
import BestSells from "./containers/BestSells";
import Deals from "./containers/Deals";

function App() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <Categories />
      <Banners />
      <Products />
      <BestSells />
      <Deals/>
    </div>
  );
}

export default App;
