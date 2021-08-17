
import React from "react";
import SignupTemplate from "../components/SingupForm";
import styled from "styled-components";

const Signup = () => {
  return (
    <Container>
      <SignupTemplate />
    </Container>
  );
};

export default Signup;


export const Container = styled.div`
  height: 70vh; 
  padding: 20px;
`;