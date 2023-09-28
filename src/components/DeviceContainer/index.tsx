import type { ReactNode } from "react";

import { usePreviewViewportState } from "@/hooks/usePreviewViewportState";

import { IFrame } from "../../app/promotion_edit/components/PreveiwPart/IFrame";

interface DeviceWrapperProps {
  children: ReactNode;
}
export const DeviceContainer = ({ children }: DeviceWrapperProps) => {
  return (
    <div
      className={`border-8 border-gray900 mt-16 rounded-lg relative flex flex-col mx-auto`}
    >
      <div className={`bg-white transform grow`}>
        <IFrame>{children}</IFrame>
      </div>
    </div>
  );
};
