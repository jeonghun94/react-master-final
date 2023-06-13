import { atom } from "recoil";

export const themeState = atom<boolean>({
  key: "themeState",
  default: false,
});

export const clickedState = atom<null>({
  key: "clickedState",
  default: null,
});
