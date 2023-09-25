import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../src/Pages/Login'
import Register from '../src/Pages/Register'
import Dashboard from '../src/Pages/Dashboard'
import Users from '../src/Pages/Users'
import Settings from '../src/Pages/Settings'
import Home from '../src/Pages/Home'
import User from './Pages/user';
import Privacy from './Pages/privacy';
import Eduuser from './Pages/Eduuser';
import Terms from './Pages/terms';
import FAQ from './Pages/faq';
import Claimuser from './Pages/Claimuser';
import Claimuserpro from './Pages/Claimuserpro';
import Claimuserin from './Pages/Claimuserin';
import Claimusersts from './Pages/Claimusersts';
import Payment from './Pages/Payment';
import Policy from './Pages/Policy';
function App() {
  return (
   <>
    <Routes><Route exact path='/' element={<Home/>}/>
    <Route exact path='/Login' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/Dashboard'element={<Dashboard/>} />
    <Route exact path='/Users' element={<Users/>}/>
    <Route exact path='/Settings' element={<Settings/>}/>
    <Route exact path='/user' element={<User/>}/>
    <Route path="/Eduuser" element={<Eduuser/>}></Route>
    <Route path="/privacy" element={<Privacy/>}></Route>
    <Route path="/terms-and-conditions" element={<Terms/>}></Route>
    <Route path="/faq" element={<FAQ/>}></Route>
    <Route path="/Claimuser" element={<Claimuser/>}></Route>
    <Route path="/Claimuserpro" element={<Claimuserpro/>}></Route>
    <Route path="/Claimuserin" element={<Claimuserin/>}></Route>
    <Route path="/Claimusersts" element={<Claimusersts/>}></Route>
    <Route path="/Payment" element={<Payment/>}></Route>
    <Route path="/Policy" element={<Policy/>}></Route>
    </Routes>
   </>
  )
}

export default App
