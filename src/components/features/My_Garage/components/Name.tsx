import { Box, Typography } from "@mui/material";

/**
 * 名前を表示させるコンポーネント
 */
export const Name: React.FC = ({ name }) => {
  console.log(name);
  return (
    <Box sx={{ marginLeft: 5, marginTop: "10%" }}>
      <Typography fontSize="h6.fontSize">nonchi_o</Typography>
      <Typography fontSize="h4.fontSize" sx={{ lineHeight: 1.5 }}>
        {name[0].name}
      </Typography>
    </Box>
  );
};
