import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { ProfileIcon } from "./ProfileIcon";
import { Name } from "./Name";
import { SocialConnection } from "./SocialConnection";
import { Chips } from "./Chip";
import { Introduction } from "./Introduction";
import { ProfileTabs } from "./ProfileTabs";
import { Horizon } from "./Horizon";
import { ProfileModal } from "./ProfileModal";

// ユーザーの住所情報の型
type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
};

// ユーザーの会社情報の型
type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

// ユーザー情報全体を表す型
export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export const Page: React.FC = ({}) => {
  const [profileInfo, setProfileInfo] = useState<User[]>([]);

  const fetchProfileInfo = async (): Promise<void> => {
    const fetchProfileEndopoint = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(fetchProfileEndopoint);
    const json = await response.json();
    setProfileInfo(json);
  };

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  if (!profileInfo || profileInfo.length === 0) {
    return <div>データ取得中</div>;
  }

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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Name userId={profileInfo[0].email} userName={profileInfo[0].name} />
        </Box>
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
