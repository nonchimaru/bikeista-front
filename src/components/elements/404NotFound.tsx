import { Kaisei_Decol, M_PLUS_Rounded_1c } from "next/font/google";
import Image from "next/image";
import { Box, Link, Typography } from "@mui/material";

const Kaisei_Decol700 = Kaisei_Decol({
  weight: "700",
  preload: false,
});

const M_PLUS_Rounded_1c500 = M_PLUS_Rounded_1c({
  weight: "500",
  preload: false,
});

export const NotFound: React.FC = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Image
        src="/NayamiGirlTomei.png"
        width={400}
        height={400}
        alt="nayami_girl"
      />
      <Box>
        <Box //固定要素
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" className={Kaisei_Decol700.className}>
            404
          </Typography>
          <Typography variant="h4" className={Kaisei_Decol700.className}>
            NOT FOUND
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ marginTop: "35px" }}>
          お探しのページは見つかりません
        </Typography>
      </Box>
    </Box>
  );
};
