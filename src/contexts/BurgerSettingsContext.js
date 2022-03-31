import React, {createContext, useEffect, useState} from "react";

const BurgerSettingsContext = createContext([]);

export function BurgerSettingsProvider({ children }) {

  const getSavedValue = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    console.log("GetSaved call", key, initial)
    return initial || defaultValue;
  };

  const [ appSet, setAppSet ] = useState({
      "isLeft": true,
      "width": 300,
      "theme": "night-theme"
  });

  const [isLeft, setIsLeft] = useState(getSavedValue("isLeft", false));
  const [width, setWidth] = useState(getSavedValue("width", 300));

  const handleBurgerPosition = (newPos) => {
    setIsLeft(newPos); // true = "left", false = "right"
    localStorage.setItem("isLeft", newPos);
  };

  const handleBurgerWidth = (pixels) => {
    setWidth(pixels);
    localStorage.setItem("width", pixels);
  };
    // console.log("Context handle after isLeft: ", getSavedValue("isLeft", "NEMA") )

  return (
    <BurgerSettingsContext.Provider
      value={{
        getSavedValue,

        handleBurgerPosition,
        isLeft,

        handleBurgerWidth,
        width
      }}
    >
      {children}
    </BurgerSettingsContext.Provider>
  );
}

export default BurgerSettingsContext;
