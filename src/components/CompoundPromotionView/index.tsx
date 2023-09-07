import { usePageState } from "@/hooks/usePageState";
import { ComponentTypeEnum } from "@/types/component.type";

import { Button } from "../Button";
import { Image } from "../Image";
import { Layout } from "../Layout"
import { Text } from "../Text";

export const CompoundPromotionView = () => {
  const [pageState] = usePageState();

  return (
    <Layout
      className="flex h-full flex-col overflow-scroll"
      bgColor={pageState.bgColor}
      padding={pageState.padding}
      margin={pageState.margin}
    >
			      {pageState.children.map((layout) => {
        if (layout.name === ComponentTypeEnum.Layout) {
          return (
            <Layout
              key={layout.id}
              {...layout}
				
              bottom={layout.position === "fixed" ? 0 : undefined}
              right={layout.position === "fixed" ? 0 : undefined}
              left={layout.position === "fixed" ? 0 : undefined}
            >
              {layout.children.map((grandChild) => {
                if (grandChild.name === ComponentTypeEnum.Button) {
                  return (
                    <Button
                      key={grandChild.id}
                      {...grandChild}
                    />
                  );
                }

                if (grandChild.name === ComponentTypeEnum.Image) {
                  return (
                  // eslint-disable-next-line jsx-a11y/alt-text
                    <Image
                      key={grandChild.id}
                      data-id={grandChild.id}
                      data-selected={grandChild.selected}
                      {...grandChild}
                    />
                  );
                }

                if (grandChild.name === ComponentTypeEnum.Text) {
                  return (
                  // eslint-disable-next-line react/jsx-no-undef
                    <Text
                      key={grandChild.id}
                      {...grandChild}
                    />
                  );
                }

              }
              )}
            </Layout>
          );
        }
      })}
    </Layout>
  )
}