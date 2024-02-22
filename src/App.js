import AboutApp from "./Pages/About/AboutApp";
import DealsApp from "./Pages/Deals/DealsApp";
import Home from "./componets/home";
import Layout from "./layouts/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="deals" element={<DealsApp />} />
        <Route path="about" element={<AboutApp />} />
      </Route>
    </Routes>
  );
}

export default App;
