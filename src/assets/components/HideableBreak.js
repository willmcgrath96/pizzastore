import React from "react";
import styled from "styled-components";

const StyledBreakHeader = styled.h3`
   {
  }
`;

const HideableBreak = ({ showBreak }) => {
  if (showBreak) {
    return <StyledBreakHeader>Breakfast Menu</StyledBreakHeader>;
  } else {
    return null;
  }
};

export default HideableBreak;
