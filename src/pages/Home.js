import React, { useContext } from "react";
import Header from "../components/Header/Header";
import ThemeContext from "../context/ThemeContext";
import Post from "./Post/Post";
import { Switch, Route } from "react-router-dom";
import ArticleCardsContainer from "./ArticleCardsContainer/ArticleCardsContainer";

const Home = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <main className="app__wrapper" theme={isDark ? "dark" : "light"}>
      <Header />
      <Switch>
        <Route exact path="/" component={ArticleCardsContainer} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </main>
  );
};

export default Home;
