import react from "react";
import { useState } from "react";
import CartItem from "./CartItem";
import styled from "styled-components";

const SideBar = styled.div`
  background: #f1f3f5;
  grid-area: sidebar;
  grid-column: span 1;
  border: 1px solid #adb5bd;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
   {
    border: 2px solid #dee2e6;
  }
`;

const StyledButton = styled.button`
   {
    border: none;
    text-decoration: underline;
    color: #343a40;
  }
`;

const StyledPrice = styled.div`
   {
    margin-top: auto;
    padding: 10px 0px 10px 0px;
  }
`;

const CartSidebar = ({
  list,
  removeItem,
  price,
  noToppingList,
  setNoToppingList,
}) => {
  return (
    <SideBar>
      <h1>Your Order</h1>
      {list.map((cartitem, index) => {
        return (
          <ItemContainer>
            <CartItem
              cartitem={cartitem}
              noToppingList={noToppingList}
              removeItem={removeItem}
              setNoToppingList={setNoToppingList}
            />
            <StyledButton
              onClick={(e) => {
                removeItem(index);
              }}
            >
              Remove
            </StyledButton>
          </ItemContainer>
        );
      })}
      <StyledPrice>Your Total: {price}</StyledPrice>
    </SideBar>
  );
};

export default CartSidebar;
