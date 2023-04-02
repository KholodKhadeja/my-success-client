import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const TeacherStudentGuardRoute = ({ component: Page, ...rest }) => {
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const userRole = useSelector((state)=>state.auth.role);

  return (
    <Route
      {...rest}
      render={(props) =>
        ((userRole==="teacher" || userRole ==="student") && loggedIn) ? <Page {...props}></Page> : <Redirect to="/mylessons"></Redirect>
      }
    ></Route>
  );
};

export default TeacherStudentGuardRoute;

