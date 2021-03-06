import styled from "styled-components";


export const CategoryContainer = styled.div` 
    text-align:center;
`;


export const CategoryList = styled.ul` 
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: .25rem;
`;


export const CategoryItem = styled.li` 
    position: relative;
    display: block;
    padding: .5rem 1rem;
    color: #212529;
    text-decoration: none;
    text-align: -webkit-center;
`;
export const CategoryButton = styled.button`
    display: block;
    width: 80%;
    padding: 12px 0;
    font-family: inherit;
    font-size: 20px;
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

export const CategoryH2 = styled.h2` 
    text-align:center;
`;