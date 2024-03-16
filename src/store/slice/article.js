import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  loading: false,
  articleDetail: {},
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    // GET ARTICLES ========================== *** *** *** ================================
    getArticlesStart: (state) => {
      state.loading = true;
    },
    getArticlesSuccess: (state, action) => {
      state.loading = false;
      state.articles = action.payload;
    },
    getArticlesFailed: (state, action) => {
      state.loading = false;
    },

    // GET ARTICLE DETAIL ========================== *** *** *** ================================
    getArticleDetailStart: (state) => {
      state.loading = true;
    },
    getArticleDetailSuccess: (state, action) => {
      state.loading = false;
      state.articleDetail = action.payload;
    },
    getArticleDetailFailed: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  getArticlesStart,
  getArticlesSuccess,
  getArticlesFailed,

  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailed,
} = articleSlice.actions;
export default articleSlice.reducer;