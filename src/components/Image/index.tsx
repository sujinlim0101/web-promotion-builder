import React from "react";

import { layoutVariants } from "../Layout/layoutVariants";

interface ImageProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  width: number;
  height?: number;
  justify?: "start" | "center" | "end" | "inherit" | "between";
  alt?: string;
}

export function Image({
  src,
  width,
  height,
  justify = "center",
  alt,
  ...args
}: ImageProps) {
  return (
    <div
      className={layoutVariants({
        flexType: "flex",
        direction: "row",
        justify: justify,
      })}
    >
      <img src={src} width={width} height={height} {...args} alt={alt} />
    </div>
  );
}
