import React from "react";
import Cart from "../Cart";
import PawSection from "./Paw";
import TitleSection from "./Title";
import { HomeContainer, HomeWrap } from "./HomeElements";

const HomeSection= () => {
  return (
    <HomeContainer>
      <HomeWrap >
        <TitleSection/>
        <PawSection /> 
        <Cart />
      </HomeWrap>
    </HomeContainer>
  );
};

export default HomeSection;

