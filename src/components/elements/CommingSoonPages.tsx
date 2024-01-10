import { Box, Typography } from "@mui/material";
import { Kaisei_Decol, M_PLUS_Rounded_1c } from "next/font/google";
import Image from "next/image";

const Kaisei_Decol700 = Kaisei_Decol({
  weight: "700",
  preload: false,
});

const M_PLUS_Rounded_1c500 = M_PLUS_Rounded_1c({
  weight: "500",
  preload: false,
});

/**
 * ページを表示させるコンポーネント
 */
export const CommingSoonPages: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginLeft: "7%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          overflow: "hidden", // ページ全体にスクロールが生じないように設定
        }}
      >
        <Image
          src="/BrokenBike.png"
          width={500}
          height={500}
          alt="BrokenBike.png"
        />
        <Box>
          <Typography variant="h2" className={Kaisei_Decol700.className}>
            Comming Soon...
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "15%",
            }}
          >
            <Typography variant="h5" className={M_PLUS_Rounded_1c500.className}>
              ただいま準備中です
            </Typography>
            <Typography variant="h5" className={M_PLUS_Rounded_1c500.className}>
              完成までしばらくお待ち下さい
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
