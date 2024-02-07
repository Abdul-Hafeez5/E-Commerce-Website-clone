import "./App.css";
import Categories from "./containers/Categories";
import HeroSec from "./components/HeroSec";
import Navbar from "./containers/Navbar";

// import Banner from "./components/Banner";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSec />
      <div className="mx-10 my-6 ">
        <Categories />
      </div>
      {/* <div className="flex gap-x-6">
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
      </div> */}
    </div>
  );
}

export default App;
