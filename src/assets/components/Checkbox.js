import React from "react";
import { useState } from "react";
import FoodData from "../data/FoodData";

const Checkbox = ({ toppings, noToppingList, setNoToppingList, price }) => {
  const [data, setData] = useState([{ toppings }]);

  const [total, setTotal] = useState(0);

  const [checked, setChecked] = useState(true);

  const foodArray = [...toppings];

  // const onChange = (e) => {
  //   const isChecked = e.target.checked;
  //   if (checked) {
  //     foodArray.push(e.target.value);
  //   } else {
  //     const index = foodArray.indexOf(e.target.value);
  //     foodArray.splice(index, 1);
  //     setChecked(false);
  //   }
  //   console.log(foodArray);
  // };

  const change = (e) => {
    const toppingToAdd = e.target.value.replace(", ", "");

    if (noToppingList.includes(toppingToAdd)) {
      setNoToppingList(
        noToppingList.filter((topping) => {
          return topping !== toppingToAdd;
        })
      );
    } else {
      setNoToppingList([...noToppingList, toppingToAdd]);
    }
  };

  return (
    <div>
      <ul>
        {toppings.map((item) => {
          return (
            <li style={{ listStyleType: "none" }}>
              <div>
                <input
                  readOnly
                  type="checkbox"
                  name={`No ${item}`}
                  value={`No ${item}`}
                  onChange={(e) => change(e)}
                />
                <label>{`No ${item.replace(", ", "")}`}</label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Checkbox;
