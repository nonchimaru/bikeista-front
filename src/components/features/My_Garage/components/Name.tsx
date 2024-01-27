import { Box, Typography } from "@mui/material";

type NameProps = {
  userName: string;
};

/**
 * 名前を表示させるコンポーネント
 */
export const Name: React.FC<NameProps> = (props) => {
  return (
    <Box sx={{ marginLeft: 5, marginTop: "10%" }}>
      <Typography fontSize="h6.fontSize">nonchi_o</Typography>
      <Typography fontSize="h4.fontSize" sx={{ lineHeight: 1.5 }}>
        {props.userName}
      </Typography>
    </Box>
  );
};
