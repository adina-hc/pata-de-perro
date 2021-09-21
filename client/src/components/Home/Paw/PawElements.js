import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'

export const PawContainer = styled.div`
  	width: 100%;
	height: 100%;
	display: flex;
    padding-top: 20%;
  
  .avatar {
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    border: 3px white solid;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
    
  }
  
  @keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}

`;

export const PawWrap = styled.div`  
    left: 50%;
    margin-top: -150px;
    margin-left: -125px;
    position: relative;
    top: 40%;
    width: 400px;
`;

export const PawBorder = styled.div`  
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    border: 3px white solid;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
    animation: float 6s ease-in-out infinite;
    img {
        width: 100%;
        padding:10px;
        height: auto;
      }
`;
export const PawLink = styled(LinkR)`  
    width: 100%;
`;



export const PawIcon = styled.img`     
    animation: pulse-animation 2s infinite;
    border-radius: 47%;
    height: 200px;
    width: 200px;
    text-shadow: -1px 1px 0px #183954, -2px 2px 0px #183954,
    -3px 3px 0px #183954, -4px 4px 0px #183954,
    -9px 9px 10px rgba(0, 0, 0, 0.5), -9px 9px 25px rgba(0, 0, 0, 0.5);

    :hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
    }
`;