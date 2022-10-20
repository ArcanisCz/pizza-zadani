import React, { useState } from "react";
import Topping from "../Topping";
import './style.css'; 

const ToppingsSelect = ({ toppings }) => {
  const [cardToppings, setCardToppings] = useState(toppings);
 

  const handleToppingChange = (index, newSelected) => {
    const newToppings = [...cardToppings];
    newToppings[index].selected = newSelected;
    setCardToppings(newToppings);
  } 
  
  const handlePriceChange = (index, newPrice) => {
    const newPriceToppings = [...cardToppings];
    newPriceToppings[index].price = newPrice;
    console.log(newPrice);
    setCardToppings(newPriceToppings);
  }

  let toppingSelected = 0;
  cardToppings.forEach((topping) => toppingSelected += topping.selected);
  

  let toppingPrice = 0;
  cardToppings.forEach((topping) => { 
    let newPrice = topping.price;
    if (topping.selected === true) {
      toppingPrice += newPrice}
      else {
        null
      }
 })

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {toppingSelected}, total price: {Math.round(toppingPrice*1000)/1000} Euro</p>
        
      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping topping={topping} key={topping.name} onToppingChange={(newSelected) => handleToppingChange(index, newSelected)} 
          onPriceChange={(newPrice) => handlePriceChange(index, newPrice)} 
          />
        ))}
      </div>  
    </> 
  );
};

export default ToppingsSelect;
