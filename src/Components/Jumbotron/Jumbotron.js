import React from "react";
import Icon from "../../Assets/img/jumbo_bg.png";

function Jumbotron() {
  return (
    // add senior pictures
    <div className="grid grid-cols-3 gap-4 content-center">
      <div className="w-screen h-200">
        <img
          src={Icon}
          className=" flex w-screen h-90 backdrop-opacity-90 relative"
          alt="senior resource icon"
        />
        <div className="grid cols-3 gap-2 m-2">
          <div className="text-4xl py-30 px-20 absolute bottom-[70px]">
            <h1 className="text-gold">Senior Resource Network</h1>
            <p className="text-gold">
              Bringing peace of mind to those that matter the most
            </p>
            <div classname="flex space-x-4 p-2">
              <button className="rounded-full px-2 bg-green text-black">
                Request Information
              </button>
              <button className="rounded-full px-2 bg-green text-black">
                Donate
              </button>
            </div>
          </div>
        </div>
        {/* <img src={background} className='object-cover'alt="cover" /> */}
        {/* <h1 className='flex justify-evenly text-3xl font-bold py-20'>
         Resources all in one place!
       </h1> */}

        <div className="grid grid-cols-3 gap-8 px-4 py-16">
          {/* <button className='rounded-full bg-white py-4 text-2xl'>About Us</button>
    <button className='rounded-full bg-white py-4 text-2xl'>Information</button>
    <button className='rounded-full bg-white text-2xl'>Our Partners</button> */}
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
