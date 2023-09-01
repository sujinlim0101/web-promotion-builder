import { HTMLInputTypeAttribute } from "react";

import { FieldValues, Path, UseFormRegister } from "react-hook-form";

import { Label } from "./Label";

interface InputProps<T extends FieldValues> {
  label?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  type?: HTMLInputTypeAttribute;
  width?: "xs" | "full";
  className?: string;
}

export const Input = <T extends FieldValues>({
  name,
  label,
  register,
  width = "full",
  type,
  className,
}: InputProps<T>) => {
  return (
    <div className={className}>
      {label ? <Label label={label} /> : null}

      <input
        {...register(name)}
        type={type}
        className={`${className} ${width === "xs" ? "w-40" : "w-full"} ${
          type !== "color"
            ? "bg-gray50 border border-gray300 text-gray900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-4 px-8 dark:bg-gray700 dark:border-gray600 dark:placeholder-gray400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            : "py-8 px-8"
        }`}
      />
    </div>
  );
};
