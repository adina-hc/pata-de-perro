import React from "react";
import styled from "styled-components";

export default function IconPaw() {
  return (
    <Container>
      <div className="logocontainer">
        <a href="https://image.flaticon.com/icons/png/512/3464/3464028.png">
          <img
            id="homeicon"
            src="https://image.flaticon.com/icons/png/512/3464/3464028.png"
            alt="dog paw logo"
          />
        </a>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  .logocontainer {
    height: 300px;
   left: 50%;
   margin-top: -150px;
   margin-left: -125px;
   position: absolute;
   top: 40%;
   width: 400px;
    #homeicon {
      height: 300px;
      width: 300px;
      text-shadow: -1px 1px 0px #183954, -2px 2px 0px #183954, -3px 3px 0px #183954,
    -4px 4px 0px #183954, -9px 9px 10px rgba(0, 0, 0, 0.5),
    -9px 9px 25px rgba(0, 0, 0, 0.5);

      :hover {
        transform: scale(1.2);
        transition: all 0.5s ease-in-out;
      }
    }
  }
`;
