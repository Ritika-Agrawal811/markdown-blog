import React, { useEffect, useState, useContext } from "react";
import styles from "../css/post.module.css";
import Markdown from "markdown-to-jsx";
import CodeSnippet from "../components/CodeSnippet";
import { BackArrow } from "../assets/icon";
import { useParams, useHistory } from "react-router-dom";
import { topics } from "../data/topics";
import ThemeContext from "../context/ThemeContext";

const Post = () => {
  const [postContent, setPostContent] = useState("");
  const params = useParams();
  const { isDark } = useContext(ThemeContext);
  const history = useHistory();

  useEffect(() => {
    const markdownTitle = topics.find(
      (item) => item.id.toString() === params.id
    ).markdownTitle;

    const fetchPostData = async (markdownTitle) => {
      try {
        const fileData = await import(`../markdown/${markdownTitle}.md`);
        let postData = await fetch(fileData.default);
        postData = await postData.text();

        setPostContent(postData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPostData(markdownTitle);
  }, [params.id]);

  const goToHome = () => {
    history.push("/");
  };

  return (
    <section className={`container ${styles["post__container"]}`}>
      <BackArrow
        color={isDark ? "#e5e5e5" : "#121212"}
        className={styles["back-arrow"]}
        onClick={goToHome}
      />
      <article className={styles["post-article"]}>
        <Markdown
          options={{
            overrides: {
              CodeSnippet: {
                component: CodeSnippet,
              },
            },
          }}
        >
          {postContent}
        </Markdown>
      </article>
    </section>
  );
};

export default Post;
