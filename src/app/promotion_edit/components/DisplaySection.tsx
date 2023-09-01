import { ComponentPick } from "./ComponentPick";
import Preview from "./Preview";

export const DisplaySection = () => {
  return (
    <div className="flex py-4 justify-center grow bg-gray100 h-full">
      <ComponentPick />
      <Preview />
    </div>
  );
};
