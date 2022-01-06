import React from "react";
import { useState } from "react";
import FoodData from "../data/FoodData";

const Checkbox = ({ toppings, onChange }) => {
  const [data, setData] = useState([{ toppings }]);

  const [total, setTotal] = useState(0);

  const [checked, setChecked] = useState(true);

  const foodArray = [...toppings];

  onChange = (e) => {
    const isChecked = e.target.checked;
    if (checked) {
      foodArray.push(e.target.value);
    } else {
      const index = foodArray.indexOf(e.target.value);
      foodArray.splice(index, 1);
      setChecked(false);
    }
    console.log(foodArray);
  };

  return (
    <div>
      <h3>Select Toppings</h3>
      <ul>
        {toppings.map((item) => {
          return (
            <li style={{ listStyleType: "none" }}>
              <div>
                <input
                  readOnly
                  type="checkbox"
                  name={item}
                  value={item}
                  onChange={() => setChecked(!checked)}
                  defaultChecked={checked}
                />
                <label>{item}</label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Checkbox;
