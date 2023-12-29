import { LogoBikeistaButton } from "@/components/elements/LogoBikeistaButton";
import { ProfileIcon } from "@/components/features/My_Garage/components/ProfileIcon";
import { NextPage } from "next";
const MyGarage: NextPage = () => {
  return (
    <main>
      <LogoBikeistaButton />
      <ProfileIcon />
    </main>
  );
};

export default MyGarage;
