import {
  CreatePost,
  ListPost,
  ListStory,
  SideBarLeft,
  SideBarRight,
} from "./components";

export const HomeModule = () => {
  return (
    <div className="flex">
      <SideBarLeft />
      <div className="min-h-[calc(100vh-48px)] grow px-[30%] py-6 sm:overflow-x-hidden sm:px-0">
        <ListStory />
        <CreatePost />
        <ListPost />
      </div>

      <SideBarRight />
    </div>
  );
};
