"use client";
// Components
import { PostItem } from "@/components";
import { CreatePost } from "@/modules/Home/components";

export const InfoRight = () => {
  return (
    <div className="grow">
      <CreatePost className="!mt-2" />
      <div>
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
};
