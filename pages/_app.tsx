import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "react-query";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
