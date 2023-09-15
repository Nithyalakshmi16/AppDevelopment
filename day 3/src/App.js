import * as React from 'react';

import './asset/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/signup';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
            <Routes>
                
                <Route path="/Login" element={<Login/>}></Route>
                <Route path="Signup" element={<Signup/>}></Route>
            </Routes>
        </BrowserRouter>
        </div>
  );
}

export default App;
