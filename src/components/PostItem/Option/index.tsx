"use client";
import { ListReact } from "@/constants";
// Library
import Image from "next/image";
import { useState } from "react";

export const Option = () => {
  const [isShowReact, setIsShowReact] = useState<boolean>(false);
  return (
    <div className="px-3 py-3">
      <div className="flex items-center justify-between">
        <div className="relative h-5 grow">
          <Image
            src={"/icon/svg/like.svg"}
            width={18}
            height={18}
            alt=""
            className="absolute left-0 top-0 cursor-pointer"
          />
          <Image
            src={"/icon/svg/heartEyes.svg"}
            width={18}
            height={18}
            alt=""
            className="absolute left-[17px] top-0 cursor-pointer"
          />
          <Image
            src={"/icon/svg/angry.svg"}
            width={18}
            height={18}
            alt=""
            className="absolute left-[34px] top-0 cursor-pointer"
          />
          <span className="text-13 absolute left-[60px] cursor-pointer">
            300
          </span>
        </div>
        <div className="text-13 flex gap-2">
          <span className="cursor-pointer">83 bình luận</span>
          <span className="cursor-pointer">23 lượt chia sẻ</span>
        </div>
      </div>
      <hr className="mt-2 text-line" />
      <div className="flex gap-2 py-1">
        <div
          onMouseOver={() => setIsShowReact(true)}
          onMouseLeave={() => setIsShowReact(false)}
          className="text-13 relative flex h-9 grow cursor-pointer items-center justify-center gap-1 rounded-md hover:bg-hover-primary"
        >
          <Image
            src={"/icon/svg/likeSolid.svg"}
            alt=""
            width={20}
            height={20}
          />
          <span>Thích</span>
          <div
            className={`absolute -top-10 left-0 flex h-0 w-[260px] gap-1 rounded-full bg-dark-primary duration-[200ms]`}
            style={{
              display: isShowReact ? "visible" : "hidden",
              transition: "height 0.2s",
              height: isShowReact ? "42px" : 0,
            }}
          >
            {ListReact.map((value, index) => {
              return (
                <Image
                  src={value.src}
                  alt=""
                  key={index}
                  width={40}
                  height={40}
                  style={{ transition: "bottom 0.2s" }}
                  className="relative bottom-0 aspect-square hover:bottom-2"
                />
              );
            })}
          </div>
        </div>
        <div className="text-13 flex h-9 grow cursor-pointer items-center justify-center gap-1 rounded-md hover:bg-hover-primary">
          <Image
            src={"/icon/svg/commentSolid.svg"}
            alt=""
            width={20}
            height={20}
          />{" "}
          <span>Bình luận</span>
        </div>
        <div className=" item-center text-13 flex h-9 grow cursor-pointer items-center justify-center gap-1 rounded-md hover:bg-hover-primary">
          <Image src={"/icon/svg/share.svg"} alt="" width={20} height={20} />{" "}
          <span>Chia sẻ</span>
        </div>
      </div>
      <hr className=" text-line" />
    </div>
  );
};
