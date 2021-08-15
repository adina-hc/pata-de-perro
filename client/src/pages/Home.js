import React from "react";
import ActivityList from "../components/ActivityList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Header from "../components/Header/Header";
import Waves from "../components/elements/Waves";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <CategoryMenu />
      <ActivityList />
      <Cart />
      <Waves />
    </div>
  );
};

export default Home;
