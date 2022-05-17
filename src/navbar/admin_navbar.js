import React from "react";
import { Link } from "react-router-dom";

function Adminnavbar() {
  return (
    <div>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
            <a class="navbar-brand" href="#">
              ONLINE CINEMA BOOKING SYSTEM
            </a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav" />
            <ul class="nav navbar-nav navbar-right">
              <li class="active">
                <Link to="/adminhomepage">HOME</Link>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  THEATER <span class="caret" />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/addtheater">ADD</Link>
                  </li>
                  <li>
                    <Link to="/deletetheater">DELETE</Link>
                  </li>
                  <li>
                    <Link to="/viewtheater">VIEW</Link>
                  </li>
                  <li>
                    <Link to="/updatetheater">MODIFY</Link>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  SHOW <span class="caret" />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/addshow">ADD</Link>
                  </li>
                  <li>
                    <Link to="/deleteshow">DELETE</Link>
                  </li>
                  <li>
                    <Link to="/viewshow">VIEW</Link>
                  </li>
                  <li>
                    <Link to="/updateshow">MODIFY</Link>
                  </li>
                </ul>
              </li>
              <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                  MOVIE <span class="caret" />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="/addmovie">ADD</Link>
                  </li>
                  <li>
                    <Link to="/deletemovie">DELETE</Link>
                  </li>
                  <li>
                    <Link to="/viewmovie">VIEW</Link>
                  </li>
                  <li>
                    <Link to="/updatemovie">MODIFY</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  to=""
                  onClick={() => {
                    localStorage.clear();
                    window.location.href = "/";
                  }}
                >
                  <span class="glyphicon glyphicon-log-out" /> LOGOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Adminnavbar;
