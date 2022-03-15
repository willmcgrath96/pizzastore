import react from "react";
import { useState } from "react";
import CartItem from "./CartItem";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import TakeMoney from "./TakeMoney";

const SideBar = styled.div`
  background: #f1f3f5;
  grid-area: sidebar;
  grid-column: span 1;
  border: 1px solid #adb5bd;
  overflow: auto;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 90vh;
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

const StyledHeader = styled.h1`
   {
    font-style: italic;
    font-family: capitana, sans-serif;
  }
`;

const StyledPrice = styled.div`
   {
  }
`;

const PriceBox = styled.div`
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
  editItem,
  sum,
}) => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const taxAmount = sum * 0.0825;
  const totalAmount = sum + taxAmount;

  return (
    <SideBar>
      <StyledHeader>Your Order</StyledHeader>
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
      <PriceBox>
        <StyledPrice>Your Subtotal: {price}</StyledPrice>
        <StyledPrice>Tax: {formatter.format(taxAmount)}</StyledPrice>
        <StyledPrice>Your Total: {formatter.format(totalAmount)}</StyledPrice>
      </PriceBox>
      <TakeMoney sum={totalAmount} />
    </SideBar>
  );
};

export default CartSidebar;
