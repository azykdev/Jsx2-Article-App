import "../scss/components/register.scss";
import { signFailed, signStart, signSuccess } from "../store/slice/auth";
import { Input1, Spinner1 } from "../ui";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthService from "../service/auth";
import { ValidationError } from "./";
import { useNavigate } from "react-router-dom";

function Register() {
  // variables
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // hooks
  const dispatch = useDispatch();
  const { loading, loggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  console.log(loggedIn);

  const register = async (e) => {
    e.preventDefault();
    dispatch(signStart());
    try {
      const response = await AuthService.register({
        email,
        username,
        password,
      });

      dispatch(signSuccess(response.user));
      navigate("/");
    } catch (error) {
      dispatch(signFailed(error.response.data.errors));
    }
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn]);

  return (
    <main id="register"  className="bg-dark">
      <form>
        <img
          className="mb-4"
          src="https://cdn-icons-png.freepik.com/256/9225/9225470.png?ga=GA1.1.1682971148.1710270692&"
          alt=""
          width="50"
        />
        <h1 className="h3 mb-3 fw-normal text-light">Please register</h1>

        {/* {error && (
          <ul className="text-danger ps-3" style={{ listStyle: "circle" }}>
            <li>{error.email[0]}</li>
            <li>{error.username[0]}</li>
            <li>{error.password[0]}</li>
          </ul>
        )} */}

        <ValidationError />

        <Input1
          label="Email address"
          type="email"
          classes="form-control rounded-0 rounded-top"
          state={email}
          setState={setEmail}
        />
        <Input1
          label="Username"
          type="text"
          classes="form-control rounded-0"
          state={username}
          setState={setUsername}
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
          onClick={register}
        >
          {loading ? <Spinner1 /> : "Register"}
        </button>
        <p className="mt-5 mb-3 text-light">© 2024</p>
      </form>
    </main>
  );
}

export default Register;
