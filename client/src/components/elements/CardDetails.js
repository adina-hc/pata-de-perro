import React from 'react'
import styled from 'styled-components'
const StyledContainer = styled.div`  
  background-color: white;
    border-radius: 20px;
`
const Title = styled.h2`
  font-weight: 300;
  padding: 10px;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Date = styled.div`
  
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`
const Description = styled.p`
  font-weight: 300;
  padding: 10px;
  padding-bottom: 10px;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`
const Price = styled.p`
  font-weight: bold;
  padding: 10px;
  padding-bottom: 100px;
  text-align:center;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`
const StyledPhoto = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0 ;

  
`
const CardDetails = ({
  title,
  date,
  description,
  img,
  price,
}) => (
  <StyledContainer>
    <StyledPhoto src={img}/>
    <Title>{title}</Title>
    <Date>{date}</Date>
    <Description>{description}</Description>
    <Price>{price}</Price>
  </StyledContainer>
)
export default CardDetails