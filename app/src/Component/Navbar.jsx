import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand mr-5 " href="!#">
            News
          </a>

          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <Link to="/"><li className="nav-item mr-5">Home</li></Link>
              <Link to="/business"><li className="nav-item mr-5">Business</li></Link>
              <Link to="/technology"><li className="nav-item mr-5">Technology</li></Link>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
