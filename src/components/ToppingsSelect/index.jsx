import React, { useState } from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings }) => {

  const [toppingsToChoose, setToppingsToChoose] = useState(toppings);

  const handleSelect = (index, isChecked) => {
    const newToppings = [...toppings];
    newToppings[index].selected = isChecked;
    setToppingsToChoose(newToppings);
      
    };

  const selectedToppings = toppingsToChoose.filter((topping) => topping.selected === true)

  let totalCount = selectedToppings.length;
  let totalPrice = 0;

  selectedToppings.forEach((topping) => {
    totalPrice += topping.price; 
  });

  

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {totalCount}, total price: {totalPrice.toFixed(2)} Euro</p>
        
      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping topping={topping} 
                    key={topping.name}
                    vegan={topping.vegan} 
                    checked={topping.selected} 
                    onCheck={(isChecked) => handleSelect(index, isChecked)}/>
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
