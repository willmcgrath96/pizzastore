import react from "react";
import styled from "styled-components";

const StyledItem = styled.div`
   {
    border: 2px solid #dee2e6;
  }
`;

const StyledDiv = styled.div`
   {
    display: flex;
    flex-direction: column;
  }
`;

const StyledDesc = styled.div`
   {
    color: #868e96;
  }
`;

const StyledParagraph = styled.p`
   {
    line-height: normal;
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
      {cartitem.task}
      <StyledDesc>
        {cartitem.noToppingList.map((key) => (
          <StyledParagraph>{key}</StyledParagraph>
        ))}
      </StyledDesc>
      {formatter.format(cartitem.cost)}
    </StyledDiv>
  );
};

export default CartItem;
