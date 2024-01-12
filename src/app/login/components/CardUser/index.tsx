// Library
import Image from "next/image";
import { useState } from "react";
// Interface
import { ICardUser } from "@/models/login";

export const CardUser: React.FC<ICardUser> = ({ numNotiUnSeen, userName }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div
      className="w-[160px] cursor-pointer rounded-b-lg transition-all duration-200  ease-out hover:shadow-[0_1px_8px_5px_#dddfe2] hover:transition-all hover:duration-200"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="relative">
        <Image
          alt="avatar"
          width={160}
          height={160}
          className="aspect-square rounded-t-lg"
          src={"https://picsum.photos/id/1/200/300"}
        />
        {isHover ? (
          <div className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white">
            <Image
              src={"/icon/close.png"}
              width={16}
              height={16}
              alt=""
              className="h-4 w-4"
            />
          </div>
        ) : (
          <div className="absolute left-1 top-1 flex aspect-square w-3 items-center justify-center rounded-full bg-[#e3e3ee]/50">
            <Image
              src={"/icon/close.png"}
              width={8}
              height={8}
              alt=""
              className="h-2 w-2"
            />
          </div>
        )}
        {numNotiUnSeen ? (
          <span
            style={{ boxShadow: "-1px 1px 2px 0 rgba(0, 0, 0, .3)" }}
            className="absolute -right-1 -top-1 h-6 w-6 rounded-full bg-[#fa3e3e] text-center text-13 leading-6 text-white"
          >
            {numNotiUnSeen}
          </span>
        ) : null}
      </div>
      <div className="w-full rounded-b-lg bg-white p-3 text-center text-dark-primary">
        {userName}
      </div>
    </div>
  );
};
