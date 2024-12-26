import { ReactNode } from "react";

export interface DashboardDataRequest {
  nowDate: string;
  startOfWeek: string;
  endOfWeek: string;
  startOfMonth: string;
  endOfMonth: string;
  startOfYear: string;
  endOfYear: string;
}
export interface SaleDataType {
  dailyTotal: number;
  weeklyTotal: number;
  monthlyTotal: number;
  yearlyTotal: number;
}

export interface RevenueDataType {
 title:string,
 value:string
}


export interface Column<T> {
  header: string;
  accessor: keyof T;
  sortable?: boolean;
  renderItem?: (val: T[keyof T]) => ReactNode;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
}

export type Customer = {
  level: number;
  mobile: string;
  OrderCount: number;
  Profitability: number;
};

export type User = Customer;
