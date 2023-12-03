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
          <div className="relative -top-[45px] z-10 cursor-pointer overflow-hidden rounded-full border-[4px] border-dark-primary ">
            <img
              src="https://picsum.photos/100/200"
              alt=""
              className="h-[164px] w-[164px] rounded-full object-cover"
            />
          </div>
          <div className="mb-10 grow">
            <h3 className="text-[32px] font-bold">Huỳnh Hữu Ý</h3>
            <span className="cursor-pointer text-14 font-semibold text-second-text hover:underline">
              438 bạn bè
            </span>
          </div>
          <div className="mb-10 flex items-center gap-2">
            <div className="flex h-9 cursor-pointer items-center rounded-lg bg-primary px-4">
              <span className="text-15 font-semibold">Thêm vào tin</span>
            </div>
            <div className="flex h-9 cursor-pointer items-center rounded-lg bg-hover-primary px-4">
              <span className="text-15 font-semibold">
                Chỉnh sửa trang cá nhân
              </span>
            </div>
          </div>
        </div>
        <hr className=" text-line" />
        <div className="mt-1 flex">
          {HeaderTextPersonal.map((value, index) => {
            return (
              <div
                className={`relative flex h-[60px] cursor-pointer items-center justify-center rounded-lg px-4 text-[0.9375rem] font-semibold hover:bg-hover-primary ${
                  chooseType === value.type ? " text-primary" : ""
                }`}
                key={index}
                onClick={() => setChooseType(value.type)}
              >
                {value.name}
                {chooseType === value.type ? (
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-primary" />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
