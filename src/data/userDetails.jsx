import angela from "../assets/images/avatar-angela-gray.webp";
import anna from "../assets/images/avatar-anna-kim.webp";
import jacob from "../assets/images/avatar-jacob-thompson.webp";
import kimberly from "../assets/images/avatar-kimberly-smith.webp";
import mark from "../assets/images/avatar-mark-webber.webp";
import nathan from "../assets/images/avatar-nathan-peterson.webp";
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import chess from "../assets/images/image-chess.webp";

export const userDetails = [
  {
    id: 0,
    name: "Mark Webber",
    action: "reacted to your recent post",
    description: "My first tournament today!",
    time: "1m ago",
    imgId: mark,
    isRead: false,
  },
  {
    id: 1,
    name: "Angela Gray",
    action: "followed you",
    description: "",
    time: "5m ago",
    imgId: angela,
    isRead: false,
  },
  {
    id: 2,
    name: "Jacob Thompson",
    action: "has joined your group",
    description: "Chess Club",
    time: "1 day ago",
    imgId: jacob,
    isRead: false,
  },
  {
    id: 3,
    name: "Rizky Hasanuddin",
    action: "sent you a private message",
    description: "",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    imgId: rizky,
    isRead: true,
  },
  {
    id: 4,
    name: "Kimberly Smith",
    action: "commented on your picture",
    description: "",
    time: "1 week ago",
    imgId: kimberly,
    isRead: true,
  },
  {
    id: 5,
    name: "Nathan Peterson",
    action: "reacted to your recent post",
    description: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    imgId: nathan,
    isRead: true,
  },
  {
    id: 6,
    name: "Anna Kim",
    action: "left the group",
    description: "Chess Club",
    time: "2 weeks ago",
    imgId: anna,
    isRead: true,
  },
];
