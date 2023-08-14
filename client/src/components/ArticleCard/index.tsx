import React from "react";

import { Article } from "../../types";
import { currencyFormatter } from "../../utils/formatter";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <li className="article">
      <img src={article.images[0].path} alt="article" />
      <h2 className="name">{article.name}</h2>
      <p>{currencyFormatter.format(article.prices.regular.value / 100)}</p>
      <button>Add to cart</button>
    </li>
  );
};

export default ArticleCard;
