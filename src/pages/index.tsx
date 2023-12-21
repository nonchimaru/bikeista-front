import { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import { LogoBikeista } from "@/components/features/home_b/components/LogoBikeista";
import { Zen_Antique, Kaisei_Decol, M_PLUS_Rounded_1c } from "next/font/google";
import { ItemList } from "@/components/features/home_b/components/ItemList";

const Zen_Antique400 = Zen_Antique({
  weight: "400",
  preload: false,
});

const Kaisei_Decol700 = Kaisei_Decol({
  weight: "700",
  preload: false,
});

const M_PLUS_Rounded_1c500 = M_PLUS_Rounded_1c({
  weight: "500",
  preload: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BIKEISTA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LogoBikeista />

        <Box style={{ marginLeft: "5%" }}>
          <Typography variant="h3" className={M_PLUS_Rounded_1c500.className}>
            Welcome to <br />
          </Typography>
          <Typography variant="h1" className={Kaisei_Decol700.className}>
            BIKEISTA
          </Typography>
          <Box style={{ marginTop: "2%" }}>
            <ItemList />
          </Box>
        </Box>
      </main>
    </>
  );
};

export default Home;
