import React from "react";

import { IList, ChildCategory } from "./types";
import { useProductList } from "./hooks";

import "./ProductList.css";
import ArticleCard from "./components/ArticleCard";

const CategoryList = ({
  childCategories,
}: {
  childCategories: IList<ChildCategory[]>;
}) => {
  return (
    <ul>
      {childCategories.list.map(({ name, urlPath }) => {
        return (
          <li key={urlPath}>
            <a href={`/${urlPath}`}>{name}</a>
          </li>
        );
      })}
    </ul>
  );
};

/* Use descriptive and meaningful names for React components */
const ProductListPage = () => {
  const { loading, categories } = useProductList();

  const articles = categories.map((category) => {
    return category.categoryArticles.articles.map((article, index) => {
      /* better to avoid using index as key since order of articles may change and impact performance,
       * so use unique id from query */
      /* I couldn't find unique id in the query so I am using index */
      return <ArticleCard key={index} article={article} />;
    });
  });

  return (
    <>
      <aside className="sidebar">
        <h2>Kategorien</h2>

        {!loading ? (
          <CategoryList childCategories={categories[0].childrenCategories} />
        ) : (
            <p>Loading...</p>
          )}
      </aside>

      <section className="content">
        {!loading ? (
          <header>
            <h2>
              {categories[0].name}
              <small> ({categories[0].articleCount})</small>
            </h2>
          </header>
        ) : (
            <p>Loading...</p>
          )}
        <ul className="articles">{articles}</ul>
      </section>
    </>
  );
};

export default ProductListPage;
