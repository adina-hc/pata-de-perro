import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
        box-sizing: border-box;  
      
    }

    *,*:before, *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
        
    }
    body {
        margin: 0;
        padding: 0;
        font-family: "Karla",sans-serif;
        font-weight: 400;
        line-height: 1.5;
        font-size: 16px;
        color: #217b7e;
        color: var(--dark);
    }
`;
export default GlobalStyle;
