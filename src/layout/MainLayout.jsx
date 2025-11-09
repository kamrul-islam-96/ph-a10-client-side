import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

export default function () {
  return (
    <div>
        <Navbar />
        <div className='mt-10'>
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}
