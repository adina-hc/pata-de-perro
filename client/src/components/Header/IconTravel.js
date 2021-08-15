import React from "react";
import styled from "styled-components";

export default function IconTravel() {
  return (
    <Container>
      <div className="page">
        <div className="content">
          <div className="circle">
            <div className="circle_title">
              <h2>App</h2>
              <h3>credits</h3>
            </div>
            <div className="circle_inner">
              <div className="circle_inner__layer">
                <img
                  alt="img1"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc7.png"
                />
              </div>
              <div className="circle_inner__layer">
                <img
                  alt="img2"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc8.png"
                />
              </div>
              <div className="circle_inner__layer">
                <img
                  alt="img3"
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/pc9.png"
                />
              </div>
            </div>
            <div className="content_shadow"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  .page {
    margin-top: 10%;
    margin: 0 auto;
    width: 920px;
    display: flex;

    .content {
      display: flex;
      width: 33.33%;
      display: inline-block;
      margin: 0 auto;
      position: relative;
      height: 100vh;
      max-width: 300px;
    }
    .circle_inner__layer {
      width: 600px;
      height: 200px;
      transition: all 0.4s;
      position: absolute;
      top: 0;
      left: -200px;
      img {
        width: 100%;

        bottom: 0;
      }
    }
    .circle {
      position: fixed;
      left: 0;
      right: 0;
      margin: auto;
      top: 60%;
      width: 200px;
      transform: translateY(-50%);
      transition: all 0.5s;
      cursor: pointer;
      &:hover {
        .circle_shine {
          top: 330px;
          left: -200px;
        }
        h2 {
          color: #e7b45b;
          font-family: "Permanent Marker", cursive;
          opacity: 1;
          top: -36px;
          transition: all 0.2s;
          font-size: 3rem;
        }
        h3 {
          font-family: "Permanent Marker", cursive;
          opacity: 1;
          top: -36px;
          transition: all 0.2s 0.04s;
        }
        .content_shadow {
          transform: scale(1.1);
          top: -22px;
        }
      }
      .circle_inner__layer {
        &:nth-of-type(1) {
          top: 0px;
          left: 0px;
        }
        &:nth-of-type(2) {
          top: 0px;
          left: -210px;
        }
        &:nth-of-type(3) {
          top: 0px;
          left: -440px;
        }
      }
    }
    .circle_shine {
      background: white;
      width: 600px;
      transition: 0.3s;
      height: 200px;
      opacity: 0.2;
      top: -10px;
      left: -90px;
      transform: rotate(45deg);
      position: absolute;
      z-index: 2;
    }
    .circle_title {
      text-align: center;
      h2 {
        color: #e7b45b;
        font-family: "Permanent Marker", cursive;
        display: flex;
        opacity: 0;
        color: #444d4e;
        margin: 0;
        transition: all 0.2s 0.04s;
        position: relative;
        top: -10px;
        justify-content: center;
        font-size: 10rem;
        text-shadow: -1px 1px 0px #183954, -2px 2px 0px #183954,
          -3px 3px 0px #183954, -4px 4px 0px #183954,
          -9px 9px 10px rgba(0, 0, 0, 0.5), -9px 9px 25px rgba(0, 0, 0, 0.5);
      }
      h3 {
        font-family: "Permanent Marker", cursive;
        display: flex;
        opacity: 0;
        color: #444d4e;
        margin: 0;
        transition: all 0.2s 0.04s;
        position: relative;
        top: -10px;
        justify-content: center;
        transition: all 0.2s;
        color: #53b9bd;
        font-size: 4rem;
        text-shadow: -1px 1px 0px #183954, -2px 2px 0px #183954,
          -3px 3px 0px #183954, -4px 4px 0px #183954,
          -9px 9px 10px rgba(0, 0, 0, 0.5), -9px 9px 25px rgba(0, 0, 0, 0.5);
      }
    }
    .circle_inner {
      border-radius: 200px;
      background: #b0d5d6;
      overflow: hidden;
      margin: auto;
      width: 200px;
      z-index: 1;
      transition: all 0.3s;
      height: 200px;
      position: relative;
      &:hover {
        transform: scale(1.1);
        .circle_inner__layer {
          &:nth-of-type(1) {
            left: -80px;
            transition: all 4s linear;
          }
          &:nth-of-type(2) {
            left: -400px;
            transition: all 4s linear;
          }
          &:nth-of-type(3) {
            left: -140px;
            transition: all 4s linear;
          }
        }
      }
    }
    .content_shadow {
      width: 200px;
      box-shadow: 0px 31px 19px -2px #8c93a0;
      height: 20px;
      border-radius: 70%;
      position: relative;
      top: -44px;
      transition: all 0.3s;
      z-index: 0;
    }
  }
`;
