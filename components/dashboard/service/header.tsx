import React from "react";

function Header() {
  return (
    <div className="w-full  text-sm text-gray-700 items-center flex h-16 justify-between border-b">
      <span>نمودار پرفروش ترین  ها</span>
      <select className="bg-white w-20 cursor-pointer">
        <option value={1}>هفتگی</option>
      </select>
    </div>
  );
}

export default Header;
