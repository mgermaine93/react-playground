import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutPage";
import ArticlesList from "./pages/articlesList";
import ArticlePage from "./pages/articlePage";
import NavBar from "./navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        {/* This loads the app from pages/homepage.js */}
        <div className="App">
          <NavBar />
          {/* 
            Route takes two Props:
            1) a path prop, which specifies which route we want to render a given component at
            2) a component prop, which specifies which component we want to render
            3) Use EXACT to have the react router match the "/" exactly.  Otherwise, the "/" would match every single route
          */}
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/articles-list" component={ArticlesList} />
            <Route path="/article/:name" component={ArticlePage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
