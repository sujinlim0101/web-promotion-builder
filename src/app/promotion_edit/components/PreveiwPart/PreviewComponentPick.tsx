import { v4 } from "uuid";

import { defaultStyleValues } from "@/constants/component.constant";
import { picks } from "@/constants/pick.constant";
import { usePageState } from "@/hooks/usePageState";
import {
  ComponentTypeEnum,
  ItemComponent,
  LayoutComponent,
} from "@/types/component.type";

export const PreviewComponentPick = () => {
  const [pageState, setPageState] = usePageState();

  const handlePickLayout = () => {
    // make previous selected false
    setPageState({
      ...pageState,
      children: [
        ...pageState.children.map((child) => {
          return {
            ...child,
            selected: false,
            open: false,
            children: child.children.map((grandChild) => {
              return {
                ...grandChild,
                selected: false,
              };
            }),
          };
        }),
        {
          id: v4(),
          selected: true,
          ...defaultStyleValues.Layout,
          children: [],
        },
      ],
    });
  };

  const handlePickItem = (component: ComponentTypeEnum) => {
    // if child is selected or child' children is selected
    const selectedLayout = pageState.children.find(
      (child) =>
        child.selected === true ||
        child.children.some((grandChild) => grandChild.selected === true)
    ) as LayoutComponent;
    // make previous selected false & add button to selected layout

    const defaultValueFromComponentType = defaultStyleValues[component];

    if (selectedLayout) {
      setPageState({
        ...pageState,
        children: pageState.children.map((child) => {
          if (child.id === selectedLayout.id) {
            return {
              ...child,
              selected: false,
              children: [
                // make other selected false
                ...child.children.map((grandChild) => {
                  return {
                    ...grandChild,
                    selected: false,
                  };
                }),
                {
                  ...defaultValueFromComponentType,
                  id: v4(),
                  selected: true,
                } as ItemComponent,
              ],
            };
          }

          return child;
        }),
      });
    }
  };

  if (pageState.selected) return null;

  return (
    <div className="flex gap-8 flex-col py-72">
      {picks.map((component) => {
        return (
          <div
            key={component.component}
            data-tooltip-target="button-loader-example-mobile-tooltip"
            data-id={component}
            className={`flex items-center justify-center w-36 h-36 font-medium text-gray700 bg-white border border-gray200 rounded-lg toggle-mobile-view hover:bg-gray100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray300 dark:focus:ring-gray500 dark:bg-gray800 focus:outline-none dark:text-gray400 dark:border-gray600 dark:hover:text-white dark:hover:bg-gray700 text-base`}
            onClick={() => {
              if (component.component === ComponentTypeEnum.Layout) {
                handlePickLayout();
              } else {
                handlePickItem(component.component);
              }
            }}
          >
            {component.icon}
          </div>
        );
      })}
    </div>
  );
};
