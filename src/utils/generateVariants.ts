import tailwindConfig, { TailwindConfig } from "../../tailwind.config";

export const generateTwVariants = <T extends keyof TailwindConfig["theme"]>(
  targetToken: T,
  twProp: string,
  twModifier?: string // https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-class-reference
) =>
  Object.fromEntries(
    Object.keys(tailwindConfig.theme![targetToken]).map((key) => [
      key,
      `${twModifier ? `${twModifier}:` : ""} ${twProp}-${key}`,
    ])
  ) as Record<keyof TailwindConfig["theme"][T], `${typeof twProp}`>;
