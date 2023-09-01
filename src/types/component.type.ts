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

export interface SelectableComponent {
  name: ComponentTypeEnum;
  selected: boolean;
  id: string;
}

export type ActionComponent = {
  action: {
    type: "link" | "click" | "bridge" | null;
    payload?: string;
  };
};

export type Component =
  | ButtonComponent
  | TextComponent
  | ImageComponent
  | PageComponent
  | LayoutComponent;

export type ItemComponent = ButtonComponent | TextComponent | ImageComponent;

export interface ButtonComponent extends SelectableComponent, ActionComponent {
  name: ComponentTypeEnum.Button;
  text: string;
  color: "primary" | "secondary" | "success";
  size: "sm" | "md" | "lg";
  href?: string;
  fullWidth?: boolean;
  margin: SpaceGroup;
}

export interface TextComponent extends SelectableComponent, ActionComponent {
  name: ComponentTypeEnum.Text;
  text: string;
  align: "left" | "center" | "right";
  type: TextVariant;
  color: Color;
  font: Font;
  margin: SpaceGroup;
  padding: SpaceGroup;
}

export interface ImageComponent extends SelectableComponent, ActionComponent {
  name: ComponentTypeEnum.Image;
  src: string;
  width: number;
  height: number;
  justify: "start" | "center" | "end" | "inherit" | "between";
}

export interface LayoutComponent extends SelectableComponent {
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
}

export interface PageComponent extends SelectableComponent {
  name: ComponentTypeEnum.Page;
  selected: boolean;
  children: LayoutComponent[];
  id: "page";
  bgColor: Color;
  margin: SpaceGroup;
  padding: SpaceGroup;
}
