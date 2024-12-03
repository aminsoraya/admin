import React from "react";

interface IProps {
  title: string;
  options: { value: number; text: string }[];
}
function Header({ title, options }: IProps) {
  return (
    <div className="w-full  text-sm text-gray-700 items-center flex h-16 justify-between border-b">
      <span>{title}</span>
      <select className="bg-transparent w-20 cursor-pointer">
        {options.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Header;
