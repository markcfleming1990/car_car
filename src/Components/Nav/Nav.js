import React from 'react';
// import { link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between items-center h-[80px] px-4 bg-zinc-200 w-screen drop-shadow-lg'>
    <div>
      <h1 className='text-3xl mr-4 font-bold'>Faith & Family Resources</h1>
    </div>
    <ul className='flex p-4'>
      <li className='p-4 hover:bg-zinc-600'>About Us</li>
      <li className='p-4 hover:bg-zinc-600'>Contact Us</li>
      <li className='p-4 hover:bg-zinc-600'>Information</li>
      <li className='p-4 hover:bg-zinc-600'>Partners</li>
      <li className='p-4 hover:bg-zinc-600'>Sign In</li>
      <button className='rounded-full py-2 bg-slate-700 hover:bg-zinc-600'>Sign Up</button>
    </ul>
    </div>
  );
};

export default Nav;
