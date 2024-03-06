import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
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

interface CarModelSelectChipsProps {
  carModelSelectChip: CarModel[];
}

export const CarModelSelectChips: React.FC<CarModelSelectChipsProps> = (
  props
) => {
  const { carModelSelectChip } = props;
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={carModelSelectChip}
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
