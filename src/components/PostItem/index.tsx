// Component
import { ListImage } from "./ListImage";
import { Option } from "./Option";
import { ListComment } from "./ListComment";
import { HeaderPost } from "./HeaderPost";
import { StatusText } from "./StatusText";
// Interface
import { IPostItem } from "@/models/components";

export const PostItem: React.FC<IPostItem> = ({ className }) => {
  return (
    <div
      className={`mt-4 rounded-lg bg-dark-primary py-3 sm:rounded-none ${className}`}
    >
      <HeaderPost />
      <StatusText />
      <ListImage />
      <Option />
      <ListComment />
    </div>
  );
};
