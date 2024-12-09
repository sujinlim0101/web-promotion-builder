import { colors } from "./../constants/colors";
import { spacing } from "./../constants/spacing";

export type Color = keyof typeof colors;

export type Spacing = keyof typeof spacing;

export type PreviewViewPort = "small_mobile" | "large_mobile"