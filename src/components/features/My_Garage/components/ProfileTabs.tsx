import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

/**
 * ProfileIconコンポーネントのPropsの型定義
 */
export const CustomTabPanel: React.FC<TabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

/**
 * ProfileTabsを表示させるコンポーネント
 */
export const ProfileTabs: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "225%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered //タブパネルを左右のセンターに配置する
        >
          <Tab label="ピク投稿" {...a11yProps(0)} sx={{ fontSize: "20px" }} />
          <Tab
            label="愛車同盟"
            {...a11yProps(1)}
            sx={{ fontSize: "20px", marginLeft: "20%", marginRight: "20%" }}
          />
          <Tab label="レタ投稿" {...a11yProps(2)} sx={{ fontSize: "20px" }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        ピク投稿
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        愛車同盟
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        レタ投稿
      </CustomTabPanel>
    </Box>
  );
};
