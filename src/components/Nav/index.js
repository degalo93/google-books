import React from "react";
import { Link } from "react-router-dom"



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Google Books
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/google-books/"
              className={
                window.location.pathname === "/google-books/" || window.location.pathname === "/google-books/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/google-books/saved"
              className={window.location.pathname === "/google-books/saved" ? "nav-link active" : "nav-link"}
            >
              Saved 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;