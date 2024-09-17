import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
export default function GuestLayout() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className={'container'}>
      <Outlet/>
    </main>
    </>
  
  )
}
