import { Avatar } from "@/components";

export const CreatePost = () => {
  return (
    <div className="mt-5 rounded-lg bg-dark-primary px-3 py-2">
      <div className="flex gap-2">
        <Avatar src={`https://picsum.photos/id/${6}/200`} />
        <div className="hover:bg-hover-second flex h-10 grow cursor-pointer items-center rounded-full bg-hover-primary px-3 transition-all">
          <span>Bạn đang nghĩ gì thế???</span>
        </div>
      </div>
      <hr className="my-2 text-line" />
      <div className="flex">
        <div className="grow">Video trực tiếp</div>
        <div className="grow">Ảnh</div>
        <div className="grow">Cảm xúc hoạt động</div>
      </div>
    </div>
  );
};
