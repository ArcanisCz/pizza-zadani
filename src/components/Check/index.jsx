import React from "react";
import { usePrefs } from "../../pizza-context";
import './style.css';

const Check = ({checked, onChange}) => {
  const {vegan, veganOnly, setVeganChange } = usePrefs();

  const handleClick = () => {
    onChange(!checked);
  }

  return (
    
    <button  
      className={ veganOnly === true && vegan === false? "check--disabled":"check"}
      onClick={handleClick}
    >
      {checked ? '✓' : ''}
    </button>
  )
  
};
 
export default Check;
