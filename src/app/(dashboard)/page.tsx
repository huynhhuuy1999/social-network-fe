"use client";
import { isMobile } from "react-device-detect";

import {
  CreatePost,
  ListPost,
  ListStory,
  SideBarLeft,
  SideBarRight,
} from "./components";
// import dynamic from "next/dynamic";

// const SideBarLeft = dynamic(() => import("./components/SideBarLeft"), {
//   ssr: false,
// });

const Home = () => {
  // console.log("isMobile", isMobile);
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

export default Home;
