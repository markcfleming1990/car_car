import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaDonate } from "react-icons/fa";
// TODO: Find way to put icons in nav map
// import {
//   MdOutlineHandshake,
//   MdPeopleAlt,
//   MdQuestionAnswer,
// } from "react-icons/md";
// import { GiTeamUpgrade } from "react-icons/gi";
const Nav = () => {
  const navigationLinks = [
    { path: "/about", label: "About Us" },
    { path: "/partners", label: "Partners" },
    { path: "/resources", label: "Resources" },
    { path: "/team", label: "Meet Our Team" },
  ];
  let [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between p-4  text-gold">
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={30} onClick={() => setNav(!nav)} />
        </div>
        <Link to="/">
          <h1 className="cursor-pointer px-2">
            <span className="text-blue text-2xl sm:text-3xl lg:text-4xl font-bold">
              Senior
            </span>{" "}
            <span className="text-gold text-2xl sm:text-3xl lg:text-4xl font-bold">
              Resource
            </span>{" "}
            <span className="text-green text-2xl sm:text-3xl lg:text-4xl font-bold">
              Network
            </span>
          </h1>
        </Link>
        <div className="md:hidden sm:flex justify-between">
          <button className="rounded-full border-2 border-blue p-2 mx-2 flex">
            <FaDonate size={20} />
            Donate
          </button>
          <button className="rounded-full border-2 border-blue p-2 flex">
            <HiOutlineInformationCircle size={20} />
            Information
          </button>
        </div>
      </div>
      {/* Overlay menu */}
      {nav ? (
        <div className="bg-blue/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      {/* Sidedrawer Menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-blue z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-blue z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={25}
          className="cursor-pointer absolute right-4 top-4"
        />

        <h2 className="text-xl p-4 text-gold font-medium">
          <Link to="/" onClick={() => setNav(!nav)}>
            Senior Resource Network
          </Link>
        </h2>

        <nav>
          <ul className="flex flex-col p-4">
            {navigationLinks.map((link) => (
              <li
                key={link.path}
                className="text-xl py-4 flex hover:text-blue hover:bg-gold cursor-pointer duration-300"
              >
                <NavLink
                  to={link.path}
                  className="hover:text-blue hover:bg-gold rounded py-2 px-4 text-lg font-medium"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
