import react from "react";
import { useState } from "react";
import CartItem from "./CartItem";
import styled from "styled-components";

const CartSidebar = ({ cartSidebar }) => {
  return (
    <div>
      <h1>Your Order</h1>
      {cartSidebar.map((cartitem, index) => {
        return <CartItem cartitem={cartitem} index={index} />;
      })}
    </div>
  );
};

export default CartSidebar;
