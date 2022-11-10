import React, { memo } from "react";

import { BrowserRouter } from "react-router-dom";
import GeneralLayout from "./GeneralLayout";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
})

interface IProviders {
  children: React.ReactNode;
}

const Providers: React.FC<IProviders> = ({ children }) => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <GeneralLayout>{children}</GeneralLayout>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default memo(Providers);
