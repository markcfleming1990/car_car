import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between items-center px-6 w-screen drop-shadow-lg bg-blue">
      <nav>
        <link to="/">Senior Resource Network</link>

        <ul className="flex text-gold drop-shadow-md">
          <CustomLink to="/about">About Us </CustomLink>
          <CustomLink to="/partners">Partners</CustomLink>
          <CustomLink to="/resources">Resources</CustomLink>
          <CustomLink to="/team">Meet Our Team</CustomLink>
          {/* <button className='p-4 hover:opacity-25'>Sign In</button>
      <button className='rounded-full py-2 bg-slate-700 hover:opacity-25 w-20'>Sign Up</button> */}
        </ul>
      </nav>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Nav;
