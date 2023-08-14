import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import "@testing-library/jest-dom";

import { CategoryListQuery } from "./hooks/useProductList";

import ProductList from "./ProductList";

const article = {
  name: "article 1",
  variantName: "",
  prices: { currency: "EUR", regular: { value: 100 } },
  images: [{ path: "" }],
};

const childrenCategories = {
  url: "url",
  urlPath: "path",
};

const categories = [
  {
    name: "1",
    articleCount: 1,
    childrenCategories: { list: [childrenCategories] },
    categoryArticles: {
      articles: [article],
    },
  },
];

const categoryListQueryMocks = [
  {
    request: {
      query: CategoryListQuery,
    },
    result: {
      data: {
        categories,
      },
    },
  },
];

test("renders the ProductList", async () => {
  render(
    <MockedProvider mocks={categoryListQueryMocks} addTypename={false}>
      <ProductList />
    </MockedProvider>
  );

  expect(await screen.findByText(categories[0].name)).toBeInTheDocument();
});

test("should show loader", async () => {
  const { getAllByText } = render(
    <MockedProvider mocks={categoryListQueryMocks} addTypename={false}>
      <ProductList />
    </MockedProvider>
  );

  const loader = getAllByText("Loading...");

  expect(loader[0]).toBeInTheDocument();
});

test("validate product list", async () => {
  render(
    <MockedProvider mocks={categoryListQueryMocks} addTypename={false}>
      <ProductList />
    </MockedProvider>
  );

  expect(await screen.findByText(article.name)).toBeInTheDocument();
});
