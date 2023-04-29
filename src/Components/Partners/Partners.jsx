import React from "react";
import { Link } from "react-router-dom";
import Personal from "../../Assets/img/life_planning.png";
import Medic from "../../Assets/img/medicOver.jpg";
import Legal from "../../Assets/img/Legal_Grid.png";
import Financial from "../../Assets/img/Financial.jpg";
import HomeAuto from "../../Assets/img/home_auto.png";

function Partners() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* Cards */}
      <div className="rounded-xl relative bg-blue cursor-pointer hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full rounded-xl bg-blue/40 ">
          <p className="font-bold text-3xl px-2 pt-4 text-gold">Medical</p>
          <Link to={`/serviceVendors/Medical`}>
            <button className="border-blue rounded-full p-2 border-2 text-gold mx-2 absolute bottom-4">
              Learn More
            </button>
          </Link>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={Medic}
          alt="/"
        />
      </div>
      <div className="rounded-xl relative bg-blue cursor-pointer hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full rounded-xl bg-blue/40 ">
          <p className="font-bold text-3xl px-2 pt-4 text-gold">Financial</p>
          <button className="border-blue rounded-full p-2 border-2 text-gold mx-2 absolute bottom-4">
            Learn More
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={Financial}
          alt="/"
        />
      </div>

      <div className="rounded-xl relative bg-blue cursor-pointer hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full rounded-xl bg-blue/40 ">
          <p className="font-bold text-3xl px-2 pt-4 text-gold">Legal</p>
          <button className="border-blue rounded-full p-2 border-2 text-gold mx-2 absolute bottom-4">
            Learn More
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={Legal}
          alt="/"
        />
      </div>

      <div className="rounded-xl relative bg-blue cursor-pointer hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full rounded-xl bg-blue/40 ">
          <p className="font-bold text-3xl px-2 pt-4 text-gold">Home & Auto</p>
          <button className="border-blue rounded-full p-2 border-2 text-gold mx-2 absolute bottom-4">
            Learn More
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={HomeAuto}
          alt="/"
        />
      </div>

      <div className="rounded-xl relative bg-blue cursor-pointer hover:scale-105 duration-300">
        {/* Overlay */}
        <div className="absolute w-full h-full rounded-xl bg-blue/40 ">
          <p className="font-bold text-3xl px-2 pt-4 text-gold">Personal</p>
          <button className="border-blue rounded-full p-2 border-2 text-gold mx-2 absolute bottom-4">
            Learn More
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={Personal}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Partners;
