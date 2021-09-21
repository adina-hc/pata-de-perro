
import styled from "styled-components";

export const ActivityListContainer = styled.div` 
    padding-bottom:300px
`;

export const CardGridContainer = styled.div` 
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: var(--spacing-l);
    grid-row-gap: var(--spacing-l);
    max-width: var(--width-container);
    width: 100%;

    @media (min-width: 1551px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1550px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1110px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 760px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ActivityListH1 = styled.h1` 
    text-align:center;
    margin:20px
`;

export const ActivityListH2 = styled.h2` 
    text-align:center;
`;