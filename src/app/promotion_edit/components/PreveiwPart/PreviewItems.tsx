import React, { MouseEventHandler } from "react";

import { Button } from "@/components/Button";
import { Image } from "@/components/Image";
import { Layout } from "@/components/Layout";
import { Text } from "@/components/Text";
import { usePageState } from "@/hooks/usePageState";
import { ComponentTypeEnum, LayoutComponent } from "@/types/component.type";

import { useComponentSelect } from "../../hooks/useComponentSelect";

export const PreviewItems = ({ layout }: { layout: LayoutComponent }) => {
  const [pageState] = usePageState();

  const { updateChildrenSelectedById } = useComponentSelect();

  const onLayoutSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    // if event target is it self, then select layout
    if (e.target === e.currentTarget) {
      updateChildrenSelectedById(layout.id);
    }
  };
  return (
    <Layout
      {...layout}
      data-type="layout"
      data-selected={layout.selected}
      bottom={layout.position === "fixed" ? 0 : undefined}
      right={layout.position === "fixed" ? 0 : undefined}
      left={layout.position === "fixed" ? 0 : undefined}
      onClick={onLayoutSelect}
    >
      {layout.children.length > 0 ? (
        layout.children.map((grandChild) => {
          if (grandChild.name === ComponentTypeEnum.Button) {
            return (
              <Button
                key={grandChild.id}
                {...grandChild}
                data-id={grandChild.id}
                data-selected={grandChild.selected}
                data-type="item"
                onClick={() => updateChildrenSelectedById(grandChild.id)}
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
                data-type="item"
                {...grandChild}
                onClick={() => updateChildrenSelectedById(grandChild.id)}
              />
            );
          }

          if (grandChild.name === ComponentTypeEnum.Text) {
            return (
              // eslint-disable-next-line react/jsx-no-undef
              <Text
                data-id={grandChild.id}
                data-selected={grandChild.selected}
                key={grandChild.id}
                data-type="item"
                {...grandChild}
                onClick={() => updateChildrenSelectedById(grandChild.id)}
              />
            );
          }
        })
      ) : (
        <Text
          type="body2"
          color="gray400"
          align="center"
          font="mono"
          text="요소를 추가하세요"
          style={{
            display: pageState.selected ? "none" : "",
          }}
        />
      )}
    </Layout>
  );
};
