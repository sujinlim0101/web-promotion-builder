import React from "react";

import { SpaceGroup } from "@/types/component.type";
import { Color } from "@/types/styles.type";
import { Font, TextVariant } from "@/types/text.type";

import { textVariant } from "./textVariant";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  color: Color;
  font: Font;
  type: TextVariant;
  align?: "left" | "center" | "right";
  margin?: SpaceGroup;
  padding?: SpaceGroup;
}

export function Text({
  text,
  type,
  color,
  font,
  align,
  margin,
  padding,
  ...args
}: TextProps) {
  return (
    <div
      className={textVariant({
        type,
        color,
        font,
        align,
        mt: margin?.top,
        mb: margin?.bottom,
        ml: margin?.left,
        mr: margin?.right,
        pt: padding?.top,
        pb: padding?.bottom,
        pl: padding?.left,
        pr: padding?.right,
      })}
      {...args}
    >
      {text}
    </div>
  );
}
