import React from 'react';
// import background from '../../Assets/img/background.png'


 function Jumbotron() {
  return (
    // add senior pictures
    <div className='grid grid-cols-3 gap-4 content-center'>
    <div className='w-screen h-400'>
      <div className='grid cols-2'>
      <div className='text-2xl p-60 bg-yellow-600'>
        <h1>Faith & Family Resources</h1>
        <p>Bringing peace of mind to those that matter the most</p>
        <button className='rounded-full px-2 bg-blue-900'>Request Information</button>
      </div>
      </div>
    {/* <img src={background} className='object-cover'alt="cover" /> */}
       {/* <h1 className='flex justify-evenly text-3xl font-bold py-20'>
         Resources all in one place!
       </h1> */}
    
    <div className='grid grid-cols-3 gap-8 px-4 py-16'>
    {/* <button className='rounded-full bg-white py-4 text-2xl'>About Us</button>
    <button className='rounded-full bg-white py-4 text-2xl'>Information</button>
    <button className='rounded-full bg-white text-2xl'>Our Partners</button> */}
    </div>
    </div>
    </div>
  )
}


export default Jumbotron