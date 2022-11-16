import React from 'react'


 function Jumbotron() {
  return (
    <div className='grid grid-cols-3 gap-4 content-center'>
    <div className='w-screen h-[500px] p-8 bg-slate-400'>
       <h1 className='flex justify-evenly text-3xl font-bold py-20'>## VEHICLES AVAILABLE</h1>
    
    <div className='flex justify-center gap-4 py-10'>
    <button className='rounded-full bg-white'>Trade in</button>
    <button className='rounded-full bg-white'>View Specials</button>
    <button className='rounded-full bg-white'>View Inventory</button>
    </div>
    </div>
    </div>
  )
}


export default Jumbotron