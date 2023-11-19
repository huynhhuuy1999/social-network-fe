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

      <div className="h-[100vh] grow px-[23%]">
        <ListStory />
        <CreatePost />
        <ListPost />
      </div>

      <SideBarRight />
    </div>
  );
};

export default Home;
