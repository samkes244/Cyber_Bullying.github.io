import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/" className="h1_link">
        <h1>Cyber Seva</h1>
      </NavLink>
      {/* write this in english hindi font-style */}
    </div>
  );
}

export default Header;
