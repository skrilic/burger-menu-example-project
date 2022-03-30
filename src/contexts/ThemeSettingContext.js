import React, {createContext, useEffect, useState} from "react";

const themes = {
    night: "night-theme",
    day: "day-theme"
}

const ThemeSettingContext = createContext({
    theme: themes.night,
    changeTheme: () => {},
});


export function ThemeSettingProvider({ children }) {
    const [theme, setTheme] = useState(themes.day);

    function changeTheme(theme) {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme) {
            case themes.day:
                document.body.classList.add("day-theme");
                break;
            case themes.night:
                document.body.classList.add("night-theme");
                break;
            default:
                document.body.classList.add("day-theme");
                break;
        }
    }, [theme]);

    return (
    <ThemeSettingContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {children}
    </ThemeSettingContext.Provider>
  );
}

export default ThemeSettingContext;
