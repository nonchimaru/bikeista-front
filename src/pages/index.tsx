import Head from "next/head";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

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
          sx={{ width: 100, height: 100, margin: "0 auto" }}
        />
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="Bikeista" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="愛車同盟" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="ピク投稿" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="レタ投稿" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="メッセージ" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary="マイガレージ" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </main>
    </>
  );
}
