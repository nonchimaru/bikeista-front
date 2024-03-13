import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

// MyApp コンポーネントを定義
function MyApp({ Component, pageProps }: AppProps) {
  // MUI のテーマを作成
  const theme = createTheme({
    typography: {
      fontFamily: ["M PLUS Rounded 1c", "sans-serif"].join(","),
      fontWeightRegular: 500,
    },
  });

  // テーマを適用してコンポーネントをレンダリング
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// MyApp をエクスポート
export default MyApp;
