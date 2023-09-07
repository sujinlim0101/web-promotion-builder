import type { ReactNode } from "react";

import { usePreviewViewportState } from "@/hooks/usePreviewViewportState";

interface DeviceWrapperProps {
    children: ReactNode;
}
export const DeviceContainer = ({ children }: DeviceWrapperProps) => {
  const [viewPort] = usePreviewViewportState();
  return (
    <div className={`border-8 border-gray900 mt-16 rounded-lg overflow-scroll	${
      viewPort === "small_mobile" ? "w-375 h-667" : "w-414 h-896"
    }`}>
      <div
        className={`bg-white relative transform min-h-full`}
      >{children}</div>
    </div>
  );
};