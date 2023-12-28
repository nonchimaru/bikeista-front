import { CommingSoonPages } from "@/components/elements/CommingSoonPages";
import { LogoBikeistaButton } from "@/components/elements/LogoBikeistaButton";
import { Box } from "@mui/material";
import { NextPage } from "next";
const FavoriteBikeAlliance: NextPage = () => {
  return (
    <>
      <main>
        <Box //ロゴボタンの基本位置
          sx={{
            position: "fixed", // 画面上部に固定位置に配置
            marginTop: "40px",
            marginLeft: "40px",
            zIndex: 1000, // ボタンがテキストよりも手前に表示されるように
          }}
        >
          <LogoBikeistaButton />
        </Box>
        <CommingSoonPages />
      </main>
    </>
  );
};

export default FavoriteBikeAlliance;
