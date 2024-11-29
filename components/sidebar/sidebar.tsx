import React from "react";
import Item from "./item";
import { MdDashboard } from "react-icons/md";
import { FaClipboardList, FaCut, FaUser } from "react-icons/fa";
import { RiChatHistoryFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { ImExit } from "react-icons/im";

export default function Sidebar() {
  return (
    <div className="bg-gray-100 h-full py-10 flex flex-col items-center px-5">
      <Item isActive icon={MdDashboard} link="/" text="داشبورد" />
      <Item icon={FaClipboardList} link="/" text="سفارشات درجریان" />
      <Item icon={FaUser} link="/" text="تنظیمات آرایشگر" />
      <Item icon={IoSettings} link="/" text="تنظیمات عمومی" />
      <Item icon={RiChatHistoryFill} link="/" text="تاریخچه سفارشات" />
      <div className="absolute bottom-5 right-5">
        <Item icon={ImExit} link="/" text="خروج از اپ" />
      </div>
    </div>
  );
}
