import { useEffect, useState, useContext, useCallback } from "react";
import styles from "./post.module.css";
import Markdown from "markdown-to-jsx";
import { BackArrow } from "../../assets/icon";
import { useParams, useHistory } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import data from "../../data/topics.json";
import LoadingSkeleton from "../../components/loadingSkeleton/LoadingSkeleton";
import CodeSnippet from "../../components/codeSnippet/CodeSnippet";

const Post = () => {
  const [postContent, setPostContent] = useState("");
  const [loading, setLoading] = useState(true);
  const { isDark } = useContext(ThemeContext);
  const params = useParams();
  const history = useHistory();

  const fetchPostData = useCallback(async (markdownTitle) => {
    try {
      setLoading(true);
      const fileData = await import(`../../markdown/${markdownTitle}.md`);
      let postData = await fetch(fileData.default);
      postData = await postData.text();
      setPostContent(postData);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const markdownTitle = data.topics.find(
      (item) => item.id.toString() === params.id
    ).markdownTitle;

    fetchPostData(markdownTitle);
  }, [params.id, fetchPostData]);

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
        {loading ? (
          <LoadingSkeleton />
        ) : (
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
        )}
      </article>
    </section>
  );
};

export default Post;
