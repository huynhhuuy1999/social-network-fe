"use client";

import { FastAverageColor } from "fast-average-color";
import { useEffect, useState } from "react";

export const CoverImage: React.FC<ICoverImage> = ({ src }) => {
  const detectColor = new FastAverageColor();
  const [color, setColor] = useState("rgb(255,255,255)");

  useEffect(() => {
    detectColor
      .getColorAsync(src, { top: 10, left: 0, width: 10, height: 10 })
      .then((color) => {
        if (color.value[0] === 0) setColor(`rgba(255,255,255,1)`);
        else
          setColor(
            `rgba(${color.value[0]},${color.value[1]},${color.value[2]},0.7)`,
          );
      })
      .catch(() => {
        setColor(`rgba(255,255,255,1)`);
      });
  }, [src]);

  return (
    <div
      className={`relative flex max-h-[60vh] w-full items-center justify-center sm:max-h-[48vh] md:max-h-[48vh]`}
      style={{ background: color }}
    >
      <div className="z-10 w-[70%] rounded-md sm:w-full sm:rounded-none md:w-full md:rounded-none">
        <img
          src={src || ""}
          alt=""
          className="max-h-[60vh] w-full overflow-hidden rounded-md object-cover sm:max-h-[50vh] sm:rounded-none md:max-h-[50vh] md:rounded-none"
        />
      </div>
      <div className="absolute bottom-5 right-[calc(15%+20px)] z-10 flex h-9 cursor-pointer items-center gap-2 rounded-md bg-hover-primary px-3 hover:bg-hover-second sm:right-5 md:right-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
          />
        </svg>
        <span className="text-15 font-semibold text-white sm:hidden md:hidden">
          Chỉnh sửa ảnh bìa
        </span>
      </div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, #242526, rgba(36,37,38,.9), rgba(36,37,38,.7), rgba(36,37,38,.4), rgba(36,37,38,0))",
        }}
        className="absolute left-0 top-0 h-full w-full"
      />
    </div>
  );
};
