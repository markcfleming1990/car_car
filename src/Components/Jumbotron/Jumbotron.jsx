import React from "react";
import Icon from "../../Assets/img/jumbo_bg.png";

function Jumbotron() {
  return (
    <div className="bg-blue relative w-screen h-screen overflow-visible overscroll-x-hidden sm:overscroll-x-hidden md:overflow-hidden md:flex-shrink-0 lg:object-cover lg:overscroll-x-hidden text-green">
      <div className="md:flex md:flex-col md:items-center md:h-full">
        <img
          src={Icon}
          className="md:w-full h-auto object-center opacity-100"
          alt="senior resource icon" 
        />
        <div className="absolute inset-x-0 bottom-5 mb-4 text-center p-6 md:bottom-6 lg:bottom-40">
          <h1 className="text-4xl font-bold mb-4 lg:text-6xl">
            Empowering St. Joseph County's Seniors
          </h1>
          <p className="text-2xl font-bold mb-6 lg:text-4xl">
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
    </div>
  );
}

export default Jumbotron;