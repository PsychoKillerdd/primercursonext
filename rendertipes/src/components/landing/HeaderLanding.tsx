import React from 'react'

export default function HeaderLanding() {
  return (
    <>
    
    
    <div className='bg-[#17494c] text-white p-5 text-center '>
    <header className='flex  items-center justify-between max-w-4xl mx-auto'>
        <h2 className='text-2xl font-bold'>Zendesk</h2>
                <menu className='flex justify-center '>
                <ul className='flex  gap-16 items-center '>
                <li>Products</li>
                <li>Pricing</li>
                <li>Solutions</li>
                <li>demo</li>
                <li>Resources</li>
                <li className='bg-[#e4f0d3] text-[#17494c] px-4 py-2 font-bold'>Free trial</li>
                </ul>
                </menu>
    </header>
    </div>
        
    </>
  )
}
