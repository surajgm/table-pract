import { useState } from "react";
import { columnTitle } from "./TableCols";
import { studentData } from "./StudentData";
import MaterialTable from "material-table";
import "./App.css";

const Table = () => {
  const [tableData, setTableData] = useState(studentData);

  return (
    <div className="std-table">
      <MaterialTable
        title="Student Info"
        data={tableData}
        columns={columnTitle}
        editable={{
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              console.log("RowAddData", newRow);
              setTableData([...tableData, newRow]);
              setTimeout(() => resolve(), 500);
            }),
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              console.log("UpdatedData", newRow, oldRow);
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              console.log("toDeleteRow", selectedRow);
              const updatedData = [...tableData];
              const deletedStdData = updatedData.splice(
                selectedRow.tableData.id,
                1
              );
              console.log("DeletedStdData", deletedStdData);
              setTableData(updatedData);
              setTimeout(() => resolve(), 500);
            }),
        }}
        actions={[
          {
            icon: () => <button>Add File</button>,
            tooltip: "Add File",
            onClick: (e, data) => console.log(data),
            // button not for individual row but for table(single button)
            isFreeAction: true,
          },
        ]}
        options={{
          pageSizeOptions: [5, 10, 20, 40, 80, 160],
          pageSize: 5,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          //filtering: true,
          searchAutoFocus: true,
          exportButton: true,
          exportFileName: "Student Data",
          actionsColumnIndex: -1,
        }}
      />
    </div>
  );
};

export default Table;
