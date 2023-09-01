import { Layout } from "@/components/Layout";
import { usePageState } from "@/hooks/usePageState";
import { ComponentTypeEnum } from "@/types/component.type";

import PageChildren from "./PageChildren";
import WithComponentSelect from "./WithComponentSelect";

export const PageComponent = () => {
  const [pageState] = usePageState();

  return (
    <Layout
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
            <WithComponentSelect layout={layout} key={layout.id}>
              <PageChildren layout={layout} />
            </WithComponentSelect>
          );
        }
      })}
    </Layout>
  );
};
