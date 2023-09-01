import type { CSSProperties, ReactNode } from "react";

import { Color, Spacing } from "@/types/styles.type";

import { layoutVariants } from "./layoutVariants";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
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
}

export const Layout = ({
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
  ...args
}: LayoutProps) => {
  return (
    <div
      style={style}
      className={layoutVariants({
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
        bgColor,
        class: className,
      })}
      {...args}
    >
      {children}
    </div>
  );
};
