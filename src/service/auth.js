import axios from "./axios";

const AuthService = {
  // Register user
  async register(user) {
    const {data} = await axios.post("/users", { user });

    return data;
  },
  // Login user
  async login(user) {
    const {data} = await axios.post("/users/login", {user});

    return data;
  },
  // Logout
  async logout() {},
  // Get current user
  async getCurrentUser() {
    const {data} = await axios.get("/user");

    return data;
  },
  // Get all users
  async getAllUsers() {},
};

export default AuthService;
