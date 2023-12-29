import { NotFound } from "@/components/elements/404NotFound";
import { LogoBikeistaButton } from "@/components/elements/LogoBikeistaButton";
import { Box } from "@mui/material";
import { NextPage } from "next";

const Error: NextPage = () => {
  return (
    <main>
      <LogoBikeistaButton />
      <Box sx={{ marginTop: "-10%" }}>
        <NotFound />
      </Box>
    </main>
  );
};

export default Error;
