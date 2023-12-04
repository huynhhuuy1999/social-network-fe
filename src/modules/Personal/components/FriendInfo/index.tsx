import { CardFriend } from "..";
import { listFriend } from "./dummy";

export const FriendInfo = () => {
  return (
    <div className="mt-4 rounded-lg bg-hover-primary p-3">
      <div className="flex items-center justify-between">
        <span className="text-[20px] font-bold">Bạn bè</span>
        <div className="flex h-9 cursor-pointer items-center rounded-lg px-3 hover:bg-hover-primary">
          <span className="text-[#5AA7FF] ">Xem tất cả bạn bè</span>
        </div>
      </div>
      <span className="mb-2 block text-[17px] text-second-text">
        438 người bạn
      </span>
      <div className="grid w-full grid-cols-3 gap-x-1 gap-y-2 overflow-hidden rounded-lg">
        {listFriend.map((value, i) => {
          return (
            <div key={i} className="cursor-pointer overflow-hidden">
              <CardFriend
                image={`https://picsum.photos/id/${i + 1}/200`}
                name={value.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
