import { useEffect } from "react";

import { LayoutComponent, PageComponent } from "@/types/component.type";

import { usePageState } from "./usePageState";

export const useDeleteSeletedByListener = () => {
  const [pageState, setPageState] = usePageState();

  const deleteSelectedByListener = () => {
    // if layout is selected
    const selectedLayout = pageState.children.find(
      (child) => child.selected
    ) as LayoutComponent;

    if (selectedLayout) {
      setPageState({
        ...pageState,
        children: pageState.children.filter(
          (child) => child.id !== selectedLayout.id
        ),
      });
      return;
    }

    // if children's children is selected
    setPageState({
      ...pageState,
      children: pageState.children.map((child) => {
        return {
          ...child,
          children: child.children.filter((grandChild) => !grandChild.selected),
        };
      }),
    });
  };

  useEffect(() => {
    // delete keyboard listener
    window.addEventListener("keydown", deleteSelectedByListener);
    return () => {
      window.removeEventListener("keydown", deleteSelectedByListener);
    };
  }, [pageState]);

  console.log("pageState", pageState);
};
