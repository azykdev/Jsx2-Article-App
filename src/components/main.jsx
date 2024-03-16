import { useSelector, useDispatch } from "react-redux";
import { ArticleCard } from "./";
import { Spinner1 } from "../ui";
import { getArticlesStart, getArticlesSuccess } from "../store/slice/article";
import ArticleService from "../service/article";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const { articles, loading } = useSelector((state) => state.article);

  // get all articles
  useEffect(() => {
    const getAllArticles = async () => {
      dispatch(getArticlesStart());
      try {
        const res = await ArticleService.getAllArticles();
        dispatch(getArticlesSuccess(res.articles));
      } catch (error) {
        console.log(error);
      }
    };

    getAllArticles();
  }, []);

  return (
    <main id="articles">
      <div className="container">
        {loading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "80vh" }}
          >
            <Spinner1 />
          </div>
        )}

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 py-3">
          { articles && articles.map((article) => (
            <div className="col" key={article.id}>
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;
