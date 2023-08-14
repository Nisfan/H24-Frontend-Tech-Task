import React from "react";
import { create } from "react-test-renderer";

import "@testing-library/jest-dom";
import ArticleCard from ".";
import { Article } from "../../types";

const article: Article = {
  name: "name",
  variantName: "variant name",
  prices: { currency: "EUR", regular: { value: 100 } },
  images: [{ path: "path" }],
};

test("render article card", async () => {
  const tree = create(<ArticleCard article={article} />).toJSON();

  expect(tree).toMatchSnapshot();
});
