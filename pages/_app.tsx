import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/global.css";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
