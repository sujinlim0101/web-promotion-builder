import { useEffect } from "react";

import { usePageState } from "./usePageState";

export const useDeleteSeletedByListener = () => {
  const [, setPageState] = usePageState();

  const deleteSelected = () => {
    setPageState((prev) => {
      // layout selected
      const selected = prev.children.find((child) => child.selected);
      if (selected) {
        return {
          ...prev,
          children: prev.children.filter((child) => child.id !== selected.id),
        };
      } else {
        // if children's children is selected
        return {
          ...prev,
          children: prev.children.map((child) => {
            return {
              ...child,
              children: child.children.filter(
                (grandChild) => !grandChild.selected
              ),
            };
          }),
        };
      }
    });
  };

  useEffect(() => {
    const deleteWithCtrlD = (e: KeyboardEvent) => {
      if (
        e.ctrlKey && // ctrl
        e.keyCode === 68 // d
      ) {
        const confirmed = window.confirm("정말 삭제하시겠습니까?");
        if (!confirmed) return;
        deleteSelected();
      }
    };

    const iframe = document.getElementById("iframe") as HTMLIFrameElement;

    iframe.contentWindow?.document.addEventListener("keydown", deleteWithCtrlD);
    window.addEventListener("keydown", deleteWithCtrlD);
    return () => {
      iframe.contentWindow?.document.removeEventListener(
        "keydown",
        deleteWithCtrlD
      );
      window.removeEventListener("keydown", deleteWithCtrlD);
    };
  }, []);
};
