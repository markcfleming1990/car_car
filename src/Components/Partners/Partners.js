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
        <div className="flex relative border-solid border-2 p-auto">
        <img src={Insurance} className='relative'alt="Insurance" />
          <h1 className='absolute bottom-1 left-1 text-white text-2xl content-center'>Insurance</h1>
        </div>
        <div className="flex relative border-solid border-2 p-auto">
        <img src={Legal} className='relative'alt="Legal" />
          <h1 className='absolute bottom-1 left-1 text-white text-2xl'>Legal</h1>
        </div>
        <div className="flex relative border-solid border-2 p-auto">
          <img src={Home} className='' alt='Home Improvement' />
          <h1 className='absolute bottom-1 left-1 text-white text-2xl'>Home Improvement</h1>
        </div>
        <div className="flex relative border-solid border-2 p-auto">
        <img src={Life} className='' alt='Life Style' />
          <h1 className='absolute bottom-1 left-1 text-white text-2xl'>Life Style</h1>
        </div>
      </div>
    </div>
  );
}

export default Partners;
