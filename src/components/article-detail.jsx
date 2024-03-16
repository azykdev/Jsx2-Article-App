import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../store/slice/article";
import ArticleService from "../service/article";

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
        console.log(article);
      } catch (error) {
        console.log(error);
      }
    };

    getArticle();
  }, [slug]);

  return <div className="container">

  </div>;
}

export default ArticleDetail;
