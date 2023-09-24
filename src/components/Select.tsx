import { forwardRef } from "react";

import { FieldError, UseFormRegister } from "react-hook-form";

import { Label } from "./Label";

export const Select = forwardRef<
  HTMLSelectElement,
  {
    options?: { value: any; label: string }[];
    label?: string;
    fullWidth?: boolean;
    error?: FieldError | undefined;
    className?: string;
  } & ReturnType<UseFormRegister<Record<string, unknown>>>
>(({ options = [], className, ...props }, ref) => {
  return (
    <div className={className}>
      {props.label ? <Label label={props.label} /> : null}
      <select
        {...props}
        ref={ref}
        className={`bg-gray50 border border-gray300 text-gray900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-8 px-8 
        ${props.fullWidth ? "w-full" : ""}
      `}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});
