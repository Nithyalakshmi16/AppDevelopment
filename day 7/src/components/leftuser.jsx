import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice.jsx';

function Leftuser() {

    const dispatch= useDispatch();
    const navigate=useNavigate();

const settingsHandler = ()=>{
    navigate('/Eduuser')
}
const usersHandler = () =>{
    navigate('/User')
}
const ClaimuserHandler = () =>{
    navigate('/Claimuser')
}
const  PaymentHandler = () =>{
    navigate('/Payment')
}
const  PolicyHandler = () =>{
    navigate('/Policy')
}
const logoutHandler = () =>{
    dispatch(logout())
    navigate('/')
}

    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                    <button className='left-bar-button nav-btn' onClick={usersHandler}>
                        Renewal
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                    Insurance Education and Resources
                    </button>
                    <button className='left-bar-button nav-btn' onClick={ ClaimuserHandler}>
                    Claim
                    </button>
                    <button className='left-bar-button nav-btn' onClick={ PaymentHandler}>
                    Payment
                    </button>
                    <button className='left-bar-button nav-btn' onClick={PolicyHandler}>
                    Policy
                    </button>
                    <button className='left-bar-button-logout nav-btn' onClick={logoutHandler}>
                        Logout
                    </button>

                </div>
            </div>
        </>
    )
}

export default Leftuser