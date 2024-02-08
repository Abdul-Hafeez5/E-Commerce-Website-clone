import Categories from "./containers/Categories";
import HeroSec from "./components/HeroSec";
import Banners from "./containers/Banners";
import Header from "./containers/Header";

function App() {
  return (
    <div>
      <Header />
      <HeroSec />
      <Categories />
      {/* <Banners /> */}
    </div>
  );
}

export default App;
