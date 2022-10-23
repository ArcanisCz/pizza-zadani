import React, { useState } from "react";
import { usePrefs } from "../../prefs-context";
import './style.css';

const Header = () => {

    const {changePrefs} = usePrefs();
    const [veganPref, setVeganPref] = useState("All available")
    

    const handleSelect = (e) => {
        
        setVeganPref(e.target.value);
        if (e.target.value === "Vegan only") {
            changePrefs(true)}
            else changePrefs(false);
        }

    return (
        <header>
                <span>Choose your pizza topping preferences: </span>
                <select className="select" value={veganPref} onChange={handleSelect}>
                <option>All available</option>
               <option>Vegan only</option>
                </select>
        </header>
    )
};

export default Header;