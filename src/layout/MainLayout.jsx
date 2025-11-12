import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

export default function () {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow mt-8 w-full flex items-center justify-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
