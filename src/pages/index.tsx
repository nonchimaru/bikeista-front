import Head from "next/head";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>BIKEISTA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Avatar
          alt="Logo"
          src="/logo_2.jpg"
          variant="square"
          sx={{ width: "10%", height: "10%" }}
        />
        <Box>
          <Typography variant="h4">
            Welcome to <br />
          </Typography>
          <Typography variant="h2">BIKEISTA</Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            paddingLeft: "5%",
          }}
        >
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <Link
                  href="/"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemButton>
                    <ListItemText primary="愛車同盟" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  href="/"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemButton>
                    <ListItemText primary="ピク投稿" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  href="/"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemButton>
                    <ListItemText primary="レタ投稿" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  href="/"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemButton>
                    <ListItemText primary="メッセージ" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  href="/"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ListItemButton>
                    <ListItemText primary="マイガレージ" />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </nav>
        </Box>
      </main>
    </>
  );
}
