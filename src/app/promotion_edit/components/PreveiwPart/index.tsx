import { useViewModeState } from "@/hooks/useViewModeState";

import { EditPreveiwPart } from "./EditPreviewPart";
import { PagePreviewPart } from "./PagePreviewPart";

export const PreveiwPart = () => {
  const [viewMode, setViewMode] = useViewModeState();
  return (
    <div className="bg-gray100 dark:bg-gray500 p-8 pt-32 grow justify-center">
      <EditPreveiwPart />
    </div>
  );
};
