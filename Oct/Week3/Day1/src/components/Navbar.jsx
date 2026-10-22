import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link> {" "}
        <Link to="/about">About</Link> {" "}
        <Link to="/service">Service</Link> {" "}
        <Link to="/company/marketing?user=active&theme=black">Marketing</Link> {" "}
    </div>
  )
}

export default Navbar