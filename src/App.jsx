import "./scss/main/app.scss";
import { Routes, Route } from "react-router-dom";
import { Main, Login, Register, Navbar } from "./components";
import { useEffect } from "react";
import AuthService from "./service/auth";
import { useDispatch } from "react-redux";
import { signStart, signSuccess } from "./store/slice/auth";
import { getItem } from "./helpers/persistance-storage";

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
      </Routes>
    </div>
  );
}

export default App;
