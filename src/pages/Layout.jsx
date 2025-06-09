import React from 'react'
import Navbar from '../components/navbar/navbar';
import { Outlet } from 'react-router-dom';
function Layout() {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>

    </div>
  )
}

export default Layout;