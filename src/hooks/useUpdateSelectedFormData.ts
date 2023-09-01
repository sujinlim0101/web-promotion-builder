import {
  Component,
  ComponentTypeEnum,
  ItemComponent,
  LayoutComponent,
  PageComponent,
} from "@/types/component.type";

import { usePageState } from "./usePageState";
import { useSelectedComponent } from "./useSelectedComponent";

export const useUpdateSelectedFormData = () => {
  const [pageState, setPageState] = usePageState();
  const [selectedComponent] = useSelectedComponent();

  const updateSelectedFormData = (data: Component) => {
    // if page is selected
    if (
      pageState.selected &&
      selectedComponent?.name === ComponentTypeEnum.Page
    ) {
      setPageState({
        ...pageState,
        ...(data as PageComponent),
      });
      return;
    }

    // if layout is selected
    if (selectedComponent?.name === ComponentTypeEnum.Layout) {
      setPageState({
        ...pageState,
        children: pageState.children.map((child) => {
          if (child.id === selectedComponent?.id) {
            return {
              ...child,
              ...data,
            } as LayoutComponent;
          }
          return child;
        }),
      });
      return;
    } else {
      // if item is selected
      setPageState({
        ...pageState,
        children: pageState.children.map((child) => {
          if (child.open) {
            return {
              ...child,
              children: child.children.map((grandChild) => {
                if (grandChild.id === selectedComponent?.id) {
                  return {
                    ...grandChild,
                    ...data,
                  } as ItemComponent;
                }
                return grandChild;
              }),
            };
          }
          return child;
        }),
      });
    }
  };

  return updateSelectedFormData;
};
