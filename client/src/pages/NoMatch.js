import React from "react";
import Jumbotron from "../components/Jumbotron";
import Sunset from "../components/elements/Sunset";

const NoMatch = () => {
  return (
    <div>
      <Sunset />
      <Jumbotron>
        <h1>PAGE NOT FOUND</h1>
       </Jumbotron>
      
    </div>
  );
};

export default NoMatch;
