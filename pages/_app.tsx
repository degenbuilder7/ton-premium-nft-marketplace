import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { DchainTestnet,  } from "@thirdweb-dev/chains";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ThirdwebProvider
      activeChain={DchainTestnet}
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
    >
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Navbar />
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
