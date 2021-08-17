import React from "react";
import LoginTemplate from "../components/LoginForm";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <LoginTemplate />
    </Container>
  );
};

export default Login;


export const Container = styled.div`
  height: 70vh; 
  padding: 20px;
`;
