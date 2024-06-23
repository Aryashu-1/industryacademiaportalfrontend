import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className=''>
        <Navbar/>
        <div className='h-full '  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <Outlet />
        </div>
        
       <Footer/>
    </div>
  )
}

export default RootLayout
