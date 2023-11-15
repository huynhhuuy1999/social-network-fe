"use client";

import { InputCustom } from "@/components";
import Image from "next/image";
import { useState } from "react";
import { listUserSearch } from "./dummy";
import { CardSearch } from "..";

export const Search = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <div className="relative flex w-[23%] items-center py-2">
      {isFocus ? (
        <div
          className={`flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full hover:bg-hover-primary`}
        >
          <Image
            src={"/icon/svg/leftArrow.svg"}
            alt=""
            width={20}
            height={20}
          />
        </div>
      ) : (
        <Image
          src="/icon/facebook.png"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10"
        />
      )}

      <div className="ml-2 flex h-10 w-[252px] items-center rounded-[50px] bg-[#3A3B3C] pl-2 ">
        {!isFocus ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#CCCCCC]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        ) : null}

        <InputCustom
          type="text"
          classNames="bg-transparent border-none text-white text-[13px] placeholder:text-[#CCCCCC] z-10"
          placeholder="Tìm kiếm trên facebook"
          onFocus={(e) => setIsFocus(true)}
          onBlur={(e) => setIsFocus(false)}
        />
      </div>
      {isFocus ? (
        <div className="absolute left-0 top-0 z-0 w-full overflow-hidden  pb-3">
          <div className="h-14" />
          <div className="flex items-center justify-between bg-dark-primary px-4 pt-2">
            <span className="text-[1.0265rem] font-semibold text-primary-text ">
              Tìm kiếm gần đây
            </span>
            <div className="cursor-pointer rounded-md px-2 py-1 hover:bg-hover-primary">
              <span className="text-sm text-[#5AA7FF]">Chỉnh sửa</span>
            </div>
          </div>
          <div className="rounded-b-lg bg-dark-primary px-2 pb-2">
            {listUserSearch.map((value, key) => {
              return (
                <CardSearch
                  name={value.name}
                  avatar={value.avatar}
                  key={key}
                  isFriend={value.isFriend}
                  numNoti={value.numNoti}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
};
