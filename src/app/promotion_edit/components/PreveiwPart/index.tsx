import Preview from "./Preview";
import { PreviewComponentPick } from "./PreviewComponentPick";

export const PreveiwPart = () => {
  return (
    <div className="flex py-4 justify-center grow bg-gray100 h-full">
      <PreviewComponentPick />
      <Preview />
    </div>
  );
};
