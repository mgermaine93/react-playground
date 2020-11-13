import React from "react";
import articleContent from "./article-content";

//{/* "match" contains the current url, if it matches the path, and the params */}
const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  // If the article title doesn't exist, this message will print out to the view
  if (!article) return <h1>Article does not exist.</h1>;

  return (
    // React doesn't let a component directly return elements at the same level, so all components must go into a React Fragment.  Instead of React.Fragment, shorthand can be <> and </> if desired.
    <React.Fragment>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </React.Fragment>
  );
};

export default ArticlePage;
