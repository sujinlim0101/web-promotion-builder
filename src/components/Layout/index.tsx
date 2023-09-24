import type { CSSProperties, ReactNode } from "react";

import { Color, Spacing } from "@/types/styles.type";

import { layoutVariants } from "./layoutVariants";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  display?: "flex" | "inline-flex" | "block" | "inline-block";
  direction?: "col" | "row";
  spacing?: Spacing;
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
  flexType?: "flex" | "inline-flex";
  items?: "start" | "center" | "initial" | "inherit";
  justify?: "start" | "center" | "end" | "inherit" | "between";
  margin?: {
    top?: Spacing;
    bottom?: Spacing;
    left?: Spacing;
    right?: Spacing;
  };
  padding?: {
    top?: Spacing;
    bottom?: Spacing;
    left?: Spacing;
    right?: Spacing;
  };
  bgColor?: Color;
  position?: "absolute" | "relative" | "fixed" | "sticky" | "static";
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
}

export const Layout = ({
  display = "flex",
  direction = "col",
  spacing = 0,
  style = {},
  className = "",
  children,
  flexType = "flex",
  items = "inherit",
  justify = "inherit",
  margin = {},
  padding = {},
  bgColor,
  position,
  bottom,
  left,
  right,
  top,
  ...args
}: LayoutProps) => {
  return (
    <div
      style={style}
      className={layoutVariants({
        display,
        direction,
        justify,
        items,
        flexType,
        gap: spacing,
        mt: margin.top,
        mb: margin.bottom,
        ml: margin.left,
        mr: margin.right,
        pt: padding.top,
        pb: padding.bottom,
        pl: padding.left,
        pr: padding.right,
        position,
        bottom,
        left,
        right,
        top,
        bgColor,
        class: "flex-wrap	" + className,
      })}
      {...args}
    >
      {children}
    </div>
  );
};
