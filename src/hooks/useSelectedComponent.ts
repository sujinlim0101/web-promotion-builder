import { useEffect, useState } from "react";

import { Component, LayoutComponent } from "@/types/component.type";

import { useFormSelectTabState } from "./useFormSelectTabState";
import { usePageState } from "./usePageState";

export const useSelectedComponent = () => {
  const [pageState] = usePageState();
  const [selectedComponent, setSelectedComponent] = useState<Component>();

  useEffect(() => {
    // if page is selected
    if (pageState.selected) {
      setSelectedComponent(pageState);
      return;
    }

    // if layout is selected
    const selectedLayout = pageState.children.find(
      (child) => child.selected
    ) as LayoutComponent;

    if (selectedLayout) {
      setSelectedComponent(selectedLayout);
      return;
    }

    // if children's children is selected
    const selectedComponent = pageState.children
      .map((child) => child.children)
      .flat()
      .find((child) => child.selected);

    if (selectedComponent) {
      setSelectedComponent(selectedComponent);
      return;
    }
  }, [pageState]);

  return [selectedComponent, setSelectedComponent] as const;
};
