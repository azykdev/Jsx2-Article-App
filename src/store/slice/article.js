import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
  loading: false,
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
  },
});

export const {
  getArticlesStart,
  getArticlesSuccess,
  getArticlesFailed,
} = articleSlice.actions;
export default articleSlice.reducer;