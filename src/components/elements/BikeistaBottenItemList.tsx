import { Box } from "@mui/material";
import { LogoBikeistaButton } from "./LogoBikeistaButton";
import { ItemList } from "../features/Top/components/ItemList";

export const BikeistaBottenItemList: React.FC = ({}) => {
  return (
    <Box>
      <LogoBikeistaButton />
      <ItemList />
    </Box>
  );
};
