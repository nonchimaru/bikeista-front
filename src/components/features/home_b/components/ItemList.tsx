import Link from "next/link";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

/**
 * ロゴを表示させるコンポーネント
 */
export const ItemList: React.FC = ({}) => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <List>
        <ListItem disablePadding>
          <Link href="/" style={{ color: "black", textDecoration: "none" }}>
            <ListItemButton>
              <ListItemText primary="愛車同盟" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/" style={{ color: "black", textDecoration: "none" }}>
            <ListItemButton>
              <ListItemText primary="ピク投稿" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/" style={{ color: "black", textDecoration: "none" }}>
            <ListItemButton>
              <ListItemText primary="レタ投稿" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/" style={{ color: "black", textDecoration: "none" }}>
            <ListItemButton>
              <ListItemText primary="メッセージ" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            href="/my_garage"
            style={{ color: "black", textDecoration: "none" }}
          >
            <ListItemButton>
              <ListItemText primary="マイガレージ" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};
