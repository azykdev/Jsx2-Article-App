import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../store/slice/article";
import ArticleService from "../service/article";
import { Spinner1 } from "../ui";

function ArticleDetail() {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { articleDetail } = useSelector((state) => state.article);

  useEffect(() => {
    const getArticle = async () => {
      dispatch(getArticleDetailStart());
      try {
        const { article } = await ArticleService.getArticleBySlug(slug);
        dispatch(getArticleDetailSuccess(article));
      } catch (error) {
        console.log(error);
      }
    };

    getArticle();
  }, [slug]);

  return (
    <div className="container">
      {/* Article */}
      {!articleDetail && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80vh" }}
        >
          <Spinner1 size={"md"} />
        </div>
      )}

      {/* Article Detail */}
      {articleDetail && (
        <>
          <div style={{ width: 800, margin: "50px auto" }}>
            <h1 className="fw-bold " style={{ fontSize: 50 }}>
              {articleDetail.title}
            </h1>
            <p>{articleDetail.description}</p>

            {/* Author */}
            <div className="d-flex align-items-center my-5">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                alt=""
                width={50}
              />
              <div>
                <p className="m-0 ms-3 fw-bold">
                  {articleDetail.author.username}
                </p>
                <p className="m-0 ms-3 text-muted">
                  {new Date(articleDetail.createdAt).toDateString()}
                </p>
              </div>
            </div>

            {/* Content */}
            <p className="text-muted fs-5">{articleDetail.body}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default ArticleDetail;
