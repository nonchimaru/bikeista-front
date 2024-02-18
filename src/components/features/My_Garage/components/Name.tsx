import { Box, Typography } from "@mui/material";

type NameProps = {
  userName: string;
  userId: string;
};

/**
 * 名前を表示させるコンポーネント
 */
export const Name: React.FC<NameProps> = (props) => {
  return (
    <Box sx={{ marginLeft: 5, marginTop: "9%" }}>
      <Typography fontSize="h6.fontSize">{props.userId}</Typography>
      <Typography fontSize="h4.fontSize" sx={{ lineHeight: 1.5 }}>
        {props.userName}
      </Typography>
    </Box>
  );
};
