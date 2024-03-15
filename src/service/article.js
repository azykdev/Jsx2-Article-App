import axios from "./axios";

const ArticleService = {
  // Get all articles
  async getAllArticles() {
    const { data } = await axios.get("/articles");
    return data;
  },
};

export default ArticleService;
