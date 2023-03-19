import axios from "axios";
const autoLogin = () => {
  return axios.get("/users/login");
};
export default autoLogin;
