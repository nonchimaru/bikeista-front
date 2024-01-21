import { BikeistaBottenItemList } from "@/components/elements/BikeistaBottenItemList";
import Page from "@/components/features/My_Garage/components/pages";
import { Box } from "@mui/material";
import { NextPage } from "next";
import * as React from "react";

const MyGarage: NextPage = () => {
  return (
    <main>
      <Box sx={{ display: "flex" }}>
        <BikeistaBottenItemList />
        <Page />
      </Box>
    </main>
  );
};

export default MyGarage;
