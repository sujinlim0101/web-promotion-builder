"use client";

import { useFormSelectTabState } from "@/hooks/useFormSelectTabState";

import { FormActionSelect } from "./FormActionSelect";
import { FormSelectTab } from "./FormSelectTab";
import { FormStyleSelect } from "./FormStyleSelect";

export const FormPart = () => {
  const [formSelectTabState] = useFormSelectTabState();
  return (
    <div className="p-24 h-full border-white w-[300px] bg-white dark:bg-gray800">
      <FormSelectTab />
      {formSelectTabState === "style" ? <FormStyleSelect /> : null}
      {formSelectTabState === "action" ? <FormActionSelect /> : null}
    </div>
  );
};
