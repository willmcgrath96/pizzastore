import React from "react";
import { Drawer } from "react-bootstrap-drawer";
import styled from "styled-components";

const StyledMenu = styled(Drawer)`
   {
    grid-area: sidemenu;
    display: flex;
    grid-column: span 1;
    position: sticky;
    top: 0;
    height: 400px;
  }
`;

const StyledButton = styled.button`
   {
    text-decoration: none;
    color: #495057;
    a:hover {
      color: #212529;
    }
  }
`;

const StyledItem = styled.li`
   {
    padding: 10px;
    margin-left: -15px;
  }
`;

const StyledList = styled.ul`
   {
    list-style: none;
  }
`;

const SideMenu = ({ setShowBreak, setShowDin, setShowBevs, setShowSides }) => {
  const toggleBreak = () => {
    setShowBreak(true);
    setShowDin(false);
    setShowBevs(false);
    setShowSides(false);
  };
  const toggleDin = () => {
    setShowBreak(false);
    setShowDin(true);
    setShowBevs(false);
    setShowSides(false);
  };
  const toggleBevs = () => {
    setShowBreak(false);
    setShowDin(false);
    setShowBevs(true);
    setShowSides(false);
  };
  const toggleSides = () => {
    setShowBreak(false);
    setShowDin(false);
    setShowBevs(false);
    setShowSides(true);
  };
  return (
    <StyledMenu>
      <h3>On the Menu</h3>
      <StyledList>
        <StyledButton onClick={toggleBreak}>
          <StyledItem>Breakfast</StyledItem>
        </StyledButton>
        <StyledButton onClick={toggleDin} href="#entrees">
          <StyledItem>Dinner</StyledItem>
        </StyledButton>
        <StyledButton onClick={toggleBevs} href="#drinks">
          <StyledItem>Drinks</StyledItem>
        </StyledButton>
        <StyledButton onClick={toggleSides} href="#sides">
          <StyledItem>Sides</StyledItem>
        </StyledButton>
      </StyledList>
    </StyledMenu>
  );
};

export default SideMenu;
