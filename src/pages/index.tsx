import { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import { LogoBikeista } from "@/components/features/home_b/components/LogoBikeista";
import { ItemList } from "@/components/features/home_b/components/itemlist";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BIKEISTA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LogoBikeista />
        <Box>
          <Typography variant="h4">
            Welcome to <br />
          </Typography>
          <Typography variant="h2">BIKEISTA</Typography>
        </Box>
        <ItemList />
      </main>
    </>
  );
};

export default Home;
