import { LogoBikeistaButton } from "@/components/elements/LogoBikeistaButton";
import { Introduction } from "@/components/features/My_Garage/components/Introduction";
import { ProfileIcon } from "@/components/features/My_Garage/components/ProfileIcon";
import { NextPage } from "next";
const MyGarage: NextPage = () => {
  return (
    <main>
      <LogoBikeistaButton />
      <ProfileIcon />
      <Introduction />
    </main>
  );
};

export default MyGarage;
