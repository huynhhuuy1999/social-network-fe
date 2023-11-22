// Library
import Image from "next/image";
// Component
import { Avatar, Modal } from "@/components";
// Model
import { IModalCreate } from "@/models/post";

export const ModalCreate: React.FC<IModalCreate> = ({ setShow, show }) => {
  return (
    <Modal
      show={show}
      setShow={(value) => setShow?.(value)}
      backgroundColorOverlay="transparent"
      className="!bg-dark-primary"
    >
      <div className="max-h-[80vh] min-h-[428px] w-[500px] rounded-lg border">
        <div className="flex items-center justify-center py-4">
          <h2 className="text-[20px] font-semibold">Tạo bài viết</h2>
        </div>
        <hr className="text-line" />
        <div className="py-3 pl-4 pr-1">
          <div className="flex items-center">
            <Avatar
              width={40}
              height={40}
              src="https://picsum.photos/id/1/100/200"
              className="mr-2"
            />
            <div className="">
              <span className="text-[15px] font-semibold">Huỳnh Hữu Ý</span>
              <div className="flex h-6 max-w-[156px] cursor-pointer items-center gap-1 rounded-md bg-hover-primary p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                <span className="truncate text-[13px] font-semibold">
                  Công khai
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <textarea
            name="abc"
            id=""
            rows={15}
            className="w-full resize-none bg-transparent focus:outline-none"
          />
          <div>
            <span>Thêm vào bài viết của bạn</span>
            <div>{/* <Image /> */}</div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
