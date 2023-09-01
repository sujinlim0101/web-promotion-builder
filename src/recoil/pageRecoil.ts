import { atom } from "recoil";
import { v4 } from "uuid";

import { defaultStyleValues } from "@/constants/component.constant";
import { ComponentTypeEnum, PageComponent } from "@/types/component.type";

export const pageState = atom<PageComponent>({
  key: "pageState",
  default: {
    id: "page",
    selected: false,
    ...defaultStyleValues[ComponentTypeEnum.Page],
    children: [
      {
        id: v4(),
        selected: true,
        open: true,
        ...defaultStyleValues[ComponentTypeEnum.Layout],
        children: [],
      },
    ],
  },
});
