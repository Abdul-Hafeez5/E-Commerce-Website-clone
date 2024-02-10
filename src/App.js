import Categories from "./containers/Categories";
import Banners from "./containers/Banners";
import Header from "./containers/Header";
import HeroSlider from "./components/sliders/HeroSlider";
import Products from "./containers/Products";

function App() {
  return (
    <div>
      <Header />
      <HeroSlider />
      <Categories />
      <Banners />
      <Products />
    </div>
  );
}

export default App;
