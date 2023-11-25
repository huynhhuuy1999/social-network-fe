import { CommentItem } from "./CommentItem";
import { InputComment } from "./InputComment";

export const ListComment = () => {
  return (
    <div className="px-3">
      <span className="mb-3 block cursor-pointer font-semibold hover:underline">
        Xem thêm bình luận
      </span>
      <CommentItem />
      <div className="ml-10 mt-2">
        <CommentItem />
        <InputComment />
      </div>
      <InputComment />
    </div>
  );
};
