import { atom } from "recoil";

const isDarkMode = localStorage.getItem("isDarkMode");

export const themeState = atom<boolean>({
  key: "themeState",
  default: isDarkMode === "true" ? true : false,
});

export const clickedState = atom<null>({
  key: "clickedState",
  default: null,
});
