import React, { useState } from "react";
import Check from "../Check";
import './style.css';

const Topping = ({ topping, onCheck, checked, vegan }) => {

  return (
    <div className="topping">
      <Check onChange={onCheck} checked={checked} vegan={vegan}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
