import {
  ComponentTypeEnum,
  ImageComponent,
  TextComponent,
} from "@/types/component.type";
import {
  ButtonForm,
  ButtonFormValues,
  ImageForm,
  ImageFormValues,
  LayoutForm,
  LayoutFormValues,
  PageForm,
  PageFormValues,
  TextForm,
  TextFormValues,
} from "@/types/componentForm.type";
import { Spacing } from "@/types/styles.type";

import { ButtonComponent } from "./../types/component.type";
import { colors } from "./colors";
import { spacing } from "./spacing";

const DEFAULT_MARGIN: {
  top: Spacing;
  bottom: Spacing;
  left: Spacing;
  right: Spacing;
} = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

const DEFAULT_PADDING: {
  top: Spacing;
  bottom: Spacing;
  left: Spacing;
  right: Spacing;
} = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

const formMarginDefaultValue = {
  label: "마진",
  name: "margin",
  component: "SpaceInput",
  options: Object.keys(spacing).map((space) => ({
    label: space,
    value: space,
  })),
};

export const defaultButtonStyleValues: ButtonFormValues = {
  name: ComponentTypeEnum.Button,
  text: "Button",
  color: "primary",
  href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
  size: "md",
  fullWidth: false,
  margin: DEFAULT_MARGIN,
  action: {
    type: "link",
    payload:
      "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
  },
};

export const buttonStyleFormValues: ButtonForm = [
  {
    name: "text",
    component: "Input",
    type: "text",
    label: "텍스트",
  },
  {
    label: "색상",
    name: "color",
    component: "Select",
    options: [
      {
        label: "primary",
        value: "primary",
      },
      {
        label: "secondary",
        value: "secondary",
      },
      {
        label: "success",
        value: "success",
      },
    ],
  },

  {
    name: "href",
    component: "Input",
    type: "text",
    label: "링크",
  },
  {
    label: "크기",
    name: "size",
    component: "Select",
    options: [
      {
        label: "sm",
        value: "sm",
      },
      {
        label: "md",
        value: "md",
      },
      {
        label: "lg",
        value: "lg",
      },
    ],
  },
  {
    name: "fullWidth",
    component: "Select",
    options: [
      {
        label: "true",
        value: true,
      },
      {
        label: "false",
        value: false,
      },
    ],
    label: "가로폭 전체 사용",
  },
  {
    name: "margin",
    component: "SpaceInput",
    label: "마진",
  },
];

const defaultLayoutStyleValues: LayoutFormValues = {
  name: ComponentTypeEnum.Layout,
  justify: "inherit",
  items: "inherit",
  direction: "col",
  open: true,
  margin: DEFAULT_MARGIN,
  padding: DEFAULT_PADDING,
  spacing: 0,
  bgColor: "transparent",
  position: "static"
};

export const layoutStyleFormValues: LayoutForm = [
  {
    label: "position",
    name: "position",
    component: "Select",
    options: [
      {
        label: "일반",
        value: "static",
      },
      {
        label: "하단 고정",
        value: "fixed",
      },
    ]
  },
  {
    label: "justify 정렬",
    name: "justify",
    component: "Select",
    options: [
      {
        label: "start",
        value: "start",
      },
      {
        label: "center",
        value: "center",
      },
      {
        label: "end",
        value: "end",
      },
      {
        label: "inherit",
        value: "inherit",
      },
      {
        label: "between",
        value: "between",
      },
    ],
  },
  {
    label: "방향",
    name: "direction",
    component: "Select",
    options: [
      {
        label: "row",
        value: "row",
      },
      {
        label: "col",
        value: "col",
      },
    ],
  },
  {
    label: "items 정렬",
    name: "items",
    component: "Select",
    options: [
      {
        label: "start",
        value: "start",
      },
      {
        label: "center",
        value: "center",
      },
      {
        label: "end",
        value: "end",
      },
      {
        label: "inherit",
        value: "inherit",
      },
    ],
  },
  {
    label: "배경색",
    name: "bgColor",
    component: "Select",
    options: Object.keys(colors).map((color) => ({
      label: color,
      value: color,
    })),
  },
  {
    label: "간격",
    name: "spacing",
    component: "Select",
    options: Object.keys(spacing).map((space) => ({
      label: space,
      value: space,
    })),
  },
  {
    label: "마진",
    name: "margin",
    component: "SpaceInput",
  },
  {
    label: "패딩",
    name: "padding",
    component: "SpaceInput",
  },
];

export const pageStyleFormValues: PageForm = [
  {
    label: "배경색",
    name: "bgColor",
    component: "Select",
    options: Object.keys(colors).map((color) => ({
      label: color,
      value: color,
    })),
  },
  {
    label: "마진",
    name: "margin",
    component: "SpaceInput",
  },
  {
    label: "패딩",
    name: "padding",
    component: "SpaceInput",
  },
];

const defaultPageStyleValues: PageFormValues = {
  name: ComponentTypeEnum.Page,
  margin: DEFAULT_MARGIN,
  padding: DEFAULT_PADDING,
  bgColor: "transparent",
};

