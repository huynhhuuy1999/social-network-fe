import React from "react";
import { ISelect } from "@/models/components";
export const SelectCustom: React.FC<ISelect> = ({
  classNames,
  id,
  name,
  options = [],
}) => {
  return (
    <select
      name={name}
      id={id}
      className={`w-full cursor-pointer rounded-[5px] border border-[#ccd0d5] bg-[#f5f6f7] px-2 text-dark-primary focus:outline-none ${classNames}`}
    >
      {options.map((v, i) => {
        return (
          <option key={i} value={v.value} className="text-dark-primary">
            {v.label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectCustom;
