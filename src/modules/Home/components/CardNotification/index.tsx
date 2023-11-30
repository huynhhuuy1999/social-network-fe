import { Avatar } from "@/components";
import { TYPE_NOTI } from "@/constants/enum";
import { ICardNotification } from "@/models/layoutHeader";

export const CardNotification: React.FC<ICardNotification> = ({
  content,
  avatar,
  type,
  time,
}) => {
  return (
    <div className="flex gap-2 rounded-lg p-2 transition-all hover:bg-hover-primary">
      <Avatar
        src={avatar}
        width={56}
        height={56}
        className="h-[56px] w-[56px]"
      />
      <div>
        <span className="block text-15">{content}</span>
        <span className=" block text-13 text-primary">{time}</span>
      </div>
      <div className="flex items-center ">
        {type === TYPE_NOTI.UNSEEN ? (
          <div className="aspect-square w-3 rounded-full bg-primary" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
