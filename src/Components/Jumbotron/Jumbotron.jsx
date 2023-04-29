import React from "react";
import Icon from "../../Assets/img/jumbo_bg.png";
import { FaDonate } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";

function Jumbotron() {
  return (
    <div className="max-w-[1640px] mx-auto">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div
          className="absolute w-full h-full text-gray-200 max-h-[500px]
      flex flex-col justify-center text-gold bg-blue/40"
        >
          <h1 className="px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            When you need a Trusted,
          </h1>
          <h1 className="px-4  text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold">
            Local Professional
          </h1>
          <div className="hidden md:flex md:py-4">
            <button className="rounded-full border-2 border-green bg-green p-2 mx-2 flex hover:bg-blue hover:border-blue hover:text-green">
              <FaDonate size={20} />
              Donate
            </button>
            <button className="rounded-full border-2 border-green bg-green p-2 flex hover:bg-blue hover:border-blue hover:text-green">
              <HiOutlineInformationCircle size={20} />
              Information
            </button>
          </div>
        </div>

        <img className="w-full max-h-[500px] object-cover" src={Icon} alt="/" />
      </div>
    </div>
  );
}

export default Jumbotron;
