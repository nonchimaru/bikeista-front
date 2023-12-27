import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Kaisei_Decol, M_PLUS_Rounded_1c } from "next/font/google";

const Kaisei_Decol700 = Kaisei_Decol({
  weight: "700",
  preload: false,
});

const M_PLUS_Rounded_1c500 = M_PLUS_Rounded_1c({
  weight: "500",
  preload: false,
});

/**
 * ロゴを表示させるコンポーネント
 */
export const CommingSoonPages: React.FC = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        marginTop: "-20px",
        overflow: "hidden", // ページ全体にスクロールが生じないように設定
      }}
    >
      <Typography variant="h3" className={Kaisei_Decol700.className}>
        Comming Soon...
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "4%",
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
  );
};
