// Component
import { ListImage } from "./ListImage";
import { Option } from "./Option";
import { ListComment } from "./ListComment";
import { HeaderPost } from "./HeaderPost";
import { StatusText } from "./StatusText";

export const PostItem = () => {
  return (
    <div className="mt-4 rounded-lg bg-dark-primary py-3">
      <HeaderPost />
      <StatusText />
      <ListImage />
      <Option />
      <ListComment />
    </div>
  );
};
