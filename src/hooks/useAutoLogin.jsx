
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";

// import autoLogin from "../services/autoLogin";
import { authActions } from "../store/auth";
const useAutoLogin = () => {
  const dispatch = useDispatch();
  const autoLoginFunction = async (token) => {
    try {
      let dataFromToken = jwt_decode(token);
        dispatch(authActions.login(dataFromToken));
        dispatch(authActions.updateUserInfo(dataFromToken));

    } catch (err) {
      return false;  } };
  return autoLoginFunction;
};
export default useAutoLogin;
