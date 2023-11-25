import { ICardItemSidebar } from "@/models/components";
import { TYPE_ICON, TYPE_REACT } from "./enum";

export const MONTH = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const TAB_ACTIVE = {
  HOME: 1,
  VIDEO: 2,
  MARKET: 3,
  GROUP: 4,
  GAME: 5,
};

export const SIDEBAR_HOME_DEFAULT: ICardItemSidebar[] = [
  {
    bgPosition: [0, -304],
    bgSize: [38, 570],
    name: "Bạn bè",
    link: "/friends",
  },
  {
    bgPosition: [0, -38],
    bgSize: [38, 570],
    name: "Nhóm",
    link: "/group",
  },
  {
    bgPosition: [0, -190],
    bgSize: [38, 570],
    name: "Đã lưu",
    link: "/saves",
  },
  {
    bgPosition: [0, -418],
    bgSize: [38, 570],
    name: "Marketplace",
    link: "/marketplace",
  },
  {
    bgPosition: [0, -456],
    bgSize: [38, 570],
    name: "Kỷ niệm",
    link: "/celebrate",
  },
  {
    bgPosition: [0, -152],
    bgSize: [38, 570],
    name: "Bảng feed",
    link: "/",
  },
  {
    bgPosition: [0, -532],
    bgSize: [38, 570],
    name: "Video",
    link: "/video",
  },
];

export const SIDEBAR_HOME_ADVANCED: ICardItemSidebar[] = [
  {
    bgPosition: [0, -342],
    bgSize: [38, 570],
    name: "Chiến dịch gây quỹ",
    link: "/fund",
  },
  {
    bgPosition: [0, -76],
    bgSize: [38, 570],
    name: "Chơi game",
    link: "/game",
  },
  {
    bgPosition: [0, 0],
    bgSize: [38, 570],
    name: "Hiến máu",
    link: "/blood",
    typeIcon: TYPE_ICON.HOME,
  },
  {
    bgPosition: [0, 0],
    bgSize: [38, 574],
    name: "Messenger",
    link: "/messenger",
    typeIcon: TYPE_ICON.MESSAGE,
  },
  {
    bgPosition: [0, -38],
    bgSize: [38, 76],
    name: "Sự kiện",
    link: "/event",
    typeIcon: TYPE_ICON.EVENT,
  },
  {
    bgPosition: [0, -114],
    bgSize: [38, 570],
    name: "Trang",
    link: "/page",
  },
  {
    bgPosition: [0, -532],
    bgSize: [38, 570],
    name: "Video chơi game",
    link: "/video-game",
  },
];

export const ListReact = [
  {
    src: "/icon/svg/like.svg",
    type: TYPE_REACT.LIKE,
  },
  {
    src: "/icon/svg/heartEyes.svg",
    type: TYPE_REACT.HEART,
    color: "red",
  },
  {
    src: "/icon/svg/cryEyes.svg",
    type: TYPE_REACT.CRY,
    color: "#0866FF",
  },
  {
    src: "/icon/svg/wowIcon.svg",
    type: TYPE_REACT.WOW,
    color: "#0866FF",
  },
  {
    src: "/icon/svg/TearEyes.svg",
    type: TYPE_REACT.SMILE,
    color: "#0866FF",
  },
  {
    src: "/icon/svg/angry.svg",
    type: TYPE_REACT.ANGRY,
    color: "#0866FF",
  },
];

export const reactChoose = {
  LIKE: {
    name: "Thích",
    color: "rgb(247, 177, 37)",
    icon: "/icon/svg/like.svg",
  },
  HEART: {
    name: "Yêu thích",
    color: "rgb(243, 62, 88)",
    icon: "/icon/svg/heartEyes.svg",
  },
  CRY: {
    name: "Buồn",
    color: "rgb(247, 177, 37)",
    icon: "/icon/svg/cryEyes.svg",
  },
  WOW: {
    name: "Wow",
    color: "rgb(247, 177, 37)",
    icon: "/icon/svg/wowIcon.svg",
  },
  SMILE: {
    name: "Haha",
    color: "rgb(247, 177, 37)",
    icon: "/icon/svg/TearEyes.svg",
  },
  ANGRY: {
    name: "Phẫn nộ",
    color: "rgb(233, 113, 15)",
    icon: "/icon/svg/angry.svg",
  },
  NONE: {
    name: "Thích",
    color: "#E4E6EB",
    icon: "/icon/svg/likeSolid.svg",
  },
};
