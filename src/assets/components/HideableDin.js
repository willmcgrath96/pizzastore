import React from "react";
import styled from "styled-components";

const StyledEntrees = styled.h3`
   {
  }
`;

const HideableDin = ({ showDin }) => {
  if (showDin) {
    return <StyledEntrees>Dinner Menu</StyledEntrees>;
  } else {
    return null;
  }
};

export default HideableDin;
