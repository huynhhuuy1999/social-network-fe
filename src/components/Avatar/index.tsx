import { IAvatar } from "@/models/components";
import Image from "next/image";

export const Avatar: React.FC<IAvatar> = ({
  src,
  height = 40,
  width = 40,
  className,
}) => {
  return (
    <div
      className={`cursor-pointer rounded-full ${
        width ? `w-[${width}px]` : "w-10"
      } ${height ? `h-[${height}px]` : "h-10"}`}
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className={` rounded-full ${width ? `w-[${width}px]` : "w-10"} ${
          height ? `h-[${height}px]` : "h-10"
        } ${className}`}
      />
    </div>
  );
};
