import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header className="site-header" role="banner">
      <nav className="navbar container" aria-label="Main navigation">
        <div className="logo"><Link to="/">Little Lemon</Link></div>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className={`nav-links ${open ? "show" : ""}`}>
          <Link to="/" className={loc.pathname === "/" ? "active" : ""} onClick={()=>setOpen(false)}>Home</Link>
          <Link to="/about" className={loc.pathname === "/about" ? "active" : ""} onClick={()=>setOpen(false)}>About</Link>
          <Link to="/booking" className={loc.pathname === "/booking" ? "active" : ""} onClick={()=>setOpen(false)}>Booking</Link>
        </div>
      </nav>
    </header>
  );
}
