import React from "react";
import styled from "styled-components";

export default function Plane() {
  return (
    <Container>
      <div className="airplaneAnimation">
        <div className="plane">
          <div className="main"></div>
          <div className="wingOne"></div>
          <div className="wingTwo"></div>
          <div className="pollution"></div>
        </div>
        <div className="clouds">
          <div className="cloudOne"></div>
          <div className="cloudTwo"></div>
          <div className="cloudThree"></div>
        </div>
      </div>
    </Container>
  );
}
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  .airplaneAnimation {
    
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #caf0f8;
    overflow: hidden;
    top:100px;
  }

  .plane {
    position: relative;
    left: 0;
    top: 75px;
    animation: fly 2s linear infinite;
  }

  @keyframes fly {
    0% {
      transform: translateY(0);
    }

    25% {
      transform: translateY(-10px);
    }

    50% {
      transform: translateY(0);
    }

    75% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0);
    }
  }

  .main {
    position: absolute;
    width: 220px;
    height: 40px;
    background-color: #0077b6;
    top: 100px;
    left: 100px;
    border-radius: 0 100px 30px 100px;
    overflow: hidden;
    box-shadow: inset -10px -10px rgba(0, 0, 0, 0.2);
    z-index: 2;

    &:before,
    &:after {
      content: "";
      position: absolute;
      background-color: #fdc921;
      top: 10px;
    }

    &:before {
      width: 40px;
      height: 10px;
      border-radius: 0 0 0 30px;
      left: 190px;
    }

    &:after {
      width: 5px;
      height: 10px;
      border-radius: 20px;
      left: 160px;
      box-shadow: -10px 0 #fdc921, -20px 0 #fdc921, -30px 0 #fdc921,
        -40px 0 #fdc921, -50px 0 #fdc921, -60px 0 #fdc921, -70px 0 #fdc921,
        -80px 0 #fdc921, -90px 0 #fdc921, -100px 0 #fdc921, -110px 0 #fdc921,
        -120px 0 #fdc921;
    }
  }

  .wingOne {
    position: absolute;
    width: 20px;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    border-top: 80px solid #0077b6;
    height: 0;
    top: 115px;
    left: 160px;
    transform: skew(-45deg) rotateX(30deg);
    z-index: 4;
  }

  .wingTwo {
    position: absolute;
    width: 20px;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    border-bottom: 80px solid #023e8a;
    height: 0;
    top: 55px;
    left: 160px;
    transform: skew(45deg) rotateX(30deg);

    &:after {
      content: "";
      position: absolute;
      width: 20px;
      border-right: 15px solid transparent;
      border-left: 15px solid transparent;
      border-bottom: 35px solid #0077b6;
      height: 0;
      left: -100px;
      top: 29px;
    }
  }

  .wingOne:after {
    content: "";
    position: absolute;
    width: 20px;
    height: 25px;
    background-color: #0077b6;
    top: -105px;
    left: -140px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }

  .wingTwo:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 25px;
    background-color: #023e8a;
    left: -80px;
    top: 35px;
    transform: skew(-55deg);
  }

  .clouds {
    position: absolute;
    top: 50px;
    left: 100px;
  }

  @keyframes cloud {
    from {
      left: -150px;
    }

    to {
      left: 400px;
    }
  }

  .cloudOne,
  .cloudTwo,
  .cloudThree {
    position: absolute;
    width: 50px;
    height: 25px;
    background-color: #fff;
    border-radius: 100px 100px 0 0;
  }

  .cloudOne {
    top: 0;
    left: 0;
    animation: cloud 3s linear infinite reverse;
  }

  .cloudTwo {
    top: 50px;
    left: 100px;
    animation: cloud 2.5s linear infinite reverse;
  }

  .cloudThree {
    top: 250px;
    left: 50px;
    animation: cloud 2.8s linear infinite reverse;
  }

  .cloudOne:before,
  .cloudTwo:before,
  .cloudThree:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 12.5px;
    background-color: #fff;
    border-radius: 100px 100px 0 0;
    left: -20px;
    top: 12.5px;
    box-shadow: 65px 0 #fff;
  }

  .pollution {
    position: absolute;
    background-color: #fff;
    top: 130px;
    left: 65px;
    width: 30px;
    height: 10px;
    border-radius: 20px;
    opacity: 0;
    animation: up 1s linear infinite;

    &:before {
      content: "";
      position: absolute;
      background-color: #fff;
      border-radius: 20px;
      opacity: 0;
      width: 30px;
      height: 10px;
    }

    &:after {
      content: "";
      position: absolute;
      background-color: #fff;
      border-radius: 20px;
      opacity: 0;
      width: 30px;
      height: 10px;
      top: 10px;
      left: -25px;
      animation: up 2s linear infinite;
    }

    &:before {
      top: -10px;
      left: -35px;
      animation: up 3s linear infinite;
    }
  }
`;
