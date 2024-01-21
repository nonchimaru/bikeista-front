import { BikeistaBottenItemList } from "@/components/elements/BikeistaBottenItemList";
import { CommingSoonPages } from "@/components/elements/CommingSoonPages";
import Box from "@mui/material/Box/Box";
import { NextPage } from "next";
const PicPost: NextPage = () => {
  return (
    <main style={{ overflow: "hidden", height: "90vh" }}>
      <Box sx={{ display: "flex" }}>
        <BikeistaBottenItemList />
        <CommingSoonPages />
      </Box>
    </main>
  );
};

export default PicPost;
