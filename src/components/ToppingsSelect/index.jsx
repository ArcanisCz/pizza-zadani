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

  let toppingSelected =
  cardToppings.filter((topping) => topping.selected).length;
  
  let toppingPrice = 0;
  cardToppings.forEach((topping) => { 
    
    if (topping.selected === true) {
      toppingPrice += topping.price}
      else {
        
      }
     } )
   
   /*
  const addToppingPrice = ({},topping) => {
      if (topping.selected === true) {
      toppingPrice += topping.price}
      else {
        
      }
  }
  let toppingPrice = cardToppings.reduce(addToppingPrice, 0, 0) 

  /*let toppingPrice =
  cardToppings.filter((topping) => { 
    
    if (topping.selected === true) {
      toppingPrice += topping.price}
      else {
        
      }
 })

  let toppingPrice = 0;
  cardToppings.forEach((topping) => { 
    
    if (topping.selected === true) {
      toppingPrice += topping.price}
      else {
        
      }
 })*/

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {toppingSelected}, total price: {toppingPrice.toFixed(2)} Euro</p>
        
      <div className="toppings">
        {toppings.map((topping, index) => (
          <Topping topping={topping} key={topping.name} onToppingChange={newSelected => handleToppingChange(index, newSelected)}  onPriceChange= {newPrice => handlePriceChange(index, newPrice)} 
          />
        ))}
      </div>  
    </> 
  );
};

export default ToppingsSelect;
