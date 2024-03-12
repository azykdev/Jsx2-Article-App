import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header class="p-3 text-bg-dark">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-between">
            <Link to={"/"}>
              <img
                src="https://cdn-icons-png.freepik.com/256/9225/9225470.png?ga=GA1.1.1682971148.1710270692&"
                alt=""
                width="40"
              />
              <span class="fs-5 d-none d-lg-inline-block text-light ms-3">
                Azyk*Developer
              </span>
            </Link>

            <div class="text-end">
              <Link className="text-light me-4" to={"/login"}>
                Login
              </Link>
              <Link className="text-light" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
