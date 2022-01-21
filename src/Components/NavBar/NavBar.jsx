import React from "react";
import './NavBar.css';

const Navbar = ({ isScrolling }) => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null}`}>
      <div className="navbar_logo" onClick={toTheTop}>
        Pablo D. Vallejos
      </div>
    </nav>
  );
};

export default Navbar;