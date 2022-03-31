import React, {createContext, useEffect, useState} from "react";

const ThemeSettingContext = createContext([]);

export function ThemeSettingProvider({ children }) {
    const getSavedTheme = () => {
        return localStorage.getItem("theme");
    };

    const [theme, setTheme] = useState(getSavedTheme());

    function handleTheme(theme) {
        setTheme((prevTheme)  => {
            document.body.classList.remove(prevTheme);
            return theme;
        });
        localStorage.setItem("theme", theme);
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
        getSavedTheme: getSavedTheme,
        theme: theme,
        handleTheme: handleTheme
    }}>
      {children}
    </ThemeSettingContext.Provider>
  );
}

export default ThemeSettingContext;
