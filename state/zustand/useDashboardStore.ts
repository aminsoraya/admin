import { create } from "zustand";
import {
  Customer,
  RevenueDataType,
  SaleDataType,
  ServiceDataType,
  User,
} from "@/types";

interface DashboardStore {
  sales: SaleDataType | undefined;
  revenues: RevenueDataType[] | undefined;
  service: ServiceDataType[] | undefined;
  customers: Customer[] | undefined;
  users: User[] | undefined;
  setUsers: (data: User[]) => void;
  setCustomers: (data: Customer[]) => void;
  setSales: (data: SaleDataType) => void;
  setService: (data: ServiceDataType[]) => void;
  setRevenues: (data: RevenueDataType[]) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  sales: undefined,
  revenues: undefined,
  service: undefined,
  customers: undefined,
  users: undefined,
  setUsers: (data) => set({ users: data }),
  setCustomers: (data) => set({ customers: data }),
  setService: (data) => set({ service: data }),
  setSales: (data) => set({ sales: data }),
  setRevenues: (data) => set({ revenues: data }),
}));
