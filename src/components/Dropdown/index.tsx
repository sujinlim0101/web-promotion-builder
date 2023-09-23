import React, { ReactNode } from "react";

import { TiArrowSortedDown } from "react-icons/ti";

export const Dropdown = ({
  title,
  id,
  items,
  onClick,
  open,
  setOpen,
  selected,
}: {
  title: ReactNode;
  id: string;
  selected?: boolean;
  items?: {
    id: string;
    name: ReactNode;
    selected?: boolean;
  }[];
  onClick?: (id: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div className="relative inline-block text-left px-16 py-4 w-full">
      <div
        className={`flex flex-row gap-6 items-center
        ${selected ? "bg-blue50" : ""}`}
      >
        <div className="w-24 px-8">
          {items?.length ? (
            <TiArrowSortedDown
              onClick={() => {
                setOpen(!open);
              }}
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
              className={open ? "transform rotate-[270deg]" : ""}
            />
          ) : null}
        </div>
        <div
          onClick={() => {
            onClick && onClick(id);
          }}
        >
          {title}
        </div>
      </div>

      {open && (
        <div className={`origin-top-right right-0 mt-2`}>
          {items?.map((child) => {
            return (
              <div
                key={child.id}
                className={`px-8  pl-48  w-full my-4
                ${child.selected ? "bg-blue50" : ""}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
                onClick={() => onClick && onClick(child.id)}
              >
                {child.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
