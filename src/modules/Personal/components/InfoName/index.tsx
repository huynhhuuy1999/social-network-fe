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
      <div className="w-[70%] sm:w-full md:w-[90%]">
        <div className="relative flex items-center gap-4 sm:flex-col md:flex-col">
          <div className="relative -top-[45px] z-10 h-[164px] w-[164px] cursor-pointer overflow-hidden rounded-full border-[4px] border-dark-primary sm:absolute sm:-top-[60px] md:absolute">
            <img
              src="https://picsum.photos/100/200"
              alt=""
              className="h-[164px] w-[164px] rounded-full object-cover"
            />
          </div>
          <div className="mb-10 grow sm:mb-1 sm:mt-[100px] sm:flex sm:flex-col sm:items-center md:mb-2 md:mt-[121px] md:flex md:flex-col md:items-center">
            <h3 className="text-[32px] font-bold md:text-[28px]">
              Huỳnh Hữu Ý
            </h3>
            <span className="cursor-pointer text-14 font-semibold text-second-text hover:underline">
              438 bạn bè
            </span>
          </div>
          <div className="mb-10 flex items-center gap-2 sm:mb-2 md:mb-2">
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
                } ${index > 1 ? "sm:hidden" : ""}`}
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
