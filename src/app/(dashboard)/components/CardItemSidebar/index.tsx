"use client";
// Libraries
import { useRouter } from "next/navigation";
// Type
import { ICardItemSidebar } from "@/models/components";

export const CardItemSidebar: React.FC<ICardItemSidebar> = ({
  name,
  link,
  isAvartar = false,
  arrowRight,
  bgPosition,
  bgSize,
}) => {
  const route = useRouter();
  return (
    <div
      className="flex h-[52px] cursor-pointer items-center rounded-lg px-3 transition-all hover:bg-hover-primary"
      onClick={() => {
        // route.push(link);
        console.log("first");
      }}
    >
      <div
        className={`mr-3 flex aspect-square w-9 items-center justify-center ${
          isAvartar ? "rounded-full" : ""
        }`}
      >
        <i
          className={`aspect-square h-9 bg-[url('/icon/homeIcon.png')]  bg-no-repeat`}
          style={{
            backgroundPosition: `${bgPosition[0]}px ${bgPosition[1]}px`,
            backgroundSize: `${bgSize[0]}px ${bgSize[1]}px`,
          }}
        />
      </div>
      <div className="grow">
        <span className="text-[0.9375rem] font-medium leading-[1.33] sm:text-sm">
          {name}
        </span>
      </div>
      {arrowRight ? (
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
};
