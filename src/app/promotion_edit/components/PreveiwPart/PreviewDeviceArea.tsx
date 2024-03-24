import { usePreviewViewportState } from "@/hooks/usePreviewViewportState";

import { IFramePreview } from "./IFramePreview";
import LadingPage from "./LadingPage";

export const PreviewDeviceArea = () => {
  usePreviewViewportState();
  return (
    <div
      className={`border-8 border-gray900 mt-16 rounded-lg relative flex flex-col h-fit`}
    >
      <IFramePreview>
        <LadingPage />
      </IFramePreview>
    </div>
  );
};
