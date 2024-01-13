import { IInput } from "@/models/components";
import { useField } from "formik";

export const InputCustom: React.FC<IInput> = ({
  classNames,
  id,
  name,
  value,
  type = "text",
  placeholder,
  onClick,
  onFocus,
  onBlur,
  styles,
  onChange,
}) => {
  return (
    <input
      name={name}
      value={value}
      id={id}
      type={type}
      placeholder={placeholder}
      className={`h-[39.6px] w-full rounded-[5px] border border-[#ccd0d5] bg-[#f5f6f7] px-2 text-dark-primary ${classNames}`}
      onFocus={onFocus}
      onClick={onClick}
      onBlur={onBlur}
      style={styles}
      onChange={onChange}
    />
  );
};
