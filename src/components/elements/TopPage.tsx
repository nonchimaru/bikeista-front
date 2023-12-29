import { Box, Typography } from "@mui/material";
import { ItemList } from "../features/Top/components/ItemList";
import { PhotoSlide } from "../features/Top/components/PhotoSlide";
import { Kaisei_Decol, M_PLUS_Rounded_1c } from "next/font/google";

const Kaisei_Decol700 = Kaisei_Decol({
  weight: "700",
  preload: false,
});

const M_PLUS_Rounded_1c500 = M_PLUS_Rounded_1c({
  weight: "500",
  preload: false,
});

export const TopPages: React.FC = ({}) => {
  return (
    <Box style={{ display: "flex" }}>
      <Box style={{ marginLeft: "10%" }}>
        <Typography variant="h3" className={M_PLUS_Rounded_1c500.className}>
          Welcome to <br />
        </Typography>
        <Typography variant="h1" className={Kaisei_Decol700.className}>
          BIKEISTA
        </Typography>
        <Box style={{ marginTop: "6%" }}>
          <ItemList />
        </Box>
      </Box>
      <Box style={{ paddingTop: "6%", paddingLeft: "18%" }}>
        <PhotoSlide />
      </Box>
    </Box>
  );
};
