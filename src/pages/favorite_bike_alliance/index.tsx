import { CommingSoonPages } from "@/components/elements/CommingSoonPages";
import { LogoBikeistaButton } from "@/components/elements/LogoBikeistaButton";
import { Box } from "@mui/material";
import { NextPage } from "next";
const FavoriteBikeAlliance: NextPage = () => {
  return (
    <main>
      <LogoBikeistaButton />
      <CommingSoonPages />
    </main>
  );
};

export default FavoriteBikeAlliance;
