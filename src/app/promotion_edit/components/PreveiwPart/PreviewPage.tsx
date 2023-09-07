import { Layout } from "@/components/Layout";
import { usePageState } from "@/hooks/usePageState";
import { ComponentTypeEnum } from "@/types/component.type";

import { PreviewItems } from "./PreviewItems";
import { WithSelectable } from "./WithSelectable";



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
          return (
            <WithSelectable layout={layout} key={layout.id}>
              <PreviewItems layout={layout} />
            </WithSelectable>
          );
        }
      })}
    </Layout>
  );
};
