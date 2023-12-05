import { FriendInfo, ImageInfo, Introduce } from "..";

export const InfoLeft = () => {
  return (
    <div className="w-[43%] sm:w-full md:w-full">
      <Introduce />
      <ImageInfo />
      <FriendInfo />
    </div>
  );
};
