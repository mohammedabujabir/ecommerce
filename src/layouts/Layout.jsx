import React from 'react'
import Navbar from '../assets/components/web/navbar/Navbar'
import Footer from '../assets/components/web/footer/Footer'
import {Outlet} from 'react-router-dom'
export default function Layout() {
  return (
    <>
     <Navbar/>
     <Outlet />
    <Footer/>
    </>
 
  )
}
