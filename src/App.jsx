
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import './App.scss';
import MainNavBar from "./components/MainNavBar/MainNavBar";
import Homepage from './pages/HomePage/Homepage';
import LessonsPage from './pages/LessonsPage/LessonsPage';
import MyLessonsPage from './pages/MyLessons/MyLessonsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { Route, Switch } from 'react-router-dom';
import FavLessonPage from './pages/FavLessonsPage/FavLessonPage';
import ShowDetails from './pages/ShowDetails/ShowDetails';
import AdminPage from './pages/AdminPage/AdminPage';
import useAutoLogin from "./hooks/useAutoLogin";
import TeacherStudentGuardRoute from 'components/TeacherStudentGuardRoute';

function App() {
  const autoLoginFunction = useAutoLogin();
  const loggedIn = useSelector((state) => state.auth.loggedIn);
  const [tryToLogin, setTryToLogin] = useState(true);

  useEffect(() => {
    (async () => {
      let status = await autoLoginFunction(localStorage.getItem("token")); if (status === false) {setTryToLogin(false); }
    })(); }, []);
  useEffect(() => {if (loggedIn === true && tryToLogin === true) { setTryToLogin(false);  }}, [loggedIn]);

  return (
    <div className="App container">
<ToastContainer/>
      <MainNavBar />
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/home"  component={Homepage}></Route>
        <Route path="/lessons" component={LessonsPage}></Route>
        <TeacherStudentGuardRoute path="/mylessons" component={MyLessonsPage}></TeacherStudentGuardRoute>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/favoritelessons" component={FavLessonPage}></Route>
        <Route path="/showdetails" component={ShowDetails}></Route>
        <Route path="/usersadmin" component={AdminPage}></Route>
        <Route path="*" exact component={Homepage}></Route>
        </Switch>
    </div>
  );
}

export default App;
