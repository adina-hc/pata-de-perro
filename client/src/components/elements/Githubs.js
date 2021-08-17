import React from "react";

import styled from "styled-components";

export default function Githubs() {
  return (
    <Container>
      <div className="row">
        <h1>Development Team</h1>
        <div className="column">
          <a href="https://github.com/adina-hc" target="_blank" rel="noreferrer">
            <button>Adina 🐠</button>
          </a>
          <a href="https://github.com/izaack89" target="_blank" rel="noreferrer">
          <button>Germán 🐬</button>
          </a>
          <a href="https://github.com/vicvallejo" target="_blank" rel="noreferrer">
          <button>Victor 🐚</button>
          </a>
          <a href="https://github.com/jorgeatcabo" target="_blank" rel="noreferrer">
          <button>Jorge 🌴</button>
          </a>
          <a href="https://github.com/AdrianoArmen" target="_blank" rel="noreferrer">
          <button>Adriano 🏄</button>
          </a>
          <a href="https://github.com/adina-hc/pata-de-perro" target="_blank" rel="noreferrer">
          <button>Repository 🦀</button>
          </a>
        </div>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-around;
  button {
    flex-shrink: 10;
    margin: 1rem;
    -webkit-appearance: none;
    background: -webkit-gradient(
      to right,
      #a2ccb6 0%,
      #fceeb5 50%,
      #ee786e 100%
    );
    background: linear-gradient(
      to right,
      #a2ccb6 0%,
      #fceeb5 50%,
      #ee786e 100%
    );
    background-size: 500%;
    border: none;
    border-radius: 5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    color: #fff;
    cursor: pointer;
    font: 1.2em Raleway, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 5rem;
    letter-spacing: 0.05em;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 20rem;
    &:hover {
      animation-name: gradient;
      -webkit-animation-name: gradient;
      animation-duration: 3s;
      -webkit-animation-duration: s;
      animation-iteration-count: 1;
      -webkit-animation-iteration-count: 1;
      animation-fill-mode: forwards;
      -webkit-animation-fill-mode: forwards;
    }
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100%;
    }
  }
`;
