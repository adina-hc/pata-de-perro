import styled from 'styled-components'

export const CartDetailContainer = styled.div`  
  display: flex;
  flex-wrap: wrap;  
  width:100%;  
  font-family: "Karla",sans-serif;
`
export const CartDetailTitle = styled.h2`
  font-size: 2em;
  font-weight: 300;
  padding: 10px;
  text-align:center;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
export const CartDetailSectionIMG = styled.div`
  @media (max-width: 569px) {
    width:100%;
  }
`
export const CartDetailSectionText = styled.div`
  width:60%;
  background-color: white;
  border-radius: 0 20px 20px 0 ;
  @media (max-width: 569px) {
    border-radius: 0 0 20px 20px ;
    width: 250px;
  }
`
export const CartDetailDate = styled.div`  
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`
export const CartDetailDescription = styled.p`  
font-family: "Karla",sans-serif;
  font-weight: 300;
  padding: 10px;
  padding-bottom: 10px;
  font-size: 1.3em;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`
export const CartDetailPrice = styled.p`  
font-family: "Karla",sans-serif;
  font-weight: bold;
  padding: 10px;
  padding-bottom: 100px;
  text-align:center;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`
export const CartDetailPhoto = styled.img`
  max-height: 100%;
  height: 100%;
  max-width: 350px;
  object-fit: cover;
  border-radius: 20px 0 0 0 ;
  @media (max-width: 769px) {
    max-width: 250px;
    border-radius: 20px 20px 0 0 ;
  }  
`

export const CartDetailAddItem = styled.button`
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
  position: relative;
  bottom: 15px;
  left: 60px;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
  @media (max-width: 769px) {
    left: 40px;
  }
  @media (max-width: 569px) {
    left: 10px;
    font-size: 10px;
  }
`;

export const CartDetailRemoveItem = styled.button`
  display: inline;
  width: 40%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #cca2a2;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  position: relative;
  bottom: 15px;
  left: 80px;
  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
  &:disabled {
    cursor: default;
    opacity: .8;
  }

  @media (max-width: 569px) {
    left: 20px;
    font-size: 10px;
    width: 50%;
  }
`;
