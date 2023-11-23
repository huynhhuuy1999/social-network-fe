// Library
import { IImagePost } from "@/models/post";
import { FastAverageColor } from "fast-average-color";
import React, { useState, useEffect } from "react";

export const ImagePost: React.FC<IImagePost> = ({ src, isBgColor = false }) => {
  const detectColor = new FastAverageColor();
  const [color, setColor] = useState("rgb(255,255,255)");
  useEffect(() => {
    isBgColor &&
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
  }, [src, isBgColor]);
  return (
    <div
      className={`flex h-full w-full items-center justify-center`}
      style={{ background: isBgColor ? color : "none" }}
    >
      <img
        src={src || ""}
        alt=""
        className={`overflow-hidden ${
          isBgColor ? "object-contain" : "w-full object-cover"
        } h-full `}
      />
    </div>
  );
};
