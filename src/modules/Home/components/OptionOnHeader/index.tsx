import { IOptionModal } from "@/models/layoutHeader";
import React, { useEffect, useRef } from "react";
import { CardItemSidebar } from "../CardItemSidebar";
import { Avatar } from "@/components";
import { ListOptionHeader } from "@/constants";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks";
import { authAction } from "@/store/reducers/authSlice";

export const OptionOnHeader: React.FC<IOptionModal> = ({
  isShow,
  setIsShow,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const route = useRouter();
  const dispatch = useAppDispatch();

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

  const logout = () => {
    dispatch(authAction.logout());
  };

  return (
    <div
      className="absolute -right-2 top-10 z-50 flex max-h-[80vh] w-[360px] flex-col rounded-lg bg-dark-second px-2 py-3 sm:-right-2"
      style={{
        boxShadow:
          " 0 12px 28px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
      }}
      ref={ref}
    >
      <CardItemSidebar
        icon={
          <Avatar
            src="https://picsum.photos/id/1/100/200"
            width={36}
            height={36}
            className="mr-3"
          />
        }
        name={"Huỳnh Hữu Ý"}
        link=""
        onClick={() => route.push("/huynhhuuy1999")}
      />
      <hr className="mb-2 text-line" />
      {ListOptionHeader.map((value, index) => {
        return (
          <CardItemSidebar
            bgPosition={value.bgPosition}
            bgSize={value.bgSize}
            name={value.name}
            key={index}
            link={value.link}
            typeIcon={value.typeIcon}
            arrowRight={value?.arrowRight}
            classNameIcon="!h-5 aspect-square"
            stylesIcon={{ filter: "invert(89%) sepia(6%) hue-rotate(185deg)" }}
            onClick={() => {
              route.push(value.link);
              if (value.name === "Đăng xuất") logout();
            }}
          />
        );
      })}
    </div>
  );
};
