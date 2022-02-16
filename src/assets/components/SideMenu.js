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

const StyledLink = styled.a`
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

const SideMenu = () => {
  return (
    <StyledMenu>
      <h3>On the Menu</h3>
      <StyledList>
        <StyledLink href="#entrees">
          <StyledItem>Entrees</StyledItem>
        </StyledLink>
        <StyledLink href="#drinks">
          <StyledItem>Drinks</StyledItem>
        </StyledLink>
        <StyledLink href="#sides">
          <StyledItem>Sides</StyledItem>
        </StyledLink>
      </StyledList>
    </StyledMenu>
  );
};

export default SideMenu;
