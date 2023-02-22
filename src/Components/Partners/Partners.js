import React from "react";
// import Insurance from "../../Assets/img/Insurance_Grid.png";
// import Legal from "../../Assets/img/Legal_Grid.png";
// import Personal from "../../Assets/img/personal_jpg.png";
// import HomeAuto from "../../Assets/img/home_auto.png";
// import Medical from "../../Assets/img/senior_medical.png";

function Partners() {
  return (
    <div className="flex justify-center py-40 bg-blue text-gold">
      <div>
        <h1 className="text-center text-3xl text-bold">
          Our Local Professionals helps service our Seniors in a variety of
          areas including:
        </h1>
        <div className="text-center text-2xl text-bold p-4 m-2">
          <ul>
            <li>Insurance</li>
            <li>Legal</li>
            <li>Personal</li>
            <li>Home & Auto</li>
            <li>Medical</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Partners;
