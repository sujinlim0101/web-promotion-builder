import { Path, UseFormRegister } from "react-hook-form";

import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { SpaceInput } from "@/components/SpaceInput";
import { TextArea } from "@/components/TextArea";
import {
  formActionValues,
  formStyleValues,
} from "@/constants/component.constant";
import { Component, ComponentTypeEnum } from "@/types/component.type";

interface FormRenderInputProps {
  name: ComponentTypeEnum;
  register: UseFormRegister<Component>;
  formValues: typeof formStyleValues | typeof formActionValues;
}

export const FormRenderInput = ({
  name,
  register,
  formValues,
}: FormRenderInputProps) => {
  return (
    <>
      {formValues[name]?.map((element, index) => {
        if (element.component === "SpaceInput") {
          return (
            <SpaceInput<Component>
              key={index}
              name={element.name as Path<Component>}
              register={register}
              label={element.label}
            />
          );
        } else if (element.component === "Input") {
          return (
            <Input<Component>
              key={index}
              label={element.label}
              name={element.name as Path<Component>}
              register={register}
              type={element.type}
            />
          );
        } else if (element.component === "Select") {
          return (
            <Select
              key={index}
              label={element.label}
              {...register(element.name as Path<Component>)}
              options={element.options}
            />
          );
        } else if (element.component === "TextArea") {
          return (
            <TextArea
              key={index}
              label={element.label}
              register={register}
              name={element.name as Path<Component>}
            />)
        }
      })}
    </>
  );
};
