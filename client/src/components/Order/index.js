import styled, { createGlobalStyle } from "styled-components";
import { Link } from 'react-router-dom';

// Template Style
export const GlobalStyle = createGlobalStyle`
`
  ;
export const OrderHistoryContainer = styled.div`
    width: 85%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`;
export const OrderHistoryWrapper = styled.div`
    margin-top: 1rem;
    margin-top: var(--spacing-two);
    margin-bottom: 1rem;
    margin-bottom: var(--spacing-two);
`;
export const OrderHistoryWrapperElements = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const OrderHistoryWrapperCard = styled.div`
    width: 25%;
    text-align: center;
    padding-top: .5rem;
    padding-top: var(--spacing-one);
    padding-bottom: .5rem;
    padding-bottom: var(--spacing-one);
    padding-right: .5rem;
    padding-right: var(--spacing-one);
    padding-left: .5rem;
    padding-left: var(--spacing-one);
}

`
export const OrderHistoryWrapperCardIMG = styled.img`
    max-width: 100%;
`
export const OrderHistoryWrapperCardName = styled.p`
    font-family: "Karla",sans-serif;
    font-size: 1.1rem;
    margin-top: 0;
`
export const OrderHistoryWrapperCardWrapperPrice= styled.div`
`
export const OrderHistoryWrapperCardPrice = styled.p`
    font-family: "Karla",sans-serif;
    font-size: 1.1rem;
    margin-top: 0;
`
export const OrderHistoryError = styled.p`
    color: red;
`
export const OrderHistoryH2 = styled.h2`
    font-size: 2rem;
`
export const OrderHistoryH3 = styled.h3`
    font-size: 1.75rem;
`
export const OrderHistoryLink = styled(Link)`
    font-family: "Karla",sans-serif;
    line-height: 1.5;
    font-size: 16px;
    color: var(--tertiary);
    text-decoration: none;
    font-weight: 700;
`