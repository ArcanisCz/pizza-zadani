import React from "react";
import { usePrefs } from "../../prefs-context";
import './style.css';

const Header = () => {

    const {changePrefs, veganOnly} = usePrefs();

    const veganPref = veganOnly? "Vegan only" : "All available";
    

    const handleSelect = (e) => {
        
        
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