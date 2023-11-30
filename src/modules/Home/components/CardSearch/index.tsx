import { ICardSearch } from "@/models/layoutHeader";
import Image from "next/image";

export const CardSearch: React.FC<ICardSearch> = ({
  name,
  avatar,
  isFriend,
  numNoti,
}) => {
  return (
    <div className="flex h-12 cursor-pointer items-center rounded-lg bg-dark-primary px-2 py-[6px] transition-all hover:bg-hover-primary">
      <div className="rounded-full">
        <Image
          src={`https://picsum.photos/id/${avatar}/200/300`}
          alt=""
          width={36}
          height={36}
          className="aspect-square w-9 rounded-full sm:!w-8"
        />
      </div>
      <div className="flex h-full grow flex-col justify-center px-2">
        <span className="sm:text-14 block max-w-[200px] overflow-hidden truncate text-ellipsis leading-[1.333] text-primary-text">
          {name}
        </span>
        {numNoti ? (
          <div className="flex items-center text-[0.7rem] text-second-text">
            <div className="mr-2 h-2 w-2 rounded-full bg-primary" />{" "}
            <span>{numNoti < 10 ? numNoti : "9+"} thông tin mới</span>
          </div>
        ) : isFriend ? (
          <span className="text-[0.7rem] text-second-text">Bạn bè</span>
        ) : null}
      </div>
      <div className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-hover-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4 text-[#CCC]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};
