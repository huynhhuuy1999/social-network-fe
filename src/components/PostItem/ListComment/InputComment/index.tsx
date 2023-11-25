"use client";
//Library
import React, { useEffect, useRef, useState } from "react";
//Component
import { Avatar } from "@/components";

export const InputComment = () => {
  const refTextAre = useRef<HTMLTextAreaElement>(null);
  const [isFocusComment, setIsFocusComment] = useState<boolean>(false);

  const changeHeight = () => {
    if (refTextAre && refTextAre.current) {
      refTextAre.current.style.height = "auto";
      refTextAre.current.style.height = refTextAre.current.scrollHeight + "px";
    }
  };
  return (
    <div className="mt-2 flex gap-2">
      <Avatar src="https://picsum.photos/200" width={32} height={32} />
      <div className="grow rounded-[10px] bg-hover-primary px-3 pt-2">
        <textarea
          ref={refTextAre}
          onInput={() => changeHeight()}
          style={{ height: "auto" }}
          className="w-full resize-none bg-transparent text-13 focus:outline-none"
          rows={1}
          placeholder="Viết bình luận..."
          onFocus={() => setIsFocusComment(true)}
        />
        {isFocusComment ? (
          <div className="mb-2 flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </div>
        ) : null}
      </div>
    </div>
  );
};
