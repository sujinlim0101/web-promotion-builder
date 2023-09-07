import { atom } from "recoil";

export const viewModeState = atom<"edit" | "page">({
  key: "viewMode",
  default: "edit"
});
