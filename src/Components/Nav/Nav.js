import React from 'react';
// import { link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between items-center px-4 w-screen drop-shadow-lg'>
    <div>
      <h1 className='text-3xl font-bold'>Faith & Family Resources</h1>
    </div>
    <ul className='flex'>
      <button className='p-4 hover:bg-zinc-600'>About Us</button>
      <button className='p-4 hover:bg-zinc-600'>Contact Us</button>
      <button className='p-4 hover:bg-zinc-600'>Information</button>
      <button className='p-4 hover:bg-zinc-600'>Partners</button>
      <button className='p-4 hover:bg-zinc-600'>Sign In</button>
      <button className='rounded-full py-2 bg-slate-700 hover:bg-zinc-600'>Sign Up</button>
    </ul>
    </div>
  );
};

export default Nav;
