export const Label = ({ label }: { label: string }) => {
  return (
    <label className="block mb-4 text-sm font-semibold text-gray600 font-medium text-gray900 text-xs dark:text-white">
      {label}
    </label>
  );
};
