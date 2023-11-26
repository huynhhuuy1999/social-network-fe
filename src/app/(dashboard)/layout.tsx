"use client";

// Library
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { ReactNode, useMemo, useState } from "react";
// Component
import { Search } from "./components";
//Constant
import { TAB_ACTIVE } from "@/constants";
import { Avatar } from "@/components";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [tabActive, setTabActive] = useState<number>(TAB_ACTIVE.HOME);

  const listIcon = useMemo(() => {
    return [
      {
        link: "",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7
            
            `}
            viewBox="0 0 20 20"
            fill={`${tabActive === TAB_ACTIVE.HOME ? "#0866FF" : "#CCCCCC"}`}
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        ),
        tabActive: TAB_ACTIVE.HOME,
      },
      {
        link: "",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7 `}
            fill={`${tabActive === TAB_ACTIVE.VIDEO ? "#0866FF" : "#CCCCCC"}`}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        ),
        tabActive: TAB_ACTIVE.VIDEO,
      },
      {
        link: "",
        logo: (
          <svg
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            fill={`${tabActive === TAB_ACTIVE.MARKET ? "#0866FF" : "#CCCCCC"}`}
            className={`h-7 w-7 `}
          >
            <path d="M1.588 3.227A3.125 3.125 0 0 1 4.58 1h14.84c1.38 0 2.597.905 2.993 2.227l.816 2.719a6.47 6.47 0 0 1 .272 1.854A5.183 5.183 0 0 1 22 11.455v4.615c0 1.355 0 2.471-.119 3.355-.125.928-.396 1.747-1.053 2.403-.656.657-1.475.928-2.403 1.053-.884.12-2 .119-3.354.119H8.929c-1.354 0-2.47 0-3.354-.119-.928-.125-1.747-.396-2.403-1.053-.657-.656-.929-1.475-1.053-2.403-.12-.884-.119-2-.119-3.354V11.5l.001-.045A5.184 5.184 0 0 1 .5 7.8c0-.628.092-1.252.272-1.854l.816-2.719zM10 21h4v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V21zm6-.002c.918-.005 1.608-.025 2.159-.099.706-.095 1.033-.262 1.255-.485.223-.222.39-.55.485-1.255.099-.735.101-1.716.101-3.159v-3.284a5.195 5.195 0 0 1-1.7.284 5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 12 13a5.18 5.18 0 0 1-3.15-1.062A5.18 5.18 0 0 1 5.7 13a5.2 5.2 0 0 1-1.7-.284V16c0 1.442.002 2.424.1 3.159.096.706.263 1.033.486 1.255.222.223.55.39 1.255.485.551.074 1.24.094 2.159.1V17.5a2.5 2.5 0 0 1 2.5-2.5h3a2.5 2.5 0 0 1 2.5 2.5v3.498zM4.581 3c-.497 0-.935.326-1.078.802l-.815 2.72A4.45 4.45 0 0 0 2.5 7.8a3.2 3.2 0 0 0 5.6 2.117 1 1 0 0 1 1.5 0A3.19 3.19 0 0 0 12 11a3.19 3.19 0 0 0 2.4-1.083 1 1 0 0 1 1.5 0A3.2 3.2 0 0 0 21.5 7.8c0-.434-.063-.865-.188-1.28l-.816-2.72A1.125 1.125 0 0 0 19.42 3H4.58z"></path>
          </svg>
        ),
        tabActive: TAB_ACTIVE.MARKET,
      },
      {
        link: "",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7 `}
            fill={`${tabActive === TAB_ACTIVE.GROUP ? "#0866FF" : "#CCCCCC"}`}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        ),
        tabActive: TAB_ACTIVE.GROUP,
      },
      {
        link: "",
        logo: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7 `}
            fill={`${tabActive === TAB_ACTIVE.GAME ? "#0866FF" : "#CCCCCC"}`}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
            />
          </svg>
        ),
        tabActive: TAB_ACTIVE.GAME,
      },
    ];
  }, [tabActive]);

  return (
    <div className="bg-dark-second pt-[56px]">
      <div className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-b-line bg-dark-primary px-3 sm:gap-2">
        <Search />
        <div className="flex grow items-center justify-between gap-1 px-[10%] sm:hidden">
          {listIcon.map((value, k) => {
            return (
              <div
                key={k}
                className={`relative flex h-[56px] w-full cursor-pointer items-center justify-center  `}
                onClick={() => setTabActive(value.tabActive)}
              >
                {tabActive === value.tabActive ? (
                  <div className="absolute bottom-0 left-0 h-[3px] w-full bg-primary" />
                ) : null}

                {value.logo}
              </div>
            );
          })}
        </div>
        <div className="flex w-[23%] items-center justify-end gap-2">
          {/* icon Menu */}
          <div className="flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full bg-hover-primary sm:hidden">
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
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          </div>
          {/* icon message */}
          <div className="flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full bg-hover-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#CCCCCC]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
            </svg>
          </div>
          {/* icon notification */}
          <div className="flex aspect-square w-10 cursor-pointer items-center justify-center rounded-full bg-hover-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#CCCCCC] sm:h-5 sm:w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <Avatar
            src={"https://picsum.photos/200"}
            className="sm:!h-9 sm:!w-9"
            classNameImage="sm:!h-9 sm:!w-9"
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
