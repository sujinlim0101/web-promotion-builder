"use client";

import { Layout } from "@/components/Layout";
import { usePageState } from "@/hooks/usePageState";
import { ComponentTypeEnum } from "@/types/component.type";

import { PreviewItems } from "./PreviewItems";

type LandingPageProps = {
  mode?: "edit" | "landing";
};

export default function LadingPage({ mode = "landing" }: LandingPageProps) {
  const [pageState] = usePageState();

  return (
    <Layout
      /** Layot for page */
      display="block"
      data-selected={mode === "edit" ? pageState.selected : undefined}
      data-id={mode === "edit" ? "page" : undefined}
      bgColor={pageState.bgColor}
      padding={pageState.padding}
      margin={pageState.margin}
      className="min-h-full"
    >
      {pageState.children.map((layout) => {
        if (layout.name === ComponentTypeEnum.Layout) {
          return <PreviewItems layout={layout} key={layout.id} mode="edit" />;
        }
      })}
    </Layout>
  );
}
