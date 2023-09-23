import { useDeleteSeletedByListener } from "@/hooks/useDeleteSeletedByListener";
import { usePageState } from "@/hooks/usePageState";

import { useComponentSelect } from "../../hooks/useComponentSelect";

import { LayoutDropdown } from "./LayoutDropdown";

export const StructurePart = () => {
  const [pageState] = usePageState();
  const { updatePageSelected } = useComponentSelect();
  useDeleteSeletedByListener();

  return (
    <div className="w-[200px] border-1 border-gray300 border-solid">
      <div
        onClick={updatePageSelected}
        className={`p-16 ${pageState.selected ? "bg-blue50" : ""}`}
      >
        page
      </div>
      {pageState.children.map((child) => {
        return (
          // use dropdown component
          <div key={child.id}>
            <LayoutDropdown child={child} />
          </div>
        );
      })}
    </div>
  );
};
