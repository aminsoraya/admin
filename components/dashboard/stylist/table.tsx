import DataTable from "@/components/dataTable/dataTable";
import { User } from "@/types";
import { UserColumn } from "@/types/user";
import React from "react";


interface IProps{
  data:User[]
}
export default function Users({data}:IProps) {
   return <DataTable columns={UserColumn} data={data} />;
}
