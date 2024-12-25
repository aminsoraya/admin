"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import Sidebar from "./sidebar/sidebar";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

interface IProps {
  children: ReactNode;
}
export default function LayoutDetail({ children }: IProps) {
  return (
    <ThemeProvider>
      <aside className="bg-gray-50 w-[300px] h-screen z-[50] border-l shadow hidden xl:flex fixed  ">
        <Sidebar />
      </aside>
      <div className="flex flex-col xl:w-[calc(100%-300px)] w-full h-full absolute top-0 left-0">
        <header className="flex w-full  text-gray-500 py-5   border-gray-100  items-center px-5 gap-8">
          <IoIosNotifications className="text-2xl" />
          <IoSearchSharp className="text-xl" />
        </header>
        <main className=" h-full px-5 py-5  ">{children}</main>
      </div>
    </ThemeProvider>
  );
}
