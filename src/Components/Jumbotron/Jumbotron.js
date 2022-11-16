import React from 'react'


 function Jumbotron() {
  return (
    <div className='flex'>
    <div className='w-screen h-[500px] py-8 bg-slate-400'>
       <h1 className='flex justify-center'>## VEHICLES AVAILABLE</h1>
    
    <div className='flex justify-items-center px-4'>
    <button className='rounded-full bg-white text-4xl p-4'>Trade in</button>
    <button className='rounded-full bg-white text-4xl'>View Specials</button>
    <button className='rounded-full bg-white text-4xl'>View Inventory</button>
    </div>
    </div>
    </div>
  )
}


export default Jumbotron