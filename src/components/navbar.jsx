import { Link, useNavigate } from "react-router-dom";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/slice/auth";

function Navbar() {
  const { loggedIn, user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOut());
    navigate("/login");
  };

  return (
    <div>
      <nav
        className="text-bg-dark d-flex align-items-center border-bottom px-3"
        style={{ height: "10vh" }}
      >
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <Link to={"/"}>
              <img
                src="https://cdn-icons-png.freepik.com/256/9225/9225470.png?ga=GA1.1.1682971148.1710270692&"
                alt=""
                width="40"
              />
              <span className="fs-5 d-none d-lg-inline-block text-light ms-3">
                Azyk*Developer
              </span>
            </Link>

            <div className="text-end">
              {loggedIn ? (
                <>
                  <Link className="text-primary me-4" to={"/create-article"}>
                    Create Article
                  </Link>
                  <span className="text-light me-4">{user.username}</span>
                  <button
                    onClick={logout}
                    className="btn btn-outline-light me-4"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link className="text-light me-4" to={"/login"}>
                    Login
                  </Link>
                  <Link className="text-light" to="/register">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
