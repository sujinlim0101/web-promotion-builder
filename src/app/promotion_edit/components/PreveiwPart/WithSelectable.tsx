/* eslint-disable indent */
import React from "react";

import "../../../selected.scss";
import { LayoutComponent } from "@/types/component.type";

import { useComponentSelect } from "../../hooks/useComponentSelect";

interface WithLayoutSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  layout: LayoutComponent;
}

export const WithSelectable = ({ children, layout }: WithLayoutSelectProps) => {
  const { handleComponentSelect, handleLayoutSelect } =
    useComponentSelect(layout);

  return (
    <div onClick={handleComponentSelect}>
      {React.cloneElement(children as React.ReactElement, {
        ...layout,
        onClick: handleLayoutSelect,
      })}
    </div>
  );
};
