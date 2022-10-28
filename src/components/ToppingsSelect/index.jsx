import React, { useState } from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings }) => {

  const [toppingCheck, setToppingCheck] = useState(toppings);

  const handleToppingChange = (index, selected) => {
    const newToppingCheck = [...toppingCheck];
    newToppingCheck[index].selected = selected;
    setToppingCheck(newToppingCheck);
  };

  let toppingCount = 0;
  toppingCheck.forEach((topping) => toppingCount += topping.selected);

  let toppingPrice = 0;
  toppingCheck.forEach((topping) => {
    let newPrice = topping.price;
    if ( topping.selected === true) {
      toppingPrice += newPrice
    }}
  )


  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {toppingCount}, total price: {toppingPrice} Euro</p>
        
      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping 
            topping={topping} 
            key={topping.name} 
            onToppingChange={(selected) => handleToppingChange(index, selected)} />
        ))}
      </div>

    </>
  );
};

export default ToppingsSelect;
