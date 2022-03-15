import React from "react";
import styled from "styled-components";

const StyledSidesHeader = styled.h3`
   {
  }
`;

const HideableSides = ({ showSides }) => {
  if (showSides) {
    return <StyledSidesHeader id="sides">Sides</StyledSidesHeader>;
  } else {
    return null;
  }
};

export default HideableSides;
