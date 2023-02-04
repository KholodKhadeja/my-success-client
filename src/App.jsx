import logo from './logo.svg';
import './App.scss';
import MainNavBar from "./components/MainNavBar/MainNavBar";
import Homepage from './pages/HomePage/Homepage';
import LessonsPage from './pages/LessonsPage/LessonsPage';
import MyLessonsPage from './pages/MyLessons/MyLessonsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <MainNavBar />
      <Switch>
        <Route path="/home" component={Homepage}></Route>
        <Route path="/lessons" component={LessonsPage}></Route>
        <Route path="/mylessons" component={MyLessonsPage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route path="/register" component={SignUpPage}></Route>
        </Switch>
    </div>
  );
}

export default App;
