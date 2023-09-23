import { usePageState } from "@/hooks/usePageState";

export const useComponentSelect = () => {
  const [pageState, setPageState] = usePageState();
  const updateChildrenSelectedById = (id: string) => {
    // update pageState selected false and compare children or children's children id and update selected true

    setPageState({
      ...pageState,
      selected: false,
      children: pageState.children.map((child) => {
        if (child.id === id) {
          return {
            ...child,
            selected: true,
            children: child.children.map((grandChild) => {
              return {
                ...grandChild,
                selected: false,
              };
            }),
          };
        } else {
          return {
            ...child,
            selected: false,
            children: child.children.map((grandChild) => {
              if (grandChild.id === id) {
                return {
                  ...grandChild,
                  selected: true,
                };
              } else {
                return {
                  ...grandChild,
                  selected: false,
                };
              }
            }),
          };
        }
      }),
    });
  };

  const updatePageSelected = () => {
    // page selected true and children and children's children selected false
    setPageState({
      ...pageState,
      selected: true,
      children: pageState.children.map((child) => {
        return {
          ...child,
          selected: false,
          children: child.children.map((grandChild) => {
            return {
              ...grandChild,
              selected: false,
            };
          }),
        };
      }),
    });
  };

  return {
    updateChildrenSelectedById,
    updatePageSelected,
  };
};
