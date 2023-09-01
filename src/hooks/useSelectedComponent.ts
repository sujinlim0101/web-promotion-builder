import { useEffect, useState } from "react";

import { Component, LayoutComponent } from "@/types/component.type";

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

    const openLayout = pageState.children.find(
      (child) => child.open
    ) as LayoutComponent;

    // if item is selected
    if (openLayout) {
      // open layout's selected child
      const selectedChild = openLayout.children.find(
        (child) => child.selected
      ) as unknown as Component;
      setSelectedComponent(selectedChild);
    }
  }, [pageState]);

  return [selectedComponent, setSelectedComponent] as const;
};
