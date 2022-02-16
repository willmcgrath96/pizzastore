import react from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Product from "./assets/components/Product";
import CartSidebar from "./assets/components/CartSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FoodData from "./assets/data/FoodData";
import SideMenu from "./assets/components/SideMenu";
import DrinkData from "./assets/data/DrinkData";
import SideData from "./assets/data/SideData";

const Container = styled.div`
   {
    display: grid;
    height: 100vh;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 10% 1fr 10%;
    grid-template-areas:
      "nav nav nav nav nav"
      "sidemenu entrees entrees entrees sidebar"
      "sidemenu product product product sidebar"
      "sidemenu product product product sidebar"
      "sidemenu product product product sidebar"
      "sidemenu product product product sidebar"
      "sidemenu bevs bevs bevs sidebar"
      "sidemenu drinks drinks drinks sidebar"
      "sidemenu drinks drinks drinks sidebar"
      "sidemenu drinks drinks drinks sidebar"
      "sidemenu drinks drinks drinks sidebar"
      "sidemenu sidesHeader sidesHeader sidesHeader sidebar"
      "sidemenu sides sides sides sidebar"
      "sidemenu sides sides sides sidebar"
      "sidemenu sides sides sides sidebar"
      "sidemenu sides sides sides sidebar"
      "footer footer footer footer footer";
    grid-gap: 0.25rem;
    text-align: center;
    overflow: scroll;
    scroll-behavior: smooth;
    background-color: #f9f6ee;
  }
`;

const Header = styled.header`
   {
    font-size: 1.5em;
    background-color: #edeade;
    grid-area: nav;
    height: 50px;
    text-align: left;
    padding-left: 15px;
    padding-top: 5px;
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
    justify-content: flex-start;
  }
`;

const StyledEntrees = styled.h3`
   {
    grid-area: entrees;
  }
`;

const StyledBevs = styled.h3`
   {
    grid-area: bevs;
  }
`;

const StyledSidesHeader = styled.h3`
   {
    grid-area: sidesHeader;
  }
`;

const StyledProduct = styled(Product)`
   {
    grid-area: product;
    display: flex;
    width: 1fr;
    overflow-wrap: normal;
  }
`;

const StyledDrinks = styled.div`
   {
    display: flex;
    gap: 0.25rem;
    padding: 0.25rem;
    align-items: flex-start;
    grid-area: drinks;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const StyledSides = styled.div`
   {
    display: flex;
    gap: 0.25rem;
    padding: 0.25rem;
    align-items: flex-start;
    grid-area: sides;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const App = () => {
  const [list, setList] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [noToppingList, setNoToppingList] = useState([]);
  const [hasToppings, setHasToppings] = useState(true);
  const [counter, setCounter] = useState(1);

  let sum = 0;
  let copy = [...list];

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  for (let i = 0; i < totalPrice.length; i++) {
    sum += totalPrice[i];
  }

  const addItem = (item, desc, price, choice, quantity) => {
    copy = [
      ...copy,
      {
        id: list.length + 1,
        task: item,
        sub: desc,
        cost: price,
        complete: false,
        noToppingList: [...noToppingList],
        pick: choice,
        quantity: quantity,
      },
    ];
    console.log(desc);
    setTotalPrice((totalPrice) => [...totalPrice, price]);
    setList(copy);
  };

  const removeItem = (index) => {
    const newOrder = [...list];
    const newPrice = [...totalPrice];
    newOrder.splice(index, 1);
    newPrice.splice(index, 1);
    setList(newOrder);
    setTotalPrice(newPrice);
    sum -= newPrice(index);
  };

  const editItem = (index) => {
    <CartSidebar index={index} />;
  };

  return (
    <Container>
      <Header>Will's Food Restaurant</Header>
      <SideMenu />
      <StyledEntrees id="entrees">Entrees & More</StyledEntrees>
      <ProductBox>
        {Object.values(FoodData).map((key) => {
          return (
            <StyledProduct
              key={key.id}
              text={key.name}
              addItem={addItem}
              desc={key.options}
              price={key.price}
              img={key.img}
              noToppingList={noToppingList}
              setNoToppingList={setNoToppingList}
              choices={key.choices}
              hasToppings={key.hasToppings}
              counter={counter}
              setCounter={setCounter}
            />
          );
        })}
      </ProductBox>
      <StyledBevs>Drinks</StyledBevs>
      <StyledDrinks id="drinks">
        {Object.values(DrinkData).map((key) => {
          return (
            <StyledProduct
              key={key.id}
              text={key.name}
              addItem={addItem}
              desc={key.options}
              price={key.price}
              img={key.img}
              noToppingList={noToppingList}
              setNoToppingList={setNoToppingList}
              choices={key.choices}
              hasToppings={key.hasToppings}
              counter={counter}
              setCounter={setCounter}
            />
          );
        })}
      </StyledDrinks>
      <StyledSidesHeader id="sides">Sides</StyledSidesHeader>
      <StyledSides>
        {Object.values(SideData).map((key) => {
          return (
            <StyledProduct
              key={key.id}
              text={key.name}
              addItem={addItem}
              desc={key.options}
              price={key.price}
              img={key.img}
              noToppingList={noToppingList}
              setNoToppingList={setNoToppingList}
              choices={key.choices}
              hasToppings={key.hasToppings}
              counter={counter}
              setCounter={setCounter}
            />
          );
        })}
      </StyledSides>
      <CartSidebar
        list={list}
        removeItem={removeItem}
        price={formatter.format(sum)}
        noToppingList={noToppingList}
        editItem={editItem}
        sum={sum}
      />
    </Container>
  );
};

export default App;
