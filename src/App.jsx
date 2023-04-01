import logo from './logo.svg';
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store/auth";
import jwt_decode from "jwt-decode";
import './App.scss';
import MainNavBar from "./components/MainNavBar/MainNavBar";
import Homepage from './pages/HomePage/Homepage';
import LessonsPage from './pages/LessonsPage/LessonsPage';
import MyLessonsPage from './pages/MyLessons/MyLessonsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';
import FavLessonPage from './pages/FavLessonsPage/FavLessonPage';
import ShowDetails from './pages/ShowDetails/ShowDetails';
import AdminPage from './pages/AdminPage/AdminPage';
import ConnectToLessonPage from './pages/ConnectToLesson/ConnectToLessonPage';
import useAutoLogin from "./hooks/useAutoLogin";

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
      <MainNavBar />
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/home"  component={Homepage}></Route>
        {/* <Route path="/lessons" component={LessonsPage}></Route> */}
        <Route path="/lessons/:search" component={LessonsPage}></Route>
        <Route path="/mylessons" component={MyLessonsPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/favoritelessons" component={FavLessonPage}></Route>
        <Route path="/showdetails" component={ShowDetails}></Route>
        <Route path="/usersadmin" component={AdminPage}></Route>
        <Route path="/connecttolesson" component={ConnectToLessonPage}></Route>
        </Switch>
    </div>
  );
}

export default App;
