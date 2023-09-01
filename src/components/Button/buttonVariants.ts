import { tv } from "tailwind-variants";

import { spaceVariants } from "@/constants/variants/spaceVariants";

export const buttonVariants = tv({
  extend: spaceVariants,
  base: "font-semibold text-white py-4 px-12 rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue500 hover:bg-blue700",
      secondary: "bg-purple500 hover:bg-purple700",
      success: "bg-green500 hover:bg-green700",
    },
    size: {
      sm: "py-4 px-12 text-xs",
      md: "py-6 px-12 text-sm",
      lg: "py-8 px-24 text-md",
    },
    fullWidth: {
      true: "w-full",
    },
  },
});
