import { Avatar } from "@/components";
import Image from "next/image";

export const CreatePost = () => {
  return (
    <div className="mt-5 rounded-lg bg-dark-primary px-3 py-2">
      <div className="flex gap-2">
        <Avatar src={`https://picsum.photos/id/${6}/200`} />
        <div className="flex h-10 grow cursor-pointer items-center rounded-full bg-hover-primary px-3 transition-all hover:bg-hover-second">
          <span>Bạn đang nghĩ gì thế???</span>
        </div>
      </div>
      <hr className="my-2 text-line" />
      <div className="flex">
        <div className="flex h-10 grow cursor-pointer items-center justify-center rounded-lg hover:bg-hover-primary">
          <Image
            src={"/icon/iconCamera.png"}
            alt=""
            width={24}
            height={24}
            className="aspect-square w-6"
          />
          <span className="ml-2 block text-[13px] font-semibold ">
            Video trực tiếp
          </span>
        </div>
        <div className="flex h-10 grow cursor-pointer items-center justify-center rounded-lg hover:bg-hover-primary">
          <Image
            src={"/icon/iconImage.png"}
            alt=""
            width={24}
            height={24}
            className="aspect-square w-6"
          />
          <span className="ml-2 block text-[13px] font-semibold">Ảnh</span>
        </div>
        <div className="flex h-10 grow cursor-pointer items-center justify-center rounded-lg hover:bg-hover-primary">
          <Image
            src={"/icon/iconFeel.png"}
            alt=""
            width={24}
            height={24}
            className="aspect-square w-6"
          />
          <span className="ml-2 block text-[13px] font-semibold">
            Cảm xúc hoạt động
          </span>
        </div>
      </div>
    </div>
  );
};
