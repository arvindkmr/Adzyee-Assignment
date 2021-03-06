import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
          Nav Bar
        </Link>
        <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
      </div>
    </nav>
  );
};

export default Navbar;
