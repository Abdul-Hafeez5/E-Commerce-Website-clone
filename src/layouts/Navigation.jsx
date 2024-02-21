import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import DealsApp from "../Pages/Deals/DealsApp";
import Home from "../componets/home";

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="deals" element={<DealsApp />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Navigation;
