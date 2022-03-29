import React, { createContext, useState } from "react";

const SettingsContext = createContext([]);

export function SettingsProvider({ children }) {
  
  /* Burger Menu */
  
  const getSavedValue = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
  }

  const [isLeft, setIsLeft] = useState(getSavedValue(isLeft, true));
  const [width, setWidth] = useState(getSavedValue(Number(width, 300)));


  const handleBurgerPosition = (leftSide) => {
    setIsLeft(leftSide); // true = "left", false = "right"
  };

  const handleBurgerWidth = (pixels) => {
    setWidth(pixels);
  };

  return (
    <SettingsContext.Provider
      value={{
        getSavedValue,

        handleBurgerPosition,
        isLeft,

        handleBurgerWidth,
        width
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsContext;
