import { SideBarLeft } from "./components";
import { SideBarRight } from "./components/SideBarRight";

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
