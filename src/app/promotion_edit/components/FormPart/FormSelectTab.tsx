import { useEffect, useState } from "react";

import { useFormSelectTabState } from "@/hooks/useFormSelectTabState";
import { usePageState } from "@/hooks/usePageState";

const variants = {
  selected:
    "inline-block px-8 py-4 text-gray900 bg-gray100 rounded-lg active cursor-pointer ",
  unselected:
    "inline-block px-8 py-4 rounded-lg hover:text-gray900 hover:bg-gray50 cursor-pointer ",
};

export function FormSelectTab() {
  const [formSelectTab, setFormSelectTab] = useFormSelectTabState();
  const [pageState] = usePageState();
  const [isSelectedLayoutOrPage, setIsSelectedLayoutOrPage] = useState(false);

  useEffect(() => {
    setIsSelectedLayoutOrPage(
      !!(
        pageState.selected ||
        pageState.children.filter((child) => child.selected).length > 0
      )
    );
  }, [pageState]);

  useEffect(() => {
    if (isSelectedLayoutOrPage) {
      setFormSelectTab("style");
    }
  }, [isSelectedLayoutOrPage]);

  return (
    <ul className="text-gray600 flex flex-wrap text-sm font-medium text-center text-gray-500 mb-16 pb-8 mb-40 border-b border-gray200">
      <li className="mr-6">
        <a
          onClick={() => setFormSelectTab("style")}
          className={
            formSelectTab === "style" ? variants.selected : variants.unselected
          }
        >
          스타일
        </a>
      </li>
      {isSelectedLayoutOrPage ? null : (
        <li className="mr-6">
          <a
            onClick={() => setFormSelectTab("action")}
            className={
              formSelectTab === "action"
                ? variants.selected
                : variants.unselected
            }
          >
            액션
          </a>
        </li>
      )}
    </ul>
  );
}
