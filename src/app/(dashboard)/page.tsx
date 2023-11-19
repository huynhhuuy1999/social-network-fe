import { SideBarRight, SidebarLeft } from "./components";

const Home = () => {
  return (
    <div className="flex">
      <SidebarLeft />
      <div className="grow"></div>
      <SideBarRight />
    </div>
  );
};

export default Home;
