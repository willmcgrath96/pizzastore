import { render } from "@testing-library/react";
import react from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Toppings from "./Toppings";
import Checkbox from "./Checkbox";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Radio from "./Radio";
import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import QuantDisplay from "./QuantDisplay";

const StyledParagraph = styled.p`
   {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
  }
`;

const StyledButton = styled(Button)`
   {
    background-color: #495057;
    width: 125px;
    border-color: #495057;
    &:hover {
      background-color: #adb5bd;
      border-color: #adb5bd;
    }
  }
`;

const StyledIngredientList = styled.p`
   {
    font-style: italic;
  }
`;

const StyledCard = styled(Card)`
   {
    cursor: pointer;
    height: 13rem;
    transition: transform 250ms;
    &:hover {
      transform: translateY(-10px);
    }
    width: 300px;
  }
`;

const StyledImage = styled(Card.Img)`
   {
    width: 298px;
    height: 100px;
    object-fit: cover;
  }
`;

const ModalImage = styled.img`
   {
    width: 100%;
    height: 300px;
    object-fit: cover;
    padding: 10px;
  }
`;

const StyledPrice = styled.p`
   {
    margin-bottom: 15px;
  }
`;

const StyledFooter = styled(Modal.Footer)`
   {
    display: flex;
    justify-content: flex-start;
  }
`;

const Product = ({
  addItem,
  text,
  desc,
  price,
  img,
  noToppingList,
  setNoToppingList,
  choices,
  counter,
  setCounter,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const descValues = Object.values(desc);
  const [selectedChoice, setSelectedChoice] = useState();

  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);

  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  let itemPrice = price * counter;

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setNoToppingList([]);
    setCounter(1);
  };

  const handleAndHide = (e) => {
    e.preventDefault();
    addItem(text, noToppingList, itemPrice, selectedChoice, counter);
    hideModal();
  };

  return (
    <StyledCard onClick={showModal}>
      <StyledImage variant="top" src={img} />
      <Card.Title>{text}</Card.Title>
      <Card.Subtitle>
        <StyledParagraph>{desc}</StyledParagraph>
      </Card.Subtitle>
      <Card.Subtitle>{choices}</Card.Subtitle>
      <StyledPrice>{formatter.format(price)}</StyledPrice>
      <>
        <div onClick={(e) => e.stopPropagation()}>
          <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
              <Modal.Title>{text}</Modal.Title>
            </Modal.Header>
            <ModalImage src={img} />
            <Modal.Body>
              <StyledIngredientList>{desc}</StyledIngredientList>
              <Checkbox
                toppings={descValues}
                price={price}
                noToppingList={noToppingList}
                setNoToppingList={setNoToppingList}
              />
              <Radio
                choices={choices}
                selectedChoice={selectedChoice}
                setSelectedChoice={setSelectedChoice}
              />
              <h2>{formatter.format(itemPrice)}</h2>
            </Modal.Body>
            <StyledFooter>
              <h3>Quantity</h3>
              <DecrementButton onClick={decrementCounter} />
              <QuantDisplay message={counter} />
              <IncrementButton onClick={incrementCounter} />
              <StyledButton onClick={hideModal}>Cancel</StyledButton>
              <StyledButton onClick={handleAndHide}>Save</StyledButton>
            </StyledFooter>
          </Modal>
        </div>
      </>
    </StyledCard>
  );
};

export default Product;
