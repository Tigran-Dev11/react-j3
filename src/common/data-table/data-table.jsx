/* eslint-disable react/prop-types */
import { DataTable as Table } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export const DataTable = ({
  data,
  dataKey,
  paginator = true,
  style,
  columnData
}) => {

  const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
  const paginatorRight = <Button type="button" icon="pi pi-download" text />;

  return (
    <Table
      dataKey={dataKey}
      value={data}
      paginator={paginator}
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      tableStyle={{ width: "100%", ...style }}
      paginatorLeft={paginatorLeft}
      paginatorRight={paginatorRight}
    >
      {columnData?.map((data, index) => (
        <Column key={data.header + index} style={{ width: "20%" }} {...data} />
      ))}
    </Table>
  );
};
