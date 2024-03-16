import { useNavigate } from "react-router-dom";

function ArticleCard({ article }) {
  const navigate = useNavigate();

  return (
    <div className="card shadow-sm h-100">
      <img
        src="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_640.png"
        width={"100%"}
        height={"225"}
        className="card-img-top"
        alt="..."
        style={{ objectFit: "cover" }}
      />
      <div className="card-body">
        <p className="card-text text-end text-muted fw-light text-decoration-underline mb-1">
          {article.author.username}
        </p>
        <h6 className="fw-bold">{article.title}</h6>
        <p>{article.description.substring(0, 100)}</p>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button
              onClick={() => navigate(`/article/${article.slug}`)}
              type="button"
              className="btn btn-sm btn-outline-primary"
            >
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-success">
              Edit
            </button>
            <button type="button" className="btn btn-sm btn-outline-danger">
              Delete
            </button>
          </div>
          <small className="text-body-secondary">
            {new Date(article.createdAt).toDateString()}
          </small>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
