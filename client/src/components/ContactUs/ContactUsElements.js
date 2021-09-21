import styled,{ createGlobalStyle, css } from "styled-components";

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
    font-family: "Karla",sans-serif!important;
`;

export const ContactUsContainer = styled.div`    
    display:flex;
    justify-content:center;
    align-items: center;
    padding: 100px;
    font-family: "Karla",sans-serif;
    @media screen and (max-width:768px){
        padding: 40px;
        padding-bottom: 200px;
    }

    @media screen and (max-width:600px){
        padding: 10px;
        padding-bottom: 250px;
    }
`;

export const ContactUsForm = styled.form`
    width: 100%;
    max-width: 1100px;
    padding: 30px;
    background-color: #fff;
    border-radius: 55px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
    @media screen and (max-width:768px){
        padding: 10px;
    }
`;

export const ContactUsInput = styled.input`
    display: block;
    width: 100%;
    ${multipleStyles};
`;

export const ContactUsInputArea = styled.input`
    display: block;
    width: 100%;
    height:100px!important;
    ${multipleStyles};
`

export const ContactUsLabel = styled.label`
    font-family: "Karla",sans-serif!important;
`

export const ContactUsButton = styled.button`
    font-family: "Karla",sans-serif!important;
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

export const ContactUsOneCol = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    grid-gap:16px;
`;

export const ContactUsOneColH3 = styled.h3`
    font-family: "Permanent Marker",cursive;
    font-size: 1.75rem;
    font-weight: 500;
    margin: 5px 0;
    line-height: 1.25;
    color: var(--dark);
`

export const ContactUsTwoCols = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1em;
    grid-gap:16px;

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        padding:0 20px;
    }
`;

export const ContactUsTwoColsWrapper = styled.div``

export const ContactUsResponseWrapper = styled.div`
    font-weight: 850;
    margin: 0 0 40px 0;
`;
export const ContactUsError = styled.p`
    color: red;
`

export const ContactUsSuccess = styled.p`
    color: green;
`

