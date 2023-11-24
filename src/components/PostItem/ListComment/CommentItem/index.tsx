import { Avatar } from "@/components";

export const CommentItem = () => {
  return (
    <div>
      <div className="flex gap-2">
        <Avatar width={32} height={32} src="https://picsum.photos/200" />
        <div>
          <div className="flex flex-col rounded-[14px] bg-hover-primary p-2">
            <span className="text-13 font-semibold">Minh Thư</span>
            <span className="text-[14px]">Thật hạnh phúc khi có anh</span>
          </div>
          <div className="text-12 ml-3 mt-[2px] flex gap-4">
            <span className="cursor-pointer">29 phút</span>
            <span className="cursor-pointer font-semibold hover:underline">
              Thích
            </span>
            <span className="cursor-pointer font-semibold hover:underline">
              Phản hồi
            </span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
