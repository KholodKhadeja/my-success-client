import logo from './logo.svg';
import './App.scss';
import MainNavBar from "./components/MainNavBar/MainNavBar";
import Homepage from './pages/HomePage/Homepage';
import LessonsPage from './pages/LessonsPage/LessonsPage';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <MainNavBar />
      <Switch>
        <Route path="/home" component={Homepage}></Route>
        <Route path="/lessons" component={LessonsPage}></Route>
        </Switch>
    </div>
  );
}

export default App;
