import React, { ReactNode } from "react";

import { BsImage } from "react-icons/bs";
import { FiLayout } from "react-icons/fi";
import { RxButton } from "react-icons/rx";
import { TbTextSize } from "react-icons/tb";

import { ComponentTypeEnum } from "@/types/component.type";

export interface PickComponent {
  component: ComponentTypeEnum;
  icon: ReactNode;
}

export const picks: PickComponent[] = [
  {
    component: ComponentTypeEnum.Layout,
    icon: <FiLayout />,
  },
  {
    component: ComponentTypeEnum.Button,
    icon: <RxButton />,
  },
  {
    component: ComponentTypeEnum.Image,
    icon: <BsImage />,
  },
  {
    component: ComponentTypeEnum.Text,
    icon: <TbTextSize />,
  },
];
