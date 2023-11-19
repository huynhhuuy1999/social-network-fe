import { SideBarLeft, SideBarRight } from "./components";

const Home = () => {
  return (
    <div className="flex">
      <SideBarLeft />
      <div className="grow"></div>
      <SideBarRight />
    </div>
  );
};

export default Home;
