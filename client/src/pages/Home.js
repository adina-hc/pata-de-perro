import React from "react";
import Cart from "../components/Cart";
import Header from "../components/Header/Header";
import IconPaw from "../components/Header/IconPaw";
import Plane from "../components/elements/Plane";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <IconPaw />
      <Plane />
      <Cart />
    </div>
  );
};

export default Home;
