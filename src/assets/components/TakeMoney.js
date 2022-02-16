import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
   {
    background-color: #495057;
    width: 100%;
    border-color: #495057;
    &:hover {
      background-color: #adb5bd;
      border-color: #adb5bd;
    }
  }
`;

export default class TakeMoney extends React.Component {
  constructor(props) {
    super(props);
  }

  onToken = (token) => {
    fetch("/save-stripe-token", {
      method: "POST",
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  // ...

  render() {
    console.log(this.props.sum * 100);
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="my_PUBLISHABLE_stripekey"
        name="Will's Restaurant"
        amount={this.props.sum * 100}
      >
        <StyledButton>Check Out</StyledButton>
      </StripeCheckout>
    );
  }
}
