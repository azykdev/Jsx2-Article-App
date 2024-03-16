import "./scss/main/app.scss";
import { Routes, Route } from "react-router-dom";
import {
  Main,
  Login,
  Register,
  Navbar,
  ArticleDetail,
  CreateArticle,
} from "./components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signStart, signSuccess } from "./store/slice/auth";
import { getItem } from "./helpers/persistance-storage";
import AuthService from "./service/auth";
import ArticleService from "./service/article";
import { getArticlesStart, getArticlesSuccess } from "./store/slice/article";

function App() {
  const dispatch = useDispatch();

  const getUser = async () => {
    dispatch(signStart());
    try {
      const res = await AuthService.getCurrentUser();
      dispatch(signSuccess(res.user));
    } catch (error) {
      console.log(error);
    }
  };

  // get user
  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="article/:slug" element={<ArticleDetail />} />
        <Route path="create-article" element={<CreateArticle />} />
      </Routes>
    </div>
  );
}

export default App;
