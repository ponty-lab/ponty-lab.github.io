
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Docs from './pages/docs';
//import SignUp from './pages/signup';
//import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/*<Route exact path='/index' element={<Home />} /> */}
         <Route path='/docs' element={<Docs />} />
        {/*<Route path='/sign-up' element={<SignUp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
