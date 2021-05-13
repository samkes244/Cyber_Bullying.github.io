import React from "react";
import "./Controller.css";
import { NavLink } from "react-router-dom";
function Controller() {
  return (
    <div className="controller">
      <div className="controller_container">
        <ul>
          <NavLink to="/save" className="li">
            <li>How to save yourself</li>
          </NavLink>
          <NavLink to="/complaint-info" className="li">
            <li>Where to complain</li>
          </NavLink>
          <NavLink to="/form" className="li">
            <li>Share your experience</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Controller;
