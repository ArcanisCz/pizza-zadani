import React from "react";
import { usePrefs } from "../../pizza-context";
import './style.css';

const Check = ({checked, onChange}) => {
  const {veganOnly} = usePrefs();

  const handleClick = () => {
    onChange(!checked);
  }
  console.log(veganOnly);

  return (
    
    <button  
      className={ veganOnly === false? "check--disabled":"check"}
      onClick={handleClick}
    >
      {checked ? '✓' : ''}
    </button>
  )
  
};
 
export default Check;
