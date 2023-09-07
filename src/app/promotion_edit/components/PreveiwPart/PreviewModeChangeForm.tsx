"use client";


import { useForm } from "react-hook-form";

import { Select } from "@/components/Select";
import { viewPortOptions } from "@/constants/viewPort.constant";
import { usePageState } from "@/hooks/usePageState";
import { usePreviewViewportState } from "@/hooks/usePreviewViewportState";
import type { PreviewViewPort } from "@/types/styles.type";


type FormValues = {
    viewPort: PreviewViewPort;
    pageSelected: boolean;
  };

export const PreviewModeChangeForm = () => {

  const [viewPort, setViewPort] = usePreviewViewportState()
  const [pageState, setPageState] = usePageState();
  
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      viewPort: "small_mobile",
      pageSelected: false,
    },
    values: {
      pageSelected: pageState.selected,
      viewPort: viewPort,
    },
  });
  
  const onSubmit = (data: FormValues) => {
    setViewPort(data.viewPort);
    if (data.pageSelected === true) {
      setPageState({
        ...pageState,
        selected: true,
        children: pageState.children.map((child) => {
          return {
            ...child,
            selected: false,
            open: false,
            children: child.children.map((grandChild) => {
              return {
                ...grandChild,
                selected: false,
                open: false,
              };
            }),
          };
        }),
      });
    } else {
      setPageState({
        ...pageState,
        selected: false,
        children: pageState.children.map((child) => {
          return {
            ...child,
            selected: false,
            open: false,
            children: child.children.map((grandChild) => {
              return {
                ...grandChild,
                selected: false,
                open: false,
              };
            }),
          };
        }),
      });
    }
  };
  return       <form
    onChange={handleSubmit(onSubmit)}
    className="flex flex-row gap-8 justify-end mr-4 mb-4"
  >
    <Select
      {...register("viewPort")}
      options={viewPortOptions}
    />
    <Select
      {...register("pageSelected")}
      options={[
        { value: true, label: "전체 모드" },
        { value: false, label: "수정 모드" },
      ]}
    />
  </form>
}