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

  const totalSum = selectedToppings.reduce((next,topping) => {
    return next + topping.price; 
  }, 0);

  

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {totalCount}, total price: {totalSum.toFixed(2)} Euro</p>
        
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
