import { IAvatar } from "@/models/components";
import Image from "next/image";

export const Avatar: React.FC<IAvatar> = ({
  src,
  height = 40,
  width = 40,
  className,
  borderWidth,
  classNameImage,
}) => {
  return (
    <div
      className={`cursor-pointer rounded-full ${
        borderWidth
          ? width
            ? `w-[${borderWidth * 2 + width}px]`
            : "w-10"
          : width
          ? `w-[${width}px]`
          : "w-10"
      } aspect-square ${className}`}
      style={{
        width: borderWidth
          ? width
            ? borderWidth * 2 + width
            : 40
          : width
          ? width
          : 40,
      }}
    >
      {borderWidth ? (
        <div
          className={`flex aspect-square w-[${
            width + borderWidth * 2
          }px] items-center justify-center rounded-full bg-primary`}
        >
          <Image
            src={src || ""}
            alt=""
            width={width || 40}
            height={width || 40}
            className={`aspect-square ${
              width ? `w-[${width}px]` : "w-10"
            } rounded-full`}
          />
        </div>
      ) : (
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          className={` rounded-full ${
            width ? `w-[${width}px]` : "w-10"
          } aspect-square ${classNameImage}`}
        />
      )}
    </div>
  );
};
