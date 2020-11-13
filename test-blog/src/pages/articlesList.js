import React from "react";
import { Link } from "react-router-dom";
import articleContent from "./article-content";

const ArticlesList = () => (
  // React doesn't let a component directly return elements at the same level, so all components must go into a React Fragment.  Instead of React.Fragment, shorthand can be <></>.
  <React.Fragment>
    <h1>Articles</h1>
    {/* For each article, create an element */}
    {articleContent.map((article, key) => (
      <Link
        className="article-list-item"
        key={key}
        to={`/article/${article.name}`}
      >
        <h3>{article.title}</h3>
        {/* article.content is an array of paragraphs */}
        {/* substring gets the first hundred characters of each article */}
        <p>{article.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </React.Fragment>
);

export default ArticlesList;
