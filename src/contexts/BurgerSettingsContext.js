import React, {createContext, useState} from "react";
import * as AppLocalStorage from "./AppLocalStorageKeys";

const BurgerSettingsContext = createContext([]);

export function BurgerSettingsProvider({ children }) {

  const getSavedValue = (key, defaultValue) => {
    const saved = AppLocalStorage.get(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  };

  const [isLeft, setIsLeft] = useState(getSavedValue("isLeft", false));
  const [width, setWidth] = useState(getSavedValue("width", 300));

  const handleBurgerPosition = (newPos) => {
    setIsLeft(newPos); // true = "left", false = "right"
    AppLocalStorage.set("isLeft", newPos);
  };

  const handleBurgerWidth = (pixels) => {
    setWidth(pixels);
    AppLocalStorage.set("width", pixels);
  };

  return (
    <BurgerSettingsContext.Provider
      value={
      {
        handleBurgerPosition,
        isLeft,
        handleBurgerWidth,
        width
      }
    }
    >
      {children}
    </BurgerSettingsContext.Provider>
  );
}

export default BurgerSettingsContext;
