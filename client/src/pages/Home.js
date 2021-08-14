import React from "react";
import ActivityList from "../components/ActivityList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ActivityList />
      <Cart />
    </div>
  );
};

export default Home;
