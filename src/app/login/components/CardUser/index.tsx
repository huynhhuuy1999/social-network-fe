// Library
import Image from "next/image";
import { useState } from "react";
// Interface
import { ICardUser } from "@/models/login";

export const CardUser: React.FC<ICardUser> = ({ numNotiUnSeen, userName }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div
      className="w-[160px] cursor-pointer hover:shadow-[0_1px_8px_5px_#dddfe2] transition-all duration-200  hover:transition-all hover:duration-200 ease-out rounded-b-lg"
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
          className="rounded-t-lg aspect-square"
          src={"https://picsum.photos/id/1/200/300"}
        />
        {isHover ? (
          <div className="absolute bg-white w-6 h-6 rounded-full flex items-center justify-center -top-2 -left-2">
            <Image
              src={"/icon/close.png"}
              width={16}
              height={16}
              alt=""
              className="w-4 h-4"
            />
          </div>
        ) : (
          <div className="absolute top-1 left-1 rounded-full bg-[#e3e3ee]/50 flex items-center justify-center w-3 aspect-square">
            <Image
              src={"/icon/close.png"}
              width={8}
              height={8}
              alt=""
              className="w-2 h-2"
            />
          </div>
        )}
        {numNotiUnSeen ? (
          <span
            style={{ boxShadow: "-1px 1px 2px 0 rgba(0, 0, 0, .3)" }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-[#fa3e3e] text-[13px] rounded-full text-white text-center leading-6"
          >
            {numNotiUnSeen}
          </span>
        ) : null}
      </div>
      <div className="rounded-b-lg p-3 w-full text-center bg-white">
        {userName}
      </div>
    </div>
  );
};
