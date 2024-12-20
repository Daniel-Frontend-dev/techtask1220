import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "../components/ThemeContext";
import "../styles/global.css";

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: {
  Component: any;
  pageProps: any;
}) => {
  return (
    <NextUIProvider>
      <SessionProvider session={session}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </NextUIProvider>
  );
};

export default MyApp;
