import { EnNumToPer } from "@/utils/formating";
import React from "react";
import { IoCall } from "react-icons/io5";

const TABLE_HEAD = ["رتبه", "موبایل", "تعداد سفارش", "سودآوری", "تماس"];

const TABLE_ROWS = [
  {
    level: "1",
    mobile: "0916 456 4606",
    OrderCount: 10,
    Profitability: 13_000_000,
  },
  {
    level: "2",
    mobile: "0919 111 2323",
    OrderCount: 10,
    Profitability: 12_000_000,
  },
  {
    level: "3",
    mobile: "0918 334 5542",
    OrderCount: 10,
    Profitability: 11_000_000,
  },
  {
    level: "4",
    mobile: "0922 345 2556",
    OrderCount: 10,
    Profitability: 10_000_000,
  },
  {
    level: "5",
    mobile: "0917 556 4534",
    OrderCount: 10,
    Profitability: 9_000_000,
  },
];
function Table() {
  return (
    <table className="w-full min-w-max table-auto text-left mt-5">
      <thead>
        <tr>
          {TABLE_HEAD.map((head) => (
            <th
              key={head}
              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center text-gray-700 text-sm"
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {TABLE_ROWS.map(
          ({ level, OrderCount, Profitability, mobile }, index) => {
            const classes = "h-12  border-b border-blue-50 text-center ";
            return (
              <tr key={index}>
                <td className={classes}>{EnNumToPer(level)}</td>
                <td className={`${classes}  `} dir="ltr">
                  {EnNumToPer(mobile)}
                </td>
                <td className={classes}>{EnNumToPer(OrderCount)}</td>
                <td
                  className={`${classes}   flex items-center justify-between`}
                >
                  <span>{EnNumToPer(Profitability.toLocaleString())}</span>
                  <span className="text-xs text-gray-500">تومان</span>
                </td>
                <td className={`${classes} `}>
                  <div className="w-full flex justify-center">
                    <a className="h-8 w-8 rounded-lg bg-green-500  flex items-center justify-center" href={`tel:98${mobile}`}>
                      <IoCall className="text-lg text-white  " />
                    </a>
                  </div>
                </td>
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}

export default Table;
