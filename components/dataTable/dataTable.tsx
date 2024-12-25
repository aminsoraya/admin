import { DataTableProps } from "@/types";
import React, { ReactNode } from "react";

function DataTable<T>({ columns, data }: DataTableProps<T>) {
  return (
    <table className="w-full lg:min-w-max table-auto text-left mt-5">
      <thead>
        <tr>
          {columns.map((item, index) => (
            <th
              key={index}
              className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center text-gray-700 md:text-sm text-xs whitespace-nowrap"
            >
              {item.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((rowItem, rowIndex) => (
          <tr
            key={rowIndex}
            className="h-12  border-b border-blue-50 text-center text-xs md:text-sm"
          >
            {columns.map((colItem, colIndex) => (
              <td key={colIndex} >
                {colItem.renderItem
                  ? colItem.renderItem(rowItem[colItem.accessor])
                  : (rowItem[colItem.accessor] as ReactNode)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
