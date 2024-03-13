import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
