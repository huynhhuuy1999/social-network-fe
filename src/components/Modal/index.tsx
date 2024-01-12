"use client";
import { IModal } from "@/models/components";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const Modal: React.FC<IModal> = ({
  children,
  show,
  setShow,
  className,
  height,
  width,
  backgroundColorOverlay,
  classNameIconClose,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (show) {
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow?.(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [ref, show]);
  return mounted
    ? createPortal(
        <>
          {show ? (
            <div
              className={"modal"}
              style={{
                backgroundColor: backgroundColorOverlay,
              }}
            >
              <div
                className={`modal__container relative ${className}`}
                style={{
                  width: width ? width : "auto",
                  height: height ? height : "auto",
                }}
                ref={ref}
              >
                <div
                  className={`absolute right-3 top-3 flex aspect-square w-9 cursor-pointer items-center justify-center rounded-full bg-[#ebedf0] ${className}`}
                  onClick={() => setShow?.(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                {children}
              </div>
            </div>
          ) : null}
        </>,
        document.body,
      )
    : null;
};
