import React, { useState } from "react";
import Check from "../Check";
import './style.css';

const Topping = ({ topping, onCheck, checked }) => {

  return (
    <div className="topping">
      <Check onChange={onCheck} checked={checked}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
