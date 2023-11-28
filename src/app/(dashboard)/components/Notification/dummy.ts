import { TYPE_NOTI } from "@/constants/enum";
import { ICardNotification } from "@/models/layoutHeader";

export const ListNoti: ICardNotification[] = [
  {
    avatar: `https://picsum.photos/id/0/100`,
    content:
      "Tin mới đây nhất của bạn đã có 168 người xem. Hãy chia sẻ tin mới với bạn bè nhé.",
    time: "12 giờ trước",
    type: TYPE_NOTI.UNSEEN,
  },
  {
    avatar: `https://picsum.photos/id/1/100`,
    content:
      "034 579 0193 vẫn là số di động của bạn chứ? Hãy giữ lại hoặc cập nhật số này.",
    time: "2 giờ trước",
    type: TYPE_NOTI.UNSEEN,
  },
  {
    avatar: `https://picsum.photos/id/2/100`,
    content: "Một quản trị viên đã mời bạn tham gia nhóm riêng tư ",
    time: "5 ngày trước",
    type: TYPE_NOTI.SEEN,
  },
  {
    avatar: `https://picsum.photos/id/3/100`,
    content:
      "Tin mới đây nhất của bạn đã có 168 người xem. Hãy chia sẻ tin mới với bạn bè nhé.",
    time: "1 giờ trước",
    type: TYPE_NOTI.UNSEEN,
  },
  {
    avatar: `https://picsum.photos/id/4/100`,
    content:
      "Tin mới đây nhất của bạn đã có 168 người xem. Hãy chia sẻ tin mới với bạn bè nhé.",
    time: "12 giờ trước",
    type: TYPE_NOTI.SEEN,
  },
];
