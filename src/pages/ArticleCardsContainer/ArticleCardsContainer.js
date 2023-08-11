import React from "react";
import data from "../../data/topics.json";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import styles from "./articles.module.css";

const ArticleCardsContainer = () => {
  return (
    <section className={` container ${styles["articles___container"]}`}>
      {data.topics.map((article) => {
        return <ArticleCard key={article.id} data={article} />;
      })}
    </section>
  );
};

export default ArticleCardsContainer;
