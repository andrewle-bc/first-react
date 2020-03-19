import React from "react";

//Stateless functional component

const NavBar = ({ totalCount }) => {
  console.log("NavBar - render");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">{totalCount}</span>
      </a>
    </nav>
  );
};

export default NavBar;
