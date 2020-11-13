import React from "react";

const HomePage = () => (
  // React doesn't let a component directly return elements at the same level, so all components must go into a React Fragment.  Instead of React.Fragment, shorthand can be <></>.
  <React.Fragment>
    <h1>Hello, welcome to my blog.</h1>
    <p>Post 1</p>
    <p>Post 2</p>
    <p>Post 3</p>
  </React.Fragment>
);

export default HomePage;
