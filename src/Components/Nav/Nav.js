// import React from "react";
import { Link, NavLink } from "react-router-dom";
import React from "react";

const Nav = () => {
  // const [togglerNav, setTogglerNav] = useState(false);

  // const clickHandler = () => {
  //   setTogglerNav(!togglerNav);
  // };

  return (
    <div className="flex justify-between items-center py-6 w-screen drop-shadow-lg bg-blue">
      <Link to="/">
        <h1 className="text-gold text-2xl">Senior Resource Network</h1>
      </Link>
      <nav>
        <ul className="flex flex-row gap-4 text-gold drop-shadow-md">
          <NavLink to="/about">About Us </NavLink>
          <NavLink to="/partners">Partners</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/team">Meet Our Team</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
