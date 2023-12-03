import { InfoDefault, InfoLeft, InfoRight } from "./components";

export const PersonalModule = () => {
  return (
    <>
      <InfoDefault />
      <div className="mt-2 flex px-[18%]">
        <InfoLeft />
        <InfoRight />
      </div>
    </>
  );
};
