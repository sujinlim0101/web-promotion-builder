import React, { MouseEventHandler } from "react";

import { Button } from "@/components/Button";
import { Image } from "@/components/Image";
import { Layout } from "@/components/Layout";
import { Text } from "@/components/Text";
import { usePageState } from "@/hooks/usePageState";
import {
  ComponentTypeEnum,
  ItemComponent,
  LayoutComponent,
} from "@/types/component.type";

import { useComponentSelect } from "../../hooks/useComponentSelect";

type PrevieItemsProps = {
  layout: LayoutComponent;
  mode: "landing" | "edit";
};

export const PreviewItems = ({ layout, mode }: PrevieItemsProps) => {
  const [pageState] = usePageState();

  const { updateChildrenSelectedById } = useComponentSelect();

  const onLayoutSelect = (e: React.SyntheticEvent<HTMLDivElement>) => {
    // if event target is it self, then select layout or if it has no children
    if (
      e.target === e.currentTarget ||
      layout.children.length === 0 ||
      !(e.target as HTMLElement).dataset.id
    ) {
      updateChildrenSelectedById(layout.id);
    }
  };

  const getAttributeData = (grandChild: ItemComponent) => {
    if (mode === "landing") return undefined;
    return {
      "data-id": grandChild.id,
      "data-selected": grandChild.selected,
    };
  };

  return (
    <Layout
      {...layout}
      data-type="layout"
      data-selected={layout.selected}
      bottom={layout.position === "fixed" ? 0 : undefined}
      onClick={onLayoutSelect}
    >
      {layout.children.length > 0 ? (
        layout.children.map((grandChild) => {
          if (grandChild.name === ComponentTypeEnum.Button) {
            return (
              <Button
                key={grandChild.id}
                {...grandChild}
                {...getAttributeData(grandChild)}
                onClick={() => updateChildrenSelectedById(grandChild.id)}
              />
            );
          }

          if (grandChild.name === ComponentTypeEnum.Image) {
            return (
              // eslint-disable-next-line jsx-a11y/alt-text
              <Image
                key={grandChild.id}
                {...getAttributeData(grandChild)}
                {...grandChild}
                onClick={() => updateChildrenSelectedById(grandChild.id)}
              />
            );
          }

          if (grandChild.name === ComponentTypeEnum.Text) {
            return (
              // eslint-disable-next-line react/jsx-no-undef
              <Text
                {...getAttributeData(grandChild)}
                key={grandChild.id}
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
