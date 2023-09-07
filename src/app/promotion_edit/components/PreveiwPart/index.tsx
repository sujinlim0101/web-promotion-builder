import { PreviewComponentPick } from "./PreviewComponentPick";
import PreviewDeviceArea from "./PreviewDeviceArea";

export const PreveiwPart = () => {
  return (
    <div className="flex py-4 justify-center grow bg-gray100 h-full">
      <PreviewComponentPick />
      <PreviewDeviceArea />
    </div>
  );
};
