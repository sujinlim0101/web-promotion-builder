import { useDeleteSeletedByListener } from "@/hooks/useDeleteSeletedByListener";

import { PreviewComponentPick } from "./PreviewComponentPick";
import { PreviewDeviceArea } from "./PreviewDeviceArea";

export const PreveiwPart = () => {
  useDeleteSeletedByListener();
  return (
    <div className="bg-gray100 p-8 pt-32 grow justify-center">
      <div className="flex py-4 justify-center grow h-full gap-16">
        <PreviewComponentPick />
        <PreviewDeviceArea />
      </div>
    </div>
  );
};
