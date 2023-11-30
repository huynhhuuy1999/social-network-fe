"use client";
// Libraries
import { useRouter } from "next/navigation";
// Type
import { ICardItemSidebar } from "@/models/components";
import { TYPE_ICON } from "@/constants/enum";

export const CardItemSidebar: React.FC<ICardItemSidebar> = ({
  name,
  arrowRight,
  bgPosition = [],
  bgSize = [],
  icon,
  typeIcon,
  onClick,
  classNameIcon,
  classNameText,
  stylesIcon,
}) => {
  const route = useRouter();
  const renderTypeIcon = (type?: number) => {
    switch (type) {
      case TYPE_ICON.EVENT:
        return "eventIcon.png";
      case TYPE_ICON.MESSAGE:
        return "messageIcon.png";
      case TYPE_ICON.DIRECTION:
        return "directionIcon.png";
      case TYPE_ICON.NOTIFICATION:
        return "notificationIcon.png";
      default:
        return "homeIcon.png";
    }
  };
  return (
    <div
      className="flex h-[52px] cursor-pointer items-center rounded-lg px-3 transition-all hover:bg-hover-primary"
      onClick={() => {
        // route.push(link);
        onClick && onClick();
      }}
    >
      {icon ? (
        icon
      ) : (
        <div
          className={`mr-3 flex aspect-square w-9 items-center justify-center`}
        >
          <i
            className={`aspect-square h-9 bg-no-repeat ${classNameIcon}`}
            style={{
              backgroundPosition: `${bgPosition[0]}px ${bgPosition[1]}px`,
              backgroundSize: `${bgSize[0]}px ${bgSize[1]}px`,
              backgroundImage: `url(/icon/${renderTypeIcon(typeIcon)})`,
              ...stylesIcon,
            }}
          />
        </div>
      )}
      <div className="grow">
        <span
          className={`sm:text-sm text-[0.9375rem] font-semibold leading-[1.33] ${classNameText}`}
        >
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
