"use client";
import { TYPE_NOTI } from "@/constants/enum";
// Library
import { IOptionModal } from "@/models/layoutHeader";
import { useEffect, useRef, useState } from "react";
import { CardNotification } from "..";
import { ListNoti } from "./dummy";

export const Notification: React.FC<IOptionModal> = ({ isShow, setIsShow }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [typeNoti, setTypeNoti] = useState<number>(TYPE_NOTI.ALL);

  useEffect(() => {
    if (isShow) {
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          event.stopPropagation();
          setIsShow?.(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [ref, isShow]);

  return (
    <div
      className="absolute -right-5 top-10 z-50 flex max-h-[80vh] w-[360px] flex-col rounded-lg bg-dark-second px-2 pt-3 sm:-right-10"
      style={{
        boxShadow:
          " 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
      }}
      ref={ref}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[24px] font-semibold">Thông báo</h3>
        <div className="flex aspect-square w-9 items-center justify-center rounded-full hover:bg-hover-primary sm:w-8">
          <i
            className="aspect-square h-6 bg-[url('/icon/iconDot.png')] bg-no-repeat"
            style={{
              backgroundPosition: "0 -38px",
              backgroundSize: "38px 122px",
            }}
          />
        </div>
      </div>
      <div className="mt-3 flex gap-2">
        <div
          className={`flex h-9 items-center px-3 ${
            typeNoti === TYPE_NOTI.ALL ? "bg-primary-active" : ""
          } rounded-full`}
          onClick={() => setTypeNoti(TYPE_NOTI.ALL)}
        >
          Tất cả
        </div>
        <div
          className={`flex h-9 items-center px-3 ${
            typeNoti === TYPE_NOTI.UNSEEN ? "bg-primary-active" : ""
          } rounded-full`}
          onClick={() => setTypeNoti(TYPE_NOTI.UNSEEN)}
        >
          Chưa đọc
        </div>
      </div>
      <div className="mb-2 mt-3 flex items-center justify-between">
        <span className="text-[17px] font-semibold">Mới</span>
        <span className="text-15 text-primary hover:underline">Xem tất cả</span>
      </div>
      <div className="grow overflow-y-auto">
        {ListNoti.map((value, index) => {
          return (
            <CardNotification
              avatar={value.avatar}
              key={index}
              content={value.content}
              time={value.time}
              type={value.type}
            />
          );
        })}
      </div>
    </div>
  );
};
