import React from "react";
import { renderHook, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import "@testing-library/jest-dom";

import useProductList, { CategoryListQuery } from "./useProductList";

const article = {
  name: "article 1",
  variantName: "",
  prices: { currency: "EUR", regular: { value: 100 } },
  images: [{ path: "" }],
};

const childrenCategories = {
  url: "",
  urlPath: "",
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

const categoryEmptyListQueryMocks = [
  {
    request: {
      query: CategoryListQuery,
    },
    result: {
      data: {
        categories: [],
      },
    },
  },
];

it("renders without error", async () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <MockedProvider mocks={categoryListQueryMocks} addTypename={false}>
      {children}
    </MockedProvider>
  );

  const { result } = renderHook(() => useProductList(), {
    wrapper,
  });

  await waitFor(() => expect(result.current.loading).toBe(true));

  expect(result.current.categories.length).toBe(1);
});

it("should return empty array", async () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <MockedProvider mocks={categoryEmptyListQueryMocks} addTypename={false}>
      {children}
    </MockedProvider>
  );

  const { result } = renderHook(() => useProductList(), {
    wrapper,
  });

  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(result.current.categories).toHaveLength(0);
});

it("match response", async () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <MockedProvider mocks={categoryListQueryMocks} addTypename={false}>
      {children}
    </MockedProvider>
  );

  const { result } = renderHook(() => useProductList(), {
    wrapper,
  });

  await waitFor(() => expect(result.current.loading).toBe(false));

  expect(result.current.categories).toMatchObject(categories);
});
