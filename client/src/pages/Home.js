import React from "react";
import Cart from "../components/Cart";
import Header from "../components/Header/Header";
import styled from "styled-components";

const Home = () => {
  return (
    <HeaderContainer >
      <Header /> 
      <Cart />
    </HeaderContainer>
  );
};

export default Home;


export const HeaderContainer = styled.div`
  height: 70vh; 
`;
