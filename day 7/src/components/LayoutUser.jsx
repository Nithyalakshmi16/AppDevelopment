import React from 'react'
import Topbar from './Topbar'
import Leftuser from './leftuser'
import Footer from './Footer'

function Layout() {
  return (
    <>
    <div className='Appbar'>
        <Topbar/>
        <Leftuser/>
        <Footer/>
        
    </div>
    </>
  )
}

export default Layout