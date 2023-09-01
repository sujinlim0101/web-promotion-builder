/* eslint-disable indent */
import React from "react";

import OpenBar from "@/components/OpenBar";
import { usePageState } from "@/hooks/usePageState";

import "../../selected.scss";
import { LayoutComponent } from "@/types/component.type";

import { useComponentSelect } from "../hooks/useComponentSelect";

interface WithLayoutSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  layout: LayoutComponent;
}

export default function WithLayoutSelect({
  children,
  layout,
}: WithLayoutSelectProps) {
  const [pageState] = usePageState();
  const { handleComponentSelect, handleLayoutSelect } =
    useComponentSelect(layout);

  console.log("pageState", pageState);

  return (
    <div onClick={handleComponentSelect}>
      {!pageState.selected && (
        <OpenBar
          selected={layout.selected}
          data-type="open-bar"
          handleOpen={handleLayoutSelect}
        />
      )}

      {React.cloneElement(children as React.ReactElement, {
        ...layout,
      })}
    </div>
  );
}
