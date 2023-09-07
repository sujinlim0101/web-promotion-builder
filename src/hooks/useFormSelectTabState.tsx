import { useRecoilState } from "recoil";

import { formSelectTabState } from "@/recoil/formSelectTabRecoil";

export const useFormSelectTabState = () => {
  return useRecoilState(formSelectTabState);
};
