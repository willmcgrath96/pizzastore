import react from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Product from "./assets/components/Product";
import CartSidebar from "./assets/components/CartSidebar";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Toppings from "./assets/components/Toppings";
import FoodData from "./assets/data/FoodData";
import Checkbox from "./assets/components/Checkbox";

const Container = styled.div`
   {
    display: grid;
    height: 100vh;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 10% 1fr 10%;
    grid-template-areas:
      "nav nav nav nav nav"
      "product product product product sidebar"
      "product product product product sidebar"
      "product product product product sidebar"
      "product product product product sidebar"
      "footer footer footer footer footer";
    grid-gap: 0.25rem;
    text-align: center;
  }
`;

const Footer = styled.footer`
   {
    font-size: 1.5em;
    grid-area: footer;
    background-color: #ff9637;
  }
`;

const Header = styled.header`
   {
    font-size: 1.5em;
    background-color: #f82102;
    grid-area: nav;
  }
`;

const ProductBox = styled.div`
   {
    display: flex;
    gap: 0.25rem;
    padding: 0.25rem;
    align-items: flex-start;
    grid-area: product;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const StyledProduct = styled(Product)`
   {
    grid-area: product;
    display: flex;
    grid-column: span 1;
  }
`;

const App = () => {
  const [list, setList] = useState([]);
  const [itemPrice, setItemPrice] = useState(0);

  const addItem = (item, desc, price) => {
    let copy = [...list];
    copy = [
      ...copy,
      {
        id: list.length + 1,
        task: item,
        sub: desc,
        cost: price,
        complete: false,
      },
    ];
    setItemPrice(price);
    setList(copy);
  };

  const removeItem = (index) => {
    const newOrder = [...list];
    newOrder.splice(index, 1);
    setList(newOrder);
  };

  const editItem = (index) => {};

  return (
    <Container>
      <Header>Will's Food Restaurant</Header>
      <ProductBox>
        {Object.values(FoodData).map((key) => {
          return (
            <StyledProduct
              key={key.id}
              text={key.name}
              addItem={addItem}
              desc={key.options}
              hasToppings={false}
              price={key.price}
            />
          );
        })}
        ;
      </ProductBox>
      <CartSidebar list={list} removeItem={removeItem} price={itemPrice} />
      <Footer>Hello World!</Footer>
    </Container>
  );
};

export default App;
