// Imports
import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { faArrowAltCircleLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalStyle, LoginBack, LoginContainer, LogindButton, LoginError, LoginForm, LoginH2, LoginInput, LoginLabel, LoginResponseWrapper, LoginWrapper } from "./LoginElements";


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
    <LoginContainer>
      <GlobalStyle />
      <LoginWrapper>
        <LoginForm onSubmit={handleFormSubmit}>       
          <LoginH2>Please Login</LoginH2>
          <LoginLabel htmlFor="email">Email address:</LoginLabel>
          <LoginInput
           placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />

          <LoginLabel htmlFor="pwd">Password:</LoginLabel>
          <LoginInput
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
          />
          {error && (
            <LoginResponseWrapper>
               <LoginError>The provided credentials are incorrect</LoginError>
            </LoginResponseWrapper>
          )}
          <LogindButton type="submit">Submit Login Information</LogindButton>
          <LoginBack>
            <Link to="/signup">
              <FontAwesomeIcon icon={faArrowAltCircleLeft}  size="lg" style={{ color: "white" }} />  Go to Signup
            </Link>
          </LoginBack>
        </LoginForm>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default LoginTemplate;
