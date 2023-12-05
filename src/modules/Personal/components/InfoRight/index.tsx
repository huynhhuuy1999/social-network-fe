"use client";
// Components
import { PostItem } from "@/components";
import { CreatePost } from "@/modules/Home/components";

export const InfoRight = () => {
  return (
    <div className="grow">
      <CreatePost className="!mt-2 sm:!rounded-lg md:!rounded-lg" />
      <div>
        <PostItem className="sm:!rounded-lg md:!rounded-lg" />
        <PostItem className="sm:!rounded-lg md:!rounded-lg" />
      </div>
    </div>
  );
};
