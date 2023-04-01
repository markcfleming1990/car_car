import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Nav = () => {
  const navigationLinks = [
    { path: "/about", label: "About Us" },
    { path: "/partners", label: "Partners" },
    { path: "/resources", label: "Resources" },
    { path: "/team", label: "Meet Our Team" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between flex-wrap bg-blue text-gold p-6 shadow-2xl w-screen">
      <Link to="/">
        <h1 className="text-2xl font-bold">Senior Resource Network</h1>
      </Link>
      <div className="flex">
        <ul className="md:flex flex-wrap gap-4 sm:hidden">
          {navigationLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className="hover:text-blue hover:bg-gold rounded py-2 px-4 text-lg font-medium"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-2 top-6 md:hidden"
      >
        <HiMenu className="text-gold cursor-pointer" />
        <ul
          className={`md:flex md:items-center justify-start md:pb-0 pb-12 absolute md:static md: z-10 right-[60px] top[-20px] w-auto md:w-auto md:pl-0 transition-all duration-500 ease-in ${
            open ? "bg-blue h-[270px] top-10 right-[-33px] w-[120px]" : "top-[-490px]"
          }`}
        >
          {navigationLinks.map((link) => (
            <li key={link.path} className="md:ml-8 text-xl md:my-0 my-7 text-center">
              <NavLink
                to={link.path}
                className="hover:text-blue hover:bg-gold rounded py-2 px-4 text-lg font-medium"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;