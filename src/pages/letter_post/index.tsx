import { NextPage } from "next";
import { CommingSoonPages } from "@/components/elements/CommingSoonPages";
import { BikeistaBottenItemList } from "@/components/elements/BikeistaBottenItemList";
import { Box } from "@mui/material";

const LetterPost: NextPage = () => {
  return (
    <main style={{ overflow: "hidden", height: "90vh" }}>
      <Box sx={{ display: "flex" }}>
        <BikeistaBottenItemList />
        <CommingSoonPages />
      </Box>
    </main>
  );
};

export default LetterPost;
