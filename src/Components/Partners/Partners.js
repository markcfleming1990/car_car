import React from "react";

function Partners() {
  return (
    <div className="flex justify-center py-40">
      {/* <div className='flex text-3xl px-10'>
        
      </div> */}
      <div className="grid grid-cols-4 py-[60px] items-center">
        <h1 className="flex justify-center p-10 col-span-4 items-center text-3xl">LOCAL PARTNERS FOR ALL ASPECTS OF LIFE</h1>
        <div className="border-solid border-2 p-4 px-12">
          <button>Insurance</button>
        </div>
        <div className="border-solid border-2 py-4 px-16">
          <button>Legal</button>
        </div>
        <div className="border-solid border-2 p-4">
          <button>Home Improvement</button>
        </div>
        <div className="border-solid border-2 py-4 px-12">
          <button>Life Style</button>
        </div>
      </div>
    </div>
  );
}

export default Partners;
