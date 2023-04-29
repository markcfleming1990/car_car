import React, { useState } from "react";
import { FaDonate } from "react-icons/fa";

function Donation() {
  return (
    <div className="max-w-[1640px] mx-auto py-12 grid gap-16 md:grid-cols-2 bg-blue text-gold">
      {/* Smile Fund */}
      <div className=" items-center">
        <div className="flex justify-center"></div>
        <h1 className="py-4 text-2xl font-medium text-center">
          Senior Smile Fund
        </h1>
        <h2 className="py-2 text-xl font-medium text-center">
          We help seniors smile again:{" "}
        </h2>
        <ul className="py-5 text-center sm:text-xl">
          <li className="pb-2">Dentures & Partials</li>
          <li className="pb-2">X-Rays</li>
          <li className="pb-2">General Dentail procedures</li>
        </ul>
        <div className="flex justify-center">
          <button className="rounded-full border-2 border-green bg-green p-2 mx-2 flex hover:bg-blue hover:border-blue hover:text-green">
            <FaDonate size={20} />
            Donate
          </button>
        </div>
      </div>
      {/* Second Chance Fund */}
      <div className="">
        <div className="flex justify-center"></div>
        <h1 className="py-4 text-2xl font-medium text-center">
          Second Chance Fund
        </h1>
        <h2 className="py-2 text-xl font-medium text-center">
          We also give Seniors a second chance with:
        </h2>
        <ul className="py-5 text-center sm:text-xl">
          <li className="pb-2">Employment & Empowerment</li>
          <li className="pb-2">Food Assistance</li>
          <li className="pb-2">Housing Assistance</li>
        </ul>
        <div className="flex justify-center">
          <button className="rounded-full border-2 border-green bg-green p-2 mx-2 flex hover:bg-blue hover:border-blue hover:text-green">
            <FaDonate size={20} />
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Donation;
