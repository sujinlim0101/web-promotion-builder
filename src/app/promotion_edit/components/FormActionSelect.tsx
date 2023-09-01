import { useForm } from "react-hook-form";

import { formActionValues } from "@/constants/component.constant";
import { useSelectedComponent } from "@/hooks/useSelectedComponent";
import { useUpdateSelectedFormData } from "@/hooks/useUpdateSelectedFormData";
import { Component } from "@/types/component.type";

import { FormRenderInput } from "./FormRenderInput";

export const FormActionSelect = () => {
  const [selectedComponent] = useSelectedComponent();
  const updateSelectedFormData = useUpdateSelectedFormData();

  const { register, handleSubmit } = useForm<Component>({
    values: selectedComponent,
  });

  return (
    <>
      <form
        className="flex flex-col gap-20"
        onChange={handleSubmit(updateSelectedFormData)}
      >
        {selectedComponent?.name ? (
          <FormRenderInput
            name={selectedComponent?.name}
            register={register}
            formValues={formActionValues}
          />
        ) : null}
      </form>
    </>
  );
};
