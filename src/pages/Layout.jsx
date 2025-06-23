import React from 'react'
import Navbar from '../components/navbar/navbar';
import { Outlet } from 'react-router-dom';
import "./Layout.css"
function Layout() {
  return (
    <div>
      <section className='nav'><Navbar></Navbar></section>
      <section className='main'><Outlet></Outlet></section>
    </div>
  )
}

export default Layout;