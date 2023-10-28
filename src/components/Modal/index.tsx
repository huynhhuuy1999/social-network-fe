import { IModal } from "@/models/components";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const Modal: React.FC<IModal> = ({
  children,
  show,
  setShow,
  className,
  height,
  width,
  backgroundColorOverlay,
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
                className={`modal__container ${className}`}
                style={{
                  width: width ? width : "auto",
                  height: height ? height : "auto",
                }}
                ref={ref}
              >
                {children}
              </div>
            </div>
          ) : null}
        </>,
        document.body
      )
    : null;
};
