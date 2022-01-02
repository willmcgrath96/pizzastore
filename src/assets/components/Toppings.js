import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Toppings = () => {
  const [hasToppings, setToppings] = useState(false);

  const BurgerToppingList = [
    "Lettuce",
    "Tomato",
    "Onion",
    "Pickle",
    "Ketchup",
    "Mustard",
    "Mayonnaise",
  ];

  const PizzaToppingList = [
    "Pepperoni",
    "Sausage",
    "Onions",
    "Red Peppers",
    "Green Peppers",
    "Mushrooms",
    "Olives",
  ];
};

export default Toppings;
