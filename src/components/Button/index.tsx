import { ButtonFormValues } from "@/types/componentForm.type";
import { Spacing } from "@/types/styles.type";

import { buttonVariants } from "./buttonVariants";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  href?: string;
  color?: ButtonFormValues["color"];
  size?: ButtonFormValues["size"];
  margin?: {
    top: Spacing;
    bottom: Spacing;
    left: Spacing;
    right: Spacing;
  };
  fullWidth?: boolean;
}

export const Button = ({
  text,
  href,
  color = "primary",
  size = "md",
  margin = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  fullWidth,
  ...args
}: ButtonProps) => {
  return (
    <div>
      <button
        className={buttonVariants({
          color,
          size,
          fullWidth,
          mt: margin.top,
          mb: margin.bottom,
          ml: margin.left,
          mr: margin.right,
          className: "h-fit",
        })}
        {...args}
      >
        {text}
      </button>
    </div>
  );
};
