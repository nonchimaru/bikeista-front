import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import { LogoBikeistaButton } from "@/components/elements/LogoBikeistaButton";
import { CommingSoonPages } from "@/components/elements/CommingSoonPages";

const Message: NextPage = () => {
  return (
    <main>
      <LogoBikeistaButton />
      <CommingSoonPages />
    </main>
  );
};

export default Message;
