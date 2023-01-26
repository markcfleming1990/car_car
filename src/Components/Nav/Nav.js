import React from 'react';
// import { link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between items-center px-4 w-screen bg-blue'>
    <div>
      <h1 className='text-3xl font-bold text-gold'>Senior Resource Network</h1>
    </div>
    <ul className='flex text-gold'>
      <button className='p-4 hover:opacity-25'>About Us</button>
      <button className='p-4 hover:opacity-25'>Contact Us</button>
      <button className='p-4 hover:opacity-25'>Information</button>
      <button className='p-4 hover:opacity-25'>Partners</button>
      <button className='p-4 hover:opacity-25'>Sign In</button>
      <button className='rounded-full py-2 bg-slate-700 hover:opacity-25 w-20'>Sign Up</button>
    </ul>
    </div>
  );
};

export default Nav;
