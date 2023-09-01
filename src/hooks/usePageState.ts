import { useRecoilState } from "recoil";

import { pageState } from "@/recoil/pageRecoil";

export const usePageState = () => {
  return useRecoilState(pageState);
};
