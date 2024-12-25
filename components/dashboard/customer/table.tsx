import DataTable from "@/components/dataTable/dataTable";
import { useCustomer } from "@/service/hooks/useCustomer";
import { CustomerColumn } from "@/types/customer";

export default function Customer() {
  const customers = useCustomer();
  return <DataTable columns={CustomerColumn} data={customers} />;
}
