import DataTable from "@/components/dataTable/dataTable";
import { useDashboardStore } from "@/state/zustand/useDashboardStore";
import { Customer } from "@/types";
import { CustomerColumn } from "@/types/customer";

interface IProps {
  data: Customer[];
}
export default function CustomerDataTable({ data }: IProps) {
  return <DataTable columns={CustomerColumn} data={data} />;
}
