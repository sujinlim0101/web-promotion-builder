import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { BiCross } from "react-icons/bi";

import { spacing } from "@/constants/spacing";

import { Input } from "./Input";
import { Label } from "./Label";
import { Select } from "./Select";

interface SpaceInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label?: string;
}

export const SpaceInput = <T extends FieldValues>({
  name,
  register,
  label,
}: SpaceInputProps<T>) => {
  const options = Object.keys(spacing).map((key) => ({
    value: key,
    label: key,
  }));

  return (
    <div>
      {label ? <Label label={label} /> : null}

      <div className="flex gap-1">
        <div className="grid grid-cols-3 grid-rows-3">
          <Select
            {...register(`${name}.top` as Path<T>)}
            className="col-start-2 m-auto text-center"
            options={options}
          />
          <Select
            {...register(`${name}.left` as Path<T>)}
            className="col-start-1 m-auto text-center"
            options={options}
          />
          <div className="w-full h-full p6">
            <BiCross className="w-full h-full text-center text-gray400" />
          </div>

          <Select
            {...register(`${name}.right` as Path<T>)}
            className="col-start-3 m-auto text-center"
            options={options}
          />
          <Select
            {...register(`${name}.bottom` as Path<T>)}
            className="col-start-2 m-auto text-center"
            options={options}
          />
        </div>
      </div>
    </div>
  );
};
