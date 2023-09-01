import React, { SyntheticEvent } from "react";

interface OpenBarProps {
  selected: boolean;
  handleOpen: (event: SyntheticEvent) => void;
  style?: React.CSSProperties;
}

export default function OpenBar({ selected, handleOpen, style }: OpenBarProps) {
  return (
    <div className={`py-6 bar`} onClick={handleOpen} style={style}>
      <div
        className={`h-4 w-30 mx-auto rounded-sm ${
          selected ? "bg-orange400" : "bg-gray400"
        }`}
      ></div>
    </div>
  );
}
