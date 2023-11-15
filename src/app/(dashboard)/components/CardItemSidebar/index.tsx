import { ICardItemSidebar } from "@/models/components";
import Image from "next/image";

export const CardItemSidebar: React.FC<ICardItemSidebar> = ({
  icon,
  name,
  link,
  isAvartar = false,
  arrowRight,
}) => {
  return (
    <div className="flex items-center">
      <div
        className={`mr-2 flex aspect-square w-9 items-center justify-center sm:mr-1 sm:w-7 ${
          isAvartar ? "rounded-full" : ""
        }`}
      >
        <Image
          src={icon}
          alt="icon"
          width={36}
          height={36}
          className="aspect-square w-9 sm:w-7"
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
