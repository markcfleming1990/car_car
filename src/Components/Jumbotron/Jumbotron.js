import React from "react";
import Icon from "../../Assets/img/jumbo_bg.png";

function Jumbotron() {
  return (
    <div className="relative w-screen bg-blue">
      <img
        src={Icon}
        className="w-screen h-screen object-cover object-center backdrop-opacity-90 filter brightness-75"
        alt="senior resource icon"
      />
      <div className="absolute inset-x-0 bottom-200 flex flex-col justify-center items-center text-center px-4 pb-12 lg:pb-32">
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

      <div className="grid grid-cols-2 bg-blue w-screen">
        <h1 className="col-span-2 text-center text-3xl text-gold">
          Our Mission
        </h1>
        <p className="col-span-2 text-center text-xl lg:text-2xl xl:text-3xl text-gold px-4 py-[98px] my-[98px] lg:py-20">
          At Senior Resource Network, we refer trusted local professionals to
          our senior community. Our network consists of various service
          providers offering services in a variety of different areas including
          Medical, Financial, Legal, Home & Auto, and Personal services to meet
          your needs.
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
