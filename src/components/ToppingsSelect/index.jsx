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
    const newPriceToppings = [...cardToppings];newPriceToppings[index].price = newPrice;
    handlePriceChange(newPriceToppings);
  }

  let toppingSelected = 0;
  cardToppings.forEach((topping) => toppingSelected += topping.selected)

  let toppingPrice = 0;
  cardToppings.forEach((topping) => toppingPrice += topping.newPrice)


  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {toppingSelected}, total price: {toppingPrice} Euro</p>
        
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
