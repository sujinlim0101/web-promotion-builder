import { useRecoilState } from "recoil";

import { viewModeState } from "../recoil/viewModeRecoil";

export const useViewModeState = () => {
  return useRecoilState(viewModeState);
}