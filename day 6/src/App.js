import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../src/Pages/Login'
import Register from '../src/Pages/Register'
import Dashboard from '../src/Pages/Dashboard'
import Users from '../src/Pages/Users'
import Settings from '../src/Pages/Settings'
import Home from '../src/Pages/Home'

function App() {
  return (
   <>
    <Routes>    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Login' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/Dashboard'element={<Dashboard/>} />
    <Route exact path='/Users' element={<Users/>}/>
    <Route exact path='/Settings' element={<Settings/>}/>
    </Routes>
   </>
  )
}

export default App
