import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" p-4">
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="text-blue-600 text-3xl font-bold">Spire</h1>
      </Link>
    </nav>
  );
};

export default Navbar;
