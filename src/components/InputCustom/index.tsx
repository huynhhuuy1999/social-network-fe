import { IInput } from "@/models/components";

export const InputCustom: React.FC<IInput> = ({
  classNames,
  id,
  name,
  value,
  type = "text",
  placeholder,
}) => {
  return (
    <input
      name={name}
      value={value}
      id={id}
      type={type}
      placeholder={placeholder}
      className={`h-[39.6px]  w-full rounded-[5px] border border-[#ccd0d5] bg-[#f5f6f7] px-2 ${classNames}`}
    />
  );
};
