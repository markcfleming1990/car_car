import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const navigationLinks = [
    { path: "/about", label: "About Us" },
    { path: "/partners", label: "Partners" },
    { path: "/resources", label: "Resources" },
    { path: "/team", label: "Meet Our Team" },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue text-gold p-6 shadow-lg w-screen">
      <Link to="/">
        <h1 className="text-2xl font-bold">Senior Resource Network</h1>
      </Link>
      <div className="flex">
        <ul className="flex flex-wrap gap-4">
          {navigationLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className="hover:text-blue-100 hover:bg-gold rounded py-2 px-4 text-lg font-medium"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
