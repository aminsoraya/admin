import React from "react";
import { FaMoneyCheck } from "react-icons/fa";

interface IProps {
  text: string;
  money: number;
}
export default function RevenueCard({ text, money }: IProps) {
  return (
    <div className="w-full bg-gray-100 h-24 flex items-center px-5 rounded-lg">
      <div className="bg-amber-500 h-16 w-16 flex items-center justify-center rounded-full">
        <FaMoneyCheck className="text-4xl" />
      </div>
      <div className="flex flex-col px-5 h-full justify-evenly items-center">
        <span className="text-sm text-gray-500">{text}</span>
        <span className="text-xs gap-2">
          <strong className="text-xl px-1">{money.toLocaleString()}</strong>
          تومان
        </span>
      </div>
    </div>
  );
}
