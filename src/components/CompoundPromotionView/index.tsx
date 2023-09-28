import { usePageState } from "@/hooks/usePageState";
import { Component, ComponentTypeEnum } from "@/types/component.type";
import { openWeb, moveToApp, couponDownload } from "@/utils/bridges";

import { Button } from "../Button";
import { Image } from "../Image";
import { Layout } from "../Layout";
import { Text } from "../Text";

export const CompoundPromotionView = () => {
  const [pageState] = usePageState();

  const getAction = (component: Component) => {
    console.log("component", component);
    if (component.action === null) {
      return;
    }

    if (component.action.type === "bridge") {
      if (
        component.action.bridgeName === "moveToApp" &&
        component.action.payload?.length
      ) {
        if (component.action.payload?.[0]) {
          return () => moveToApp.apply(null, component.action!.payload as any);
        }
      }

      if (
        component.action.bridgeName === "openWeb" &&
        component.action.payload?.length
      ) {
        if (component.action.payload?.[0]) {
          return () => openWeb.apply(null, component.action!.payload as any);
        }
      }

      if (
        component.action.bridgeName === "downloadCoupon" &&
        component.action.payload?.length
      ) {
        if (component.action.payload?.[0]) {
          return () =>
            couponDownload.apply(null, component.action!.payload as any);
        }
      }
    }
  };

  return (
    <Layout
      className="flex h-full flex-col"
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
            >
              {layout.children.map((grandChild) => {
                if (grandChild.name === ComponentTypeEnum.Button) {
                  return (
                    <Button
                      key={grandChild.id}
                      {...grandChild}
                      onClick={getAction(grandChild)}
                    />
                  );
                }

                if (grandChild.name === ComponentTypeEnum.Image) {
                  console.log("getAction", getAction(grandChild));
                  return (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <Image
                      key={grandChild.id}
                      data-id={grandChild.id}
                      data-selected={grandChild.selected}
                      {...grandChild}
                      onClick={getAction(grandChild)}
                    />
                  );
                }

                if (grandChild.name === ComponentTypeEnum.Text) {
                  return (
                    // eslint-disable-next-line react/jsx-no-undef
                    <Text
                      key={grandChild.id}
                      {...grandChild}
                      onClick={getAction(grandChild)}
                    />
                  );
                }
              })}
            </Layout>
          );
        }
      })}
    </Layout>
  );
};
