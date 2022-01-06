import react from "react";
import styled from "styled-components";

const StyledItem = styled.div`
   {
    border: 2px solid #dee2e6;
  }
`;

const StyledDesc = styled.div`
   {
     {
      color: #868e96;
    }
  }
`;

const CartItem = ({ cartitem }) => {
  return (
    <div
      id={cartitem.id}
      key={cartitem.id + cartitem.task}
      name="cartitem"
      value={cartitem.id}
    >
      {cartitem.task}
      <br />
      <StyledDesc>{cartitem.sub}</StyledDesc>
      {cartitem.cost}
    </div>
  );
};

export default CartItem;
