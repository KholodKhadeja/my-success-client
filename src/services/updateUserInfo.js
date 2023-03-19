// import { useDispatch } from "react-redux";
// import jwt_decode from "jwt-decode";

// import autoLogin from "./autoLogin";
// import { authActions } from "../store/auth";
// const updateUserInfo = async () => {
//   const dispatch = useDispatch();
//   try {
//     let { data } = await autoLogin();
//     let dataFromToken = jwt_decode(localStorage.getItem("token"));
//     if (data) {
//       dispatch(authActions.login(dataFromToken));
//       dispatch(authActions.updateUserInfo(data));
//     }
//   } catch (err) {
//     //you not logged in
//   }
// };
// export default updateUserInfo;
