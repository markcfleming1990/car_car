import React from "react";
import Icon from "../../Assets/img/jumbo_bg.png";

function Jumbotron() {
  return (
    <div className="relative w-screen h-auto bg-blue">
      <img
        src={Icon}
        className="w-screen h-auto object-cover object-center backdrop-opacity-90 filter brightness-75 max-h-screen"
        alt="senior resource icon"
      />
      <div className="absolute inset-x-0 bottom-[200px] flex flex-col justify-end items-center text-center px-4 pb-12 lg:pb-32">
        <p className="text-gold mb-2 text-6xl">
          When you need a Trusted, Local Professional
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <button className="rounded-full py-2 px-6 bg-green text-gold">
            Request Information
          </button>
          <button className="rounded-full py-2 px-6 bg-green text-gold">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
