import { useDispatch, useSelector } from "react-redux";
import "../scss/components/login.scss";
import { Input1, Spinner1 } from "../ui";
import { useState } from "react";
import { loginStart } from "../store/slice/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const login = (e) => {
    e.preventDefault();
    dispatch(loginStart({ email, password }));
  };

  console.log("loading", loading, "error", error);

  return (
    <main className="bg-dark">
      <form>
        <img
          className="mb-4"
          src="https://cdn-icons-png.freepik.com/256/9225/9225470.png?ga=GA1.1.1682971148.1710270692&"
          alt=""
          width="50"
        />
        <h1 className="h3 mb-3 fw-normal text-light">Please login</h1>

        <Input1
          label="Email address"
          type="email"
          classes="form-control rounded-0 rounded-top"
          state={email}
          setState={setEmail}
        />
        <Input1
          label="Password"
          type="password"
          classes="form-control rounded-0 rounded-bottom"
          state={password}
          setState={setPassword}
        />

        <button
          className="btn btn-primary w-100 py-2 mt-3"
          type="submit"
          disabled={loading}
          onClick={login}
        >
          {loading ? <Spinner1 /> : "Login"}
        </button>
        <p className="mt-5 mb-3 text-light">© 2024</p>
      </form>
    </main>
  );
}

export default Login;
