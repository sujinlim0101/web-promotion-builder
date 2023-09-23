import { Layout } from "@/components/Layout";
import { usePageState } from "@/hooks/usePageState";
import { ComponentTypeEnum } from "@/types/component.type";

import { PreviewItems } from "./PreviewItems";

export const PreviewPage = () => {
  const [pageState] = usePageState();

  return (
    <Layout
      /** Layot for page */
      className="flex h-full flex-col overflow-scroll"
      data-selected={pageState.selected}
      data-id={"page"}
      bgColor={pageState.bgColor}
      padding={pageState.padding}
      margin={pageState.margin}
    >
      {pageState.children.map((layout) => {
        if (layout.name === ComponentTypeEnum.Layout) {
          return <PreviewItems layout={layout} key={layout.id} />;
        }
      })}
    </Layout>
  );
};
