import React from "react";
import Maria from "../Assets/img/Maria_Team.png";
import Anthony from "../Assets/img/Anthony_Trivet.png";

const Team = () => {
  return (
    <div
      className="bg-blue h-screen w-screen text-gold
    grid grid-cols-2 justify-items-center py-12"
    >
      <h1 className="text-center text-3xl col-span-4">
        Our team is dedicated to bringing the best to our senior community
      </h1>

      {/* Maria */}

      <div className="justify-center text-center">
        <img
          src={Maria}
          alt="Maria Tanksley"
          width="384"
          height="512"
          className="w-[200px] h-[200px] rounded-full bg-auto"
        ></img>
        <p>Maria Tanksley</p>
        <p>CEO/Founder</p>
        <p>email@email.com</p>
        <button Classname="rounded-full bg-green text-gold border">
          Visit Our Site
        </button>
      </div>

      {/* Sample team memeber */}
      <div className="justify-center">
        <img
          src={Anthony}
          alt="Anthony Trivet"
          width="384"
          height="512"
          className="w-[200px] h-[200px] rounded-full bg-auto"
        ></img>
        <div className="text-center">
          <p>Anthony Trivet</p>
          <p>Director of Partner Acquisitions</p>
          <p>email@email.com</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
