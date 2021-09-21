import styled, { createGlobalStyle, css } from "styled-components";

// Template Style
export const GlobalStyle = createGlobalStyle`
`
  ;

export const multipleStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 10px 0;
    padding: 20px;
    box-sizing: border-box;
`;

export const SignUpContainer = styled.div`
    height: 70vh; 
    padding: 20px;
    @media (max-width: 700px) {
        height:150vh;
        padding:0;
    }
`;

export const SignUpWrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    padding: 100px;
    @media screen and (max-width:768px){
        padding: 10px;
    }
`;

export const SignUpForm = styled.form`
    width: 100%;
    max-width: 500px;
    padding: 30px;
    background-color: #fff;
    border-radius: 55px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
`;

export const SignUpH2 = styled.h2`

`;
export const SignUpLabel = styled.label`
    font-family: "Karla",sans-serif!important;
`;

export const SignUpInput = styled.input`
    font-family: "Karla",sans-serif!important;
    display: block;
    width: 100%;
    ${multipleStyles};
`;

export const SignUpdButton = styled.button`
    font-family: "Karla",sans-serif!important;
    display: inline;
    width: 40%;
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
    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 10%;
    }
    
`;


export const SignUpBack = styled.div`

    font-family: "Karla",sans-serif!important;
    display: inline-block;
    text-align: center;
    margin-left: 15%;
    width: 40%;
    padding: 12px 10px;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    color: #fff!important;
    background-color: #cca2a2;
    border: 0;
    border-radius: 35px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
    }
    a{
    font-family: "Karla",sans-serif!important;
    color:white;
    }
    @media (max-width: 768px) {        
        display: block;
        width: 100%;
        margin-left: 0;
    }
`;