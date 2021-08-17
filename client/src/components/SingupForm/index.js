// Imports
import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
display: inline;
width: 50%;
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

&:hover {
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  transform: translate(0, -5px);
}
`;


const BackDiv = styled.div`
display: inline;
margin-left: 5%;
width: 50%;
padding: 12px 10px;
font-family: inherit;
font-size: 14px;
font-weight: 700;
color: #fff!important;
background-color: #cca2a2;
border: 0;
border-radius: 35px;
box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

&:hover {
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
  transform: translate(0, -5px);
}
a{
  color:white
}
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

          <StyledButton type="submit">Save User Info</StyledButton>
          <BackDiv>
            <Link to="/login">
              <FontAwesomeIcon icon={faSignInAlt}  size="lg" style={{ color: "white" }} />  Go to Login
            </Link>
          </BackDiv>
        </StyledTemplate>
      </StyledTemplateContainer>
    </>
  );
};

export default SignupTemplate;