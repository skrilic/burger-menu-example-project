import React, {createContext, useEffect, useState} from "react";

const ThemeSettingContext = createContext([]);
import * as AppLocalStorage from "./AppLocalStorageKeys";

export function ThemeSettingProvider({ children }) {
    const getSavedTheme = () => {
        return AppLocalStorage.get("theme") || "day-theme";
    };

    const [theme, setTheme] = useState(getSavedTheme());

    function handleTheme(theme) {
        setTheme((prevTheme)  => {
            document.body.classList.remove(prevTheme);
            return theme;
        });
        AppLocalStorage.set("theme", theme)
    };

    useEffect(() => {
        switch (theme) {
            case "night-theme":
                document.body.classList.add("night-theme");
                break;
            case "sepia-theme":
                document.body.classList.add("sepia-theme");
                break;
            default:
                document.body.classList.add("day-theme");
                break;
        }
    }, [theme]);

    return (
    <ThemeSettingContext.Provider value={{
        theme: theme,
        handleTheme: handleTheme
    }}>
      {children}
    </ThemeSettingContext.Provider>
  );
}

export default ThemeSettingContext;
