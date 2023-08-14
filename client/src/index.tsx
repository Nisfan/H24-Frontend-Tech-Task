import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import ProductList from "./ProductList";

import "./index.css";
import Layout from "./components/Layout";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Layout>
          <ProductList />
        </Layout>
      </ApolloProvider>
    </React.StrictMode>
  );
}
