import { useEffect, useState } from "react";

import { Dropdown } from "@/components/Dropdown";
import { picks } from "@/constants/pick.constant";
import { usePageState } from "@/hooks/usePageState";
import { ComponentTypeEnum, LayoutComponent } from "@/types/component.type";

import { useComponentSelect } from "../../hooks/useComponentSelect";

export const LayoutDropdown = ({ child }: { child: LayoutComponent }) => {
  const { updateChildrenSelectedById } = useComponentSelect();
  const [open, setOpen] = useState(false);
  const [hasSelectedChildren, setHasSelectedChildren] = useState(false);

  const [pageState, setPageState] = usePageState();

  useEffect(() => {
    const hasSelectedChildren = child.children.some(
      (grandChild) => grandChild.selected
    );
    setHasSelectedChildren(hasSelectedChildren);
    if (hasSelectedChildren) setOpen(true);
  }, [pageState]);

  const getItemIcon = (name: ComponentTypeEnum) => {
    const pick = picks.find((pick) => pick.component === name);
    if (pick) {
      return pick.icon;
    }
  };

  return (
    <Dropdown
      title={
        <div className="flex gap-8 items-center">
          {picks.find((pick) => pick.component === child.name)?.icon}
          <div>{child.name}</div>
        </div>
      }
      id={child.id}
      selected={child.selected}
      items={child.children.map((grandChild) => {
        return {
          id: grandChild.id,
          name: (
            <div className="flex flex-row gap-8 items-center">
              {getItemIcon(grandChild.name)} {grandChild.name}
            </div>
          ),
          selected: grandChild.selected,
        };
      })}
      onClick={updateChildrenSelectedById}
      open={open}
      setOpen={setOpen}
    />
  );
};
