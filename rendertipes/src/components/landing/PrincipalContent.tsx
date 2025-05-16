import React from 'react'

export default function PrincipalContent() {

  return (
    //TODO: cambiar el color de fondo de la pagina
    <>
    <div className='bg-[#17494c] text-white p-5 text-center'>
        <main className='flex  justify-between items-center max-w-4xl mx-auto text-white py-20 gap-20'>
              <div className='w-1/2'>
                <h2 className='text-7xl font-bold text-left leading-[1.2]'> <span className='text-[#cc9fb6]'>Champions</span> <br />
                 <span className='text-[#e4f0d3] border-b-2 border-white'>
                 your 
                 </span>

                <br /> 
                <span className='text-[#fed6aa] border-b-2 border-white'>
                services
                </span>
                </h2>
              </div>
              {/* inicio */}
              <div className='w-1/2'>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, modi. A soluta nulla maiores molestias</p>
                </div>
                <div className="flex mt-10 gap-10">
                    <button className='bg-[#e4f0d3] text-[#17494c] px-4 py-2 font-semibold'>Get a free trial</button>
                    <button className='border-2 border-white text-[#e4f0d3] px-4 py-2 font-semibold'>View demo</button>
                </div>


              </div>
              {/* fin */}


        </main>
    </div>
    </>
  )
}
