import { TableActions } from "../../../common/data-table/custom-table-body/table-actions";



export const userColumnData = [
    {
      field: "id",
      header: "ID"
    },
    {
      field: "name",
      header: "Name"
    },
    {
      field: "email",
      header: "Email"
    },
    {
      field: "gender",
      header: "Gender"
    },
    {
      field: "status",
      header: "Status"
    },
    {
      header: "Action",
      body: (item) => TableActions(item)
    }
  ];