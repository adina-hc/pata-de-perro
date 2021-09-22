import styled from "styled-components";
import { Link } from 'react-router-dom';

// Template Style

export const CartContainer = styled.div`
    position: fixed;
    top: 10%;
    right: 0;
    min-width: 20%;
    max-width: 30%;
    max-height: 60%;
    background-color: #fff4f4;
    overflow: auto;
    padding: .5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    border-bottom-left-radius: .5rem;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
    z-index:100;

    @media (max-width: 768px) {        
        position: fixed;
        top: 0;
        max-width: 100%;
        min-width: 100%;
        min-height: 100%;
        padding-left: 0.40rem;
        padding:0;
    }
`;

export const CartH2= styled.h2`
    font-family: "Permanent Marker",cursive;
    font-size: 1.5rem;
    border-bottom: 1px solid var(--dark);
    padding-bottom: .5rem;
    margin: 1rem 0;
    text-align:center;
`
export const CartH3= styled.h3`    
    width:100%;
    text-align:center;
        a{
            font-family: "Permanent Marker",cursive;
            font-size: 1.0rem;
            color: var(--dark);
            cursor:pointer;
            &:hover {
                transform: rotate(8deg);
                color: #67840e;
                text-decoration:underline;
            }
        }
`

export const CartWrapper = styled.div`

`;
export const CartDescription = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
export const CartDescriptionStrong = styled.strong`    
    font-family: "Karla",sans-serif;
    font-weight: bold;
`;

export const CartCloseIcon = styled.div`
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    color: red;

    &:hover {
        text-decoration: underline;
    }
`

export const CartIcon = styled.div`
  
  position: fixed;
  top: 10%;
  right: 1%;
  font-size: 2rem;
  cursor: pointer;
  background-color: #03434c;
  border-radius: 50%;
  padding: .25rem;
  width: 50px;
  height: 50px;
  z-index:100;
  &:hover {
    transform: rotate(18deg);
    background-color: #9fa90c;
  }

  @media (max-width: 568px) {        
    position: fixed;
    top:15%;
}

`;

export const CartError = styled.p`
    color: red;
`

export const CartLink = styled(Link)`
    font-family: "Karla",sans-serif;
    color: var(--tertiary);
    text-decoration: none;
    font-weight: 700;
`




export const CartLoginButton = styled.button`
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

    margin: 0.2rem;
    background-size: 500%;
    border: none;
    border-radius: 5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    color: #fff;
    cursor: pointer;
    font: 1.2em Raleway, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 30px;
    letter-spacing: 0.05em;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 5rem;
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

    @media screen and (max-width: 768px) {  
    width: 10rem;
    height: 40px;

    }
`;


export const CartCheckoutButton = styled.button`
    display: inline;
    width: 50%;
    padding: 12px 0;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    background-color: #a2ccb6;
    border: 0;
    border-radius: 35px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
    }
`;