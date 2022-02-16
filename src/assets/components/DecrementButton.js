import React from "react";
import { IoRemoveCircleSharp } from "react-icons/io5";
import styled from "styled-components";

const StyledButton = styled.div`
   {
    cursor: pointer;
  }
`;

const DecrementButton = (props) => {
  return (
    <StyledButton onClick={props.onClick}>
      <IoRemoveCircleSharp />
    </StyledButton>
  );
};

export default DecrementButton;
