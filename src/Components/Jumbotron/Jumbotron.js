import React from 'react'


 function Jumbotron() {
  return (
    <div className='grid grid-cols-3 gap-4 content-center'>
    <div className='w-screen h-[400px] p-8 bg-slate-400'>
       <h1 className='flex justify-evenly text-3xl font-bold py-20'>## VEHICLES AVAILABLE</h1>
    
    <div className='grid grid-cols-3 gap-8 px-4 py-16'>
    <button className='rounded-full bg-white py-4 text-2xl'>Trade in</button>
    <button className='rounded-full bg-white py-4 text-2xl'>View Specials</button>
    <button className='rounded-full bg-white text-2xl'>View Inventory</button>
    </div>
    </div>
    </div>
  )
}


export default Jumbotron