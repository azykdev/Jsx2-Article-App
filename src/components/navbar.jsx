import { Link } from "react-router-dom";

function Navbar() {
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
              <Link className="text-light me-4" to={"/login"}>
                Login
              </Link>
              <Link className="text-light" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
