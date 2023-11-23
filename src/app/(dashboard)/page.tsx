import {
  CreatePost,
  ListPost,
  ListStory,
  SideBarLeft,
  SideBarRight,
} from "./components";

const Home = () => {
  return (
    <div className="flex">
      <SideBarLeft />

      <div className="min-h-[calc(100vh-48px)] grow px-[30%] py-6">
        <ListStory />
        <CreatePost />
        <ListPost />
      </div>

      <SideBarRight />
    </div>
  );
};

export default Home;
