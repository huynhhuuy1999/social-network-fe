import Image from "next/image";

export const Option = () => {
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
          <span className="absolute left-[60px] cursor-pointer text-[13px]">
            300
          </span>
        </div>
        <div className="flex gap-2 text-[13px]">
          <span className="cursor-pointer">83 bình luận</span>
          <span className="cursor-pointer">23 lượt chia sẻ</span>
        </div>
      </div>
      <hr className="mt-2 text-line" />
      <div className="flex gap-2 py-1">
        <div className="flex h-9 grow cursor-pointer items-center justify-center gap-1 rounded-md text-[13px] hover:bg-hover-primary">
          <Image
            src={"/icon/svg/likeSolid.svg"}
            alt=""
            width={20}
            height={20}
          />{" "}
          <span>Thích</span>
        </div>
        <div className="flex h-9 grow cursor-pointer items-center justify-center gap-1 rounded-md text-[13px] hover:bg-hover-primary">
          <Image
            src={"/icon/svg/commentSolid.svg"}
            alt=""
            width={20}
            height={20}
          />{" "}
          <span>Bình luận</span>
        </div>
        <div className=" item-center flex h-9 grow cursor-pointer items-center justify-center gap-1 rounded-md text-[13px] hover:bg-hover-primary">
          <Image src={"/icon/svg/share.svg"} alt="" width={20} height={20} />{" "}
          <span>Chia sẻ</span>
        </div>
      </div>
      <hr className=" text-line" />
    </div>
  );
};
