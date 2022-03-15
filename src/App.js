import react from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Product from "./assets/components/Product";
import CartSidebar from "./assets/components/CartSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import FoodData from "./assets/data/FoodData";
import DrinkData from "./assets/data/DrinkData";
import SideData from "./assets/data/SideData";
import BreakData from "./assets/data/BreakData";
import LunchData from "./assets/data/LunchData";
import HideableBreak from "./assets/components/HideableBreak";
import { Transition } from "react-transition-group";
import "animate.css";
import Navbar from "react-bootstrap/Navbar";

const Container = styled.div`
   {
    display: grid;
    height: 100vh;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: auto;
    grid-template-areas:
      "nav nav nav nav nav"
      ". . productHeader . ."
      "sidemenu product product product sidebar"
      "sidemenu footer footer footer  sidebar"
    grid-gap: 0.25rem;
    text-align: center;
    overflow: scroll;
    scroll-behavior: smooth;
    background-color: #f9f6ee;
    object-fit: cover; 
    background-image: ${(props) =>
      props.showBreak
        ? `url('/img/breakfastdark3.png')`
        : props.showDin
        ? `url('/img/dinnerdark.png')`
        : props.showSides
        ? `url('/img/sidesdark.png')`
        : props.showBevs
        ? `url('/img/bevs.png')`
        : props.showLunch
        ? `url('/img/lunchdark.png')`
        : null}
  }
`;

const Header = styled.header`
   {
    font-size: 1.5em;
    background-color: #edeade;
    height: 50px;
    text-align: left;
    padding-left: 15px;
    padding-top: 5px;
    width: 100%;
    height: 200px;
    grid-column: span 5;
    font-family: capitana, sans-serif;
    font-weight: 700;
    font-style: italic;
    font-size: 120px;
    text-align: center;
    background-image: url("/img/dinerinteriordark.png");
    color: #967969;
    text-shadow: 0px 0px 7px #fee2d2;
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
    grid-column: span 4;
  }
`;

const StyledProduct = styled(Product)`
   {
    gap: 0.25rem;
    padding: 0.25rem;
    flex-wrap: wrap;
  }
`;

const Fade = styled.div`
  transition: 0.5s;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
  display: ${({ state }) => (state === "exited" ? "none" : "block")};
`;

const StyledNavBarElement = styled(Navbar.Brand)`
   {
    :hover {
      cursor: pointer;
    }
    color: #fff !important;
  }
`;

const StyledNavBar = styled(Navbar)`
   {
    width: 100%;
    grid-column: span 5;
    justify-content: center;
    gap: 250px;
    background-color: #c4a484;
  }
`;

const App = () => {
  const [list, setList] = useState([]);
  const [totalPrice, setTotalPrice] = useState([]);
  const [noToppingList, setNoToppingList] = useState([]);
  const [counter, setCounter] = useState(1);
  const [showBreak, setShowBreak] = useState(true);
  const [showDin, setShowDin] = useState(false);
  const [showLunch, setShowLunch] = useState(false);
  const [showBevs, setShowBevs] = useState(false);
  const [showSides, setShowSides] = useState(false);

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

  const toggleBreak = () => {
    setShowBreak(true);
    setShowDin(false);
    setShowBevs(false);
    setShowSides(false);
    setShowLunch(false);
  };
  const toggleDin = () => {
    setShowBreak(false);
    setShowDin(true);
    setShowBevs(false);
    setShowSides(false);
    setShowLunch(false);
  };
  const toggleBevs = () => {
    setShowBreak(false);
    setShowDin(false);
    setShowBevs(true);
    setShowSides(false);
    setShowLunch(false);
  };
  const toggleSides = () => {
    setShowBreak(false);
    setShowDin(false);
    setShowBevs(false);
    setShowSides(true);
    setShowLunch(false);
  };
  const toggleLunch = () => {
    setShowBreak(false);
    setShowDin(false);
    setShowBevs(false);
    setShowSides(false);
    setShowLunch(true);
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
    <Container
      showBreak={showBreak}
      showDin={showDin}
      showBevs={showBevs}
      showSides={showSides}
      showLunch={showLunch}
    >
      <Header>Will's Diner</Header>
      <StyledNavBar variant="light">
        <StyledNavBarElement onClick={toggleBreak}>
          Breakfast
        </StyledNavBarElement>
        <StyledNavBarElement onClick={toggleLunch}>Lunch</StyledNavBarElement>
        <StyledNavBarElement onClick={toggleDin}>Dinner</StyledNavBarElement>
        <StyledNavBarElement onClick={toggleBevs}>Drinks</StyledNavBarElement>
        <StyledNavBarElement onClick={toggleSides}>Sides</StyledNavBarElement>
      </StyledNavBar>
      <ProductBox>
        {Object.values(BreakData).map((key) => {
          if (showBreak === true)
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

        {Object.values(FoodData).map((key) => {
          if (showDin === true)
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

        {Object.values(DrinkData).map((key) => {
          if (showBevs === true)
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

        {Object.values(SideData).map((key) => {
          if (showSides === true)
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

        {Object.values(LunchData).map((key) => {
          if (showLunch === true)
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
