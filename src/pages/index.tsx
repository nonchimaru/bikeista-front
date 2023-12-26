import { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import { Box, Typography } from "@mui/material";
import { LogoBikeista } from "@/components/features/home_b/components/LogoBikeista";
import { Kaisei_Decol, M_PLUS_Rounded_1c } from "next/font/google";
import { ItemList } from "@/components/features/home_b/components/ItemList";
import { PhotoSlide } from "@/components/features/home_b/components/PhotoSlide";

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
        <link rel="stylesheet" href="./style.css" />
      </Head>
      <main>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LogoBikeista />
        </Box>
        <Box style={{ display: "flex" }}>
          <Box style={{ marginLeft: "10%" }}>
            <Typography variant="h3" className={M_PLUS_Rounded_1c500.className}>
              Welcome to <br />
            </Typography>
            <Typography variant="h1" className={Kaisei_Decol700.className}>
              BIKEISTA
            </Typography>
            <Box style={{ marginTop: "6%" }}>
              <ItemList />
            </Box>
          </Box>
          <Box style={{ paddingTop: "8%", paddingLeft: "18%" }}>
            <PhotoSlide />
          </Box>
        </Box>
      </main>
    </>
  );
};

export default Home;
