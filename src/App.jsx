import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './compontnts/Login/Login';
import Header from './compontnts/Header/Header';
import Home from './compontnts/Home/Home';





const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
          
      </Router>
    </div>
  );
};

export default App;
