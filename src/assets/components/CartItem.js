import react from "react";
import styled from "styled-components";

const StyledItem = styled.div`
   {
    width: 75px;
  }
`;

const StyledDiv = styled.div`
   {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    &:hover {
      background-color: #adb5bd;
      border-color: #adb5bd;
    }
  }
`;

const StyledDesc = styled.div`
   {
    color: #868e96;
    width: 1fr;
  }
`;

const StyledParagraph = styled.p`
   {
    line-height: normal;
  }
`;

const StyledPrice = styled.p`
   {
    width: 1fr;
  }
`;

var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const CartItem = ({ cartitem }) => {
  return (
    <StyledDiv
      id={cartitem.id}
      key={cartitem.id + cartitem.task}
      name="cartitem"
      value={cartitem.id}
    >
      <StyledItem>
        {cartitem.quantity}
        <br />
        {cartitem.task}
      </StyledItem>
      <StyledDesc>
        {cartitem.noToppingList.map((key) => (
          <StyledParagraph>{key}</StyledParagraph>
        ))}
        {cartitem.pick}
      </StyledDesc>
      <StyledPrice>{formatter.format(cartitem.cost)}</StyledPrice>
    </StyledDiv>
  );
};

export default CartItem;
