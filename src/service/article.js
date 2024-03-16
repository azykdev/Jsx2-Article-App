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

  // Update article
  async updateArticle(slug, article) {
    const { data } = await axios.put(`/articles/${slug}`, {article});
    return data;
  },

  // Delete article
  async deleteArticle(slug) {
    const { data } = await axios.delete(`/articles/${slug}`);
    return data;
  },
};

export default ArticleService;
