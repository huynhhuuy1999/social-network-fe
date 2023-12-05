"use client";
// Library
import { useState } from "react";
// Constant
import { HeaderTextPersonal } from "@/constants";
import { TYPE_HEADER_PERSONAL } from "@/constants/enum";
import Image from "next/image";

export const InfoName = () => {
  const [chooseType, setChooseType] = useState<number>(
    TYPE_HEADER_PERSONAL.POST,
  );
  return (
    <div className="flex justify-center px-[3%]">
      <div className="w-[70%] sm:w-full md:w-[90%]">
        <div className="relative flex items-center gap-4 sm:flex-col md:flex-col">
          <div className="relative -top-[45px] z-10 h-[172px] w-[172px] cursor-pointer rounded-full border-[4px] border-dark-primary sm:absolute sm:-top-[60px] md:absolute">
            <img
              src="https://picsum.photos/100/200"
              alt=""
              className="aspect-square h-[164px] w-[164px] rounded-full object-cover"
            />
            <div className="absolute bottom-1 right-1 z-10  aspect-square h-9 cursor-pointer  rounded-full bg-dark-primary hover:bg-hover-primary">
              <div className="relative flex aspect-square w-full items-center justify-center rounded-full bg-hover-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mb-10 grow sm:mb-1 sm:mt-[100px] sm:flex sm:flex-col sm:items-center md:mb-2 md:mt-[121px] md:flex md:flex-col md:items-center">
            <h3 className="text-[32px] font-bold sm:mt-2 sm:text-[28px] md:text-[28px]">
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
