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
      className={`relative flex h-full max-h-[60vh] w-full items-center justify-center`}
      style={{ background: color }}
    >
      <div className="z-10 w-[70%]">
        <img
          src={src || ""}
          alt=""
          className="max-h-[60vh] w-full overflow-hidden object-cover"
        />
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
