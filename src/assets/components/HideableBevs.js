import React from "react";
import styled from "styled-components";

const StyledBevs = styled.h3`
   {
  }
`;

const HideableBevs = ({ showBevs }) => {
  if (showBevs) {
    return <StyledBevs>Drink Menu</StyledBevs>;
  } else {
    return null;
  }
};

export default HideableBevs;
