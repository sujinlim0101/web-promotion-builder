
import { useEffect } from "react";

import { Path, useFieldArray, useForm } from "react-hook-form";
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { Input } from "@/components/Input";
import { Label } from "@/components/Label";
import { Select } from "@/components/Select";
import { usePageState } from "@/hooks/usePageState";
import { useSelectedComponent } from "@/hooks/useSelectedComponent";
import { useUpdateSelectedFormData } from "@/hooks/useUpdateSelectedFormData";
import { Component, ItemComponent } from "@/types/component.type";
import { Action } from "@/types/component.type";

export const FormActionSelect = () => {
  const [selectedComponent] = useSelectedComponent();
  const updateSelectedFormData = useUpdateSelectedFormData();
  const [pageState, setPageState] = usePageState();

  const { register, handleSubmit, control, getValues, reset, watch } = useForm<Component>({
    mode: "onChange"
  });

  const { fields, append,  remove } = useFieldArray({
    control,
    name: "action.payload",
  });

  useEffect(() => {
    reset(selectedComponent);
  }, [selectedComponent])

  const watchActionType = watch("action.type");

  const updateAction = (data: Component, id?: string) => {
    setPageState({
      ...pageState,
      children: pageState.children.map((child) => {
        if (child.open) {
          return {
            ...child,
            children: child.children.map((grandChild) => {
              if (grandChild.id === id) {
                return {
                  ...grandChild,
                  ...data,
                } as ItemComponent;
              }
              return grandChild;
            }),
          };
        }
        return child;
      }),
    });
  }


  return (
    <form
      className="flex flex-col gap-20"
      onChange={handleSubmit((data) => updateAction(data, selectedComponent?.id))}
    >
      <Select
        label="액션 타입"
        {...register("action.type" as Path<Component>)}
        options={[
          { label: "링크", value: "link" },
          { label: "브릿지", value: "bridge" },
          { label: "클릭", value: "click" },
        ]}
      />
      {watchActionType === "link" && <Input
        label="링크 주소"
        name="action.href"
        register={register}
        type="text"
      />}

      {watchActionType === "bridge" && <Select
        label="브릿지 이름"
        {...register("action.bridgeName" as Path<Component>)}
        options={[
          { label: "DownloadCoupon", value: "DownloadCoupon" },
          { label: "DownloadApp", value: "DownloadApp" },
          { label: "OpenApp", value: "OpenApp" },
          { label: "OpenUrl", value: "OpenUrl" },
        ]}
      />}
      {watchActionType === "bridge" && <div>
        <Label label="payload" />
        {
          fields.map((field, index) => {
            return (
              <div key={field.id}>

                <Input
                  name={`action.payload.${index}.text`}
                  register={register}

                />
                <button type="button" className="flex text-sm ml-auto text-gray500"
                  onClick={() => {
                    remove(index);
                    updateSelectedFormData(getValues());
                  }}>
                    Delete
                </button>
              </div>
            );
          }
          )
        }
        <button
          className="flex justify-center w-full items-center gap-2 text-sm text-gray500"
          type="button"
          onClick={() => {
            append({text: ""});
          }}
        > payload 추가
          <AiOutlinePlusCircle />
        </button>

        
      </div>}

      {
        watchActionType === "click" &&
        <Input
          label="클릭 이벤트"
          name="action.event"
          register={register}
          type="text"
        />

      }

    </form>
  );
};