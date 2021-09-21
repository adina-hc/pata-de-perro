import styled from "styled-components";

export const AboutUsContainer = styled.div`
  height: 70vh; 
  padding: 20px;
  text-align: center;
  @media (max-width: 700px) {
    height:120vh;
  }
  @media (max-width: 600px) {
    padding-bottom: 1000px;
  }
`;


export const GitHubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-around;
  button {
   
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

export const GitHubWrapper = styled.div``
export const GitHubTitle = styled.h1`
padding: 20px 0 20px 0
`
export const GitHubList = styled.div``
export const GitHubLink = styled.a``
export const GitHubButton = styled.button`
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
`
