// Imports
import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

// Template Style
const GlobalStyle = createGlobalStyle`
`
  ;

const multipleStyles = css`
background-color: #eee;
height: 40px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 10px 0;
padding: 20px;
box-sizing: border-box;
`;

const StyledTemplateContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items: center;
  height: 85vh;
  padding: 0 20px;
  `;

const StyledTemplate = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 30px;
  background-color: #fff;
  border-radius: 55px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
`;

const StyledUserInput = styled.input`
display: block;
width: 100%;
${multipleStyles};
`;

const StyledButton = styled.button`
display: block;
border: 0;
border-radius: 5px;
height: 40px;
padding: 0 20px;
cursor: pointer;
box-sizing: border-box;
`;




function SignupTemplate(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  return (
    <>
      <GlobalStyle />
      <StyledTemplateContainer>
        <StyledTemplate onSubmit={handleFormSubmit}>
          <Link to="/login">← Go to Login</Link>
          <h2>Signup Information</h2>
          <label htmlFor="firstName">First Name:</label>
          <StyledUserInput
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
          <label htmlFor="lastName">Last Name:</label>
          <StyledUserInput
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <StyledUserInput
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <label htmlFor="pwd">Password:</label>
          <StyledUserInput
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />

          <StyledButton type="submit">Update User Info</StyledButton>
        </StyledTemplate>
      </StyledTemplateContainer>
    </>
  );
};

export default SignupTemplate;