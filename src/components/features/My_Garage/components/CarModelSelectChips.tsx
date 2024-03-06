import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { CarModel } from "./ProfileModal";

const columns: GridColDef[] = [
  {
    field: "manufacture",
    headerName: "メーカー",
    width: 150,
    editable: false,
  },
  {
    field: "car_model",
    headerName: "車種",
    width: 200,
    editable: false,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

interface CarModelSelectChipsProps {
  carModelSelectChip: CarModel[];
}

export const CarModelSelectChips: React.FC<CarModelSelectChipsProps> = (
  props
) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={props.carModelSelectChip}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
