import React from "react";
import Insurance from '../../Assets/img/Insurance_Grid.png';
import Legal from '../../Assets/img/Legal_Grid.png';
import Home from '../../Assets/img/Home_Improve_Grid.png';
import Life from '../../Assets/img/Life_Style_Grid.png';

function Partners() {
  return (
    <div className="flex justify-center py-40">
      {/* <div className='flex text-3xl px-10'>
        
      </div> */}
      <div className="grid grid-cols-4 py-[60px] items-center">
        <h1 className="flex justify-center p-10 col-span-4 items-center text-3xl">LOCAL PARTNERS FOR ALL ASPECTS OF LIFE</h1>
        <div className="border-solid border-2 p-2 px-6">
        <img src={Insurance} className='object-contain'alt="Insurance" />
          <button>Insurance</button>
        </div>
        <div className="border-solid border-2 py-4 px-16">
        <img src={Legal} className='object-cover'alt="Legal" />
          <button>Legal</button>
        </div>
        <div className="border-solid border-2 p-4">
          <img src={Home} className='' alt='Home Improvement' />
          <button>Home Improvement</button>
        </div>
        <div className="border-solid border-2 py-4 px-12">
        <img src={Life} className='' alt='Life Style' />
          <button>Life Style</button>
        </div>
      </div>
    </div>
  );
}

export default Partners;
