"use client";

// constants
import { SIDEBAR_HOME_ADVANCED, SIDEBAR_HOME_DEFAULT } from "@/constants";
//Component

import { CardItemSidebar } from "../CardItemSidebar";
import { useState } from "react";
import { SideBar } from "../SideBar";

export const SideBarLeft = () => {
  const [isMore, setIsMore] = useState<boolean>(false);
  return (
    <SideBar>
      <div>
        {SIDEBAR_HOME_DEFAULT.map((value, key) => {
          return (
            <CardItemSidebar
              bgPosition={value.bgPosition}
              bgSize={value.bgSize}
              name={value.name}
              key={key}
              link={value.link}
              typeIcon={value.typeIcon}
            />
          );
        })}
        {isMore ? (
          <div>
            {SIDEBAR_HOME_ADVANCED.map((value, _) => {
              return (
                <CardItemSidebar
                  bgPosition={value.bgPosition}
                  bgSize={value.bgSize}
                  name={value.name}
                  key={value.link}
                  link={value.link}
                  typeIcon={value.typeIcon}
                />
              );
            })}
          </div>
        ) : null}
        <div></div>
        <CardItemSidebar
          icon={
            <div className="mr-3 flex aspect-square w-9 items-center justify-center rounded-full bg-hover-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="h-5 w-5"
              >
                {!isMore ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                )}
              </svg>
            </div>
          }
          name={isMore ? "Thu gọn" : "Xem thêm"}
          link=""
          onClick={() => {
            setIsMore(!isMore);
          }}
        />
      </div>
    </SideBar>
  );
};
