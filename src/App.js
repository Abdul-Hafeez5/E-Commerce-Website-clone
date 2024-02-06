import "./App.css";
import Categories from "./components/Categories";
import HeroSec from "./components/HeroSec";
import Navbar from "./containers/Navbar";
import {
  cat1,
  cat2,
  cat3,
  cat4,
  cat5,
  cat9,
  cat11,
  cat12,
  cat13,
  banner1,
  banner2,
  banner3,
} from "./assets";
import Banner from "./components/Banner";
function App() {
  return (
    <div className="mx-3 sm:mx-28 md:mx-3 lg:mx-32">
      <Navbar />
      <HeroSec />
      <div className="flex my-6 ">
        <Categories img={cat1} Name={"Peach"} items={14} />
        <Categories img={cat2} Name={"Cake and Milk"} items={12} />
        <Categories img={cat3} Name={"organic kiwi"} items={41} />
        <Categories img={cat4} Name={"Red Apple"} items={6} />
        <Categories img={cat5} Name={"Snack"} items={21} />
        <Categories img={cat9} Name={"Vegetables"} items={15} />
        <Categories img={cat11} Name={"Strawberry"} items={17} />
        <Categories img={cat12} Name={"Black Plum"} items={19} />
        <Categories img={cat13} Name={"Custard apple"} items={18} />
      </div>
      <div className="flex gap-x-6">
        <Banner
          title={"Everyday Fresh and clean with our Products"}
          img={banner1}
          bgcolor={"#f3e8e8"}
        />
        <Banner
          title={"Make your Breakfast Healthy and Easy"}
          img={banner2}
          bgcolor="#f0e8d5"
        />
        <Banner
          title={"The best Organic Products Online"}
          img={banner3}
          bgcolor={"#e7eaf3"}
        />
      </div>
    </div>
  );
}

export default App;
