import React, { createContext, useState } from "react";

const SettingsContext = createContext([]);

export function SettingsProvider({ children }) {
  /* Burger Menu */
  const [isLeft, setIsLeft] = useState(true);
  const [width, setWidth] = useState(300);

  const handlePosition = (burgerSide) => {
    if (burgerSide === "left") {
      setIsLeft(true);
    } else if (burgerSide === "right") {
      setIsLeft(false);
    } else {
      setIsLeft(false);
    }
  };

  const handleWidth = (pixels) => {
    setWidth(pixels);
  };

  return (
    <SettingsContext.Provider
      value={{
        handlePosition,
        isLeft,

        handleWidth,
        width
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsContext;
