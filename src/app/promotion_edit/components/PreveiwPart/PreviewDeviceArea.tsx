"use client";

import { DeviceContainer } from "@/components/DeviceContainer";

import { PreviewPage } from "./PreviewPage";

export default function PreviewDeviceArea() {
  return (
    <div className="p-16">
      <DeviceContainer>
        <PreviewPage />
      </DeviceContainer>
    </div>
  );
}
