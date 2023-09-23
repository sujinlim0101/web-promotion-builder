"use client";


import { useForm } from "react-hook-form";

import { Select } from "@/components/Select";
import { viewPortOptions } from "@/constants/viewPort.constant";
import { usePageState } from "@/hooks/usePageState";
import { usePreviewViewportState } from "@/hooks/usePreviewViewportState";
import { useViewModeState } from "@/hooks/useViewModeState";
import type { PreviewViewPort } from "@/types/styles.type";


type FormValues = {
    viewPort: PreviewViewPort;
    viewMode: "edit" | "page"
  };

export const PreviewModeChangeForm = () => {

  const [viewPort, setViewPort] = usePreviewViewportState()
  const [, setViewMode] = useViewModeState();

  const [pageState, setPageState] = usePageState();
  
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      viewPort: "small_mobile",
      viewMode: "edit",
    },
    values: {
      viewPort: viewPort,
      viewMode: pageState.selected ? "page" : "edit",

    },
  });
  
  const onSubmit = (data: FormValues) => {
    setViewPort(data.viewPort);
    setViewMode(data.viewMode);
  
    if (data.viewMode === "page") {
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
  return (
    <form
      onChange={handleSubmit(onSubmit)}
      className="flex flex-row gap-8 justify-center mr-4 mb-4"
    >
      <Select
        {...register("viewPort")}
        options={viewPortOptions}
      />
      <Select
        {...register("viewMode")}
        options={[
          { label: "페이지 모드", value: "page" },
          { label: "편집 모드", value: "edit" },
        ]}
      />
    </form>
  )
}