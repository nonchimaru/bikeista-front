import { Box } from "@mui/material";
import { ProfileIcon } from "./ProfileIcon";
import { Name } from "./Name";
import { SocialConnection } from "./SocialConnection";
import { Chips } from "./Chip";
import { Introduction } from "./Introduction";
import { ProfileTabs } from "./ProfileTabs";
import { Horizon } from "./Horizon";
import { ProfileModal } from "./ProfileModal";
import { log } from "console";

export const Page: React.FC = ({}) => {
  function logMovies() {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((movies) => {
        return movies;
      });
  }
  const profileInfo = logMovies();
  console.log(profileInfo[0]);
  function test(n: number) {
    return 1 + n;
  }
  const v = test(100);
  console.log(v);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "2%",
        marginLeft: "5%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "80%",
          transform: "translateX(40%)",
          marginTop: 3,
        }}
      >
        <ProfileModal />
      </Box>
      <Box sx={{ display: "flex" }}>
        <ProfileIcon width={100} height={100} />
        {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Name name={profileInfo[0].name} />
        </Box> */}
      </Box>
      <Box sx={{ display: "flex", marginTop: "3%", marginLeft: "-5%" }}>
        <SocialConnection />
        <Chips />
      </Box>
      <Box sx={{ marginLeft: "3%", marginTop: "3%" }}>
        <Horizon />
        <Introduction />
      </Box>
      <Box sx={{ marginTop: "3%" }}>
        <Horizon />
        <ProfileTabs />
      </Box>
    </Box>
  );
};

export default Page;
