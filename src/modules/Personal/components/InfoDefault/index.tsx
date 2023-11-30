import { CoverImage, InfoName } from "..";

export const InfoDefault = () => {
  return (
    <div className="bg-dark-primary">
      <CoverImage src="https://picsum.photos/800" />
      <InfoName />
    </div>
  );
};
