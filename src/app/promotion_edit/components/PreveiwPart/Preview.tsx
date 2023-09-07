"use client";

import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { Select } from "@/components/Select";
import { usePageState } from "@/hooks/usePageState";

import { PreviewLayout } from "./PreviewLayout";

type FormValues = {
  viewPort: string;
  pageSelected: boolean;
};

const scheme = yup.object({
  viewPort: yup.string().required(),
  pageSelected: yup.boolean().required(),
});

export default function Preview() {
  const [viewPort, setViewPort] = useState("small_mobile");
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
    resolver: yupResolver(scheme),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
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

  console.log(pageState);

  return (
    <div className="p-16">
      <form
        onChange={handleSubmit(onSubmit)}
        className="flex flex-row gap-8 justify-end mr-4 mb-4"
      >
        <Select
          {...register("viewPort")}
          options={[
            { value: "small_mobile", label: "Small Mobile" },
            { value: "large_mobile", label: "Large Mobile" },
          ]}
        />
        <Select
          {...register("pageSelected")}
          options={[
            { value: true, label: "전체 모드" },
            { value: false, label: "수정 모드" },
          ]}
        />
      </form>
      <div className="border-8 border-gray900 mt-16 rounded-lg">
        <div
          className={`bg-white relative transform ${
            viewPort === "small_mobile" ? "w-375 h-667" : "w-414 h-896"
          }`}
        >
          <PreviewLayout />
        </div>
      </div>
    </div>
  );
}
