"use client";
import { isMobile } from "react-device-detect";
import { HomeModule } from "@/modules/Home";

// import dynamic from "next/dynamic";

// const SideBarLeft = dynamic(() => import("./components/SideBarLeft"), {
//   ssr: false,
// });

const Home = () => {
  // console.log("isMobile", isMobile);
  return <HomeModule />;
};

export default Home;
