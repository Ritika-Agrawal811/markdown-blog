import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import ArticleCardsContainer from "./pages/articleCardsContainer/ArticleCardsContainer";
import Header from "./components/header/Header";
import Post from "./pages/post/Post";

function App() {
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
}

export default App;
