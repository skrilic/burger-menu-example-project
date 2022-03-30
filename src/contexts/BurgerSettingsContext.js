import React, {createContext, useEffect, useState} from "react";

const BurgerSettingsContext = createContext([]);

export function BurgerSettingsProvider({ children }) {

  const getSavedValue = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  };

  const [isLeft, setIsLeft] = useState(getSavedValue("isLeft", true));
  const [width, setWidth] = useState(getSavedValue("width", 300));

  useEffect((isLeft) => {
      localStorage.setItem("isLeft", isLeft);
    }, [isLeft]);

  const handleBurgerPosition = (newVal) => {
      console.log("New Left", newVal);
    setIsLeft(newVal); // true = "left", false = "right"
  };

  const handleBurgerWidth = (pixels) => {
    setWidth(pixels);
  };

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
