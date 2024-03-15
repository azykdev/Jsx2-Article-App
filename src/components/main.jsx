import { useSelector } from "react-redux";
import ArticleCard from "./articleCard";

function Main() {
  const { articles } = useSelector((state) => state.article);

  return (
    <main id="articles">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3 py-3">
          {articles.map((article) => (
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
