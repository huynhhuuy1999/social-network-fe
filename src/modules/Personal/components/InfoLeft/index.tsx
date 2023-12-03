import { FriendInfo, ImageInfo, Introduce } from "..";

export const InfoLeft = () => {
  return (
    <div className="w-[43%]">
      <Introduce />
      <ImageInfo />
      <FriendInfo />
    </div>
  );
};
