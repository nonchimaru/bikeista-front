import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

//ホンダの126~400ccの車種
const HONDA = [
  "CBR250RR",
  "NSF250R",
  "CB250R",
  "CRF250 RALLY",
  "CRF250L",
  "CL250",
  "Rebel 250",
  "フォルツァ",
  "ADV160",
  "PCX160",
  "CRF250R",
  "CRF250RX",
  "CRF150R/150Rll",
  "CB400 SUPER FOUR",
  "CB400SUPER BOL D'OR",
  "CBR400R",
  "400X",
  "GB350",
  "GB350 S",
  "RTL301RR",
  "RTL260R",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const SelectChipsHONDA: React.FC = ({}) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ marginTop: "1.5%", width: 1100 }}>
        <InputLabel id="demo-multiple-chip-label">ホンダ</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  style={{
                    backgroundColor: "#e11b22", // HONDA Redの色に指定
                    color: "white", // テキストの色を白に指定
                  }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {HONDA.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
