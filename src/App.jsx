import logo from './logo.svg';
import './App.scss';
import MainNavBar from "./components/MainNavBar/MainNavBar";
import Homepage from './pages/HomePage/Homepage';


function App() {
  return (
    <div className="App container">
      <MainNavBar />
        <Homepage />
    </div>
  );
}

export default App;
