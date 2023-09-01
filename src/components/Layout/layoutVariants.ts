import { tv } from "tailwind-variants";

import { spaceVariants } from "@/constants/variants/spaceVariants";
import { generateTwVariants } from "@/utils/generateVariants";

export const layoutVariants = tv({
  extend: [spaceVariants],
  variants: {
    direction: {
      row: "flex-row",
      col: "flex-col",
      "row-reverse": "flex-row-reverse",
      "col-reverse": "flex-col-reverse",
    },
    bgColor: generateTwVariants("colors", "bg"),
    items: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      baseline: "items-baseline",
      stretch: "items-stretch",
      initial: "items-initial",
      inherit: "items-inherit",
    },

    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      initial: "justify-initial",
      inherit: "justify-inherit",
    },
    flexType: {
      flex: "flex",
      "inline-flex": "inline-flex",
    },
    gap: generateTwVariants("spacing", "gap"),
    mt: generateTwVariants("spacing", "mt"),
    mr: generateTwVariants("spacing", "mr"),
    mb: generateTwVariants("spacing", "mb"),
    ml: generateTwVariants("spacing", "ml"),
    pt: generateTwVariants("spacing", "pt"),
    pr: generateTwVariants("spacing", "pr"),
    pb: generateTwVariants("spacing", "pb"),
    pl: generateTwVariants("spacing", "pl"),
  },
});
