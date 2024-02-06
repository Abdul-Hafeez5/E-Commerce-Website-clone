import "./App.css";
import HeroSec from "./components/HeroSec";
import Navbar from "./containers/Navbar";
function App() {
  return (
    <div className="mx-2">
      <Navbar />
      <HeroSec />
    </div>
  );
}

export default App;
