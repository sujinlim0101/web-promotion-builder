import { tv } from "tailwind-variants";

import { spaceVariants } from "@/constants/variants/spaceVariants";
import { generateTwVariants } from "@/utils/generateVariants";

export const textVariant = tv({
  base: "text-base leading-normal",
  extend: spaceVariants,
  variants: {
    type: {
      h1: "text-4xl font-bold leading-relaxed",
      h2: "text-3xl font-bold leading-relaxed",
      h3: "text-2xl font-bold leading-relaxed",
      h4: "text-xl font-bold leading-relaxed",
      h5: "text-lg font-bold leading-relaxed",
      h6: "text-base font-bold leading-relaxed",
      body1: "text-base leading-relaxed",
      body2: "text-sm",
      caption: "text-xs",
      overline: "text-xs uppercase",
      subtitle1: "text-sm",
      subtitle2: "text-xs",
    },
    color: generateTwVariants("colors", "text"),
    font: {
      sans: "font-sans",
      serif: "font-serif",
      mono: "font-mono",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
});
