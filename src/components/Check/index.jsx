import React from "react";
import './style.css';

const Check = ({checked, onChange, disabled}) => {


  const handleClick = () => {
    onChange(!checked);
  };

return (
  <button className = {disabled ? "check--disabled check" : "check" } onClick={handleClick} disabled={disabled ? true : false}>
    {checked ? '✓' : ''}
  </button>
)
}

export default Check;
