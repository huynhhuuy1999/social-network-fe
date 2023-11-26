import { actionItemPost } from "@/constants";
import { useEffect, useRef } from "react";

interface IModalOption {
  isShow: boolean;
  setIsShow: (value: boolean) => void;
}

export const ModalOption: React.FC<IModalOption> = ({ isShow, setIsShow }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isShow) {
      const handleClickOutside = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsShow?.(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [ref, isShow]);

  return isShow ? (
    <div
      className="absolute -bottom-[75px] -left-[310px] z-10 w-[328px] rounded-lg bg-dark-primary"
      style={{ boxShadow: "0 0 6px rgba(0, 0, 0, 0.2)" }}
      ref={ref}
    >
      {actionItemPost.map((value, index) => {
        return (
          <div
            key={index}
            className={`flex gap-2 p-2 transition-all hover:bg-hover-primary ${
              index === 0 ? "rounded-t-lg" : ""
            }`}
          >
            <div className="aspect-square w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>
            </div>

            <div className="flex grow flex-col">
              <span className="text-[15px] font-bold ">{value.title}</span>
              <span className="text-12 text-second-text">
                {value.description}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
};
