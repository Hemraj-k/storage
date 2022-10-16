import Navbar from './Components/Navbar/navbar';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Login from './Views/login/login';
import Routers from './Components/Routes/routes';
import './styles.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
