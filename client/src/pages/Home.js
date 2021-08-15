import React from "react";
import ActivityList from "../components/ActivityList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Header from "../components/Header/Header";
import Wave from "../components/elements/Wave";
import IconPaw from "../components/Header/IconPaw";
import IconTravel from "../components/Header/IconTravel";
import Plane from "../components/elements/Plane";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <IconPaw />
      {/* <IconTravel /> */}
      
      {/* <CategoryMenu />
      <ActivityList /> */}
      <Plane />
      <Cart />
      <Wave />
    </div>
  );
};

export default Home;
