import { NextPage } from "next";
import Head from "next/head";
import * as React from "react";
import { LogoBikeistaButton } from "@/components/elements/LogoBikeistaButton";
import { TopPages } from "@/components/elements/TopPage";
import { Box } from "@mui/material";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BIKEISTA</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="./style.css" />
      </Head>
      <main>
        <LogoBikeistaButton />
        <Box style={{ marginTop: "4%" }}>
          <TopPages />
        </Box>
      </main>
    </>
  );
};

export default Home;
