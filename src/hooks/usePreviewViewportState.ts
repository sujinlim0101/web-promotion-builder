import { useRecoilState } from "recoil";

import { previewVeiwportState } from "@/recoil/previewVeiwportRecoil";


export const usePreviewViewportState = () => {
  return useRecoilState(previewVeiwportState);   
}