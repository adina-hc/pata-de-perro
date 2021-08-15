import React from "react";
import styled from "styled-components";
import IconPaw from "../Header/IconPaw";
import IconTravel from "../Header/IconTravel";
import Title from "../Header/Title";

export default function Header() {
  return (
    <Container>
      <Title />
      <IconPaw />
      <IconTravel />
    </Container>
  );
}

export const Container = styled.div`
 
  height: 10rem;
  .liquid {
    font-family: "Permanent Marker", cursive;
    position: relative;
    width: 100%;

    display: flex;
    justify-content: center;
    align-content: flex-start;
  }
`;
