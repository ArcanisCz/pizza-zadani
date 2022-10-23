import React from "react";
import './style.css';
import { usePrefs } from "../../prefs-context";

const Check = ({checked, onChange, vegan}) => {
 
  const handleClick = () => {
    onChange(!checked);
  };

  const {veganOnly} = usePrefs();

 
  if (veganOnly)
  return (
      vegan ?  
  <button className = "check" onClick={handleClick}>
    {checked ? '✓' : ''}
  </button>
  :
  <button className = "check--disabled check" disabled
  ></button>)

  return (
  <button className = "check" onClick={handleClick}>
  {checked ? '✓' : ''}
</button>
  );
}

export default Check;
