import { ICardSearch } from "@/models/layoutHeader";
import Image from "next/image";

export const CardSearch: React.FC<ICardSearch> = ({
  name,
  avatar,
  isFriend,
  numNoti,
}) => {
  return (
    <div className="bg-dark-primary hover:bg-hover-primary flex h-12 cursor-pointer items-center rounded-lg px-2 py-[6px] transition-all">
      <div className="rounded-full">
        <Image
          src={`https://picsum.photos/id/${avatar}/200/300`}
          alt=""
          width={36}
          height={36}
          className="aspect-square w-9 rounded-full"
        />
      </div>
      <div className="flex h-full grow flex-col justify-center px-2">
        <span className="text-primary-text block overflow-hidden truncate text-ellipsis text-sm leading-[1.333]">
          {name}
        </span>
        {numNoti ? (
          <div className="text-second-text flex items-center text-[0.7rem]">
            <div className="mr-2 h-2 w-2 rounded-full bg-primary" />{" "}
            <span>{numNoti} thông tin mới</span>
          </div>
        ) : isFriend ? (
          <span className="text-second-text text-[0.7rem]">Bạn bè</span>
        ) : null}
      </div>
      <div className="hover:bg-hover-primary flex h-7 w-7 items-center justify-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4 text-[#CCC]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};
