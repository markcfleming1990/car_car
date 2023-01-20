import React from "react";

function Donation() {
  return (
    <div className="px-2 rounded border-2  bg-green">
      <h1 className="flex justify-center text-3xl">Donations</h1>
      <div>
        
      </div>
      <div>
        <div className="flex align-left"></div>
        <div className="grid  grid-cols-8 grid-rows-2 gap-6 place-content-center p-20">
          <h1 className="col-span-3 text-4xl">Become a Donor</h1>
          <button className="rounded border-2 border-black bg-gold">
            $10
          </button>
          <button className="rounded border-2 border-black bg-gold">
            $20
          </button>
          <button className="rounded border-2 border-black bg-gold">
            {" "}
            $30
          </button>
          <button className="rounded border-2 border-black bg-gold">
            Other
          </button>
        </div>
      </div>
    </div>
  );
}

export default Donation;
