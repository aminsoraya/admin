import { Column, User } from ".";
import { EnNumToPer } from "@/utils/formating";
import React from "react";
import { IoCall } from "react-icons/io5";

export const UserColumn: Column<User>[] = [
  {
    accessor: "level",
    header: "رتبه",
    renderItem: (level) => {
      return EnNumToPer(level);
    },
  },
  {
    accessor: "OrderCount",
    header: "تعداد سفارش",
    renderItem: (count) => {
      return EnNumToPer(count);
    },
  },
  {
    accessor: "Profitability",
    header: "سودآوری",
    renderItem: (value) => {
      return (
        <div className="w-full flex justify-between items-center">
          <span>{EnNumToPer(value.toLocaleString())}</span>
          <span className="  text-gray-500">تومان</span>
        </div>
      );
    },
  },
  {
    accessor: "mobile",
    header: "تماس",
    renderItem: (mobile) => {
      return (
        <div className="w-full flex justify-center">
          <a
            className="md:h-8 md:w-8 h-6 w-6 rounded-lg bg-green-500  flex items-center justify-center"
            href={`tel:98${mobile}`}
          >
            <IoCall className="md:text-lg text-sm text-white  " />
          </a>
        </div>
      );
    },
  },
];
