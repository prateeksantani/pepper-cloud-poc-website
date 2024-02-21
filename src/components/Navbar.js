import {Link} from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
   <nav>
   <img src='/logo.png' alt="site logo"></img>
   <div className="links">
    <Link to= "/">Home</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/career">Career</Link>
    <Link to="/psg_grant">PSG Grant</Link>
    <button class="login-btn">Login</button>
    <button class="Get-Demo-btn">Get Demo</button>
   </div>
   </nav>
  )
}
