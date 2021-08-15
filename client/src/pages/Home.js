import React from "react";
import ActivityList from "../components/ActivityList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Header from "../components/Header/Header";
import Wave from "../components/elements/Wave";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <CategoryMenu />
      <ActivityList />
      <Cart />
      <Wave />
    </div>
  );
};

export default Home;
