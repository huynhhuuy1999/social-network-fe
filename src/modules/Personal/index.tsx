import { InfoDefault, InfoLeft, InfoRight } from "./components";

export const PersonalModule = () => {
  return (
    <>
      <InfoDefault />
      <div className="mt-2 flex gap-4 px-[17%]">
        <InfoLeft />
        <InfoRight />
      </div>
    </>
  );
};
