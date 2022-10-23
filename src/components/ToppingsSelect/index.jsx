import React, { useState } from "react";
import Topping from "../Topping";
import "./style.css";

const ToppingsSelect = ({ toppings }) => {
  const [checked, setChecked] = useState(toppings);

  const handleCheck = (index) => {
    const newToppings = [...toppings];
    newToppings[index].selected = !checked[index].selected;
    setChecked(newToppings);
  };

  const selectedToppings = checked.filter((topping) => topping.selected);

  let totalPrice = 0;

  selectedToppings.forEach((topping) => (totalPrice += topping.price));

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>
        Selected toppings: {selectedToppings.length}, total price: {totalPrice}{" "}
        Euro
      </p>

      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping
            topping={topping}
            key={topping.name}
            onChangeTopping={() => handleCheck(index)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
