"use client";

import PreviewPage from "@/app/preview-page/page";
import { DeviceContainer } from "@/components/DeviceContainer";

export default function PreviewDeviceArea() {
  return (
    <div className="p-16">
      <DeviceContainer>
        <PreviewPage />
      </DeviceContainer>
    </div>
  );
}
