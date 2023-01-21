import {BrowserRouter as  Router, Routes, Route } from 'react-router-dom';
import './assets/styles/app.css'
import About from './pages/About';
import Home from './pages/Home';
import TermsOfService from './pages/TermsOfService';
import Login from './pages/Login';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tos' element={<TermsOfService />} />\
        <Route path='/login' element={<Login />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
