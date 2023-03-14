import React from "react";
import Icon from "../../Assets/img/jumbo_bg.png";

function Jumbotron() {
  return (
    <div className="relative w-screen h-screen overflow-hidden text-green">
      <img
        src={Icon}
        className="w-full h-auto object-cover object-center absolute top-1/2 left-0 transform -translate-y-1/2 opacity-90"
        alt="senior resource icon"
      />
      <div className="absolute inset-x-0 bottom-20 z-10 text-center p-6 lg:p-12">
        <h1 className="text-4xl font-bold mb-4">
          Empowering St. Joseph County's Seniors
        </h1>
        <p className="text-2xl font-bold mb-6">
          When you need a Trusted, Local Professional
        </p>
        <div className="flex justify-center space-x-4">
          <button className="rounded-full py-3 px-8 bg-gold text-blue hover:bg-opacity-80 transition-colors duration-300">
            Request Information
          </button>
          <button className="rounded-full py-3 px-8 border-2 bg-gold text-blue hover:text-gold hover:bg-green transition-colors duration-300">
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
