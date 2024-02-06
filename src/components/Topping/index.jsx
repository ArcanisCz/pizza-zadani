import React from "react";
import Check from "../Check";
import './style.css';

const Topping = ({ topping, onToppingChange}) => { 

  return (
    <div className="topping">
      <Check checked={topping.selected} onChange={onToppingChange}/>
      <span className="topping__content" >
        {topping.name}: {topping.price} €
      </span> 
    </div>
  );
};

export default Topping;
 