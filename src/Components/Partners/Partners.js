import React from "react";
import Insurance from "../../Assets/img/Insurance_Grid.png";
import Legal from "../../Assets/img/Legal_Grid.png";
import Personal from "../../Assets/img/personal_jpg.png";
import HomeAuto from "../../Assets/img/home_auto.png";
import Medical from "../../Assets/img/senior_medical.png";

function Partners() {
  return (
    <div className="flex justify-center py-40 bg-blue text-gold">
      {/* <div className='flex text-3xl px-10'>
        
      </div> */}
      <div className="grid grid-cols-3 align-items-center bg-blue">
        <h1 className="flex justify-center p-10 col-span-3 items-center text-3xl">
          Trusted Local Professionals
        </h1>
        <div className="flex relative border-solid border-2 p-auto">
          <img src={Insurance} className="relative" alt="Insurance" />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl content-center">
            Finance
          </h1>
        </div>
        <div className="flex relative bg-gradient-blue-fade-up border-solid border-2 p-auto">
          <img src={Legal} className="relative" alt="Legal" />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl">
            Legal
          </h1>
        </div>
        <div className="flex relative border-solid border-2 p-auto">
          <img src={Personal} className="" alt="Home Improvement" />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-Black text-3xl">
            Personal
          </h1>
        </div>
        <div className="flex relative border-solid border-2 p-auto">
          <img src={Medical} className="" alt="Life Style" />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl">
            Medical
          </h1>
        </div>
        <div className="flex relative border-solid border-2 p-auto">
          <img src={HomeAuto} className="" alt="Life Style" />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-3xl">
            Home & Auto
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Partners;
