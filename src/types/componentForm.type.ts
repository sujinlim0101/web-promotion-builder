import { HTMLInputTypeAttribute } from "react";

import { FieldValues } from "react-hook-form";

import { Layout } from "./../components/Layout/index";
import {
  ButtonComponent,
  ImageComponent,
  LayoutComponent,
  PageComponent,
  TextComponent,
} from "./component.type";

type OmitFormValues<T extends FieldValues> = Omit<
  T,
  "selected" | "id" | "children"
>;

export type ComponentForm<T = any> = (
  | {
      component: "Input";
      type?: HTMLInputTypeAttribute;
      name: keyof T;
      label: string;
    }
  | {
      component: "Select";
      options: {
        label: string;
        value: any;
      }[];
      name: keyof T;
      label: string;
    }
  | {
      component: "SpaceInput";
      name: keyof T;
      label: string;
    }
)[];

export interface ButtonForm extends ComponentForm<ButtonComponent> {}

export interface ButtonFormValues extends OmitFormValues<ButtonComponent> {}

export interface TextForm extends ComponentForm<TextComponent> {}

export interface TextFormValues extends OmitFormValues<TextComponent> {}

export interface ImageForm extends ComponentForm<ImageComponent> {}

export interface ImageFormValues extends OmitFormValues<ImageComponent> {}

export interface LayoutForm extends ComponentForm<LayoutComponent> {}

export interface LayoutFormValues extends OmitFormValues<LayoutComponent> {}

export interface PageForm extends ComponentForm<PageComponent> {}

export interface PageFormValues extends OmitFormValues<PageComponent> {}