const imageStyleFormValues: ImageForm = [
  {
    label: "이미지 주소",
    name: "src",
    component: "Input",
    type: "text",
  },
  {
    label: "너비",
    name: "width",
    component: "Input",
    type: "number",
  },
  {
    label: "높이",
    name: "height",
    component: "Input",
    type: "number",
  },
  {
    label: "정렬",
    name: "justify",
    component: "Select",
    options: [
      {
        label: "start",
        value: "start",
      },
      {
        label: "center",
        value: "center",
      },
      {
        label: "end",
        value: "end",
      },
      {
        label: "inherit",
        value: "inherit",
      },
      {
        label: "between",
        value: "between",
      },
    ],
  },
];

const defaultImageStyleValues: ImageFormValues = {
  name: ComponentTypeEnum.Image,
  src: "https://picsum.photos/200/300",
  width: 200,
  height: 300,
  justify: "center",
  action: {
    type: null,
  },
};

const defaultTextStyleValues: TextFormValues = {
  name: ComponentTypeEnum.Text,
  text: "Text",
  align: "left",
  type: "body1",
  color: "black",
  font: "sans",
  margin: DEFAULT_MARGIN,
  padding: DEFAULT_PADDING,
  action: {
    type: null,
  },
};

const textStyleFormValues: TextForm = [
  {
    label: "텍스트",
    name: "text",
    component: "TextArea"
  },
  {
    label: "정렬",
    name: "align",
    component: "Select",
    options: [
      {
        label: "left",
        value: "left",
      },
      {
        label: "center",
        value: "center",
      },
      {
        label: "right",
        value: "right",
      },
    ],
  },
  {
    label: "텍스트 타입",
    name: "type",
    component: "Select",
    options: [
      {
        label: "h1",
        value: "h1",
      },
      {
        label: "h2",
        value: "h2",
      },
      {
        label: "h3",

        value: "h3",
      },
      {
        label: "h4",

        value: "h4",
      },
      {
        label: "h5",
        value: "h5",
      },
      {
        label: "h6",
        value: "h6",
      },
      {
        label: "body1",
        value: "body1",
      },
      {
        label: "body2",
        value: "body2",
      },
      {
        label: "caption",
        value: "caption",
      },

      {
        label: "subtitle1",
        value: "subtitle1",
      },
      {
        label: "subtitle2",
        value: "subtitle2",
      },
    ],
  },
  {
    label: "색상",
    name: "color",
    component: "Select",
    options: Object.keys(colors).map((color) => ({
      label: color,
      value: color,
    })),
  },
  {
    label: "폰트",
    name: "font",
    component: "Select",
    options: [
      {
        label: "sans",

        value: "sans",
      },
      {
        label: "serif",

        value: "serif",
      },
      {
        label: "mono",

        value: "mono",
      },
    ],
  },
  {
    label: "마진",
    name: "margin",
    component: "SpaceInput",
  },
  {
    label: "패딩",
    name: "padding",
    component: "SpaceInput",
  },
];

const defaultButtonActionValues: ButtonComponent["action"] = {
  type: "link",
  payload: "#",
};

const defaultImageActionValues: ImageComponent["action"] = {
  type: null,
};

const defaultTextActionValues: TextComponent["action"] = {
  type: null,
};

const actionFormValues = [
  {
    label: "액션 타입",
    name: "type",
    component: "Select",
    options: [
      {
        label: "link",
        value: "link",
      },
      {
        label: "click",
        value: "click",
      },
      {
        label: "bridge",
        value: "bridge",
      },
    ],
  },
  {
    label: "액션 값",
    name: "payload",
    component: "Input",
    type: "text",
  },
];

export const defaultStyleValues = {
  [ComponentTypeEnum.Button]: defaultButtonStyleValues,
  [ComponentTypeEnum.Layout]: defaultLayoutStyleValues,
  [ComponentTypeEnum.Page]: defaultPageStyleValues,
  [ComponentTypeEnum.Image]: defaultImageStyleValues,
  [ComponentTypeEnum.Text]: defaultTextStyleValues,
};

export const formStyleValues = {
  [ComponentTypeEnum.Button]: buttonStyleFormValues,
  [ComponentTypeEnum.Layout]: layoutStyleFormValues,
  [ComponentTypeEnum.Text]: textStyleFormValues,
  [ComponentTypeEnum.Image]: imageStyleFormValues,
  [ComponentTypeEnum.Page]: pageStyleFormValues,
};

export const defaultActionValues = {
  [ComponentTypeEnum.Button]: defaultButtonActionValues,
  [ComponentTypeEnum.Text]: defaultTextActionValues,
  [ComponentTypeEnum.Image]: defaultImageActionValues,
};

export const formActionValues = {
  [ComponentTypeEnum.Button]: actionFormValues,
  [ComponentTypeEnum.Text]: actionFormValues,
  [ComponentTypeEnum.Image]: actionFormValues,
  [ComponentTypeEnum.Page]: [],
  [ComponentTypeEnum.Layout]: [],
};
