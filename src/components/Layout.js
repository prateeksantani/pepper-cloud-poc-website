import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({children}) {
  return (
    <div classNmae="layout">
      <Navbar/>
      <div classNmae = "content">
      {children}
      </div>
      <footer>
      <h1>Pepper Cloud 2024 | Best CRM Software Singapore</h1>
      </footer>
    </div>
  )
}
