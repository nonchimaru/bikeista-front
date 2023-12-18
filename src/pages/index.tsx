import Head from "next/head";
import { Inter } from "next/font/google";
import * as React from "react";
import Avatar from "@mui/material/Avatar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bikeista</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Avatar
          alt="Logo"
          src="/logo.jpg"
          variant="square"
          sx={{ width: 100, height: 100 }}
        />
      </main>
    </>
  );
}
