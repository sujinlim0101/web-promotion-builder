// use page recoil state and setState
import { useRecoilState } from "recoil";

import { formSelectTabState } from "@/recoil/formSelectTab";

export const useFormSelectTabState = () => {
  return useRecoilState(formSelectTabState);
};
