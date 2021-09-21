// Imports
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SignUpContainer,SignUpBack, SignUpdButton, SignUpForm, SignUpH2, SignUpInput, SignUpLabel, GlobalStyle, SignUpWrapper } from "./SignUpElements";



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
    <SignUpContainer>
      <GlobalStyle />
      <SignUpWrapper>
        <SignUpForm onSubmit={handleFormSubmit}>
          <SignUpH2>Signup Information</SignUpH2>
          <SignUpLabel htmlFor="firstName">First Name:</SignUpLabel>
          <SignUpInput
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
          <SignUpLabel htmlFor="lastName">Last Name:</SignUpLabel>
          <SignUpInput
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
          <SignUpLabel htmlFor="email">Email:</SignUpLabel>
          <SignUpInput
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
          <SignUpLabel htmlFor="pwd">Password:</SignUpLabel>
          <SignUpInput
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />

          <SignUpdButton type="submit">Save User Info</SignUpdButton>
          <SignUpBack>
            <Link to="/login">
              <FontAwesomeIcon icon={faSignInAlt}  size="lg" style={{ color: "white" }} />  Go to Login
            </Link>
          </SignUpBack>
        </SignUpForm>
      </SignUpWrapper>
    </SignUpContainer>
  );
};

export default SignupTemplate;