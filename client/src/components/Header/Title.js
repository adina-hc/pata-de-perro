import React from "react";
import styled from "styled-components";

export default function Title() {
  return (
    <Container class="liquid">
      <h2>Pata de Perro</h2>
      <h2>Pata de Perro</h2>
    </Container>
  );
}

export const Container = styled.div`
  font-family: "Permanent Marker", cursive;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: flex-start;
  
  h2 {
    font-family: "Permanent Marker", cursive;
    position: absolute;
    font-size: 10vw;
    &:nth-child(1) {
      color: #e7b45b;
      text-shadow: -1px 1px 0px #183954, -2px 2px 0px #183954,
        -3px 3px 0px #183954, -4px 4px 0px #183954,
        -9px 9px 10px rgba(0, 0, 0, 0.5), -9px 9px 25px rgba(0, 0, 0, 0.5);
    }
    :nth-child(2) {
      color: #53b9bd;
      animation: animate 3s ease-in-out infinite;
    }
  }
  @keyframes animate {
    0%,
    100% {
      clip-path: polygon(
        0 50%,
        13% 41%,
        30% 41%,
        43% 49%,
        51% 63%,
        65% 68%,
        81% 66%,
        94% 57%,
        100% 44%,
        100% 100%,
        0 100%
      );
    }
    50% {
      clip-path: polygon(
        0 49%,
        11% 63%,
        24% 70%,
        40% 70%,
        51% 66%,
        60% 54%,
        74% 44%,
        87% 41%,
        100% 46%,
        100% 100%,
        0 100%
      );
    }
  }
`;
