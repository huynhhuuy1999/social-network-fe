import { ICardUserMess } from "@/models/components";
import Image from "next/image";

export const CardUserMess: React.FC<ICardUserMess> = ({
  avatar,
  haveStory,
  name,
}) => {
  return (
    <div className="flex h-[52px] cursor-pointer items-center rounded-md px-2 transition-all hover:bg-hover-primary">
      <div
        className={`${
          haveStory ? "p-[2px]" : ""
        } mr-2 flex h-9 w-9 items-center justify-center rounded-full`}
      >
        <Image
          src={avatar}
          alt="avatar"
          width={haveStory ? 32 : 36}
          height={haveStory ? 32 : 36}
          className="rounded-full"
        />
      </div>
      <div className="grow">
        <span className="text-[15px] font-medium">{name}</span>
      </div>
    </div>
  );
};
