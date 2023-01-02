import React from "react";
import { Link } from "react-router-dom";


const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-bar-dark bg-primary">
      <div className="container-fluid">
        <h1 className="navbar-brand">Full Stack application</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="btn btn-outline-light" to='adduser'>Add User</Link>
      </div>
    </nav>
  );
};

export default navbar;
