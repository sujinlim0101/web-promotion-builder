import { PreviewViewPort } from "@/types/styles.type";

export interface ViewPortOption {
    value: PreviewViewPort;
    label: string;
}

export const viewPortOptions: ViewPortOption[] = [
  {
    value: "small_mobile",
    label: "small_mobile"
  },
  {
    value: "large_mobile",
    label: "large_mobile"
  }
]