// Library
import Image from "next/image";
// Component
import { Avatar, Modal } from "@/components";
// Model
import { IModalCreate } from "@/models/post";

export const ModalCreate: React.FC<IModalCreate> = ({ setShow, show }) => {
  const renderIconOption = (icon: string, onClick?: () => void) => {
    return (
      <div
        className="flex aspect-square w-9 items-center justify-center rounded-full hover:bg-hover-primary sm:w-8"
        onClick={onClick}
      >
        <Image
          src={icon}
          width={24}
          height={24}
          alt=""
          className="sm:!h-5 sm:!w-5"
        />
      </div>
    );
  };
  return (
    <Modal
      show={show}
      setShow={(value) => setShow?.(value)}
      backgroundColorOverlay="transparent"
      className="max-h-[80vh] !bg-dark-primary"
    >
      <div className="max-h-[80vh] min-h-[428px] w-[500px] rounded-lg border border-devider sm:h-auto sm:min-h-[360px] sm:w-full">
        <div className="flex items-center justify-center py-4">
          <h2 className="text-[20px] font-semibold sm:text-[15px]">
            Tạo bài viết
          </h2>
        </div>
        <hr className="text-line" />
        <div className="py-3 pl-4 pr-3">
          <div className="flex items-center">
            <Avatar
              width={40}
              height={40}
              src="https://picsum.photos/id/1/100/200"
              className="mr-2 sm:!h-8 sm:!w-8"
              classNameImage="sm:!w-8 sm:!h-8"
            />
            <div className="">
              <span className="cursor-pointer text-[15px] font-semibold sm:text-13">
                Huỳnh Hữu Ý
              </span>
              <div className="flex h-6 max-w-[156px] cursor-pointer items-center gap-1 rounded-md bg-hover-primary p-1 sm:h-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 sm:h-3 sm:w-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>

                <span className="truncate text-13 font-semibold sm:text-12">
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
            rows={5}
            placeholder="Ý ơi, bạn đang nghĩ gì thế?"
            className="mt-2 max-h-[300px] min-h-[50px] w-full resize-none bg-transparent text-[24px] focus:outline-none sm:text-[18px]"
          />
          <div className="flex cursor-pointer items-center justify-between rounded-md border border-devider px-2 py-3 sm:p-1">
            <span className="sm:hidden">Thêm vào bài viết của bạn</span>
            <div className="flex gap-1 sm:w-full sm:justify-center">
              {renderIconOption("/icon/iconImage.png")}
              {renderIconOption("/icon/iconTag.png")}
              {renderIconOption("/icon/iconFeel.png")}
              {renderIconOption("/icon/iconLocation.png")}
              {renderIconOption("/icon/iconGif.png")}
              <div className="flex aspect-square w-9 items-center justify-center rounded-full hover:bg-hover-primary sm:w-8">
                <i
                  className="aspect-square h-6 bg-[url('/icon/iconDot.png')] bg-no-repeat"
                  style={{
                    backgroundPosition: "0 -38px",
                    backgroundSize: "38px 122px",
                  }}
                />
              </div>
            </div>
          </div>
          <button className="mt-4 h-9 w-full rounded-lg bg-primary text-[15px] font-semibold text-white sm:h-8 sm:text-13">
            Đăng
          </button>
        </div>
      </div>
    </Modal>
  );
};
