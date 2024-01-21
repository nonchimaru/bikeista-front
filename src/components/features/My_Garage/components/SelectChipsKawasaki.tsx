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

//カワサキの普通二輪の車種
const Kawasaki = [
  "Z200",
  "KDX220SR",
  "250SS",
  "250TR",
  "Dトラッカー/ X",
  "GPX250R/ RII",
  "KH250",
  "KL250",
  "KLE250ANHELO",
  "KLX250/ ES/ SR",
  "KR－1",
  "KR250/ S/ F",
  "Ninja 250/ R/ SL",
  "Z250/ FT/ LTD/ SL",
  "ZXR250",
  "ZZ－R250",
  "VERSYSーX 250/ ツアラー",
  "エストレヤ/ RS / カスタム",
  "エプシロン250",
  "エリミネーター250/ LX/ SE/ V",
  "スーパーシェルパ",
  "Ninja 300",
  "400SS	ER－4n",
  "EX－4",
  "GPX400R",
  "GPZ400/ F/ F－II",
  "GPZ400R",
  "KH400	Ninja 400/ R",
  "WR400",
  "Z400/ FX/ GP/ J/ LTD",
  "ZEPHYR400",
  "ZEPHYRχ",
  "ZRX400/ II	ZX－4",
  "ZXR400/ R",
  "エリミネーター400/ LX/ SE",
  "バルカン400/ II/ クラシック/ ドリフター",
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const SelectChipsKawasaki: React.FC = ({}) => {
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
        <InputLabel id="demo-multiple-chip-label">カワサキ</InputLabel>
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
                    backgroundColor: "#8CC84B", // カワサキのライムグリーンに指定
                    color: "white", // テキストの色を白に指定
                  }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {Kawasaki.map((name) => (
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
