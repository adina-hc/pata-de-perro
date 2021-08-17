import React from "react";
import ProfileTemplate from "../components/ProfileTemplate";
import styled from "styled-components";

const Profile = () => {
  return (
    <Container >
      <ProfileTemplate />
    </Container>
  );
};

export default Profile;


export const Container = styled.div`
  height: 70vh; 
  padding: 20px;
`;