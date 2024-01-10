import { Box, Typography } from "@mui/material";

export const Name: React.FC = ({}) => {
  return (
    <Box sx={{ marginLeft: 5 }}>
      <Typography fontSize="h6.fontSize">nonchi_o</Typography>

      <Typography fontSize="h4.fontSize" sx={{ lineHeight: 1.5 }}>
        のんちまる
      </Typography>
    </Box>
  );
};
