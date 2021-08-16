import React from "react";
import styled from "styled-components";

export default function Sunset() {
  return (
    <Container>
      <div className="loader">
        <div className="plane">
          <img
            src="https://zupimages.net/up/19/34/4820.gif"
            className="plane-img"
          />
        </div>
        <div className="earth-wrapper">
          <div className="earth" />
        </div>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  .loader {
    text-align: center;
    width: 100%;
    position: relative;
    overflow: hidden;
    max-width: 35rem;
    height: 30rem;
    margin: 0 auto;
    .plane {
      position: absolute;
      margin: 0 auto;
      width: 100%;
      .plane-img {
        -webkit-animation: spin 2.5s linear infinite;
        -moz-animation: spin 2.5s linear infinite;
        animation: spin 2.5s linear infinite;
      }
    }
    .earth-wrapper {
      position: absolute;
      margin: 0 auto;
      width: 100%;
      padding-top: 2.7rem;
      .earth {
        width: 160px;
        height: 160px;
        background: url("https://zupimages.net/up/19/34/6vlb.gif");
        border-radius: 100%;
        background-size: 340px;
        animation: earthAnim 12s infinite linear;
        margin: 0 auto;
        border: 1px solid #cdd1d3;
      }
    }
  }
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes earthAnim {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: -340px;
    }
  }

  @media screen and (max-width: 420px) {
    .departure_city {
      left: 0;
      right: 0;
      top: 30%;
      position: absolute;
      margin: 0 auto;
    }
  }
`;
