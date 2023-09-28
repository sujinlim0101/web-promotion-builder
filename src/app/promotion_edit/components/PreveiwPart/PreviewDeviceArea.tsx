"use client";

import PreviewPage from "@/app/preview-page/page";
import { DeviceContainer } from "@/components/DeviceContainer";
import { useDeleteSeletedByListener } from "@/hooks/useDeleteSeletedByListener";

export default function PreviewDeviceArea() {
  useDeleteSeletedByListener();

  return (
    <div className="p-16">
      <DeviceContainer>
        <PreviewPage />
      </DeviceContainer>
    </div>
  );
}
