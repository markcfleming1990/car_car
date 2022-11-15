import React from "react";

const Nav = () => {
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <h1 className='text-3xl'>Car Car Used Cars</h1>
        <div className='grid justify-items-end'>
          <div className='flex'>
            <ul className='justify-end w-32'>
              <li>About</li>
              <li>Contact</li>
              <li>Inventory</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
