import { Color, Spacing } from "./styles.type";
import { Font, TextVariant } from "./text.type";

export type ComponetType = "item" | "layout";

export enum ComponentTypeEnum {
  Button = "Button",
  Text = "Text",
  Image = "Image",
  Page = "Page",
  Layout = "Layout",
}

export interface SpaceGroup {
  top: Spacing;
  bottom: Spacing;
  left: Spacing;
  right: Spacing;
}

export interface Selectable {
  name: ComponentTypeEnum;
  selected: boolean;
  id: string;
}

type BridgeName = "openWeb" | "downloadCoupon" | "moveToApp"


export type Action = {
  action: {
    type: "bridge" | null;
    bridgeName?: BridgeName
    payload: (string | number)[];
  }
};


export type Component =
  | ButtonComponent
  | TextComponent
  | ImageComponent
  | PageComponent
  | LayoutComponent

export type ItemComponent = ButtonComponent | TextComponent | ImageComponent;

export interface ButtonComponent extends Selectable, Action {
  name: ComponentTypeEnum.Button;
  text: string;
  color: "primary" | "secondary" | "success";
  size: "sm" | "md" | "lg";
  href?: string;
  fullWidth?: boolean;
  margin: SpaceGroup;
}

export interface TextComponent extends Selectable, Action {
  name: ComponentTypeEnum.Text;
  text: string;
  align: "left" | "center" | "right";
  type: TextVariant;
  color: Color;
  font: Font;
  margin: SpaceGroup;
  padding: SpaceGroup;
}

export interface ImageComponent extends Selectable, Action {
  name: ComponentTypeEnum.Image;
  src: string;
  width: number;
  height: number;
  justify: "start" | "center" | "end" | "inherit" | "between";
}

export interface LayoutComponent extends Selectable, Action {
  name: ComponentTypeEnum.Layout;
  direction: "row" | "col";
  items: "start" | "center" | "initial" | "inherit";
  justify: "start" | "center" | "end" | "inherit" | "between";
  children: ItemComponent[];
  margin?: SpaceGroup;
  padding?: SpaceGroup;
  bgColor?: Color;
  open?: boolean;
  spacing?: Spacing;
  position?: "static" | "fixed" | "absolute" | "relative" | "sticky";
}

export interface PageComponent extends Selectable, Action {
  name: ComponentTypeEnum.Page;
  selected: boolean;
  children: LayoutComponent[];
  id: "page";
  bgColor: Color;
  margin: SpaceGroup;
  padding: SpaceGroup;
}
