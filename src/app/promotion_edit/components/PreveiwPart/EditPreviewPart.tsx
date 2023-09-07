import { PreviewComponentPick } from "./PreviewComponentPick";
import PreviewDeviceArea from "./PreviewDeviceArea";

export const EditPreveiwPart = () => {
  return (
    <div className="flex py-4 justify-center grow h-full">
      <PreviewComponentPick />
      <PreviewDeviceArea />
    </div>
  );
};
