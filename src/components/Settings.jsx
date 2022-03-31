import {useState, useContext, useEffect} from "react";
import BurgerSettingsContext from "../contexts/BurgerSettingsContext";

function Settings() {
    const { handleBurgerPosition, isLeft, handleBurgerWidth, width} = useContext(BurgerSettingsContext);
    const [leftVal, setLeftVal] = useState(isLeft);
    const [widthVal, setWidthVal] = useState(width);

  const handleChange = (event) => {
    const {name, value} = event.target;
    if (name === "left-right") {
        setLeftVal(!leftVal);
        console.log(!leftVal);
        handleBurgerPosition(!leftVal);
    } else if (name === "width") {
        setWidthVal(value);
        handleBurgerWidth(Number(value));
    }
    // else if (name === "themes") {
    //   // handleBurgerWidth(Number(value));
    //   localStorage.setItem("theme", Number(value));
    //   // setThemeVal(value);
    // }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>SETTINGS</h3>

      <div>
        <label>Left side menu: </label>
        <input name="left-right" type="checkbox"
               onChange={handleChange}
               checked={leftVal}
        />
      </div>

      <div>
        <label>Width of menu: </label>
        <input name="width" type="number" min="200" max="400" step="10" onChange={handleChange} value={widthVal} />
      </div>

      {/*<div>*/}
      {/*  <label htmlFor="themes">Theme</label>*/}
      {/*  <select name="themes" value={theme}>*/}
      {/*    <option value="night-theme">Night</option>*/}
      {/*    <option value="day-theme">Day</option>*/}
      {/*    <option value="sepia-theme">Sepia</option>*/}
      {/*  </select>*/}
      {/*</div>*/}

    </form>
  )
}

export default Settings;