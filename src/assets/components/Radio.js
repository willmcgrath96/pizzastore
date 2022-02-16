import React from "react";
import { useState } from "react";
import { ToggleButton } from "react-bootstrap";

const Radio = ({ choices, selectedChoice, setSelectedChoice }) => {
  const [radioValue, setRadioValue] = useState("1");

  return (
    <div>
      <ul>
        {choices.map((radio, idx) => {
          return (
            <li
              style={{
                listStyleType: "none",
                display: "inline-block",
                margin: "5px",
              }}
            >
              <div>
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant="secondary"
                  name="radio"
                  value={radio}
                  checked={radioValue === radio.value}
                  onChange={(e) => {
                    setRadioValue(e.currentTarget.value);
                    setSelectedChoice(e.currentTarget.value.replace(", ", ""));
                  }}
                >
                  {`${radio.replace(", ", "")}`}
                </ToggleButton>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Radio;
