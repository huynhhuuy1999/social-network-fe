import { Avatar } from "@/components";
import { ICardUserMess } from "@/models/components";
import Image from "next/image";

export const CardUserMess: React.FC<ICardUserMess> = ({
  avatar,
  haveStory,
  name,
}) => {
  return (
    <div className="flex h-[52px] cursor-pointer items-center rounded-md px-2 transition-all hover:bg-hover-primary">
      <Avatar
        src={avatar || ""}
        width={haveStory ? 32 : 36}
        height={haveStory ? 32 : 36}
        borderWidth={haveStory ? 2 : 0}
        className="mr-2"
      />
      <div className="grow">
        <span className="text-[15px] font-semibold">{name}</span>
      </div>
    </div>
  );
};
