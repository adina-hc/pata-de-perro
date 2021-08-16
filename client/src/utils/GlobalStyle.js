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
      
    }
`;
export default GlobalStyle;
