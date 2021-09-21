// Imports
import { useQuery,useMutation } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_USERINFO } from "../../utils/queries";
import { UPDATE_USER } from '../../utils/mutations';
import { GlobalStyle, ProfileContainer, ProfileError, ProfileForm, ProfileH2, ProfileInput, ProfileLabel, ProfileMessageWrapper, ProfileSubmit, ProfileSubmitWrapperButtons, ProfileSuccess, ProfileWrapper } from "./ProfileElements";



const initialState = {
  firstName: '',
  lastName: '',
}

const ProfilePage = () => {
  // Setting state
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [updateUser, { errorUpdate }] = useMutation(UPDATE_USER);
  const { data } = useQuery(QUERY_USERINFO);
  let userinfo;

  
  if (data) {
    userinfo = data.userinfo; 
    initialState.firstName= userinfo.firstName;  
    initialState.lastName= userinfo.lastName;  

  } 
  
  const [state, setState] = useState(initialState);

  // Call back functions for input changes and submission

  const submission = async (event) => {
    event.preventDefault();

    // Validate form
    for (let key in state) {
      if (state[key] === '') {
        setError(`Please provide the ${key}`)
        return
      }
    }
    event.preventDefault();
    const mutationResponse = await updateUser({
      variables: {
        firstName: state.firstName,
        lastName: state.lastName,
      },
    });
    console.log(mutationResponse);
    setSuccess(true);
    setError('');
    console.log("working! phew!")
  }

  const inputChanges = event => {
    const { name, value } = event.target;
    console.log(name,value);
    setState({
      ...state,
      [name]: value,
    });
  }

  return (
    <ProfileContainer>
      <GlobalStyle />
      <ProfileWrapper>
        <ProfileForm onSubmit={submission}>
          <ProfileH2>User Profile Information</ProfileH2>
          <ProfileLabel htmlFor="firstName">First Name</ProfileLabel>
          <ProfileInput
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={inputChanges}
          />
          <ProfileLabel htmlFor="lastName">Last Name</ProfileLabel>
          <ProfileInput
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={inputChanges}
          />
          {error && (
            <ProfileMessageWrapper>
              <ProfileError>{error}</ProfileError>
            </ProfileMessageWrapper>
          )}{success && (
            <ProfileMessageWrapper>
              <ProfileSuccess>Data Updated!</ProfileSuccess>
            </ProfileMessageWrapper>
          )}
          <ProfileSubmitWrapperButtons>
            <ProfileSubmit type="submit">Update User Info</ProfileSubmit>
          </ProfileSubmitWrapperButtons>          
        </ProfileForm>
      </ProfileWrapper>
    </ProfileContainer>
  );
};

export default ProfilePage;
