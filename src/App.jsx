import logo from './logo.svg';
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

function App() {
  return (
    <div className="App container">
      <MainNavBar />
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/home"  component={Homepage}></Route>
        <Route path="/lessons" component={LessonsPage}></Route>
        <Route path="/mylessons" component={MyLessonsPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/favoritelessons" component={FavLessonPage}></Route>
        <Route path="/showdetails" component={ShowDetails}></Route>
        </Switch>
    </div>
  );
}

export default App;
