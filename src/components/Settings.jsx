import { CheckBox } from "@mui/icons-material";
import {useState, useContext} from "react";
import SettingsContext from "../AppContext";

function Settings() {
  const { getSavedValue, handleBurgerPosition, handleBurgerWidth} = useContext(SettingsContext);
  const [leftVal, setLeftVal] = useState(getSavedValue("isLeft", false));
  const [widthVal, setWidthVal] = useState(getSavedValue("width", 300));


  const handleChange = (event) => {
    const {name, value} = event.target;
    if (name === "left-right") {
      handleBurgerPosition(!leftVal);
      localStorage.setItem("isLeft", !leftVal);
      setLeftVal(!leftVal);

    } else if (name === "width") {
      handleBurgerWidth(Number(value));
      localStorage.setItem("width", Number(value));
      setWidthVal(value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>SETTINGS</h3>
      <div>
        <label>Left side menu: </label>
        <input name="left-right" type="checkbox" onChange={handleChange} checked={leftVal} />
      </div>
      <div>
        <label>Width of menu: </label>
        <input name="width" type="number" min="200" max="400" step="10" onChange={handleChange} placeholder={widthVal} value={widthVal} />
      </div>
    </form>
  )
}

export default Settings;
