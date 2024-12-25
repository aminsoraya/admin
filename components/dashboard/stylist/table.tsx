import DataTable from "@/components/dataTable/dataTable";
import { useUser } from "@/service/hooks/useUser";
import { UserColumn } from "@/types/user";
import React from "react";

export default function Users() {
  const user = useUser();
  return <DataTable columns={UserColumn} data={user} />;
}
