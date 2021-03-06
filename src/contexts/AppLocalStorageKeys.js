const APP_NAME = "BurgerScaffold";
const getKey = key => `${APP_NAME}.${key}`;

export const set = (key, value) =>
    localStorage.setItem(getKey(key), value);

export const get = key => localStorage.getItem(getKey(key));