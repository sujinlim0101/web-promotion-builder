import type { ReactNode } from "react";

import { usePreviewViewportState } from "@/hooks/usePreviewViewportState";

interface PromotionPageContainerProps {
    children: ReactNode;
}
export const PromotionPageContainer = ({ children }: PromotionPageContainerProps) => {
  return (
    <div className="border-8 border-gray900 mt-16 rounded-lg">
      {children}
    </div>
  );
};