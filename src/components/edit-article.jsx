import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch, useSelector } from "react-redux";

function EditArticle() {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { slug } = useParams();
  const [article, setForm] = useState({
    title: "",
    description: "",
    body: "",
  });

  // handle change
  const handleChange = (e) => {
    setForm({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(article);
      const res = await ArticleService.updateArticle(slug, article);
      console.log(res);

      navigate(`/`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getArticle = async () => {
      try {
        const { article } = await ArticleService.getArticleBySlug(slug);
        setForm({ ...article });
      } catch (error) {
        console.log(error);
      }
    };
    getArticle();
  }, [slug]);
  return (
    <div
      style={{ minHeight: "90vh" }}
      className="bg-light d-flex justify-content-center align-items-center"
    >
      <div style={{ width: 500 }}>
        <h1>Edit Article</h1>
        <form>
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            required
            minLength={5}
            maxLength={50}
            onChange={handleChange}
            name="title"
            value={article.title}
          />
          <input
            type="text"
            placeholder="Description"
            className="form-control my-3"
            required
            minLength={5}
            maxLength={50}
            onChange={handleChange}
            name="description"
            value={article.description}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter Article Content"
            className="form-control my-3"
            style={{ resize: "none", height: "100px" }}
            required
            minLength={10}
            maxLength={1000}
            onChange={handleChange}
            name="body"
            value={article.body}
          ></textarea>
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditArticle;
