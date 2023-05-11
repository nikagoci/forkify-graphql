import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ContextProvider } from "@/context";

import { ApolloProvider } from "@apollo/client";
import client from "@/libs/graphql/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ContextProvider>
  );
}
