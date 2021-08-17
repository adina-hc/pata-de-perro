// Imports
import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
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


const StyledError = styled.div`
color: red;
font-weight: 850;
margin: 0 0 40px 0;
`;



function LoginTemplate(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
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
          <h2>Please Login</h2>
          <label htmlFor="email">Email address:</label>
          <StyledUserInput
           placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}

<label htmlFor="pwd">Password:</label>
          <StyledUserInput
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
            onChange={handleChange}
          />
          {error && (
            <StyledError>
               <p className="error-text">The provided credentials are incorrect</p>
            </StyledError>
          )}
          <StyledButton type="submit">Submit Login Information</StyledButton>
          <BackDiv>
            <Link to="/signup">
              <FontAwesomeIcon icon={faArrowAltCircleLeft}  size="lg" style={{ color: "white" }} />  Go to Signup
            </Link>
          </BackDiv>
        </StyledTemplate>
      </StyledTemplateContainer>
    </>
  );
};

export default LoginTemplate;
