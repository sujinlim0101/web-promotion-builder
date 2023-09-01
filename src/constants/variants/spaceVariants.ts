import { tv } from "tailwind-variants";

import { generateTwVariants } from "../../utils/generateVariants";

export const spaceVariants = tv({
  variants: {
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
