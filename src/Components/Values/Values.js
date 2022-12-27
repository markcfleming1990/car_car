import React from "react";

function Subs() {
  return (
    <div className="grid grid-cols-4 py-[400px] text-2xl">
      <div className='px-[600px]'>
        Choose Your Plan
      </div>
      <div className="grid grid-cols-3 gap-10 py-40">
        <div className="text-1xl">
          Monthly
          <p>Lorem ipsum dolor sit amet</p>
          <button className='rounded-full w-32 bg-slate-700 text-white'>Subscribe</button>
        </div>
        <div className="text-1xl">
          Business Premium
          <p>Lorem ipsum dolor sit amet</p>
          <button className='rounded-full w-32 bg-slate-700 text-white'>Subscribe!</button>
        </div>
        <div className="text-1xl">
          Special Rates
          <p>Lorem ipsum dolor sit amet</p>
          <button className='rounded-full w-32 bg-slate-700 text-white'>Subscribe!</button>
        </div>
      </div>
    </div>
  );
}

export default Subs;
