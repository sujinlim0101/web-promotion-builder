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
    // delete keyboard listener for onl backspace
    const deleteWithBackSpace = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        // no input focus and delete key is pressed
        if (document.activeElement?.tagName === "INPUT") return;

        const confirmed = window.confirm("정말 삭제하시겠습니까?");
        if (!confirmed) return;
        deleteSelectedByListener();
      }
    };

    window.addEventListener("keydown", deleteWithBackSpace);

    return () => {
      window.removeEventListener("keydown", deleteWithBackSpace);
    };
  }, [pageState]);

  console.log("pageState", pageState);
};
