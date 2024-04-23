import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [login, setLogin] = useState(false);

  const handleLoginView = ()=>{
    setLogin(!login);
  }


  return (
    <div className="m-0 p-0 overflow-hidden">
      <Login login={login} handleLoginView={handleLoginView}/>
      <Router>
        <Navbar handleLoginView={handleLoginView} login={login}/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
