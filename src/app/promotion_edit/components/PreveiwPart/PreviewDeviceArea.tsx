"use client";

import { DeviceContainer } from "@/components/DeviceContainer";
import { usePreviewViewportState } from "@/hooks/usePreviewViewportState";

import { PreviewModeChangeForm } from "./PreviewModeChangeForm";
import { PreviewPage } from "./PreviewPage";


export default function PreviewDeviceArea() {
  return (
    <div className="p-16">
      <PreviewModeChangeForm />
      <DeviceContainer>
        <PreviewPage />
      </DeviceContainer>
    </div>
  );
}
