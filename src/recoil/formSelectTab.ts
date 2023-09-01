import { atom } from "recoil";

import { FormSelectTabType } from "@/types/formSelect.type";

export const formSelectTabState = atom<FormSelectTabType>({
  key: "formSelectTab",
  default: "style",
});
