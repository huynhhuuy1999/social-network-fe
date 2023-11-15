import { ICardItemSidebar } from "@/models/components";

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

export const SIDEBAR_HOME: ICardItemSidebar[] = [
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
