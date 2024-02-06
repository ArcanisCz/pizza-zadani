import React from "react";
import { usePrefs } from "../../pizza-context";
import './style.css';

const Header = () => {
  const {veganOnly, setVeganOnlyChoose } = usePrefs();

const handleChooseVeganChange = (e) => {
  setVeganOnlyChoose(e.target.value);
}

  return (<>
    <div className="pizza" />
    <h1>Build your own pizza</h1>
    <label htmlFor="select">Select ingredients:</label>
    <select value={veganOnly} name="select" id="select" onChange={handleChooseVeganChange}>
      <option value={true}>Just vegan</option>
      <option value={false}>All</option>
    </select></>
  )
}

export default Header;