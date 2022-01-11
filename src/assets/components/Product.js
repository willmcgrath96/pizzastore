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

const StyledProduct = styled.div`
   {
    background-color: #fff;
    grid-gap: 0.25rem;
    border: 2px solid black;
    width: 25%;
    height: 150px;
    grid-area: product;
    border-radius: 25px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

const StyledCard = styled.div`
   {
    hover: {
      border: 2px solid black;
    }
  }
`;

const StyledImage = styled(Card.Img)`
   {
    width: 18rem;
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

const Product = ({ addItem, text, desc, price, img, hasToppings }) => {
  const descValues = Object.values(desc);

  const [isOpen, setIsOpen] = useState(false);
  const [toppings, setToppings] = useState(descValues);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const handleAndHide = (e) => {
    e.preventDefault();
    setToppings(descValues);
    addItem(text, toppings, price);
    hideModal();
  };

  var toppingCheck = descValues.length >= 1 ? "Select Toppings" : "";

  return (
    <Card
      onClick={showModal}
      style={{ width: "18rem" }}
      style={{ cursor: "pointer" }}
    >
      <StyledImage variant="top" src={img} />
      <Card.Title>{text}</Card.Title>
      <Card.Subtitle>{desc}</Card.Subtitle>
      <br />
      <Card.Subtitle>{formatter.format(price)}</Card.Subtitle>
      <>
        <div onClick={(e) => e.stopPropagation()}>
          <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
              <Modal.Title>{text}</Modal.Title>
            </Modal.Header>
            <ModalImage src={img} />
            <Modal.Body>
              <h3>{toppingCheck}</h3>
              <Checkbox toppings={descValues} price={price} />
              <h2>{formatter.format(price)}</h2>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={hideModal}>Cancel</Button>
              <Button onClick={handleAndHide}>Save</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    </Card>
  );
};

export default Product;
