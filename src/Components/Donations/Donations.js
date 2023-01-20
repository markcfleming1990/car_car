import React from "react";


function Donation() {
  return (
    <div className='px-2 rounded border-2  bg-green-900'>
      <h1 className='flex justify-center text-3xl'>Donations</h1>
      <div>
        <h2>Your Donations Matter!</h2>
      </div>
      <div>
      <div className='flex'>
        <p>Donations help us empower our community
          and give our seniors confidence in local business </p>
      </div>
      <div className='grid grid-cols-6 auto-cols-min gap-6 p-20'>
        <h1 className='col-span-4'>Become a Donor</h1>
      <button className='rounded border-2 border-black bg-yellow-800'>$10</button>
      <button className='rounded border-2 border-black bg-yellow-800'>$20</button>
      <button className='rounded border-2 border-black bg-yellow-800'> $30</button>
      <button className='rounded border-2 border-black bg-yellow-800'>Other</button>
      </div>
      </div>
    </div>
  )
}

export default Donation