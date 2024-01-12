interface IRadioCustom {
  id: string;
  label: string;
  value: number | string;
  classNames?: string;
  name: string;
}

export const RadioCustom: React.FC<IRadioCustom> = ({
  id,
  label,
  value,
  classNames,
  name,
}) => {
  return (
    <div
      className={`flex h-[39.6px] w-full cursor-pointer items-center justify-between rounded-[5px] border border-[#ccd0d5] px-2 ${classNames}`}
    >
      <label className="grow cursor-pointer text-dark-primary" htmlFor={id}>
        {label}
      </label>
      <input type="radio" value={value} id={id} name={name} />
    </div>
  );
};
