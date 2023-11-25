"use client";

// Library
import Image from "next/image";
import { useMemo, useState } from "react";
// Constant
import { ListReact, reactChoose } from "@/constants";
import { TYPE_REACT } from "@/constants/enum";

export const Option = () => {
  const [isShowReact, setIsShowReact] = useState<boolean>(false);
  const [chooseReact, setChooseReact] = useState<number>(TYPE_REACT.NONE);

  const renderChooseReact = useMemo(() => {
    switch (chooseReact) {
      case TYPE_REACT.LIKE:
        return reactChoose.LIKE;
      case TYPE_REACT.ANGRY:
        return reactChoose.ANGRY;
      case TYPE_REACT.CRY:
        return reactChoose.CRY;
      case TYPE_REACT.HEART:
        return reactChoose.HEART;
      case TYPE_REACT.SMILE:
        return reactChoose.SMILE;
      case TYPE_REACT.WOW:
        return reactChoose.WOW;
      default:
        return reactChoose.NONE;
    }
  }, [chooseReact]);

  const handleLikeDefault = (e: any) => {
    e.preventDefault();
    setChooseReact(
      chooseReact !== TYPE_REACT.NONE ? TYPE_REACT.NONE : TYPE_REACT.LIKE,
    );
  };

  const onShowReact = (isShow: boolean) => {
    setTimeout(() => {
      setIsShowReact(isShow);
    }, 600);
  };

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
          <span className="absolute left-[60px] cursor-pointer text-13">
            300
          </span>
        </div>
        <div className="flex gap-2 text-13">
          <span className="cursor-pointer hover:underline">83 bình luận</span>
          <span className="cursor-pointer hover:underline">
            23 lượt chia sẻ
          </span>
        </div>
      </div>
      <hr className="mt-2 text-line" />
      <div className="flex gap-2 py-1">
        <div
          onMouseOver={() => onShowReact(true)}
          onMouseLeave={() => onShowReact(false)}
          className="relative flex h-9 grow cursor-pointer items-center justify-center gap-1 rounded-md text-13 hover:bg-hover-primary"
          onClick={handleLikeDefault}
        >
          <Image src={renderChooseReact.icon} alt="" width={20} height={20} />
          <span style={{ color: renderChooseReact.color }}>
            {renderChooseReact.name}
          </span>
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setChooseReact(value.type);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className="flex h-9 grow cursor-pointer items-center justify-center gap-1 rounded-md text-13 hover:bg-hover-primary">
          <Image
            src={"/icon/svg/commentSolid.svg"}
            alt=""
            width={20}
            height={20}
          />{" "}
          <span>Bình luận</span>
        </div>
        <div className=" item-center flex h-9 grow cursor-pointer items-center justify-center gap-1 rounded-md text-13 hover:bg-hover-primary">
          <Image src={"/icon/svg/share.svg"} alt="" width={20} height={20} />{" "}
          <span>Chia sẻ</span>
        </div>
      </div>
      <hr className=" text-line" />
    </div>
  );
};
