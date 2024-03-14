import "../scss/components/register.scss";
import { regiterStart } from "../store/slice/auth";
import { Input1, Spinner1 } from "../ui";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const register = (e) => {
    e.preventDefault();
    dispatch(regiterStart({ email, username, password }));
  }

  return (
    <main className="bg-dark">
      <form>
        <img
          className="mb-4"
          src="https://cdn-icons-png.freepik.com/256/9225/9225470.png?ga=GA1.1.1682971148.1710270692&"
          alt=""
          width="50"
        />
        <h1 className="h3 mb-3 fw-normal text-light">Please register</h1>

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
        <button className="btn btn-primary w-100 py-2 mt-3" type="submit" disabled={loading} onClick={register} >
          {loading ? <Spinner1 /> : "Register"}
        </button>
        <p className="mt-5 mb-3 text-light">© 2024</p>
      </form>
    </main>
  );
}

export default Register;
