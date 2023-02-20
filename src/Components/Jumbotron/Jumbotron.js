import React from "react";
import Icon from "../../Assets/img/jumbo_bg.png";

function Jumbotron() {
  return (
    <div className="relative bg-blue">
      <img
        src={Icon}
        className="w-full h-full object-cover object-center backdrop-opacity-90 filter brightness-75"
        alt="senior resource icon"
      />
      <div className="absolute inset-[189px] flex flex-col justify-end items-center text-center px-4 pb-12 lg:pb-32">
        <p className="text-gold mb-8 text-4xl">
          When you need a Trusted, Local Professional
        </p>
        <div className="flex justify-center space-x-4">
          <button className="rounded-full py-2 px-6 bg-green text-black">
            Request Information
          </button>
          <button className="rounded-full py-2 px-6 bg-green text-black">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
