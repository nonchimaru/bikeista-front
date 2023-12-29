import { CommingSoonPages } from "@/components/elements/CommingSoonPages";
import { LogoBikeistaButton } from "@/components/elements/LogoBikeistaButton";
import Box from "@mui/material/Box/Box";
import { NextPage } from "next";
const PicPost: NextPage = () => {
  return (
    <main>
      <LogoBikeistaButton />
      <CommingSoonPages />
    </main>
  );
};

export default PicPost;
