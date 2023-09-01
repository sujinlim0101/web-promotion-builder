import { SyntheticEvent } from "react";

import { usePageState } from "@/hooks/usePageState";
import { LayoutComponent } from "@/types/component.type";

export const useComponentSelect = (layout: LayoutComponent) => {
  const [pageState, setPageState] = usePageState();
  const handleLayoutSelect = () => {
    setPageState({
      ...pageState,
      selected: false,
      children: pageState.children.map((child) => {
        if (child.id === layout.id) {
          return {
            ...child,
            selected: true,
            open: true,
            // make unselected and close of children
            children: child.children.map((grandChild) => {
              return {
                ...grandChild,
                selected: false,
                open: false,
              };
            }),
          };
        }
        return { ...child, open: false, selected: false };
      }),
    });
  };

  const handleItemSelect = (e: SyntheticEvent<HTMLElement, Event>) => {
    // @ts-ignore
    const elementId = e.target.dataset.id;
    if (!elementId) {
      return;
    }
    // find deeply nested element and make it selected and close and unselect other layouts or children
    setPageState({
      ...pageState,
      selected: false,
      children: pageState.children.map((child) => {
        return {
          ...child,
          selected: false,
          // if its' children is selected, open it
          open: child.children.find((grandChild) => grandChild.id === elementId)
            ? true
            : child.open,
          children: child.children.map((grandChild) => {
            if (grandChild.id === elementId) {
              return {
                ...grandChild,
                selected: true,
              };
            }
            return {
              ...grandChild,
              selected: false,
            };
          }),
        };
      }),
    });
  };

  const handleComponentSelect = (e: React.MouseEvent<HTMLElement>) => {
    // @ts-ignore
    const isItem = e.target.dataset.type === "item";
    if (isItem) handleItemSelect(e);
    if (!isItem) handleLayoutSelect();
  };

  return {
    handleLayoutSelect,
    handleComponentSelect,
  };
};
