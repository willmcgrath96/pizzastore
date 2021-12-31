import { render } from "@testing-library/react";
import react from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const StyledProduct = styled.div`
   {
    background-color: #032123;
    grid-gap: 0.25rem;
    width: 25%;
    height: 150px;
    grid-area: product;
    border-radius: 25px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
`;

const Product = ({ addItem, text, desc, img }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const handleAndHide = (e) => {
    e.preventDefault();
    addItem(text, desc);
    hideModal();
  };

  return (
    <StyledProduct>
      <>
        <button onClick={showModal}>{text}</button>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>{text}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{desc}</Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal}>Cancel</button>
            <button onClick={handleAndHide}>Save</button>
          </Modal.Footer>
        </Modal>
      </>
    </StyledProduct>
  );
};

export default Product;
