import { Label } from "./Label";

interface TextAreaProps {
  name: string;
  register: any;
  className?: string;
  label?: string;
}

export const TextArea = ({
  name,
  register,
  className,
  label,
}: TextAreaProps) => {
  return (
    <div className={className}>
      {label ? <Label label={label} /> : null}
      <textarea
        {...register(name)}
        className={`w-full h-40 bg-gray50 border border-gray300 text-gray900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block py-4 px-8 `}
      />
    </div>
  );
};
