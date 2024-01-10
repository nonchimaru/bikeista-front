import { Box } from "@mui/material";
import { ProfileIcon } from "./ProfileIcon";
import { Name } from "./Name";
import { SocialConnection } from "./SocialConnection";
import { Chips } from "./Chip";
import { Introduction } from "./Introduction";

export const Page: React.FC = ({}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex" }}>
        <ProfileIcon width={100} height={100} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Name />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <SocialConnection />
            <Chips />
          </Box>
        </Box>
      </Box>
      <Introduction />
    </Box>
  );
};

export default Page;
