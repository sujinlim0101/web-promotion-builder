import { colors } from "./src/constants/colors";
import { spacing } from "./src/constants/spacing";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: spacing,
    colors: { ...colors },
    extend: {
      colors: colors,
      width: {
        375: "375px",
        414: "414px",
      },
      height: {
        667: "667px",
        896: "896px",
      },
    },
  },
  safelist: [
    // bg
    ...Object.keys(colors).map((key) => `bg-${key}`),
    // text color
    ...Object.keys(colors).map((key) => `text-${key}`),
    // margin
    ...Object.keys(spacing).map((key) => `mt-${key}`),
    ...Object.keys(spacing).map((key) => `mb-${key}`),
    ...Object.keys(spacing).map((key) => `ml-${key}`),
    ...Object.keys(spacing).map((key) => `mr-${key}`),
    // padding
    ...Object.keys(spacing).map((key) => `pt-${key}`),
    ...Object.keys(spacing).map((key) => `pb-${key}`),
    ...Object.keys(spacing).map((key) => `pl-${key}`),
    ...Object.keys(spacing).map((key) => `pr-${key}`),
    // gap
    ...Object.keys(spacing).map((key) => `gap-${key}`),
  ],
  plugins: [],
};

export type TailwindConfig = typeof config;

export type KeyOfTheme<T extends keyof TailwindConfig["theme"]> =
  keyof TailwindConfig["theme"][T];

export type ValueOfTheme<T extends keyof TailwindConfig["theme"]> =
  TailwindConfig["theme"][T][KeyOfTheme<T>];

export default config;
