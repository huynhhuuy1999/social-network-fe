import Image from "next/image";
// Component
import { Avatar } from "..";
import { ListImage } from "./ListImage";
import { Option } from "./Option";

export const PostItem = () => {
  return (
    <div className="mt-4 rounded-lg bg-dark-primary py-3">
      <div className="item-center flex px-3">
        <Avatar
          src="https://picsum.photos/id/1/100/200"
          height={40}
          width={40}
        />
        <div className="ml-2 flex grow flex-col">
          <span className=" cursor-pointer text-[15px] font-semibold hover:underline">
            Phạm Minh Thư
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[11px]">1 ngày</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </div>
        </div>
        <div className="flex cursor-pointer items-center gap-1">
          <div className="flex aspect-square w-9 items-center justify-center rounded-full hover:bg-hover-primary">
            <i
              className="aspect-square h-6 bg-[url('/icon/iconDot.png')] bg-no-repeat"
              style={{
                backgroundPosition: "0 -38px",
                backgroundSize: "38px 122px",
              }}
            />
          </div>
          <div className="flex aspect-square w-9 cursor-pointer items-center justify-center rounded-full hover:bg-hover-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
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
        </div>
      </div>
      <div className="mt-2 px-3 text-[0.9375rem]">
        <span className="block leading-[1.333]">
          Hạnh phúc nằm ở góc nhìn, mình thấy hp là đời sẽ an
        </span>
        <span className="block">
          Hạnh phúc ai bán mà mua, ai cho mà lấy, ai thừa mà xin
        </span>
      </div>
      <ListImage />
      <Option />
      <div></div>
      <div></div>
    </div>
  );
};
