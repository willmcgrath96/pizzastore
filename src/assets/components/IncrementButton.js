import React from "react";
import { IoAddCircle, IoAddCircleSharp } from "react-icons/io5";
import styled from "styled-components";

const StyledButton = styled.div`
   {
    cursor: pointer;
  }
`;

const IncrementButton = (props) => {
  return (
    <StyledButton onClick={props.onClick}>
      <IoAddCircleSharp />
    </StyledButton>
  );
};

export default IncrementButton;
