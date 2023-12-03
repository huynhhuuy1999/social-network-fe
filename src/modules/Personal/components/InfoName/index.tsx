"use client";
// Library
import { useState } from "react";
// Constant
import { HeaderTextPersonal } from "@/constants";
import { TYPE_HEADER_PERSONAL } from "@/constants/enum";

export const InfoName = () => {
  const [chooseType, setChooseType] = useState<number>(
    TYPE_HEADER_PERSONAL.POST,
  );
  return (
    <div className="flex justify-center px-[3%]">
      <div className="w-[70%]">
        <div className="relative flex items-center gap-4">
          <div className="relative -top-[45px] z-10 cursor-pointer overflow-hidden rounded-full">
            <img
              src="https://picsum.photos/100/200"
              alt=""
              className="aspect-square w-[164px] rounded-full"
            />
          </div>
          <div className="mb-10 grow">
            <h3 className="text-[32px] font-bold">Huỳnh Hữu Ý</h3>
            <span className="font-semibold text-second-text">438 bạn bè</span>
          </div>
          <div className="mb-10 flex items-center gap-2">
            <div className="flex h-9 cursor-pointer items-center rounded-lg bg-primary px-3">
              <span className="text-15 font-semibold">Thêm vào tin</span>
            </div>
            <div className="flex h-9 cursor-pointer items-center rounded-lg bg-hover-primary px-3">
              <span className="text-15 font-semibold">
                Chỉnh sửa trang cá nhân
              </span>
            </div>
          </div>
        </div>
        <hr className=" text-line" />
        <div className="flex ">
          {HeaderTextPersonal.map((value, index) => {
            return (
              <div
                className={`h-[60px] ${
                  chooseType === value.type ? "text-primary" : ""
                }`}
                key={index}
                onClick={() => setChooseType(value.type)}
              >
                {value.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
