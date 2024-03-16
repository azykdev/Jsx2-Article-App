import axios from "./axios";

const ArticleService = {
  // Get all articles
  async getAllArticles() {
    const { data } = await axios.get("/articles");
    return data;
  },

  // Get article by slug
  async getArticleBySlug(slug) {
    const { data } = await axios.get(`/articles/${slug}`);
    return data;
  },

  // Create article
  async createArticle(article) {
    const { data } = await axios.post("/articles", {article});
    return data;
  },
};

export default ArticleService;
