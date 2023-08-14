import { gql, useQuery } from "@apollo/client";
import { Category } from "../types";

export const CategoryListQuery = gql`
  query categories {
    categories: productLists(ids: "156126", locale: de_DE) {
      name
      articleCount
      childrenCategories: childrenProductLists {
        list {
          name
          urlPath
        }
      }
      categoryArticles: articlesList(first: 50) {
        articles {
          name
          variantName
          prices {
            currency
            regular {
              value
            }
          }
          images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
            path
          }
        }
      }
    }
  }
`;

const useProductList = () => {
  const { data, loading, error } = useQuery(CategoryListQuery);

  const categories: Array<Category> = loading ? [] : data.categories;

  return {
    categories,
    loading,
    error,
  };
};

export default useProductList;
