import { InfoDefault, InfoLeft, InfoRight } from "./components";

export const PersonalModule = () => {
  return (
    <>
      <InfoDefault />
      <div className="mt-2 flex gap-4 px-[17%] sm:flex-col sm:px-4 md:flex-col md:px-4">
        <InfoLeft />
        <InfoRight />
      </div>
    </>
  );
};
