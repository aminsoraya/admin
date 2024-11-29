"use client";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface IProps {
  icon: IconType;
  text: string;
  link: string;
  isActive?: boolean;
}
function Item(props: IProps) {
  const { icon: Icon, text, link, isActive } = props;

  return (
    <div
      className={twMerge(
        "flex items-center gap-2  rounded-lg w-full px-3 h-14 text-gray-500",
        isActive ? "bg-amber-500 text-black" : ""
      )}
    >
      <Icon className="text-xl" />
      <Link href={link} className="text-sm">{text}</Link>
    </div>
  );
}

export default Item;
