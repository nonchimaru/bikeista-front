import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
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

const Error: NextPage = () => {
  return (
    <>
      <main>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-64px",
            height: "100vh",
            position: "relative", // 親要素を相対位置に
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <Typography variant="h2" className={Kaisei_Decol700.className}>
              404
            </Typography>
            <Typography variant="h4" className={Kaisei_Decol700.className}>
              NOT FOUND
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" sx={{ marginTop: "35px" }}>
              お探しのページは見つかりません
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "absolute", // 画像を絶対位置に
            bottom: "0",
            right: "0",
            marginBottom: "20px", // テキストとの間隔
            marginRight: "40px", // テキストとの間隔
          }}
        >
          <Image
            src="/NayamiGirlTomei.png"
            width={400}
            height={400}
            alt="nayami_girl"
          />
        </Box>
      </main>
    </>
  );
};

export default Error;
