import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";

function Usernavbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              ONLINE CINEMA BOOKING SYSTEM
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/userhomepage">
                  <span className="glyphicon glyphicon-home" />&nbsp;&nbsp;Home
                </Link>
              </li>
              <li>
                <Link to="/userprofile">
                  <span className="glyphicon glyphicon-user" />&nbsp;&nbsp;Profile
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/";
                  }}
                >
                  <span className="glyphicon glyphicon-log-out" />&nbsp;&nbsp;Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Usernavbar;
