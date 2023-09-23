import { usePageState } from "@/hooks/usePageState";
import { pageState } from "@/recoil/pageRecoil";
const useSelectedById = (id) => {
  const [pageState, setPageState] = usePageState();

  const handleSelect = () => {
    setPageState({
      ...pageState,
      selected: false,
      children: pageState.children.map((child) => {
        if (child.id === id) {
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
};
