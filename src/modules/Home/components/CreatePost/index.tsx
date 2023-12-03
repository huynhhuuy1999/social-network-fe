"use client";

// Library
import Image from "next/image";
import { useState } from "react";
// COmponent
import { Avatar } from "@/components";
import { ModalCreate } from "./ModalCreate";

export const CreatePost = () => {
  const [isShowModalCreatePost, setIsShowModalCreatePost] =
    useState<boolean>(false);
  return (
    <div className="mt-5 rounded-lg bg-dark-primary px-3 py-3 sm:rounded-none">
      <div
        className="flex gap-2"
        onClick={() => setIsShowModalCreatePost(!isShowModalCreatePost)}
      >
        <Avatar
          src={`https://picsum.photos/id/${6}/200`}
          className="sm:!h-9 sm:!w-9"
          classNameImage="sm:!h-9 sm:!w-9"
        />
        <div className="flex h-10 grow cursor-pointer items-center rounded-full bg-hover-primary px-3 transition-all hover:bg-hover-second">
          <span className="sm:text-[14px]">Bạn đang nghĩ gì thế???</span>
        </div>
      </div>
      <hr className="my-2 text-line sm:hidden" />
      <div className="flex sm:hidden">
        <div className="flex h-10 w-[calc(100%/3)]  cursor-pointer items-center justify-center rounded-lg hover:bg-hover-primary">
          <Image
            src={"/icon/iconCamera.png"}
            alt=""
            width={24}
            height={24}
            className="aspect-square w-6"
          />
          <span className="ml-2 block text-13 font-semibold ">
            Video trực tiếp
          </span>
        </div>
        <div className="flex h-10 w-[calc(100%/3)]  cursor-pointer items-center justify-center rounded-lg hover:bg-hover-primary">
          <Image
            src={"/icon/iconImage.png"}
            alt=""
            width={24}
            height={24}
            className="aspect-square w-6"
          />
          <span className="ml-2 block text-13 font-semibold">Ảnh/video</span>
        </div>
        <div className="flex h-10 w-[calc(100%/3)]  cursor-pointer items-center justify-center rounded-lg hover:bg-hover-primary">
          <Image
            src={"/icon/iconFeel.png"}
            alt=""
            width={24}
            height={24}
            className="aspect-square w-6"
          />
          <span className="ml-2 block text-13 font-semibold">
            Cảm xúc/hoạt động
          </span>
        </div>
      </div>
      <ModalCreate
        show={isShowModalCreatePost}
        setShow={(value) => setIsShowModalCreatePost(value)}
      />
    </div>
  );
};
