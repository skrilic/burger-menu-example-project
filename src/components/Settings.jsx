import {useState, useContext} from "react";
import BurgerSettingsContext from "../contexts/BurgerSettingsContext";

function Settings() {
  const { getSavedValue, handleBurgerPosition, isLeft, handleBurgerWidth} = useContext(BurgerSettingsContext);
  // const [leftVal, setLeftVal] = useState(getSavedValue("isLeft", false));
  const [widthVal, setWidthVal] = useState(getSavedValue("width", 300));


  const handleChange = (event) => {

    const {name, value} = event.target;

    if (name === "left-right") {
      handleBurgerPosition(!isLeft);
      // localStorage.setItem("isLeft", !leftVal);
      // setLeftVal(!leftVal);

    } else if (name === "width") {
      handleBurgerWidth(Number(value));
      localStorage.setItem("width", Number(value));
      setWidthVal(value);

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
        <input name="left-right" type="checkbox" onChange={handleChange} checked={isLeft} />
      </div>

      <div>
        <label>Width of menu: </label>
        <input name="width" type="number" min="200" max="400" step="10" onChange={handleChange} placeholder={widthVal} value={widthVal} />
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