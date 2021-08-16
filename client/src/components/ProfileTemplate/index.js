// Imports
import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";

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

const StyledFieldset = styled.fieldset`
border: 1px solid #ddd;
border-radius: 5px;
padding: 10px;
margin: 20px 0;

legend {
  padding: 0 10px;
}

label {
  padding-right: 20px;
}

input {
  margin-right: 10px;
}
`;

const StyledError = styled.div`
color: red;
font-weight: 850;
margin: 0 0 40px 0;
`;

const initialState = {
    name: '',
    lastname: '',
    gender: '',
    email: '',
    password: '',
}

const ProfileTemplate = () => {
  // Setting state
  const [state, setState] = useState(initialState);
  const [error, setError] = useState('');

  // Call back functions for input changes and submission

  const submission = event => {
    event.preventDefault();

    // Validate form
    for (let key in state) {
      if (state[key] === '') {
        setError(`Please provide the ${key}`)
        return
      }
    }
    setError('');
    console.log("working! phew!")
  }

  const inputChanges = event => {
    const nameInput = event.currentTarget.name;
    const value = event.currentTarget.value;

    setState(priorState => ({...priorState, [nameInput]: value}))

  }

  return (
    <>
      <GlobalStyle />
      <StyledTemplateContainer>
        <StyledTemplate onSubmit={submission}>
          <h2>User Profile Information</h2>
          <label htmlFor="name">Name</label>
          <StyledUserInput
            type="text"
            name="name"
            value={state.name}
            onChange={inputChanges}
          />
          <label htmlFor="lastname">Last Name</label>
          <StyledUserInput
            type="text"
            name="lastname"
            value={state.lastname}
            onChange={inputChanges}
          />
          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                value="female"
                name="gender"
                checked={state.gender === "female"}
                onChange={inputChanges}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="male"
                name="gender"
                checked={state.gender === "male"}
                onChange={inputChanges}
              />
              Male
            </label>
          </StyledFieldset>
          <label htmlFor="email" name="email">
            eMail
          </label>
          <StyledUserInput
            type="text"
            name="email"
            pattern="/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/"
            value={state.email}
            onChange={inputChanges}
          />
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Update User Info</StyledButton>
        </StyledTemplate>
      </StyledTemplateContainer>
    </>
  );
};

export default ProfileTemplate;
