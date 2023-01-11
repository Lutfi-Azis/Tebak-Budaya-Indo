import "../styles/globals.css";
import "../styles/map.css";
import type { AppProps } from "next/app";
import {
  ChakraProvider,
  extendTheme,
  baseTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    colors: {
      primary: baseTheme.colors.orange,
      secondary: baseTheme.colors.green,
    },
    fonts: {
      heading: "Montserrat, Georgia, serif",
      body: "Montserrat, system-ui, sans-serif",
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  })
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
