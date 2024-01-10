import { Box, Typography } from "@mui/material";

/**
 * SocialConnectionのコンポーネントのPropsの型定義
 */
type SocialConnectionProps = {};

/**
 * フォロワー数、フォロー数を表示させるコンポーネント
 */
export const SocialConnection: React.FC<SocialConnectionProps> = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        marginTop: 1,
        marginLeft: 5,
        marginRight: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginRight: 2,
        }}
      >
        <Typography fontSize="h6.fontSize" sx={{ lineHeight: 0.6 }}>
          888 Following
        </Typography>
      </Box>
      <Typography fontSize="h6.fontSize" sx={{ lineHeight: 0.6 }}>
        888 Followers
      </Typography>
    </Box>
  );
};
