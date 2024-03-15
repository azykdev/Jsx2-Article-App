function ArticleCard({ article }) {
  return (
    <div className="card shadow-sm" style={{ height: "28rem" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9XMbR4wA5Os7Yig9OcBDagg5t9ZpZ7_H-XY0Jxr8SBQ&s"
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
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-primary">
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
            {article.createdAt.substring(0, 10)}
          </small>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
