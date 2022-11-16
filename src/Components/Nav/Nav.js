import React from 'react';
// import { link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between items-center h-[80px] px-4 bg-zinc-200 w-screen drop-shadow-lg'>
    <div>
      <h1 className='text-3xl mr-4 font-bold'>Car Car Used Cars</h1>
    </div>
    <ul className='flex'>
      <li className='p-4 hover:bg-zinc-600'>About</li>
      <li className='p-4 hover:bg-zinc-600'>Contact</li>
      <li className='p-4 hover:bg-zinc-600'>Trade in</li>
      <li className='p-4 hover:bg-zinc-600'>Inventory</li>
    </ul>
    </div>
  );
};

export default Nav;
