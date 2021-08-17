import React from "react";
import Githubs from "../components/elements/Githubs";
import styled from "styled-components";


const Aboutus = () => {
  return (
    <Container >
        
      <Githubs />
    </Container>
  );
};

export default Aboutus;

export const Container = styled.div`
  height: 70vh; 
  padding: 20px;
  text-align: center;
`;