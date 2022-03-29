import { CheckBox } from "@mui/icons-material";
import {useState, useContext} from "react";
import SettingsContext from "../AppContext";

function Settings() {
  const { handlePosition, isLeft, handleWidth, width} = useContext(SettingsContext);
  let isLeftChecked = isLeft;
  
  const handleChange = (event) => {
    const {name, value} = event.target;
    
    if (name === "left-right") {
      isLeftChecked = !isLeftChecked;
      if (isLeftChecked) {
        handlePosition("left");
      } else {
        handlePosition("right");
      }
    } else if (name === "width") {
      handleWidth(Number(value));
    }
  }

  return (
    <form>
      <h3>SETTINGS</h3>
      <div>
        <label>Right side menu: </label>
        <input name="left-right" type="checkbox" onChange={handleChange} value={ isLeftChecked ? "checked" : "" } />
      </div>
      <div>
        <label>Width of menu: </label>
        <input name="width" type="number" min="100" max="400" step="10" onChange={handleChange} />
      </div>
    </form>
  )
}

export default Settings;
