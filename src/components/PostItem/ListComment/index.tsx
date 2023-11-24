import { CommentItem } from "./CommentItem";

export const ListComment = () => {
  return (
    <div className="px-3">
      <span className="mb-3 block cursor-pointer font-semibold hover:underline">
        Xem thêm bình luận
      </span>
      <CommentItem />
      <div className="ml-10 mt-2">
        <CommentItem />
      </div>
    </div>
  );
};
