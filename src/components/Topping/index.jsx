import React from "react";
import { usePrefs } from "../../prefs-context";
import Check from "../Check";
import './style.css';

const Topping = ({ topping, onCheck, checked, vegan }) => {

const {veganOnly} = usePrefs();

  return (
    <div className="topping">
      <Check onChange={onCheck} checked={checked} disabled={!vegan && veganOnly}/>
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
  }
export default Topping;
