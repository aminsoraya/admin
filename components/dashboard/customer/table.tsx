import DataTable from "@/components/dataTable/dataTable";
import { useDashboardStore } from "@/state/zustand/useDashboardStore";
import { CustomerColumn } from "@/types/customer";

 
export default function CustomerDataTable() {
  const { customers } = useDashboardStore();
  return <DataTable columns={CustomerColumn} data={customers!} />;
}
